import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";

// POST: Receive synced inventory from Local Bridge Daemon or Excel/CSV importer
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pharmacySlug, bridgeKey, systemType, items } = body;

    if (!pharmacySlug || !items || !Array.isArray(items)) {
      return NextResponse.json(
        { success: false, error: "بيانات المزامنة غير مكتملة" },
        { status: 400 }
      );
    }

    // Find pharmacy
    const pharmacy = await prisma.pharmacy.findUnique({
      where: { slug: pharmacySlug },
    });

    if (!pharmacy) {
      return NextResponse.json(
        { success: false, error: "الصيدلية غير مسجلة" },
        { status: 404 }
      );
    }

    let syncedCount = 0;

    for (const item of items) {
      const { tradeName, genericName, price, quantity, dosageForm, barcode } = item;
      if (!tradeName) continue;

      // Find or create medicine
      let medicine = await prisma.medicine.findFirst({
        where: {
          OR: [
            { tradeNameAr: tradeName },
            { tradeNameEn: tradeName },
            ...(barcode ? [{ barcode }] : []),
          ],
        },
      });

      if (!medicine) {
        medicine = await prisma.medicine.create({
          data: {
            tradeNameAr: tradeName,
            tradeNameEn: tradeName,
            genericName: genericName || "صنف صيدلي معتمد",
            dosageForm: dosageForm || "عبوة دوائية",
            officialPrice: Number(price) || 50.0,
            category: "أدوية عامة ومستلزمات",
            barcode: barcode || null,
          },
        });
      }

      // Upsert inventory
      await prisma.pharmacyInventory.upsert({
        where: {
          pharmacyId_medicineId: {
            pharmacyId: pharmacy.id,
            medicineId: medicine.id,
          },
        },
        update: {
          stockQuantity: Number(quantity) || 1,
          isAvailable: (Number(quantity) || 0) > 0,
          price: Number(price) || medicine.officialPrice,
        },
        create: {
          pharmacyId: pharmacy.id,
          medicineId: medicine.id,
          stockQuantity: Number(quantity) || 1,
          isAvailable: (Number(quantity) || 0) > 0,
          price: Number(price) || medicine.officialPrice,
        },
      });

      syncedCount++;
    }

    return NextResponse.json({
      success: true,
      message: `تمت مزامنة ${syncedCount} صنف بنجاح من برنامج ${systemType || "الصيدلية"}`,
      syncedCount,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Sync inventory error:", error);
    return NextResponse.json(
      { success: false, error: "فشل استلام مزامنة المخزون", details: error.message },
      { status: 500 }
    );
  }
}
