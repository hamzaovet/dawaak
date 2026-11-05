import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const shortages = await prisma.shortageRequest.findMany({
      include: {
        customer: {
          select: { name: true, phone: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

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
    });

    return NextResponse.json({
      success: true,
      requestsCount: shortages.length,
      requests: shortages,
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
      action, // "NEW_REQUEST" | "RESERVE"
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
    } = body;

    if (action === "RESERVE" && requestId && pharmacyId) {
      // Patient is locking / reserving the found medicine
      const updated = await prisma.shortageRequest.update({
        where: { id: requestId },
        data: {
          status: "RESERVED",
          foundPharmacyId: pharmacyId,
          reservationExpiry: new Date(Date.now() + 3 * 3600 * 1000), // 3 hours hold
        },
      });
      return NextResponse.json({ success: true, message: "تم حجز الدواء بنجاح لمدة 3 ساعات", request: updated });
    }

    // New shortage radar request broadcast
    let customer = await prisma.customer.findFirst({
      where: { phone: customerPhone?.trim() || "01000000000" },
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: customerName?.trim() || "مريض يبحث عن صنف ناقص",
          phone: customerPhone?.trim() || "01000000000",
          city: customerCity || "طنطا",
        },
      });
    }

    // Check if any pharmacy in our DB already has this medicine in stock!
    const matchingMed = await prisma.medicine.findFirst({
      where: {
        OR: [
          { tradeNameAr: { contains: medicineName, mode: "insensitive" } },
          { tradeNameEn: { contains: medicineName, mode: "insensitive" } },
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
        customerCity: customerCity?.trim() || "القاهرة",
        governorate: governorate?.trim() || "الغربية",
        quantityNeeded: Number(quantityNeeded) || 1,
        urgency: urgency || "HIGH",
        status: foundPharmacy ? "FOUND" : "SEARCHING",
        foundPharmacyId: foundPharmacy?.id || null,
        reservationExpiry: foundPharmacy ? new Date(Date.now() + 3 * 3600 * 1000) : null,
      },
    });

    return NextResponse.json({
      success: true,
      request: newRequest,
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
