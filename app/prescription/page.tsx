"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Camera,
  UploadCloud,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Pill,
  Clock,
  Send,
  RefreshCw,
  FileText,
  ShieldCheck,
  ChevronLeft,
  Copy,
  Check,
} from "lucide-react";

interface MedicineExtracted {
  tradeName: string;
  genericName?: string;
  dosage: string;
  frequency: string;
  instructionsAr: string;
  confidence: number;
  isLikelyShortage?: boolean;
  suggestedAlternatives?: string[];
}

export default function PrescriptionScannerPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    doctorSpecialty?: string;
    diagnosisNotes?: string;
    medicines: MedicineExtracted[];
    unclearItems?: string[];
    pharmacistAdvice?: string;
  } | null>(null);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [copied, setCopied] = useState(false);

  // Sample prescription trigger
  const handleLoadSample = () => {
    // High-resolution realistic prescription mockup base64 or sample trigger
    setImagePreview("https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600");
    handleAnalyzeWithSample();
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
      const res = await fetch("/api/prescription/scan", {
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
        alert(data.error || "فشل فحص الروشتة");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الاتصال بالذكاء الاصطناعي");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeWithSample = async () => {
    setLoading(true);
    // Simulate real Gemini 2.0 payload
    setTimeout(() => {
      setResults({
        doctorSpecialty: "باطنة وجهاز هضمي وكبد — أ.د. عاطف إبراهيم",
        diagnosisNotes: "التهاب حاد في الجدار المخاطي للمعدة مع نزلة معوية بكتيرية خفيفة",
        medicines: [
          {
            tradeName: "أوجمنتين 1 جم أقراص (Augmentin 1g)",
            genericName: "Amoxicillin + Clavulanic Acid 1000mg",
            dosage: "1000 mg",
            frequency: "قرص كل 12 ساعة بانتظام",
            instructionsAr: "يؤخذ بعد الأكل بساعة مع كوب ماء وفير لمدة 7 أيام كاملة",
            confidence: 0.98,
            isLikelyShortage: false,
            suggestedAlternatives: ["كلافيموكس 1 جم", "هاي بيوتك 1 جم", "كيورام 1 جم"],
          },
          {
            tradeName: "كونترولوك 40 مجم (Controloc 40mg)",
            genericName: "Pantoprazole 40mg",
            dosage: "40 mg",
            frequency: "قرص واحد يومياً في الصباح",
            instructionsAr: "يؤخذ على الريق قبل الإفطار بنصف ساعة لعلاج حرقان المعدة",
            confidence: 0.96,
            isLikelyShortage: false,
            suggestedAlternatives: ["زوركال 40 مجم", "بانتوزول 40 مجم"],
          },
          {
            tradeName: "بانادول إكسترا أحمر (Panadol Extra)",
            genericName: "Paracetamol 500mg + Caffeine 65mg",
            dosage: "500 mg",
            frequency: "قرص عند اللزوم (بحد أقصى مرتين باليوم)",
            instructionsAr: "مسكن لألم البطن والصداع وخافض للحرارة",
            confidence: 0.99,
            isLikelyShortage: false,
            suggestedAlternatives: ["سيتال إكسترا", "بارامول إكسترا"],
          },
        ],
        unclearItems: [],
        pharmacistAdvice: "احرص على إكمال كورس المضاد الحيوي كاملاً حتى لو شعرت بالتحسن بعد يومين لتجنب عودة البكتيريا.",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/70 via-[#091322] to-[#060b13] border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
            <Sparkles size={14} className="text-cyan-400" />
            <span>مدعوم بنموذج Google Gemini 2.0 Multimodal الطبي</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            فاحص الروشتات بالذكاء الاصطناعي 🧠📸
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            مهما كان خط الطبيب معقداً أو طلاسم، محرك دواك الطبي المدرب على كتالوج الأدوية المصري هيفك حروف الروشتة في ثواني، يستخرج الجرعات والمواعيد، ويقترح البديل بنفس المادة الفعالة لو الصنف ناقص.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Upload Box (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-medical p-6 rounded-3xl space-y-4">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <Camera size={18} className="text-cyan-400" />
              <span>ارفع صورة الروشتة</span>
            </h3>

            {/* Dropzone */}
            <label className="border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-[#080e1a] hover:bg-[#0b1424] transition text-center min-h-[220px] relative overflow-hidden group">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {imagePreview ? (
                <div className="relative w-full h-full flex flex-col items-center">
                  <img
                    src={imagePreview}
                    alt="Prescription preview"
                    className="max-h-56 rounded-xl object-contain shadow-md"
                  />
                  <span className="text-[11px] text-cyan-400 font-bold mt-2 group-hover:underline">
                    انقر لتغيير الصورة
                  </span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <UploadCloud size={28} />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">
                      اسحب وأفلت صورة الروشتة هنا
                    </span>
                    <span className="text-xs text-slate-400 mt-1 block">
                      أو التقط صورة بكاميرا الموبايل الآن
                    </span>
                  </div>
                </div>
              )}
            </label>

            {/* Action buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleAnalyze}
                disabled={!imagePreview || loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw size={18} className="animate-spin text-slate-950" />
                    <span>جاري قراءة خط الطبيب بـ Gemini...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    <span>فك الروشتة وتحديد الأدوية فوراً ⚡</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleLoadSample}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-cyan-500/25 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1.5 transition"
              >
                <span>جرب بروشتة تجريبية جاهزة (One-Click) 🎯</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Box (7 cols) */}
        <div className="lg:col-span-7">
          {loading ? (
            <div className="glass-medical p-12 rounded-3xl text-center space-y-4 animate-pulse min-h-[400px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                <RefreshCw size={32} className="animate-spin" />
              </div>
              <h3 className="font-bold text-lg text-white">الذكاء الاصطناعي يحلل حروف الروشتة...</h3>
              <p className="text-xs text-slate-400 max-w-sm">
                نطابق الأسماء المكتوبة مع دليل الأدوية المصري ونحدد الجرعات والبدائل المماثلة.
              </p>
            </div>
          ) : results ? (
            <div className="glass-medical p-6 sm:p-8 rounded-3xl space-y-6 animate-fadeIn">
              {/* Doctor / Specialty Banner */}
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase font-mono">
                    DETECTED SPECIALTY
                  </span>
                  <h3 className="font-bold text-base text-white mt-0.5">
                    {results.doctorSpecialty}
                  </h3>
                  {results.diagnosisNotes && (
                    <p className="text-xs text-slate-300 mt-1">{results.diagnosisNotes}</p>
                  )}
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold shrink-0">
                  تم فك {results.medicines.length} أدوية بنجاح ✓
                </span>
              </div>

              {/* Medicines List */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-white">الأصناف والجرعات المستخرجة:</h4>
                <div className="space-y-3">
                  {results.medicines.map((med, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#090f1c] border border-slate-800 space-y-2 hover:border-cyan-500/30 transition"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-bold text-sm text-white">{med.tradeName}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono">
                          دقة: {Math.round(med.confidence * 100)}%
                        </span>
                      </div>

                      <div className="text-xs text-slate-300 font-medium pl-8 space-y-1">
                        <div className="flex items-center gap-1.5 text-emerald-400">
                          <Clock size={12} />
                          <span>الجرعة والمواعيد: <strong>{med.frequency}</strong></span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {med.instructionsAr}
                        </div>
                      </div>

                      {/* Alternatives if needed */}
                      {med.suggestedAlternatives && med.suggestedAlternatives.length > 0 && (
                        <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 flex-wrap text-[11px]">
                          <span className="text-slate-400 font-medium">البديل المماثل بنفس المادة الفعالة:</span>
                          {med.suggestedAlternatives.map((alt, aIdx) => (
                            <span
                              key={aIdx}
                              className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-semibold"
                            >
                              {alt}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pharmacist Advice Box */}
              {results.pharmacistAdvice && (
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2">
                  <ShieldCheck size={16} className="shrink-0 mt-0.5 text-amber-400" />
                  <span>{results.pharmacistAdvice}</span>
                </div>
              )}

              {/* Order Dispatch to Pharmacy */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/201018671000?text=${encodeURIComponent(
                    `أهلاً دواك، أريد تحضير وتوصيل الروشتة التالية:\n${results.medicines
                      .map((m, i) => `${i + 1}. ${m.tradeName} (${m.frequency})`)
                      .join("\n")}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition"
                >
                  <Send size={15} />
                  <span>إرسال الروشتة لأقرب صيدلية للتوصيل السريع 🛵</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="glass-medical p-12 rounded-3xl text-center space-y-4 min-h-[400px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 flex items-center justify-center mx-auto">
                <FileText size={28} />
              </div>
              <h3 className="font-bold text-base text-slate-300">
                في انتظار رفع صورة الروشتة
              </h3>
              <p className="text-xs text-slate-500 max-w-sm">
                النتائج ستظهر هنا فورياً مع أسماء الأدوية المعتمدة وجداول الجرعات واقتراحات البدائل.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
