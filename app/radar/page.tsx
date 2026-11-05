"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Radar,
  Search,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  AlertTriangle,
  Lock,
  Sparkles,
  Send,
  Building2,
  Check,
  Flame,
  Pill,
  Filter,
  ArrowRight,
  ShieldCheck,
  Store,
  RefreshCw,
  PhoneCall,
  Activity,
} from "lucide-react";

interface TrackedShortage {
  id: string;
  tradeNameAr: string;
  tradeNameEn: string;
  genericName: string;
  strength?: string | null;
  dosageForm: string;
  officialPrice: number;
  category: string;
  description?: string | null;
  alternatives?: string | null;
  inventory: {
    stockQuantity: number;
    price: number;
    pharmacy: {
      id: string;
      nameAr: string;
      slug: string;
      city: string;
      governorate: string;
      phone: string;
      whatsapp: string;
    };
  }[];
}

interface ShortageRequestItem {
  id: string;
  medicineName: string;
  customerCity: string;
  governorate: string;
  urgency: string;
  status: string;
  createdAt: string;
  customer?: { name: string; phone: string } | null;
}

export default function ShortageRadarPage() {
  const [trackedShortages, setTrackedShortages] = useState<TrackedShortage[]>([]);
  const [recentRequests, setRecentRequests] = useState<ShortageRequestItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("ALL");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);

  // New Request Form
  const [newMedName, setNewMedName] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCity, setNewCity] = useState("حدائق القبة");
  const [newGov, setNewGov] = useState("القاهرة");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Reservation Modal
  const [reservingMed, setReservingMed] = useState<{
    medName: string;
    pharmacyName: string;
    pharmacyId: string;
    price: number;
    whatsapp: string;
  } | null>(null);

  useEffect(() => {
    loadRadar();
  }, []);

  async function loadRadar() {
    try {
      setLoading(true);
      const res = await fetch("/api/shortage");
      const data = await res.json();
      if (data.trackedShortages) setTrackedShortages(data.trackedShortages);
      if (data.requests) setRecentRequests(data.requests);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleBroadcastRequest(e: React.FormEvent) {
    e.preventDefault();
    if (!newMedName || !newPhone) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/shortage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "NEW_REQUEST",
          medicineName: newMedName,
          customerName: newName,
          customerPhone: newPhone,
          customerCity: newCity,
          governorate: newGov,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setNewMedName("");
        loadRadar();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  const CATEGORIES = [
    "ALL",
    "أدوية الغدة والهرمونات",
    "مضادات التجلط والسيولة",
    "أدوية السكر والتنحيف",
    "أمراض الصدر والحساسية",
    "أمراض المخ والأعصاب",
    "أمراض القلب والضغط",
  ];

  const filteredShortages = trackedShortages.filter((med) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      med.tradeNameAr.toLowerCase().includes(q) ||
      med.tradeNameEn.toLowerCase().includes(q) ||
      med.genericName.toLowerCase().includes(q);

    const matchesCategory =
      selectedCategory === "ALL" || med.category === selectedCategory;

    const matchesGov =
      selectedGovernorate === "ALL" ||
      med.inventory?.some((inv) => inv.pharmacy.governorate === selectedGovernorate);

    return matchesSearch && matchesCategory && matchesGov;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. TOP HERO BANNER */}
      <div className="relative overflow-hidden p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-[#0a1424] to-[#060b13] border-2 border-emerald-500/40 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold animate-pulse">
            <Radar size={15} className="animate-spin text-emerald-400" />
            <span>رادار النواقص الحي بمصر — رصد ومناقلة بين الصيدليات المعتمدة</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            رادار نواقص الأدوية <br />
            <span className="text-emerald-gradient">احجز علبتك قبل ما تلف المحافظات</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            أول شبكة رصد ومناقلة لحظية بين صيدليات مصر.. بنحدد مكان تواجد الأدوية الشحيحة (إلتروكسين، كلكسان،
            أوزمبيك، تيجريتول، بخاخات الصدر) وبدائلها المعتمدة من هيئة الدواء المصرية، وبنمكنك من حجزها فوري لمدة 3
            ساعات.
          </p>
        </div>

        {/* Live Radar Pulse Icon */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-48 h-48 rounded-full border-2 border-emerald-500/20">
          <div className="w-32 h-32 rounded-full border-2 border-emerald-500/40 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 animate-ping">
              <Radar size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. LIVE NATIONWIDE SHORTAGES TICKER */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-rose-400 font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <span>شريط نداءات الرادار الحية للمرضى بالمحافظات:</span>
          </div>
          <span className="text-[11px] text-slate-400">تحديث لحظي عبر الشبكة ⏱️</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none text-xs">
          {recentRequests.map((req, idx) => (
            <div
              key={idx}
              className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 shrink-0 flex items-center gap-2"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  req.status === "FOUND" || req.status === "RESERVED"
                    ? "bg-emerald-400"
                    : "bg-rose-400 animate-pulse"
                }`}
              />
              <span className="font-bold text-white">{req.medicineName}</span>
              <span className="text-slate-400 font-mono text-[11px]">
                ({req.customerCity} — {req.governorate})
              </span>
              {req.status === "FOUND" ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  تم الرصد والتوفير ✅
                </span>
              ) : req.status === "RESERVED" ? (
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                  محجوز لمريض 🔒
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                  جارٍ التتبع 📡
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. SEARCH & GOVERNORATE / CATEGORY CONTROLS */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم التجاري أو المادة الفعالة (إلتروكسين، كلكسان، أوزمبيك، تيجريتول)..."
              className="w-full pr-11 pl-4 py-3.5 rounded-2xl bg-[#0c1322] border-2 border-emerald-500/30 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition"
            />
          </div>

          <div>
            <select
              value={selectedGovernorate}
              onChange={(e) => setSelectedGovernorate(e.target.value)}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#0c1322] border-2 border-emerald-500/30 text-sm text-white focus:outline-none focus:border-emerald-400 transition font-bold cursor-pointer"
            >
              <option value="ALL">جميع المحافظات (القاهرة، الغربية، الدقهلية...)</option>
              <option value="القاهرة">القاهرة الكبرى (حدائق القبة / مدينة نصر)</option>
              <option value="الغربية">محافظة الغربية (طنطا / المحلة)</option>
              <option value="الدقهلية">محافظة الدقهلية (المنصورة)</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-slate-950 font-black shadow-md"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat === "ALL" ? "جميع النواقص المرصودة" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. TRACKED SHORTAGES GRID */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Flame className="text-rose-500" size={22} />
            <span>الأصناف الشحيحة بالسوق وأماكن توفرها بالصيدليات</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono font-bold">
            {filteredShortages.length} أصناف متتبعة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShortages.map((med) => {
            const pharmaciesInStock = med.inventory?.filter((inv) => inv.stockQuantity > 0) || [];
            const hasStock = pharmaciesInStock.length > 0;

            let alternativesList: string[] = [];
            try {
              if (med.alternatives) alternativesList = JSON.parse(med.alternatives);
            } catch {
              alternativesList = [];
            }

            return (
              <div
                key={med.id}
                className="glass-medical p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:border-emerald-400/60 transition shadow-xl relative"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-bold flex items-center gap-1">
                      <Flame size={12} className="text-rose-400" />
                      <span>صنف شحيح بالسوق</span>
                    </span>
                    <span className="font-mono font-black text-emerald-400 text-sm">
                      {med.officialPrice} ج.م
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-white">{med.tradeNameAr}</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{med.tradeNameEn}</p>
                  <p className="text-[11px] text-emerald-300 font-medium mt-1">
                    المادة الفعالة: <span className="font-bold">{med.genericName}</span> {med.strength}
                  </p>

                  {med.description && (
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed line-clamp-2">
                      {med.description}
                    </p>
                  )}

                  {/* EDA Scientific Alternatives */}
                  {alternativesList.length > 0 && (
                    <div className="mt-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] space-y-1">
                      <span className="text-slate-400 font-bold block flex items-center gap-1">
                        <Pill size={12} className="text-cyan-400" />
                        <span>البدائل والمثائل المعتمدة رسمياً:</span>
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {alternativesList.map((alt, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-[10px]"
                          >
                            {alt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stock Availability Box */}
                  <div className="mt-3 p-3 rounded-xl bg-[#080d18] border border-slate-800 text-xs space-y-2">
                    <div className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
                      <span>حالة الرصد الجغرافي:</span>
                      {hasStock ? (
                        <span className="text-emerald-400 flex items-center gap-1 font-bold">
                          <CheckCircle2 size={13} />
                          <span>متوفر الآن ({pharmaciesInStock.length} صيدليات)</span>
                        </span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1 font-bold">
                          <AlertTriangle size={13} />
                          <span>غير متوفر بالمحيط (جارٍ البحث)</span>
                        </span>
                      )}
                    </div>

                    {hasStock ? (
                      <div className="space-y-1.5 pt-1">
                        {pharmaciesInStock.map((inv) => (
                          <div
                            key={inv.pharmacy.id}
                            className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                          >
                            <div>
                              <div className="font-bold text-white flex items-center gap-1">
                                <Store size={12} className="text-emerald-400" />
                                <span>{inv.pharmacy.nameAr}</span>
                              </div>
                              <div className="text-slate-400 flex items-center gap-1 mt-0.5">
                                <MapPin size={11} className="text-emerald-400" />
                                <span>
                                  {inv.pharmacy.city} — {inv.pharmacy.governorate}
                                </span>
                              </div>
                            </div>
                            <span className="font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                              متبقي {inv.stockQuantity} علب
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[11px] text-slate-500">
                        لم يتم رصد مخزون في هذه المحافظة حالياً. يمكنك إطلاق نداء بالأسفل.
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2">
                  {hasStock ? (
                    <button
                      onClick={() =>
                        setReservingMed({
                          medName: med.tradeNameAr,
                          pharmacyName: pharmaciesInStock[0].pharmacy.nameAr,
                          pharmacyId: pharmaciesInStock[0].pharmacy.id,
                          price: med.officialPrice,
                          whatsapp: pharmaciesInStock[0].pharmacy.whatsapp,
                        })
                      }
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20 transition"
                    >
                      <Lock size={14} />
                      <span>حجز العلبة الآن في {pharmaciesInStock[0].pharmacy.nameAr} 🔒</span>
                    </button>
                  ) : (
                    <a
                      href="#broadcast"
                      className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition text-center"
                    >
                      <Send size={14} />
                      <span>إرسال نداء رادار عاجل لكافة الصيدليات</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. BROADCAST REQUEST FORM */}
      <section id="broadcast" className="glass-medical p-8 rounded-3xl space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-emerald-400 font-mono">BROADCAST TO ALL PHARMACIES</span>
          <h2 className="text-2xl font-black text-white mt-1">
            مش لاقي دواك؟ اطلب من الرادار يرسل لجميع صيدليات منطقتك 📡
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            اكتب اسم الدواء وسيقوم السيستم فوراً بإرسال تنبيه عاجل لكافة الصيادلة المشتركين في حيك
            ومحافظتك. أول صيدلية يتوفر عندها هتتواصل معاك فوراً لتوصيله لمنزلك.
          </p>
        </div>

        {submitSuccess ? (
          <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center space-y-2">
            <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
            <h3 className="font-bold text-white text-base">تم إرسال نداء الرادار لكافة الصيدليات بنجاح!</h3>
            <p className="text-xs text-slate-300">
              تم تعميم النداء على صيدليات {newGov} و {newCity}. سيصلك إشعار واتساب بمجرد رصد الصنف.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-2 text-xs font-bold text-emerald-400 underline"
            >
              إرسال طلب صنف آخر
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleBroadcastRequest}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs"
          >
            <div>
              <label className="block text-slate-300 font-bold mb-1">اسم الدواء الناقص *:</label>
              <input
                type="text"
                required
                value={newMedName}
                onChange={(e) => setNewMedName(e.target.value)}
                placeholder="مثال: كلكسان 40 أو إلتروكسين"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f1a] border border-slate-700 text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">اسمك الكريم:</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="مثال: أ/ محمد سمير"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f1a] border border-slate-700 text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">رقم الهاتف أو الواتساب *:</label>
              <input
                type="text"
                required
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="010xxxxxxxx"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f1a] border border-slate-700 text-white font-mono focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">المدينة / الحي:</label>
              <input
                type="text"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                placeholder="حدائق القبة / طنطا / مدينة نصر"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f1a] border border-slate-700 text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div className="sm:col-span-2 md:col-span-4 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition disabled:opacity-50"
              >
                <Radar size={18} />
                <span>{submitting ? "جاري تعميم النداء على الصيدليات..." : "إطلاق نداء الرادار لجميع الصيدليات 📡"}</span>
              </button>
            </div>
          </form>
        )}
      </section>

      {/* 6. RESERVATION CONFIRMATION MODAL */}
      {reservingMed && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b1322] border-2 border-emerald-500/40 rounded-3xl w-full max-w-md p-6 shadow-2xl relative animate-fadeIn text-right text-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">تأكيد حجز الدواء الناقص</h3>
                <p className="text-xs text-emerald-400 font-bold">مهلة حجز مؤكدة لمدة 3 ساعات</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#060a12] border border-slate-800 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">الصنف:</span>
                <span className="font-bold text-white">{reservingMed.medName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">الصيدلية المحتفظة:</span>
                <span className="font-bold text-emerald-400">{reservingMed.pharmacyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">السعر الجبري الرسمي:</span>
                <span className="font-bold text-white font-mono">{reservingMed.price} ج.م</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              سيتم قفل العلبة باسمك في سيستم الصيدلية فوراً حتى لا تباع لعميل آخر. يمكنك الاستلام من فرع الصيدلية أو
              طلب دليفري فوري عبر الواتساب.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setReservingMed(null)}
                className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
              >
                إلغاء
              </button>
              <a
                href={`https://wa.me/2${reservingMed.whatsapp}?text=${encodeURIComponent(
                  `أهلاً ${reservingMed.pharmacyName}، قمت بحجز علبة (${reservingMed.medName}) عبر رادار دواك، وأريد تأكيد استلامها / طلب دليفري للعنوان.`
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setReservingMed(null)}
                className="py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1"
              >
                <span>تأكيد الحجز بالواتساب</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
