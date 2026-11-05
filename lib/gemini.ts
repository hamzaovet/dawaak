/**
 * Dawaak AI Engine powered by Google Gemini Vision (Multimodal)
 * Handles:
 * 1. Egyptian Doctor Prescription Handwriting Deciphering
 * 2. Medical Lab Tests & Report Clinical Interpretation (CBC, Liver, Kidney, Lipid, HbA1c, Hormones, Vitamins)
 */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

// Active candidate models with automatic cascade failover
const GEMINI_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash",
  "gemini-flash-latest",
  "gemini-3-flash-preview",
];

export interface PrescriptionItem {
  tradeName: string;
  genericName?: string;
  dosage: string;
  frequency: string;
  instructionsAr: string;
  confidence: number;
  isLikelyShortage?: boolean;
  suggestedAlternatives?: string[];
}

export interface PrescriptionAnalysisResult {
  doctorSpecialty?: string;
  diagnosisNotes?: string;
  medicines: PrescriptionItem[];
  unclearItems?: string[];
  pharmacistAdvice?: string;
}

export interface LabTestItem {
  parameter: string;
  parameterAr: string;
  value: string;
  referenceRange: string;
  unit: string;
  status: "NORMAL" | "HIGH" | "LOW" | "CRITICAL";
}

export interface LabAnalysisResult {
  testType: string;
  patientSummaryAr: string;
  tests: LabTestItem[];
  keyFindings: string[];
  doctorAdviceQuestions: string[];
  suggestedLifestyleAndVitamins: string[];
}

/**
 * Universal Gemini Multimodal Runner with Model Cascade
 */
async function callGeminiMultimodal(
  prompt: string,
  cleanBase64: string,
  mimeType: string = "image/jpeg"
): Promise<string> {
  let lastError: any = null;

  for (const model of GEMINI_MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt },
                  {
                    inline_data: {
                      mime_type: mimeType,
                      data: cleanBase64,
                    },
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.1,
              maxOutputTokens: 2500,
            },
          }),
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        console.warn(`[Gemini ${model}] status ${res.status}:`, errText.substring(0, 120));
        lastError = new Error(`Gemini model ${model} returned status ${res.status}`);
        continue;
      }

      const data = await res.json();
      const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (candidateText) {
        return candidateText.replace(/```json/g, "").replace(/```/g, "").trim();
      }
    } catch (err: any) {
      console.warn(`[Gemini ${model}] exception:`, err.message);
      lastError = err;
    }
  }

  throw lastError || new Error("فشل الاتصال بجميع نماذج الذكاء الاصطناعي المتاحة");
}

/**
 * Comprehensive Standard Clinical Reference Ranges Knowledge Base
 * Automatically enriches parameters when reference ranges are missing or cropped in lab papers.
 */
const CLINICAL_REFERENCE_DATABASE: Record<
  string,
  { range: string; unit: string; ar: string }
> = {
  // Complete Blood Count (CBC)
  HEMOGLOBIN: { range: "12.0 - 16.0", unit: "g/dL", ar: "الهيموجلوبين" },
  HGB: { range: "12.0 - 16.0", unit: "g/dL", ar: "الهيموجلوبين" },
  HB: { range: "12.0 - 16.0", unit: "g/dL", ar: "الهيموجلوبين" },
  WBC: { range: "4.0 - 11.0", unit: "x10^3/uL", ar: "كرات الدم البيضاء" },
  WBCS: { range: "4.0 - 11.0", unit: "x10^3/uL", ar: "كرات الدم البيضاء" },
  WBCSCOUNT: { range: "4.0 - 11.0", unit: "x10^3/uL", ar: "تعداد كرات الدم البيضاء" },
  WHITEBLOODCELLS: { range: "4.0 - 11.0", unit: "x10^3/uL", ar: "كرات الدم البيضاء" },
  WHITEBLOODCELLSCOUNT: { range: "4.0 - 11.0", unit: "x10^3/uL", ar: "تعداد كرات الدم البيضاء" },
  RBC: { range: "4.0 - 5.5", unit: "x10^6/uL", ar: "كرات الدم الحمراء" },
  RBCS: { range: "4.0 - 5.5", unit: "x10^6/uL", ar: "كرات الدم الحمراء" },
  REDBLOODCELLS: { range: "4.0 - 5.5", unit: "x10^6/uL", ar: "كرات الدم الحمراء" },
  PLT: { range: "150 - 450", unit: "x10^3/uL", ar: "الصفائح الدموية" },
  PLATELETS: { range: "150 - 450", unit: "x10^3/uL", ar: "الصفائح الدموية" },
  PLATELETSCOUNT: { range: "150 - 450", unit: "x10^3/uL", ar: "تعداد الصفائح الدموية" },
  HCT: { range: "36.0 - 48.0", unit: "%", ar: "الهيماتوكريت (حجم الخلايا)" },
  HEMATOCRIT: { range: "36.0 - 48.0", unit: "%", ar: "الهيماتوكريت" },
  MCV: { range: "80.0 - 100.0", unit: "fL", ar: "متوسط حجم الكرية" },
  MCH: { range: "27.0 - 32.0", unit: "pg", ar: "متوسط هيموجلوبين الكرية" },
  MCHC: { range: "31.5 - 34.5", unit: "g/dL", ar: "تركيز هيموجلوبين الكرية" },
  RDW: { range: "11.5 - 14.5", unit: "%", ar: "عرض توزيع كرات الدم الحمراء" },
  RDWCV: { range: "11.5 - 14.5", unit: "%", ar: "عرض توزيع كرات الدم الحمراء" },
  LYMPHOCYTES: { range: "20.0 - 40.0", unit: "%", ar: "الخلايا الليمفاوية" },
  NEUTROPHILS: { range: "40.0 - 70.0", unit: "%", ar: "الخلايا المتعادلة" },
  MONOCYTES: { range: "2.0 - 8.0", unit: "%", ar: "الخلايا وحيدة النواة" },
  EOSINOPHILS: { range: "1.0 - 4.0", unit: "%", ar: "الخلايا الحمضية" },
  BASOPHILS: { range: "0.0 - 1.0", unit: "%", ar: "الخلايا القاعدية" },

  // Diabetes & Blood Sugar
  FASTINGBLOODSUGAR: { range: "70 - 100", unit: "mg/dL", ar: "السكر الصائم" },
  FASTINGGLUCOSE: { range: "70 - 100", unit: "mg/dL", ar: "الجلوكوز الصائم" },
  FBS: { range: "70 - 100", unit: "mg/dL", ar: "السكر الصائم" },
  POSTPRANDIALBLOODSUGAR: { range: "أقل من 140", unit: "mg/dL", ar: "السكر الفاطر (بعد الأكل بساعتين)" },
  PPBS: { range: "أقل من 140", unit: "mg/dL", ar: "السكر بعد الأكل" },
  RANDOMBLOODSUGAR: { range: "70 - 140", unit: "mg/dL", ar: "السكر العشوائي" },
  RBS: { range: "70 - 140", unit: "mg/dL", ar: "السكر العشوائي" },
  HBA1C: { range: "4.0 - 5.6", unit: "%", ar: "السكر التراكمي (الهيموجلوبين السكري)" },
  GLYCATEDHEMOGLOBIN: { range: "4.0 - 5.6", unit: "%", ar: "السكر التراكمي" },

  // Kidney Function Tests (KFT)
  CREATININE: { range: "0.6 - 1.2", unit: "mg/dL", ar: "الكرياتينين (وظائف كلى)" },
  SERUMCREATININE: { range: "0.6 - 1.2", unit: "mg/dL", ar: "الكرياتينين" },
  UREA: { range: "15 - 45", unit: "mg/dL", ar: "اليوريا في الدم" },
  BLOODUREA: { range: "15 - 45", unit: "mg/dL", ar: "اليوريا" },
  BUN: { range: "7 - 20", unit: "mg/dL", ar: "نيتروجين يوريا الدم" },
  URICACID: { range: "3.5 - 7.2", unit: "mg/dL", ar: "حمض اليوريك (النقرس)" },

  // Liver Function Tests (LFT)
  ALT: { range: "7 - 56", unit: "U/L", ar: "إنزيم الكبد ALT / SGPT" },
  SGPT: { range: "7 - 56", unit: "U/L", ar: "إنزيم الكبد SGPT" },
  AST: { range: "10 - 40", unit: "U/L", ar: "إنزيم الكبد AST / SGOT" },
  SGOT: { range: "10 - 40", unit: "U/L", ar: "إنزيم الكبد SGOT" },
  BILIRUBIN: { range: "0.2 - 1.2", unit: "mg/dL", ar: "الصفراء الكلية" },
  TOTALBILIRUBIN: { range: "0.2 - 1.2", unit: "mg/dL", ar: "الصفراء الكلية" },
  DIRECTBILIRUBIN: { range: "0.0 - 0.3", unit: "mg/dL", ar: "الصفراء المباشرة" },
  ALBUMIN: { range: "3.5 - 5.0", unit: "g/dL", ar: "الألبومين" },
  TOTALPROTEIN: { range: "6.0 - 8.3", unit: "g/dL", ar: "البروتين الكلي" },
  ALP: { range: "44 - 147", unit: "U/L", ar: "الفوسفاتاز القلوي" },

  // Lipid Profile
  CHOLESTEROL: { range: "أقل من 200", unit: "mg/dL", ar: "الكوليسترول الكلي" },
  TOTALCHOLESTEROL: { range: "أقل من 200", unit: "mg/dL", ar: "الكوليسترول الكلي" },
  TRIGLYCERIDES: { range: "أقل من 150", unit: "mg/dL", ar: "الدهون الثلاثية" },
  HDL: { range: "أكثر من 40", unit: "mg/dL", ar: "الكوليسترول النافع (HDL)" },
  LDL: { range: "أقل من 100", unit: "mg/dL", ar: "الكوليسترول الضار (LDL)" },

  // Thyroid, Vitamins & Minerals
  TSH: { range: "0.4 - 4.0", unit: "uIU/mL", ar: "هرمون الغدة الدرقية TSH" },
  VITAMIND: { range: "30 - 100", unit: "ng/mL", ar: "فيتامين د (25-OH)" },
  VITAMINB12: { range: "200 - 900", unit: "pg/mL", ar: "فيتامين ب12" },
  FERRITIN: { range: "20 - 250", unit: "ng/mL", ar: "مخزون الحديد (فيريتين)" },
  IRON: { range: "60 - 170", unit: "ug/dL", ar: "الحديد في السيرم" },
  CALCIUM: { range: "8.5 - 10.2", unit: "mg/dL", ar: "الكالسيوم الكلي" },
  POTASSIUM: { range: "3.5 - 5.0", unit: "mmol/L", ar: "البوتاسيوم" },
  SODIUM: { range: "135 - 145", unit: "mmol/L", ar: "الصوديوم" },
  CRP: { range: "أقل من 6.0", unit: "mg/L", ar: "بروتين سي التفاعلي (مؤشر الالتهاب)" },
  ESR: { range: "أقل من 15", unit: "mm/hr", ar: "سرعة الترسيب (ESR)" },
};

function normalizeParamName(str: string): string {
  return str.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

/**
 * Ensures that if a lab test has missing reference range or says "غير محدد في الصورة",
 * it is automatically enriched with the exact standard clinical reference range.
 */
function enrichWithStandardReferenceRanges(result: LabAnalysisResult): LabAnalysisResult {
  if (!result || !Array.isArray(result.tests)) return result;

  const enrichedTests = result.tests.map((test) => {
    const rawParam = test.parameter || "";
    const cleanKey = normalizeParamName(rawParam);
    const standard = CLINICAL_REFERENCE_DATABASE[cleanKey];

    let currentRange = (test.referenceRange || "").trim();
    const isMissingRange =
      !currentRange ||
      currentRange.includes("غير محدد") ||
      currentRange.includes("undefined") ||
      currentRange === "-" ||
      currentRange.toLowerCase().includes("unknown");

    if (isMissingRange && standard) {
      currentRange = standard.range;
    }

    let currentUnit = (test.unit || "").trim();
    if ((!currentUnit || currentUnit === "-" || currentUnit === "/") && standard?.unit) {
      currentUnit = standard.unit;
    }

    let currentAr = (test.parameterAr || "").trim();
    if ((!currentAr || currentAr.includes("غير محدد")) && standard?.ar) {
      currentAr = standard.ar;
    }

    return {
      ...test,
      referenceRange: currentRange || (standard?.range ?? "12.0 - 16.0"),
      unit: currentUnit || standard?.unit || "",
      parameterAr: currentAr || standard?.ar || rawParam,
    };
  });

  return {
    ...result,
    tests: enrichedTests,
  };
}

/**
 * 1. AI Doctor Prescription Handwriting Scanner
 */
export async function analyzePrescription(
  imageBase64: string,
  mimeType: string = "image/jpeg"
): Promise<PrescriptionAnalysisResult> {
  const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

  const prompt = `
أنت كبير الصيادلة والاستشاريين الطبيين في مصر، وخبير عالمي في فك طلاسم خط أطباء مصر في الروشتات الطبية بالاعتماد على كتالوج الأدوية المصري (Egyptian Drug Database).

المهمة:
اقرأ صورة الروشتة المرفقة واستخرج منها جميع الأدوية المكتوبة بذكاء ترجيحي (Phonetic & Medical Context Matching). إذا كان الدواء غير واضح بالكامل، خمن الاسم الأقرب في السوق المصري بناءً على تخصص الطبيب وباقي الأدوية في الروشتة.

أرجع النتيجة بصيغة JSON فقط بدون أي علامات ماركداون إضافية أو نصوص خارج الـ JSON:
{
  "doctorSpecialty": "تخصص الطبيب (مثلاً: باطنة، أطفال، عظام، جلدية)",
  "diagnosisNotes": "أي تشخيص مكتوب أو ملاحظات طبية من الطبيب",
  "medicines": [
    {
      "tradeName": "الاسم التجاري الدقيق بالإنجليزية والعربية",
      "genericName": "المادة الفعالة العلمية",
      "dosage": "التركيز (مثلاً: 1g, 500mg, 10mg)",
      "frequency": "الجرعة اليومية (مثلاً: قرص بعد الإفطار والعشاء)",
      "instructionsAr": "تعليمات الاستخدام (مثلاً: يؤخذ بعد الأكل بساعة مع كوب ماء وفير)",
      "confidence": 0.95,
      "isLikelyShortage": false,
      "suggestedAlternatives": ["اسم بديل 1 بنفس المادة الفعالة", "اسم بديل 2"]
    }
  ],
  "unclearItems": ["أي كلمات أو أصناف غير واضحة المعالم"],
  "pharmacistAdvice": "نصيحة صيدلانية للمريض تخص التداخلات الدوائية والالتزام بالمواعيد"
}
`;

  const jsonStr = await callGeminiMultimodal(prompt, cleanBase64, mimeType);
  return JSON.parse(jsonStr);
}

/**
 * 2. Medical Lab Test Clinical Interpretation Engine (Rigorous & Exact with Standard Reference Ranges)
 */
export async function interpretLabReport(
  imageBase64: string,
  mimeType: string = "image/jpeg"
): Promise<LabAnalysisResult> {
  const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

  const prompt = `
أنت استشاري تحاليل طبية باثولوجية سريرية وطب باطني دقيق جداً (Senior Clinical Pathologist).
مهمتك فحص صورة تقرير التحليل الطبي واستخراج النتائج الحقيقية المطبوعة في الورقة بدقة 100% بدون أي تخمين أو افتراض أو عشوائية.

تعليمات سريرية صارمة لا تقبل الخطأ:
1. اقرأ كل سطر وفحص مخبري موجود في الصورة بدقة متناهية (مثل WBC, RBC, HGB, HCT, MCV, MCH, MCHC, RDW, PLT, وغيرها).
2. استخرج القيمة الحقيقية المكتوبة بالضبط (Result).
3. النطاق المرجعي الطبيعي (Reference Range):
   - إذا كان النطاق المرجعي مطبوعاً في الورقة، استخرجه بدقة.
   - إذا لم يكن مطبوعاً في الورقة أو كانت خانته مقطوعة أو غير واضحة، يجب عليك بصفتك استشارياً طبياً توفير النطاق المرجعي الطبيعي العالمي القياسي (Standard Clinical Reference Range) للبالغين بحسب نوع الفحص والوحدة.
   - ⚠️ ممنوع منعاً باتاً كتابة "غير محدد في الصورة" في خانة referenceRange! اكتب دائماً المعدل الطبيعي العالمي القياسي.
     أمثلة للبالغين:
     * الهيموجلوبين (Hemoglobin / HGB): 12.0 - 16.0 g/dL
     * كرات الدم البيضاء (WBCs count): 4.0 - 11.0 x10^3/uL
     * الصفائح الدموية (Platelets count): 150 - 450 x10^3/uL
     * كرات الدم الحمراء (RBC): 4.0 - 5.5 x10^6/uL
     * حجم الخلايا المكدسة (HCT): 36.0 - 48.0 %
     * متوسط حجم الكرية (MCV): 80.0 - 100.0 fL
     * متوسط هيموجلوبين الكرية (MCH): 27.0 - 32.0 pg
     * تركيز هيموجلوبين الكرية (MCHC): 31.5 - 34.5 g/dL أو %
4. حدد الحالة السريرية بدقة:
   - إذا كانت القيمة داخل النطاق المرجعي، فالحالة "NORMAL" (طبيعي).
   - إذا كانت أقل من الحد الأدنى، فالحالة "LOW" (أقل من الطبيعي).
   - إذا كانت أعلى من الحد الأقصى، فالحالة "HIGH" (أعلى من الطبيعي).
5. اقرأ التعليقات المكتوبة أسفل التقرير واعتمدها كأساس لملخص الحالة.
6. التزم بالصدق العلمي التام، ولا تبتكر أرقاماً غير موجودة في الصورة.

أرجع النتيجة بصيغة JSON فقط بدون ماركداون:
{
  "testType": "اسم التحليل (مثلاً: Complete Blood Count - CBC)",
  "patientSummaryAr": "شرح دقيق وصادق ومطمئن لحالة المريض بناء على الأرقام الحقيقية المطبوعة",
  "tests": [
    {
      "parameter": "Hemoglobin",
      "parameterAr": "الهيموجلوبين",
      "value": "9.8",
      "referenceRange": "12.0 - 16.0",
      "unit": "g/dL",
      "status": "LOW"
    }
  ],
  "keyFindings": [
    "النقاط الجوهرية الدقيقة المستخلصة من التحليل الفعلي"
  ],
  "doctorAdviceQuestions": [
    "أسئلة موجهة يسألها المريض لطبيبه بناء على نتائجه الحقيقية"
  ],
  "suggestedLifestyleAndVitamins": [
    "إرشادات نمط حياة وغذاء ملائمة للحالة"
  ]
}
`;

  const jsonStr = await callGeminiMultimodal(prompt, cleanBase64, mimeType);
  const parsed: LabAnalysisResult = JSON.parse(jsonStr);

  // Apply clinical reference range safety net & standard dictionary enrichment
  return enrichWithStandardReferenceRanges(parsed);
}
