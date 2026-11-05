import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";

// POST: Pharmacy Staff Login
export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "اسم المستخدم وكلمة المرور مطلوبة" },
        { status: 400 }
      );
    }

    const cleanUsername = username.trim().toLowerCase();

    // Find staff member
    const staff = await prisma.pharmacyStaff.findUnique({
      where: { username: cleanUsername },
      include: {
        pharmacy: true,
      },
    });

    if (!staff || staff.password !== password) {
      return NextResponse.json(
        { success: false, error: "اسم المستخدم أو كلمة المرور غير صحيحة" },
        { status: 401 }
      );
    }

    if (!staff.isActive) {
      return NextResponse.json(
        { success: false, error: "هذا الحساب موقوف، يرجى التواصل مع إدارة المنصة" },
        { status: 403 }
      );
    }

    // If pharmacy belongs to a chain, find other branches in the same chain
    let sisterBranches: any[] = [];
    if (staff.pharmacy.chainName) {
      sisterBranches = await prisma.pharmacy.findMany({
        where: {
          chainName: staff.pharmacy.chainName,
          id: { not: staff.pharmacy.id },
        },
        select: {
          id: true,
          slug: true,
          nameAr: true,
          branchName: true,
          city: true,
          isOpen: true,
        },
      });
    }

    const branches = [
      {
        id: staff.pharmacy.id,
        slug: staff.pharmacy.slug,
        nameAr: staff.pharmacy.nameAr,
        branchName: staff.pharmacy.branchName || "الفرع الحالي",
        city: staff.pharmacy.city,
        isOpen: staff.pharmacy.isOpen,
      },
      ...sisterBranches,
    ];

    return NextResponse.json({
      success: true,
      staff: {
        id: staff.id,
        name: staff.name,
        username: staff.username,
        role: staff.role,
        phone: staff.phone,
      },
      pharmacy: staff.pharmacy,
      branches,
    });
  } catch (error: any) {
    console.error("Pharmacy staff login error:", error);
    return NextResponse.json(
      { success: false, error: "حدث خطأ أثناء تسجيل الدخول", details: error.message },
      { status: 500 }
    );
  }
}
