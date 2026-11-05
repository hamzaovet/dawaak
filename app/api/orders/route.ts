import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pharmacyId = searchParams.get("pharmacyId");

    const where: any = {};
    if (pharmacyId) where.pharmacyId = pharmacyId;

    const orders = await prisma.order.findMany({
      where,
      include: {
        pharmacy: { select: { nameAr: true, phone: true } },
        courier: { select: { name: true, phone: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, count: orders.length, orders });
  } catch (error: any) {
    console.error("Orders GET Error:", error);
    return NextResponse.json(
      { success: false, error: "فشل استرجاع الطلبات", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      pharmacyId,
      customerName,
      customerPhone,
      customerAddress,
      orderType,
      items,
      subtotal,
      deliveryFee,
      totalAmount,
      paymentMethod,
      prescriptionId,
      shortageRequestId,
      notes,
    } = body;

    if (!pharmacyId || !customerName || !customerPhone || !items) {
      return NextResponse.json(
        { success: false, error: "بيانات الصيدلية أو العميل أو الأصناف غير مكتملة" },
        { status: 400 }
      );
    }

    const orderNumber = `DWK-${Math.floor(1000 + Math.random() * 9000)}`;

    const order = await prisma.order.create({
      data: {
        orderNumber,
        pharmacyId,
        customerName: customerName.trim(),
        customerPhone: customerPhone.trim(),
        customerAddress: customerAddress?.trim() || "توصيل للعنوان المسجل",
        orderType: orderType || "DIRECT",
        items: typeof items === "string" ? items : JSON.stringify(items),
        subtotal: Number(subtotal) || 0,
        deliveryFee: Number(deliveryFee) || 15,
        totalAmount: Number(totalAmount) || 0,
        paymentMethod: paymentMethod || "COD",
        status: "PENDING",
        prescriptionId: prescriptionId || null,
        shortageRequestId: shortageRequestId || null,
        notes: notes || "",
      },
    });

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    console.error("Order Creation Error:", error);
    return NextResponse.json(
      { success: false, error: "فشل إنشاء الطلب", details: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { orderId, status, courierId } = body;

    if (!orderId) {
      return NextResponse.json({ success: false, error: "رقم الأوردر مطلوب" }, { status: 400 });
    }

    const updateData: any = {};
    if (status) updateData.status = status;
    if (courierId) updateData.courierId = courierId;

    const updated = await prisma.order.update({
      where: { id: orderId },
      data: updateData,
    });

    return NextResponse.json({ success: true, order: updated });
  } catch (error: any) {
    console.error("Order Status Update Error:", error);
    return NextResponse.json(
      { success: false, error: "فشل تحديث حالة الطلب", details: error.message },
      { status: 500 }
    );
  }
}
