import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { interpretLabReport } from "../../../../lib/gemini";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { imageBase64, customerPhone, customerName } = body;

    if (!imageBase64) {
      return NextResponse.json({ success: false, error: "صورة التحليل الطبي مطلوبة" }, { status: 400 });
    }

    // Call Gemini 2.0 Multimodal
    const analysis = await interpretLabReport(imageBase64);

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

    // Save Lab Report record in DB
    const record = await prisma.labReport.create({
      data: {
        customerId,
        imageUrl: imageBase64.length > 500 ? imageBase64.substring(0, 100) + "..." : imageBase64,
        testType: analysis.testType || "تحليل عام",
        simplifiedAnalysisAr: analysis.patientSummaryAr || "",
        abnormalValues: JSON.stringify(analysis.tests),
        doctorAdviceQuestions: JSON.stringify(analysis.doctorAdviceQuestions || []),
        suggestedVitamins: JSON.stringify(analysis.suggestedLifestyleAndVitamins || []),
      },
    });

    return NextResponse.json({
      success: true,
      labReportId: record.id,
      analysis,
    });
  } catch (error: any) {
    console.error("Lab Report Analyze API Error:", error);
    return NextResponse.json(
      { success: false, error: "حدث خطأ أثناء تفسير التحليل الطبي بالذكاء الاصطناعي", details: error.message },
      { status: 500 }
    );
  }
}
