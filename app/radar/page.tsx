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
  ChevronLeft,
  Flame,
} from "lucide-react";

interface TrackedShortage {
  id: string;
  tradeNameAr: string;
  tradeNameEn: string;
  genericName: string;
  officialPrice: number;
  category: string;
  inventory: {
    stockQuantity: number;
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
  foundPharmacyId?: string;
  createdAt: string;
}

export default function ShortageRadarPage() {
  const [trackedShortages, setTrackedShortages] = useState<TrackedShortage[]>([]);
  const [recentRequests, setRecentRequests] = useState<ShortageRequestItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("ALL");
  const [loading, setLoading] = useState(true);

  // New Request Form
  const [newMedName, setNewMedName] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCity, setNewCity] = useState("طنطا");
  const [newGov, setNewGov] = useState("الغربية");
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
  const [reservedSuccess, setReservedSuccess] = useState(false);

  useEffect(() => {
    loadRadar();
  }, []);

  async function loadRadar() {
    try {
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

  const filteredShortages = trackedShortages.filter((med) => {
    const matchesSearch =
      med.tradeNameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.tradeNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchQuery.toLowerCase());

    const hasCity =
      selectedGovernorate === "ALL"
        ? true
        : med.inventory?.some((inv) => inv.pharmacy.governorate === selectedGovernorate);

    return matchesSearch && hasCity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-[#0a1424] to-[#060b13] border-2 border-emerald-500/40 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold animate-radar">
            <Radar size={15} />
            <span>رادار النواقص الحي — تحديث لحظي على مدار الساعة</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            رادار نواقص الأدوية <br />
            <span className="text-emerald-gradient">احجز علبتك قبل ما تلف عليها</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            شبكة رصد مشتركة بين صيدليات مصر.. بنحدد مكان الأدوية الشحيحة (إلتروكسين، كلكسان، أوزمبيك، إنسولين) ونمكنك من حجزها فوري لمدة 3 ساعات قبل نفاد الكمية!
          </p>
        </div>

        {/* Decorative Signal Pulse */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-52 h-52 rounded-full border-2 border-emerald-500/20">
          <div className="w-36 h-36 rounded-full border-2 border-emerald-500/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 animate-ping">
              <Radar size={36} />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative">
          <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن الصنف الناقص (مثال: إلتروكسين 100 / كلكسان 40 / أوزمبيك)..."
            className="w-full pr-11 pl-4 py-3.5 rounded-2xl bg-[#0c1322] border-2 border-emerald-500/30 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition"
          />
        </div>

        <div>
          <select
            value={selectedGovernorate}
            onChange={(e) => setSelectedGovernorate(e.target.value)}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#0c1322] border-2 border-emerald-500/30 text-sm text-white focus:outline-none focus:border-emerald-400 transition font-bold"
          >
            <option value="ALL">جميع المحافظات (الغربية، القاهرة، الدقهلية...)</option>
            <option value="الغربية">محافظة الغربية (طنطا / المحلة)</option>
            <option value="القاهرة">القاهرة الكبرى</option>
            <option value="الدقهلية">محافظة الدقهلية (المنصورة)</option>
          </select>
        </div>
      </div>

      {/* Tracked Shortages Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Flame className="text-rose-500" size={22} />
            <span>الأصناف المرصودة حالياً والمتاحة للحجز الفوري</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            {filteredShortages.length} أصناف شحيحة متتبعة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShortages.map((med) => {
            const pharmaciesInStock = med.inventory?.filter((inv) => inv.stockQuantity > 0) || [];
            const hasStock = pharmaciesInStock.length > 0;

            return (
              <div
                key={med.id}
                className="glass-medical p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:border-emerald-400/60 transition shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-bold">
                      شحيح بالسوق 🔥
                    </span>
                    <span className="font-mono font-black text-emerald-400 text-sm">
                      {med.officialPrice} ج.م
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-white">{med.tradeNameAr}</h3>
                  <p className="text-xs text-slate-400 font-mono">{med.tradeNameEn}</p>
                  <p className="text-[11px] text-emerald-300/90 font-medium mt-1">
                    المادة: {med.genericName}
                  </p>

                  {/* Stock Availability Box */}
                  <div className="mt-4 p-3 rounded-xl bg-[#080d18] border border-slate-800 text-xs space-y-2">
                    <div className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
                      <span>حالة الرصد الجغرافي:</span>
                      {hasStock ? (
                        <span className="text-emerald-400 flex items-center gap-1 font-bold">
                          <CheckCircle2 size={13} />
                          <span>متوفر الآن!</span>
                        </span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1 font-bold">
                          <AlertTriangle size={13} />
                          <span>شحيح (جارٍ البحث)</span>
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
                              <div className="font-bold text-white">{inv.pharmacy.nameAr}</div>
                              <div className="text-slate-400 flex items-center gap-1 mt-0.5">
                                <MapPin size={11} className="text-emerald-400" />
                                <span>{inv.pharmacy.city}</span>
                              </div>
                            </div>
                            <span className="font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                              متبقي {inv.stockQuantity} فقط
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[11px] text-slate-500">
                        لم يتم رصد مخزون في محيط محافظتك حالياً. يمكنك تقديم طلب رصد أسفله.
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
                      <span>حجز العلبة الآن (مهلة 3 ساعات) 🔒</span>
                    </button>
                  ) : (
                    <a
                      href="#broadcast"
                      className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition text-center"
                    >
                      <Send size={14} />
                      <span>إرسال إشعار للصيدليات للبحث</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Broadcast Request Form (طلب رصد صنف غير متوفر) */}
      <section id="broadcast" className="glass-medical p-8 rounded-3xl space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-emerald-400 font-mono">BROADCAST TO PHARMACIES</span>
          <h2 className="text-2xl font-black text-white mt-1">
            مش لاقي دواك؟ اطلب من الرادار يرسل لكل صيدليات منطقتك 📡
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            اكتب اسم الدواء وسيقوم السيستم بإرسال تنبيه عاجل لجميع الصيادلة المشتركين في مدينتك. أول صيدلية يتوفر عندها هتتواصل معاك فوراً.
          </p>
        </div>

        {submitSuccess ? (
          <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center space-y-2">
            <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
            <h3 className="font-bold text-white text-base">تم إرسال نداء الرادار بنجاح!</h3>
            <p className="text-xs text-slate-300">
              تم تعميم الطلب على صيدليات {newGov} و {newCity}. سيصلك إشعار واتساب بمجرد استجابة الصيدلية.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-2 text-xs font-bold text-emerald-400 underline"
            >
              إرسال طلب صنف آخر
            </button>
          </div>
        ) : (
          <form onSubmit={handleBroadcastRequest} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-bold mb-1">اسم الدواء الناقص *:</label>
              <input
                type="text"
                required
                value={newMedName}
                onChange={(e) => setNewMedName(e.target.value)}
                placeholder="مثال: إلتروكسين 50 أو كلكسان"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f1a] border border-slate-700 text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">اسمك الكريم:</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="مثال: أ/ محمود فهمي"
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
              <label className="block text-slate-300 font-bold mb-1">المدينة / المحافظة:</label>
              <input
                type="text"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                placeholder="طنطا / القاهرة / المنصورة"
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

      {/* Reservation Confirmation Modal */}
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
                <span className="text-slate-400">السعر الجبري:</span>
                <span className="font-bold text-white font-mono">{reservingMed.price} ج.م</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              سيتم قفل العلبة باسمك في سيستم الصيدلية فوراً حتى لا تباع لعميل آخر. يمكنك الاستلام من فرع الصيدلية أو طلب دليفري فوري عبر الواتساب.
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
