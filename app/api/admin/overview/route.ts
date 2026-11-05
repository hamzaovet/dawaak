import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";

// GET: Full platform statistics and pharmacies list for Owner
export async function GET() {
  try {
    const [
      pharmacies,
      totalOrders,
      totalMedicines,
      totalCustomers,
      totalPrescriptions,
      totalShortageRequests,
    ] = await Promise.all([
      prisma.pharmacy.findMany({
        include: {
          _count: {
            select: {
              inventory: true,
              couriers: true,
              orders: true,
              prescriptions: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.order.findMany({
        select: { totalAmount: true, status: true },
      }),
      prisma.medicine.count(),
      prisma.customer.count(),
      prisma.prescription.count(),
      prisma.shortageRequest.count(),
    ]);

    const totalRevenueGMV = totalOrders.reduce(
      (sum, o) => sum + (Number(o.totalAmount) || 0),
      0
    );

    const activePharmacies = pharmacies.filter((p) => p.isOpen).length;
    const founderPromoPharmacies = pharmacies.filter((p) => p.isFounderPromo).length;
    const totalBranches = pharmacies.reduce((sum, p) => sum + (p.branchesCount || 1), 0);

    return NextResponse.json({
      success: true,
      stats: {
        totalPharmacies: pharmacies.length,
        totalBranches,
        activePharmacies,
        founderPromoPharmacies,
        totalOrdersCount: totalOrders.length,
        totalRevenueGMV,
        totalMedicines,
        totalCustomers,
        totalPrescriptions,
        totalShortageRequests,
      },
      pharmacies,
    });
  } catch (error: any) {
    console.error("Admin overview GET error:", error);
    return NextResponse.json(
      { success: false, error: "فشل استرجاع بيانات المنصة", details: error.message },
      { status: 500 }
    );
  }
}

// PATCH: Update pharmacy subscription / status
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { pharmacyId, isOpen, subscriptionStatus, subscriptionEnd, monthlyFee, branchesCount, isFounderPromo } = body;

    if (!pharmacyId) {
      return NextResponse.json(
        { success: false, error: "معرف الصيدلية مطلوب" },
        { status: 400 }
      );
    }

    const updated = await prisma.pharmacy.update({
      where: { id: pharmacyId },
      data: {
        ...(typeof isOpen === "boolean" && { isOpen }),
        ...(subscriptionStatus && { subscriptionStatus }),
        ...(subscriptionEnd && { subscriptionEnd: new Date(subscriptionEnd) }),
        ...(monthlyFee !== undefined && { monthlyFee: Number(monthlyFee) }),
        ...(branchesCount !== undefined && { branchesCount: Number(branchesCount) }),
        ...(typeof isFounderPromo === "boolean" && { isFounderPromo }),
      },
    });

    return NextResponse.json({ success: true, pharmacy: updated });
  } catch (error: any) {
    console.error("Admin PATCH error:", error);
    return NextResponse.json(
      { success: false, error: "فشل تحديث بيانات الصيدلية", details: error.message },
      { status: 500 }
    );
  }
}

// POST: Add new partner pharmacy / branch directly from owner dashboard
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      nameAr,
      nameEn,
      ownerName,
      phone,
      whatsapp,
      address,
      city,
      governorate,
      chainName,
      branchName,
      branchesCount = 1,
      monthlyFee = 499.0,
      isFounderPromo = true,
      subscriptionPlan = "FOUNDER_FREE_2026",
    } = data;

    if (!nameAr || !ownerName || !phone || !whatsapp || !city || !governorate) {
      return NextResponse.json(
        { success: false, error: "يرجى تعبئة كافة الحقول الأساسية المطلوبة" },
        { status: 400 }
      );
    }

    // Generate unique slug
    const baseSlug = (nameEn || nameAr)
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    const uniqueSlug = `${baseSlug || "pharmacy"}-${Date.now().toString().slice(-4)}`;

    const newPharmacy = await prisma.pharmacy.create({
      data: {
        slug: uniqueSlug,
        nameAr,
        nameEn: nameEn || nameAr,
        ownerName,
        phone,
        whatsapp,
        address: address || `${city}، ${governorate}`,
        city,
        governorate,
        chainName: chainName || nameAr,
        branchName: branchName || "الفرع الرئيسي",
        branchesCount: Number(branchesCount),
        monthlyFee: Number(monthlyFee),
        isFounderPromo: Boolean(isFounderPromo),
        subscriptionPlan,
        subscriptionStart: new Date(),
        subscriptionEnd: new Date("2026-12-31T23:59:59Z"),
        subscriptionStatus: "ACTIVE",
        deliveryAvailable: true,
        isOpen: true,
        deliveryFee: 15.0,
        deliveryTimeEstimate: "25 - 40 دقيقة",
      },
    });

    return NextResponse.json({ success: true, pharmacy: newPharmacy });
  } catch (error: any) {
    console.error("Admin POST new pharmacy error:", error);
    return NextResponse.json(
      { success: false, error: "فشل إضافة الصيدلية الجديدة", details: error.message },
      { status: 500 }
    );
  }
}
