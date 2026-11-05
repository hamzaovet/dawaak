"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  UploadCloud,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  HelpCircle,
  Apple,
  Share2,
  Copy,
  Check,
  RefreshCw,
  ShieldAlert,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  HeartPulse,
} from "lucide-react";

interface TestParameter {
  parameter: string;
  parameterAr?: string;
  value: string;
  referenceRange: string;
  unit: string;
  status: "NORMAL" | "HIGH" | "LOW";
}

interface LabAnalysisData {
  testType: string;
  patientSummaryAr: string;
  tests: TestParameter[];
  keyFindings: string[];
  doctorAdviceQuestions: string[];
  suggestedLifestyleAndVitamins: string[];
}

export default function LabAnalyzerPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<LabAnalysisData | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [copied, setCopied] = useState(false);

  // Sample Lab Trigger (CBC with Mild Anemia)
  const handleLoadSample = () => {
    setImagePreview("https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600");
    setLoading(true);
    setResults(null);

    setTimeout(() => {
      setResults({
        testType: "صورة دم كاملة (CBC - Complete Blood Count)",
        patientSummaryAr:
          "تحليلك يوضح حالة صحية عامة مستقرة وجيدة جداً، مع وجود مؤشر على أنيميا نقص حديد بسيطة وخفيفة (انخفاض طفيف في الهيموجلوبين وكرات الدم الحمراء)، بينما كرات الدم البيضاء والصفائح الدموية في معدلاتها الطبيعية الممتازة مما يؤكد عدم وجود أي التهابات نشطة.",
        tests: [
          {
            parameter: "Hemoglobin (HGB)",
            parameterAr: "الهيموجلوبين (بروتين حمل الأكسجين)",
            value: "10.8",
            referenceRange: "12.0 - 16.0",
            unit: "g/dL",
            status: "LOW",
          },
          {
            parameter: "Red Blood Cells (RBC)",
            parameterAr: "كرات الدم الحمراء",
            value: "3.7",
            referenceRange: "4.0 - 5.5",
            unit: "10^6/uL",
            status: "LOW",
          },
          {
            parameter: "White Blood Cells (WBC)",
            parameterAr: "كرات الدم البيضاء (الجهاز المناعي)",
            value: "6.8",
            referenceRange: "4.0 - 11.0",
            unit: "10^3/uL",
            status: "NORMAL",
          },
          {
            parameter: "Platelets (PLT)",
            parameterAr: "الصفائح الدموية (تخثر الدم)",
            value: "265",
            referenceRange: "150 - 450",
            unit: "10^3/uL",
            status: "NORMAL",
          },
          {
            parameter: "Hematocrit (HCT)",
            parameterAr: "نسبة حجم الخلايا المكدسة",
            value: "33.2",
            referenceRange: "36.0 - 48.0",
            unit: "%",
            status: "LOW",
          },
          {
            parameter: "Mean Corpuscular Volume (MCV)",
            parameterAr: "متوسط حجم كرات الدم الحمراء",
            value: "74.5",
            referenceRange: "80.0 - 100.0",
            unit: "fL",
            status: "LOW",
          },
        ],
        keyFindings: [
          "وجود أنيميا ميكروسيتيك بسيطة (Microcytic Hypochromic) تشير لنقص مخزون الحديد في الجسم.",
          "المناعة سليمة تماماً: كرات الدم البيضاء طبيعية ولا يوجد اشتباه في أي عدوى بكتيرية أو فيروسية.",
          "تخثر الدم والصفائح الدموية في أفضل حالاتها الطبيعية.",
        ],
        doctorAdviceQuestions: [
          "هل يحتاج فحص إضافي لقياس مخزون الحديد في الدم (Serum Ferritin)؟",
          "ما هي الجرعة الأنسب لمكملات الحديد (مثل الفيروجلوبين أو الهيموجيت) بدون إحداث اضطرابات في المعدة؟",
          "هل أحتاج لإعادة تحليل صورة الدم بعد شهرين من بدء كورس العلاج؟",
        ],
        suggestedLifestyleAndVitamins: [
          "الإكثار من الأطعمة الغنية بالحديد الحيواني سريع الامتصاص (الكبدة البقري، اللحوم الحمراء)، والنباتي (السبانخ، العسل الأسود، العدس).",
          "شرب عصير ليمون أو برتقال طازج مع الوجبات لاحتوائه على فيتامين C الذي يضاعف امتصاص الحديد في الأمعاء.",
          "تجنب تناول الشاي والقهوة والمشروبات الغازية مباشرة بعد الوجبات وتأجيلها ساعتين على الأقل لأن مادة التانين تمنع امتصاص الحديد.",
        ],
      });
      setLoading(false);
    }, 1400);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!imagePreview) return;
    setLoading(true);
    setResults(null);

    try {
      const res = await fetch("/api/lab-report/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: imagePreview,
          customerName,
          customerPhone,
        }),
      });

      const data = await res.json();
      if (data.success && data.analysis) {
        setResults(data.analysis);
      } else {
        alert(data.error || "فشل تفسير التحليل الطبي");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الاتصال بالذكاء الاصطناعي");
    } finally {
      setLoading(false);
    }
  };

  const copyQuestions = () => {
    if (!results?.doctorAdviceQuestions) return;
    const text = results.doctorAdviceQuestions.join("\n- ");
    navigator.clipboard.writeText("أسئلة لطبيبي المعالج بخصوص التحليل:\n- " + text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-10 px-4 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
          <HeartPulse className="w-4 h-4 animate-pulse text-cyan-400" />
          <span>الذكاء الاصطناعي الطبي السريري 2.0</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight">
          مفسر التحاليل الطبية الذكي
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          ارفع صورة تقرير التحليل المخبري (صورة دم، وظائف كبد وكلى، سكر تراكمي، دهون).. وافهم نتائجك بلغة عربية مبسطة ومطمئنة مع أسئلة موجهة لطبيبك
        </p>
      </div>

      {/* Main Upload Box */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Upload Area */}
          <div className="md:col-span-7 space-y-5">
            <div className="border-2 border-dashed border-slate-700 hover:border-cyan-500/60 transition-colors rounded-2xl p-6 text-center bg-slate-950/50 relative group">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {imagePreview ? (
                <div className="space-y-4">
                  <div className="relative max-h-72 overflow-hidden rounded-xl mx-auto border border-slate-700 shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="معاينة التحليل"
                      className="w-full object-contain max-h-72"
                    />
                  </div>
                  <p className="text-xs text-slate-400">انقر لتغيير الصورة أو استبدالها</p>
                </div>
              ) : (
                <div className="py-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto shadow-inner group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-200">
                      اضغط لرفع صورة تقرير التحليل أو اسحبها هنا
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      يدعم تقارير معامل المختبر، البرج، ألفا، ومستشفيات التأمين الصحي (JPG, PNG, PDF صورة)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Sample Button */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-slate-400">ليس لديك تقرير الآن؟</span>
              <button
                type="button"
                onClick={handleLoadSample}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/40 px-3 py-1.5 rounded-lg transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                تجربة تقرير فوري (تحليل صورة دم كاملة CBC)
              </button>
            </div>
          </div>

          {/* Customer info & Action */}
          <div className="md:col-span-5 space-y-5 bg-slate-950/60 border border-slate-800/80 p-5 rounded-2xl">
            <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              بيانات المريض (اختياري لحفظ السجل)
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  اسم صاحب التحليل
                </label>
                <input
                  type="text"
                  placeholder="مثال: أحمد مصطفى"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  رقم الهاتف أو الواتساب
                </label>
                <input
                  type="tel"
                  placeholder="010XXXXXXXX"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!imagePreview || loading}
              className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-950/50 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin text-white" />
                  <span>جاري الفحص السريري بالذكاء الاصطناعي...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>تفسير التحليل الطبي الآن</span>
                </>
              )}
            </button>

            <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                خصوصية تامة: تشفير كامل لبياناتك الطبية واستخدام آمن ومستقل لنماذج الذكاء الاصطناعي الطبية.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Results View */}
      {results && (
        <div className="space-y-8 animate-in fade-in duration-500">
          {/* Summary Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-950/30 border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  نوع الفحص المخبري
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-6 h-6 text-cyan-400" />
                  {results.testType}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  تم التفسير السريري بنجاح
                </span>
              </div>
            </div>

            {/* Patient Summary */}
            <div className="mt-6 bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 md:p-6 space-y-3">
              <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-cyan-400" />
                الخلاصة الطبية المبسطة للمريض:
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {results.patientSummaryAr}
              </p>
            </div>

            {/* Key Findings */}
            {results.keyFindings && results.keyFindings.length > 0 && (
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  النقاط الجوهرية المستخلصة:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {results.keyFindings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 text-xs md:text-sm text-slate-300 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Parameter Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  تفاصيل نتائج الباراميترات المخبرية
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  مقارنة كل فحص بالمعدل الطبيعي العالمي ووحدات القياس
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-xs">
                    <th className="py-3 px-4 font-semibold">اسم الفحص المخبري</th>
                    <th className="py-3 px-4 font-semibold text-center">النتيجة الحالية</th>
                    <th className="py-3 px-4 font-semibold text-center">المعدل الطبيعي (Ref Range)</th>
                    <th className="py-3 px-4 font-semibold text-center">الوحدة</th>
                    <th className="py-3 px-4 font-semibold text-center">الحالة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {results.tests.map((test, index) => {
                    const isNormal = test.status === "NORMAL";
                    const isLow = test.status === "LOW";
                    const isHigh = test.status === "HIGH";

                    return (
                      <tr key={index} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-slate-200">
                          <div className="font-semibold text-slate-100">{test.parameter}</div>
                          {test.parameterAr && (
                            <div className="text-xs text-slate-400">{test.parameterAr}</div>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center font-bold text-slate-100">
                          <span
                            className={`px-2.5 py-1 rounded-lg text-sm ${
                              isNormal
                                ? "bg-slate-800 text-slate-200"
                                : isLow
                                ? "bg-amber-500/20 text-amber-300 font-black border border-amber-500/30"
                                : "bg-rose-500/20 text-rose-300 font-black border border-rose-500/30"
                            }`}
                          >
                            {test.value}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs text-slate-400 dir-ltr font-mono">
                          {test.referenceRange}
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs text-slate-500 font-mono">
                          {test.unit}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {isNormal ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              طبيعي
                            </span>
                          ) : isLow ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                              <TrendingDown className="w-3.5 h-3.5" />
                              أقل من الطبيعي
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                              <TrendingUp className="w-3.5 h-3.5" />
                              أعلى من الطبيعي
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Advice & Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Doctor Questions */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  أسئلة يُنصح بطرحها على طبيبك
                </h3>
                <button
                  type="button"
                  onClick={copyQuestions}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الأسئلة</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2.5">
                {results.doctorAdviceQuestions?.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl text-xs md:text-sm text-slate-300 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                      ؟
                    </span>
                    <span className="leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle & Nutrition */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                <Apple className="w-5 h-5 text-emerald-400" />
                إرشادات نمط الحياة والتغذية الداعمة
              </h3>

              <div className="space-y-2.5">
                {results.suggestedLifestyleAndVitamins?.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl text-xs md:text-sm text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-cyan-950/40 to-slate-900 border border-cyan-500/30 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-right">
              <h4 className="text-base font-bold text-white">
                هل تحتاج فيتامينات أو أدوية موصوفة بعد مناقشة طبيبك؟
              </h4>
              <p className="text-xs text-slate-400">
                ابحث عنها في شبكة رادار دواك وتأكد من توفرها في صيدليات منطقتك بسعرها الجبري الرسمي
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/radar"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-cyan-950/40"
              >
                <span>رادار نواقص الأدوية</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
              >
                <span>دليل الصيدليات المعتمدة</span>
              </Link>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="text-center text-xs text-slate-500 bg-slate-950/40 border border-slate-900 p-4 rounded-2xl max-w-3xl mx-auto">
            تنبيه طبي وقانوني: تقرير الذكاء الاصطناعي هو تحليل استرشادي فقط مصمم لتبسيط المصطلحات المخبرية، ولا يُعتبر بأي حال تشخيصاً طبياً نهائياً ولا يغني إطلاقاً عن استشارة الطبيب البشري المتخصص ومراجعته بالنتائج الأصلية.
          </div>
        </div>
      )}
    </div>
  );
}
