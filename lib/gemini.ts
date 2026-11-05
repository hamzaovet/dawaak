/**
 * Dawaak AI Engine powered by Google Gemini Vision (Multimodal)
 * Handles:
 * 1. Egyptian Doctor Prescription Handwriting Deciphering
 * 2. Medical Lab Tests & Report Clinical Interpretation (CBC, Liver, Kidney, Lipid, HbA1c)
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
 * 2. Medical Lab Test Clinical Interpretation Engine (Rigorous & Exact)
 */
export async function interpretLabReport(
  imageBase64: string,
  mimeType: string = "image/jpeg"
): Promise<LabAnalysisResult> {
  const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

  const prompt = `
أنت استشاري تحاليل طبية باثولوجية سريرية وطب باطني دقيق جداً (Senior Clinical Pathologist).
مهمتك فحص صورة تقرير التحليل الطبي واستخراج النتائج الحقيقية المطبوعة في الورقة بدقة 100% بدون أي تخمين أو افتراض أو عشوائية.

تعليمات صارمة لا تقبل الخطأ:
1. اقرأ كل سطر وفحص مخبري موجود في الصورة بدقة متناهية (مثل WBC, RBC, HGB, HCT, MCV, MCH, MCHC, RDW, PLT, وغيرها).
2. استخرج القيمة الحقيقية المكتوبة بالضبط (Result) وقارنها بالنطاق المرجعي المكتوب في الورقة نفسها (Ref. Range).
3. حدد الحالة السريرية بدقة:
   - إذا كانت القيمة داخل النطاق المرجعي المكتوب في الورقة، فالحالة هي "NORMAL" وتصنيفها طبيعي.
   - إذا كانت أقل من الحد الأدنى للمرجع، فالحالة "LOW" (أقل من الطبيعي).
   - إذا كانت أعلى من الحد الأقصى للمرجع، فالحالة "HIGH" (أعلى من الطبيعي).
4. اقرأ التعليقات المكتوبة أسفل التقرير (مثل "peripheral hemogram appear within normal" أو غيرها) واعتمدها كأساس لملخص الحالة.
5. إذا كانت كافة مؤشرات صورة الدم طبيعية (مثل HGB 15.6, WBC 7.1, PLT 228)، اشرح للمريض بوضوح تام أن دمه سليم وخالٍ من أي أنيميا وأن مناعته وتجلط الدم لديه ممتاز وفي الحدود الطبيعية المثالية، ولا تدّعِ وجود أي أنيميا إطلاقاً!
6. التزم بالصدق العلمي التام، ولا تبتكر أرقاماً غير موجودة في الصورة.

أرجع النتيجة بصيغة JSON فقط بدون ماركداون:
{
  "testType": "اسم التحليل (مثلاً: Complete Blood Count - CBC)",
  "patientSummaryAr": "شرح دقيق وصادق ومطمئن لحالة المريض بناء على الأرقام الحقيقية المطبوعة",
  "tests": [
    {
      "parameter": "HGB",
      "parameterAr": "الهيموجلوبين",
      "value": "15.6",
      "referenceRange": "13.0 - 17.0",
      "unit": "g/dL",
      "status": "NORMAL"
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
  return JSON.parse(jsonStr);
}
