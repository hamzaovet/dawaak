"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DoubleQrCard from "../components/DoubleQrCard";
import {
  Radar,
  Camera,
  FlaskConical,
  Search,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  HeartPulse,
  Pill,
  Store,
  ChevronLeft,
  Flame,
} from "lucide-react";

interface Medicine {
  id: string;
  tradeNameAr: string;
  tradeNameEn: string;
  genericName: string;
  strength?: string;
  dosageForm: string;
  category: string;
  officialPrice: number;
  manufacturer?: string;
  isShortage: boolean;
  requiresPrescription: boolean;
  alternatives?: string;
  description?: string;
  inventory?: {
    stockQuantity: number;
    pharmacy: {
      nameAr: string;
      city: string;
      phone: string;
      slug: string;
    };
  }[];
}

interface Pharmacy {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  address: string;
  city: string;
  governorate: string;
  phone: string;
  whatsapp: string;
  rating: number;
  isOpen: boolean;
  deliveryTimeEstimate: string;
  deliveryFee: number;
  logoUrl?: string;
  _count?: {
    inventory: number;
    couriers: number;
  };
}

export default function HomePage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [shortagesOnly, setShortagesOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [medsRes, pharRes] = await Promise.all([
          fetch("/api/medicines"),
          fetch("/api/pharmacies"),
        ]);
        const medsData = await medsRes.json();
        const pharData = await pharRes.json();
        if (medsData.medicines) setMedicines(medsData.medicines);
        if (pharData.pharmacies) setPharmacies(pharData.pharmacies);
      } catch (err) {
        console.error("Load error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const CATEGORIES = [
    "ALL",
    "أدوية الغدة والهرمونات",
    "مضادات التجلط والسيولة",
    "أدوية السكر والتنحيف",
    "أمراض الصدر والحساسية",
    "مضادات حيوية",
    "أدوية الضغط والقلب",
    "مسكنات وخافض حرارة",
    "فيتامينات ومكملات غذائية",
    "مستحضرات تجميل وعناية",
  ];

  const filteredMedicines = medicines.filter((m) => {
    const matchesSearch =
      m.tradeNameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.tradeNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.genericName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "ALL" ? true : m.category === selectedCategory;
    const matchesShortage = shortagesOnly ? m.isShortage : true;
    return matchesSearch && matchesCategory && matchesShortage;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-emerald-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold animate-radar">
            <Sparkles size={14} className="text-emerald-400" />
            <span>المنظومة الأولى بمصر لربط الصيدليات ورصد النواقص بالذكاء الاصطناعي</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
            دَواك تلاقيه.. <br />
            <span className="text-emerald-gradient">ويوصلك في ثواني لحد بيتك</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            انسَ دوخة الصيدليات والبحث عن الأدوية الناقصة. رادار ذكي بيبحث في كل صيدليات الجمهورية، فاحص روشتات فوري بـ Gemini، ومترجم تحاليل طبية موثوق بضغطة زر.
          </p>

          {/* Quick Search in Hero */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative flex items-center bg-[#0a111e] border-2 border-emerald-500/40 rounded-2xl p-2 shadow-2xl focus-within:border-emerald-400 transition">
              <Search size={20} className="text-emerald-400 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث باسم الدواء (عربي أو إنجليزي)، المادة الفعالة، أو النواقص..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none pr-3 pl-4"
              />
              <button
                onClick={() => {
                  const el = document.getElementById("catalog");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black text-xs shrink-0 transition"
              >
                بحث فوري
              </button>
            </div>
          </div>
        </div>

        {/* 3 HERO PILLAR DOORS */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Pillar 1: Shortage Radar */}
          <Link
            href="/radar"
            className="group glass-medical p-6 rounded-3xl hover:border-emerald-400/60 transition-all hover:-translate-y-1 shadow-xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Radar size={24} className="animate-spin text-emerald-400" style={{ animationDuration: "8s" }} />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-white">رادار نواقص الأدوية</h3>
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-bold">
                حارق 🔥
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              ابحث عن أي صنف شحيح (إلتروكسين، كلكسان، أوزمبيك) والسيستم هيرصد أقرب صيدلية متوفر فيها ويحجزلك علبتك فوراً.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:underline">
              <span>فتح رادار النواقص</span>
              <ChevronLeft size={16} />
            </div>
          </Link>

          {/* Pillar 2: AI Rx Scanner */}
          <Link
            href="/prescription"
            className="group glass-medical p-6 rounded-3xl hover:border-cyan-400/60 transition-all hover:-translate-y-1 shadow-xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Camera size={24} />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-white">فاحص الروشتات بـ AI</h3>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                Gemini 2.0
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              صور روشتة الطبيب المعقدة، والذكاء الاصطناعي هيفك طلاسم الخط، يستخرج الأدوية والجرعات، ويقترحلك البديل لو ناقص.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:underline">
              <span>فحص الروشتة الآن</span>
              <ChevronLeft size={16} />
            </div>
          </Link>

          {/* Pillar 3: Lab Interpreter */}
          <Link
            href="/lab-analyzer"
            className="group glass-medical p-6 rounded-3xl hover:border-amber-400/60 transition-all hover:-translate-y-1 shadow-xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <FlaskConical size={24} />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-white">مفسر التحاليل الطبية</h3>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                تفسير مبسط
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              ارفع صورة تحليل الدم أو الكبد أو السكر، وافهم نتائجك الطبية بلغة عربية بسيطة ومطمئنة بدون خوف أو مصطلحات غامضة.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
              <span>تفسير التحليل فوراً</span>
              <ChevronLeft size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* 2. REAL-TIME SHORTAGES TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-[#0c1524] border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-black text-emerald-400">رصد النواقص الحي:</span>
          </div>
          <div className="text-xs text-slate-300 font-medium truncate text-center sm:text-right">
            🟢 تم رصد <strong className="text-white">3 علب إلتروكسين 100mcg</strong> في طنطا • 🟢 متوفر <strong className="text-white">كلكسان 40 مجم</strong> بمدينة نصر • 🟢 تم حجز <strong className="text-white">أوزمبيك 1 مجم</strong> بنجاح!
          </div>
          <Link
            href="/radar"
            className="px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition shrink-0"
          >
            مشاهدة الرادار بالكامل 📡
          </Link>
        </div>
      </section>

      {/* 3. VERIFIED PARTNER PHARMACIES */}
      <section id="pharmacies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 font-mono">CERTIFIED PARTNERS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              أقرب الصيدليات المعتمدة للتوصيل الفوري
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            توصيل كاش أو إنستاباي خلال 30 دقيقة عبر طياري الصيدلية 🛵
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pharmacies.map((pharmacy) => (
            <div
              key={pharmacy.id}
              className="glass-medical p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl font-bold text-emerald-400 overflow-hidden">
                    {pharmacy.nameAr.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                      ⭐ {pharmacy.rating}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                      {pharmacy.isOpen ? "مفتوح الآن" : "مغلق"}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-white">{pharmacy.nameAr}</h3>
                <p className="text-xs text-emerald-400 font-mono mt-0.5">{pharmacy.nameEn}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                  <MapPin size={13} className="text-emerald-400 shrink-0" />
                  <span className="line-clamp-1">{pharmacy.address}</span>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-cyan-400" />
                    {pharmacy.deliveryTimeEstimate}
                  </span>
                  <span>•</span>
                  <span>توصيل: {pharmacy.deliveryFee} ج.م</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href={`/pharmacy/${pharmacy.slug}`}
                  className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs text-center transition"
                >
                  تصفح الصيدلية
                </Link>
                <a
                  href={`https://wa.me/2${pharmacy.whatsapp}?text=${encodeURIComponent(
                    `مرحباً ${pharmacy.nameAr}، أريد طلب دواء عبر منظومة دواك.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-900 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 font-bold text-xs text-center transition flex items-center justify-center gap-1"
                >
                  <Phone size={13} />
                  <span>واتساب مباشر</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MASTER DRUG CATALOG & SEARCH */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 font-mono">EGYPTIAN DRUG DIRECTORY</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              كتالوج الأدوية المصرية والبدائل الرسمية
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShortagesOnly(!shortagesOnly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${
                shortagesOnly
                  ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                  : "bg-slate-900 text-slate-300 border-slate-700"
              }`}
            >
              <Flame size={14} className={shortagesOnly ? "text-rose-400" : "text-slate-400"} />
              <span>النواقص فقط ({medicines.filter((m) => m.isShortage).length})</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-slate-950 shadow-md font-black"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              {cat === "ALL" ? "جميع الأدوية" : cat}
            </button>
          ))}
        </div>

        {/* Medicines Table */}
        <div className="glass-medical rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-[#0a111e] text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-5">اسم الدواء والشكل</th>
                  <th className="py-4 px-5">المادة الفعالة والتركيز</th>
                  <th className="py-4 px-5">السعر الجبري الرسمي</th>
                  <th className="py-4 px-5">البدائل والمثائل في السوق</th>
                  <th className="py-4 px-5">حالة التوفر والرادار</th>
                  <th className="py-4 px-5 text-center">طلب أو حجز</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredMedicines.map((med) => {
                  let alternatives: string[] = [];
                  try {
                    alternatives = med.alternatives ? JSON.parse(med.alternatives) : [];
                  } catch {
                    alternatives = [];
                  }

                  const availablePharmacies = med.inventory?.filter((i) => i.stockQuantity > 0) || [];
                  const isFoundNearby = availablePharmacies.length > 0;

                  return (
                    <tr key={med.id} className="hover:bg-slate-800/30 transition">
                      <td className="py-3.5 px-5">
                        <div className="font-bold text-white text-sm flex items-center gap-2">
                          <Pill size={16} className="text-emerald-400 shrink-0" />
                          <span>{med.tradeNameAr}</span>
                          {med.isShortage && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold shrink-0">
                              صنف ناقص
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                          {med.tradeNameEn}
                        </span>
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="text-slate-200 font-medium">{med.genericName}</div>
                        <span className="text-[10px] text-emerald-400/90 font-mono">
                          {med.strength || "—"} • {med.dosageForm}
                        </span>
                      </td>

                      <td className="py-3.5 px-5">
                        <span className="font-black text-sm text-emerald-400 font-mono">
                          {med.officialPrice} ج.م
                        </span>
                        <span className="text-[10px] text-slate-500 block">تسعيرة جبرية</span>
                      </td>

                      <td className="py-3.5 px-5">
                        {alternatives.length > 0 ? (
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {alternatives.slice(0, 3).map((alt, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-[10px] text-slate-300"
                              >
                                {alt}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-500">—</span>
                        )}
                      </td>

                      <td className="py-3.5 px-5">
                        {med.isShortage ? (
                          isFoundNearby ? (
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold inline-flex items-center gap-1">
                              <CheckCircle2 size={12} />
                              <span>رُصِد في {availablePharmacies[0].pharmacy.nameAr}</span>
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[11px] font-bold inline-flex items-center gap-1">
                              <AlertTriangle size={12} />
                              <span>شحيح جداً (جارٍ الرصد)</span>
                            </span>
                          )
                        ) : (
                          <span className="text-emerald-400 font-bold text-[11px]">
                            متوفر في الصيدليات القريبة
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-5 text-center">
                        {med.isShortage ? (
                          <Link
                            href="/radar"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black text-xs transition shadow-md"
                          >
                            <Radar size={13} />
                            <span>تتبع وحجز</span>
                          </Link>
                        ) : (
                          <a
                            href={`https://wa.me/201018671000?text=${encodeURIComponent(
                              `أريد طلب علبة من (${med.tradeNameAr}) بسعر ${med.officialPrice} ج.م`
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition"
                          >
                            <span>اطلب الآن</span>
                          </a>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. DUAL QR CARD (PRINTABLE & PROMOTIONAL) */}
      <DoubleQrCard />
    </div>
  );
}
