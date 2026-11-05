"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Store,
  ShieldCheck,
  Lock,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Phone,
  CheckCircle2,
} from "lucide-react";

export default function UnifiedLoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"pharmacy" | "owner">("pharmacy");

  // Pharmacy login form state
  const [pharmacyUsername, setPharmacyUsername] = useState("samir");
  const [pharmacyPassword, setPharmacyPassword] = useState("");
  const [pharmacyLoading, setPharmacyLoading] = useState(false);
  const [pharmacyError, setPharmacyError] = useState("");

  // Owner login form state
  const [ownerUsername, setOwnerUsername] = useState("owner");
  const [ownerPassword, setOwnerPassword] = useState("");
  const [ownerLoading, setOwnerLoading] = useState(false);
  const [ownerError, setOwnerError] = useState("");

  // Handle Pharmacy Login
  const handlePharmacyLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPharmacyError("");
    setPharmacyLoading(true);

    try {
      const res = await fetch("/api/auth/pharmacy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: pharmacyUsername,
          password: pharmacyPassword,
        }),
      });

      const data = await res.json();
      if (data.success && data.staff) {
        localStorage.setItem(
          "dawaak_staff_session",
          JSON.stringify({
            staff: data.staff,
            pharmacy: data.pharmacy,
            branches: data.branches,
          })
        );
        router.push("/dashboard");
      } else {
        setPharmacyError(data.error || "بيانات الدخول غير صحيحة");
      }
    } catch (err) {
      console.error(err);
      setPharmacyError("حدث خطأ في الاتصال بالخادم");
    } finally {
      setPharmacyLoading(false);
    }
  };

  // Handle Owner Login
  const handleOwnerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setOwnerError("");
    setOwnerLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: ownerUsername,
          password: ownerPassword,
        }),
      });

      const data = await res.json();
      if (data.success && data.admin) {
        localStorage.setItem("dawaak_admin_session", JSON.stringify(data.admin));
        router.push("/admin");
      } else {
        setOwnerError(data.error || "بيانات دخول المالك غير صحيحة");
      }
    } catch (err) {
      console.error(err);
      setOwnerError("حدث خطأ في الاتصال بالخادم");
    } finally {
      setOwnerLoading(false);
    }
  };

  // Quick fill helper for testing
  const quickFillPharmacy = (u: string, p: string) => {
    setPharmacyUsername(u);
    setPharmacyPassword(p);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>SECURE ACCESS PORTAL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            بوابة تسجيل الدخول الآمنة
          </h1>
          <p className="text-xs text-slate-400">
            اختر نوع الحساب للدخول إلى لوحة التحكم الخاصة بك
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab("pharmacy")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
              activeTab === "pharmacy"
                ? "bg-emerald-500 text-slate-950 font-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Store className="w-4 h-4" />
            <span>بوابة الصيدليات الشريكة</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("owner")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
              activeTab === "owner"
                ? "bg-emerald-500 text-slate-950 font-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>بوابة مالك المنصة (Super Admin)</span>
          </button>
        </div>

        {/* TAB 1: PHARMACY STAFF LOGIN */}
        {activeTab === "pharmacy" && (
          <form onSubmit={handlePharmacyLogin} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-[11px] text-slate-400 block font-bold">
                حسابات تجريبية سريعة للاختبار:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => quickFillPharmacy("samir", "password123")}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-[11px] text-emerald-300 font-bold transition"
                >
                  صيدلية د. سمير (حدائق القبة)
                </button>
                <button
                  type="button"
                  onClick={() => quickFillPharmacy("ramon", "password123")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition"
                >
                  صيدلية د. رامون (طنطا)
                </button>
                <button
                  type="button"
                  onClick={() => quickFillPharmacy("amal_cairo", "password123")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition"
                >
                  صيدليات الأمل (مدينة نصر)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                اسم المستخدم (Username):
              </label>
              <input
                type="text"
                required
                value={pharmacyUsername}
                onChange={(e) => setPharmacyUsername(e.target.value)}
                placeholder="e.g. samir"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">كلمة المرور:</label>
              <input
                type="password"
                required
                value={pharmacyPassword}
                onChange={(e) => setPharmacyPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition"
              />
            </div>

            {pharmacyError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{pharmacyError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={pharmacyLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-sm transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              <Store className="w-4 h-4" />
              <span>{pharmacyLoading ? "جارٍ تسجيل الدخول..." : "دخول لوحة تحكم صيدليتي"}</span>
            </button>

            <div className="text-center pt-2">
              <span className="text-[11px] text-slate-400">
                صيدلية جديدة وتريد الانضمام؟{" "}
                <Link href="/pricing" className="text-emerald-400 hover:underline font-bold">
                  سجل مجاناً طوال عام 2026
                </Link>
              </span>
            </div>
          </form>
        )}

        {/* TAB 2: OWNER SUPER ADMIN LOGIN */}
        {activeTab === "owner" && (
          <form onSubmit={handleOwnerLogin} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-cyan-400 block">
                بوابة مالك المنصة (Hamza Abbas - Owner)
              </span>
              <p className="text-[11px] text-slate-400">
                لوحة التحكم الإشرافية العليا لإدارة كافة الصيدليات وتفعيل الفروع والاشتراكات.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                اسم المستخدم أو البريد الإلكتروني للمالك:
              </label>
              <input
                type="text"
                required
                value={ownerUsername}
                onChange={(e) => setOwnerUsername(e.target.value)}
                placeholder="owner أو hamzaovet@gmail.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                كلمة المرور السرية:
              </label>
              <input
                type="password"
                required
                value={ownerPassword}
                onChange={(e) => setOwnerPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition"
              />
            </div>

            {ownerError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{ownerError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={ownerLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-sm transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{ownerLoading ? "جارٍ التحقق..." : "دخول لوحة تحكم المالك العام"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
