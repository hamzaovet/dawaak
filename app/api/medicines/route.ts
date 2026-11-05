import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") || "";
    const category = searchParams.get("category") || "ALL";
    const shortagesOnly = searchParams.get("shortagesOnly") === "true";

    const whereClause: any = {};

    if (q.trim()) {
      whereClause.OR = [
        { tradeNameAr: { contains: q, mode: "insensitive" } },
        { tradeNameEn: { contains: q, mode: "insensitive" } },
        { genericName: { contains: q, mode: "insensitive" } },
        { category: { contains: q, mode: "insensitive" } },
      ];
    }

    if (category !== "ALL") {
      whereClause.category = category;
    }

    if (shortagesOnly) {
      whereClause.isShortage = true;
    }

    const medicines = await prisma.medicine.findMany({
      where: whereClause,
      include: {
        inventory: {
          include: {
            pharmacy: {
              select: {
                id: true,
                nameAr: true,
                slug: true,
                city: true,
                phone: true,
                whatsapp: true,
              },
            },
          },
        },
      },
      orderBy: [{ isShortage: "desc" }, { tradeNameAr: "asc" }],
    });

    return NextResponse.json({ success: true, count: medicines.length, medicines });
  } catch (error: any) {
    console.error("Medicines GET error:", error);
    return NextResponse.json(
      { success: false, error: "فشل استرجاع الأدوية", details: error.message },
      { status: 500 }
    );
  }
}
