import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const pharmacy = await prisma.pharmacy.findUnique({
        where: { slug },
        include: {
          inventory: {
            include: {
              medicine: true,
            },
          },
          couriers: true,
          orders: {
            take: 20,
            orderBy: { createdAt: "desc" },
          },
        },
      });

      if (!pharmacy) {
        return NextResponse.json({ success: false, error: "الصيدلية غير موجودة" }, { status: 404 });
      }

      return NextResponse.json({ success: true, pharmacy });
    }

    const pharmacies = await prisma.pharmacy.findMany({
      include: {
        _count: {
          select: {
            inventory: true,
            couriers: true,
            orders: true,
          },
        },
      },
      orderBy: { rating: "desc" },
    });

    return NextResponse.json({ success: true, count: pharmacies.length, pharmacies });
  } catch (error: any) {
    console.error("Pharmacies GET error:", error);
    return NextResponse.json(
      { success: false, error: "فشل استرجاع الصيدليات", details: error.message },
      { status: 500 }
    );
  }
}
