import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const shortages = await prisma.shortageRequest.findMany({
      include: {
        customer: {
          select: { id: true, name: true, phone: true, city: true, address: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Enrich with pharmacy details if foundPharmacyId is set
    const pharmacyIds = Array.from(
      new Set(shortages.map((s) => s.foundPharmacyId).filter(Boolean) as string[])
    );

    const pharmacies = await prisma.pharmacy.findMany({
      where: { id: { in: pharmacyIds } },
      select: {
        id: true,
        nameAr: true,
        branchName: true,
        city: true,
        phone: true,
        whatsapp: true,
      },
    });

    const pharmacyMap = new Map(pharmacies.map((p) => [p.id, p]));

    const enrichedShortages = shortages.map((s) => ({
      ...s,
      foundPharmacy: s.foundPharmacyId ? pharmacyMap.get(s.foundPharmacyId) || null : null,
    }));

    const shortageMedicines = await prisma.medicine.findMany({
      where: { isShortage: true },
      include: {
        inventory: {
          where: { isAvailable: true, stockQuantity: { gt: 0 } },
          include: {
            pharmacy: {
              select: {
                id: true,
                nameAr: true,
                slug: true,
                city: true,
                governorate: true,
                phone: true,
                whatsapp: true,
              },
            },
          },
        },
      },
      orderBy: { tradeNameAr: "asc" },
    });

    return NextResponse.json({
      success: true,
      requestsCount: enrichedShortages.length,
      requests: enrichedShortages,
      trackedShortages: shortageMedicines,
    });
  } catch (error: any) {
    console.error("Shortage API Error:", error);
    return NextResponse.json(
      { success: false, error: "فشل استرجاع بيانات رادار النواقص", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      action, // "NEW_REQUEST" | "RESERVE" | "PROVIDE_BY_PHARMACY" | "CANCEL_RESERVATION"
      medicineName,
      genericName,
      customerName,
      customerPhone,
      customerCity,
      governorate,
      quantityNeeded,
      urgency,
      pharmacyId,
      requestId,
      convertToOrder,
      estimatedPrice,
    } = body;

    // ACTION 1: PHARMACY PROVIDES MEDICINE / RESERVES IT
    if (action === "PROVIDE_BY_PHARMACY" || action === "RESERVE") {
      if (!requestId || !pharmacyId) {
        return NextResponse.json(
          { success: false, error: "معرف الطلب ومعرف الصيدلية مطلوبان" },
          { status: 400 }
        );
      }

      const existingReq = await prisma.shortageRequest.findUnique({
        where: { id: requestId },
        include: { customer: true },
      });

      if (!existingReq) {
        return NextResponse.json(
          { success: false, error: "الطلب غير موجود برادار النواقص" },
          { status: 404 }
        );
      }

      const updatedRequest = await prisma.shortageRequest.update({
        where: { id: requestId },
        data: {
          status: "FOUND",
          foundPharmacyId: pharmacyId,
          reservationExpiry: new Date(Date.now() + 4 * 3600 * 1000), // 4 hours hold
        },
      });

      let createdOrder = null;
      if (convertToOrder) {
        const unitPrice = Number(estimatedPrice) || 85;
        const qty = existingReq.quantityNeeded || 1;
        const subtotal = unitPrice * qty;
        const deliveryFee = 15;
        const totalAmount = subtotal + deliveryFee;

        createdOrder = await prisma.order.create({
          data: {
            orderNumber: `DWK-RADAR-${Math.floor(1000 + Math.random() * 9000)}`,
            pharmacyId,
            customerId: existingReq.customerId,
            customerName: existingReq.customer?.name || "عميل رادار النواقص",
            customerPhone: existingReq.customer?.phone || "0100000000",
            customerAddress: `${existingReq.customerCity} - ${existingReq.governorate}`,
            orderType: "SHORTAGE_RADAR",
            items: JSON.stringify([
              {
                name: existingReq.medicineName,
                quantity: qty,
                price: unitPrice,
                total: subtotal,
              },
            ]),
            subtotal,
            deliveryFee,
            totalAmount,
            paymentMethod: "COD",
            status: "PREPARING",
            shortageRequestId: existingReq.id,
            notes: `صنف شحيح تم توفيره عبر رادار النواقص: ${existingReq.medicineName}`,
          },
        });
      }

      const pharmacy = await prisma.pharmacy.findUnique({
        where: { id: pharmacyId },
        select: { id: true, nameAr: true, branchName: true, phone: true, whatsapp: true, city: true },
      });

      return NextResponse.json({
        success: true,
        message: "تم توفير وحجز الصنف للمريض بنجاح في السيستم",
        request: {
          ...updatedRequest,
          foundPharmacy: pharmacy,
        },
        order: createdOrder,
      });
    }

    // ACTION 2: CANCEL RESERVATION
    if (action === "CANCEL_RESERVATION" && requestId) {
      const resetReq = await prisma.shortageRequest.update({
        where: { id: requestId },
        data: {
          status: "SEARCHING",
          foundPharmacyId: null,
          reservationExpiry: null,
        },
      });
      return NextResponse.json({
        success: true,
        message: "تم إعادة الطلب لحالة البحث النشط",
        request: resetReq,
      });
    }

    // ACTION 3: NEW SHORTAGE BROADCAST REQUEST
    if (!medicineName || !medicineName.trim()) {
      return NextResponse.json(
        { success: false, error: "اسم الدواء الناقص مطلوب" },
        { status: 400 }
      );
    }

    const cleanPhone = customerPhone?.trim() || "01018671000";
    let customer = await prisma.customer.findFirst({
      where: { phone: cleanPhone },
    });

    if (customer) {
      if (customerName && customerName.trim() && customerName.trim() !== customer.name) {
        customer = await prisma.customer.update({
          where: { id: customer.id },
          data: {
            name: customerName.trim(),
            city: customerCity?.trim() || customer.city,
          },
        });
      }
    } else {
      customer = await prisma.customer.create({
        data: {
          name: customerName?.trim() || "مريض يبحث عن دواء ناقص",
          phone: cleanPhone,
          city: customerCity?.trim() || "القاهرة",
        },
      });
    }

    // Search if already in stock in our network
    const matchingMed = await prisma.medicine.findFirst({
      where: {
        OR: [
          { tradeNameAr: { contains: medicineName.trim(), mode: "insensitive" } },
          { tradeNameEn: { contains: medicineName.trim(), mode: "insensitive" } },
        ],
      },
      include: {
        inventory: {
          where: { isAvailable: true, stockQuantity: { gt: 0 } },
          include: { pharmacy: true },
        },
      },
    });

    const foundPharmacy = matchingMed?.inventory?.[0]?.pharmacy;

    const newRequest = await prisma.shortageRequest.create({
      data: {
        customerId: customer.id,
        medicineName: medicineName.trim(),
        genericName: genericName?.trim() || null,
        customerCity: customerCity?.trim() || "حدائق القبة",
        governorate: governorate?.trim() || "القاهرة",
        quantityNeeded: Number(quantityNeeded) || 1,
        urgency: urgency || "HIGH",
        status: foundPharmacy ? "FOUND" : "SEARCHING",
        foundPharmacyId: foundPharmacy?.id || null,
        reservationExpiry: foundPharmacy ? new Date(Date.now() + 4 * 3600 * 1000) : null,
      },
      include: {
        customer: {
          select: { id: true, name: true, phone: true, city: true, address: true },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: foundPharmacy
        ? `تم رصد توفر الصنف فوراً في ${foundPharmacy.nameAr}`
        : "تم إطلاق نداء الرادار لجميع صيدليات المنطقة والجمهورية",
      request: {
        ...newRequest,
        foundPharmacy: foundPharmacy || null,
      },
      foundImmediately: !!foundPharmacy,
      pharmacy: foundPharmacy || null,
    });
  } catch (error: any) {
    console.error("Shortage POST Error:", error);
    return NextResponse.json(
      { success: false, error: "فشل إرسال طلب رصد النقص", details: error.message },
      { status: 500 }
    );
  }
}
