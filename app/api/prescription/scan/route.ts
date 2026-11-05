import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { analyzePrescription } from "../../../../lib/gemini";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { imageBase64, customerPhone, customerName } = body;

    if (!imageBase64) {
      return NextResponse.json({ success: false, error: "صورة الروشتة مطلوبة" }, { status: 400 });
    }

    // Call Gemini 2.0 Multimodal
    const analysis = await analyzePrescription(imageBase64);

    // Find or create customer if phone provided
    let customerId: string | null = null;
    if (customerPhone) {
      let cust = await prisma.customer.findFirst({
        where: { phone: customerPhone.trim() },
      });
      if (!cust) {
        cust = await prisma.customer.create({
          data: {
            name: customerName?.trim() || "عميل دواك",
            phone: customerPhone.trim(),
          },
        });
      }
      customerId = cust.id;
    }

    // Save Prescription record in DB
    const record = await prisma.prescription.create({
      data: {
        customerId,
        imageUrl: imageBase64.length > 500 ? imageBase64.substring(0, 100) + "..." : imageBase64,
        rawOcrText: JSON.stringify(analysis.medicines),
        parsedMedicines: JSON.stringify(analysis.medicines),
        doctorSpecialty: analysis.doctorSpecialty || "طب عام",
        aiConfidence: 0.95,
        status: "SCANNED",
        notes: analysis.pharmacistAdvice || "",
      },
    });

    return NextResponse.json({
      success: true,
      prescriptionId: record.id,
      analysis,
    });
  } catch (error: any) {
    console.error("Prescription Scan API Error:", error);
    return NextResponse.json(
      { success: false, error: "حدث خطأ أثناء فحص الروشتة بالذكاء الاصطناعي", details: error.message },
      { status: 500 }
    );
  }
}
