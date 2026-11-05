"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Store,
  Building2,
  Users,
  Package,
  TrendingUp,
  Search,
  Filter,
  Plus,
  RefreshCw,
  ExternalLink,
  Phone,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Lock,
  LogOut,
  Sparkles,
  MapPin,
  Check,
  Clock,
  Eye,
  SlidersHorizontal,
} from "lucide-react";

interface Pharmacy {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  chainName?: string | null;
  branchName?: string | null;
  ownerName: string;
  phone: string;
  whatsapp: string;
  email?: string | null;
  address: string;
  city: string;
  governorate: string;
  isOpen: boolean;
  subscriptionPlan: string;
  subscriptionStatus: string;
  subscriptionStart: string;
  subscriptionEnd?: string | null;
  monthlyFee: number;
  branchesCount: number;
  isFounderPromo: boolean;
  _count?: {
    inventory: number;
    couriers: number;
    orders: number;
    prescriptions: number;
  };
}

interface PlatformStats {
  totalPharmacies: number;
  totalBranches: number;
  activePharmacies: number;
  founderPromoPharmacies: number;
  totalOrdersCount: number;
  totalRevenueGMV: number;
  totalMedicines: number;
  totalCustomers: number;
  totalPrescriptions: number;
  totalShortageRequests: number;
}

export default function SuperAdminPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [usernameInput, setUsernameInput] = useState<string>("owner");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  // Admin data
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("ALL");
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  // New Pharmacy Modal
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [addFormLoading, setAddFormLoading] = useState<boolean>(false);
  const [addFormData, setAddFormData] = useState({
    nameAr: "",
    nameEn: "",
    chainName: "",
    branchName: "الفرع الرئيسي",
    ownerName: "",
    phone: "",
    whatsapp: "",
    governorate: "القاهرة",
    city: "حدائق القبة",
    address: "",
    monthlyFee: 499,
    branchesCount: 1,
    isFounderPromo: true,
  });

  // Check persisted auth on mount
  useEffect(() => {
    const saved = localStorage.getItem("dawaak_admin_session");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAdminUser(parsed);
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem("dawaak_admin_session");
      }
    }
  }, []);

  // Fetch admin overview data
  const loadOverviewData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/overview");
      const data = await res.json();
      if (data.success) {
        setPharmacies(data.pharmacies || []);
        setStats(data.stats || null);
      }
    } catch (err) {
      console.error("Overview error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadOverviewData();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setAuthLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        }),
      });
      const data = await res.json();
      if (data.success && data.admin) {
        setAdminUser(data.admin);
        setIsAuthenticated(true);
        localStorage.setItem("dawaak_admin_session", JSON.stringify(data.admin));
      } else {
        setLoginError(data.error || "فشل تسجيل الدخول. تأكد من البيانات.");
      }
    } catch (err) {
      console.error(err);
      setLoginError("حدث خطأ في الاتصال بالخادم.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dawaak_admin_session");
    setIsAuthenticated(false);
    setAdminUser(null);
  };

  // Toggle pharmacy active/open status
  const handleToggleOpen = async (pharmacyId: string, currentStatus: boolean) => {
    try {
      setActionLoadingId(pharmacyId);
      const res = await fetch("/api/admin/overview", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pharmacyId, isOpen: !currentStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setPharmacies((prev) =>
          prev.map((p) => (p.id === pharmacyId ? { ...p, isOpen: !currentStatus } : p))
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoadingId(null);
    }
  };

  // Extend or update subscription
  const handleExtendFounderPromo = async (pharmacyId: string) => {
    try {
      setActionLoadingId(pharmacyId);
      const res = await fetch("/api/admin/overview", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pharmacyId,
          subscriptionEnd: "2026-12-31T23:59:59Z",
          isFounderPromo: true,
          subscriptionStatus: "ACTIVE",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setPharmacies((prev) =>
          prev.map((p) =>
            p.id === pharmacyId
              ? {
                  ...p,
                  isFounderPromo: true,
                  subscriptionStatus: "ACTIVE",
                  subscriptionEnd: "2026-12-31T23:59:59Z",
                }
              : p
          )
        );
        alert("تم تأكيد وتمديد باقة الانطلاق التأسيسي للصيدلية حتى 31/12/2026 بنجاح!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoadingId(null);
    }
  };

  // Handle Add Pharmacy Form Submit
  const handleAddPharmacy = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddFormLoading(true);
    try {
      const res = await fetch("/api/admin/overview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addFormData),
      });
      const data = await res.json();
      if (data.success && data.pharmacy) {
        alert("تم إضافة واعتماد الصيدلية الشريكة بنجاح!");
        setShowAddModal(false);
        loadOverviewData();
      } else {
        alert(data.error || "فشل إضافة الصيدلية");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الإضافة");
    } finally {
      setAddFormLoading(false);
    }
  };

  // Filtered pharmacies
  const filteredPharmacies = pharmacies.filter((p) => {
    const matchesQuery =
      p.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.governorate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.phone.includes(searchQuery) ||
      p.ownerName.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesQuery) return false;

    if (filterType === "FOUNDER") return p.isFounderPromo;
    if (filterType === "CHAINS") return (p.branchesCount || 1) > 1 || !!p.chainName;
    if (filterType === "ACTIVE") return p.isOpen;

    return true;
  });

  // -------------------------------------------------------------
  // VIEW 1: LOGIN GATE IF NOT AUTHENTICATED
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center space-y-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-white">بوابة المالك العام (Super Admin)</h1>
            <p className="text-xs text-slate-400">
              تسجيل دخول مالك منصة دواك لإدارة الصيدليات الشريكة والاشتراكات
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                اسم المستخدم أو البريد الإلكتروني:
              </label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition"
                placeholder="owner أو hamzaovet@gmail.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">كلمة المرور:</label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition"
                placeholder="••••••••"
              />
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-sm transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>{authLoading ? "جارٍ التحقق..." : "دخول لوحة تحكم المالك"}</span>
            </button>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-500">
                بيانات الدخول المعتمدة لمالك المنصة: username: <b>owner</b> (أو الإيميل الشخصي)
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED SUPER ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto space-y-8">
      {/* 1. TOP HEADER BAR */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400">لوحة تحكم مالك المنصة</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-slate-400">Dawaak Super Admin</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              أهلاً بك، {adminUser?.name || "حمزة عباس (المالك)"}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg transition"
          >
            <Plus className="w-4 h-4" />
            <span>إضافة صيدلية / فرع جديد</span>
          </button>

          <button
            onClick={loadOverviewData}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="تحديث البيانات"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>

          <button
            onClick={handleLogout}
            className="px-3.5 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-bold text-xs flex items-center gap-1.5 transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>خروج</span>
          </button>
        </div>
      </div>

      {/* 2. OVERVIEW KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>إجمالي الصيدليات الشريكة</span>
            <Store className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-white font-mono">
            {stats?.totalPharmacies || pharmacies.length}
          </div>
          <p className="text-[11px] text-emerald-400 font-bold">
            {stats?.founderPromoPharmacies || 0} صيدلية في عرض 2026 التأسيسي
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>إجمالي الفروع العاملة</span>
            <Building2 className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-black text-white font-mono">
            {stats?.totalBranches || pharmacies.length}
          </div>
          <p className="text-[11px] text-slate-400">تغطية جغرافية بالمحافظات</p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>طلبات المنصة المنفذة</span>
            <Package className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-black text-white font-mono">
            {stats?.totalOrdersCount || 0}
          </div>
          <p className="text-[11px] text-amber-400 font-bold">
            {stats?.totalRevenueGMV ? `${stats.totalRevenueGMV} ج.م حجم التداول` : "توصيل فوري"}
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>الكتالوج ورادار النواقص</span>
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-black text-white font-mono">
            {stats?.totalMedicines || 0}
          </div>
          <p className="text-[11px] text-slate-400">
            {stats?.totalShortageRequests || 0} طلب رادار نواقص
          </p>
        </div>
      </div>

      {/* 3. SUBSCRIPTION & PRICING POLICY CARD */}
      <div className="bg-gradient-to-r from-emerald-950/30 via-slate-900 to-teal-950/30 border border-emerald-500/40 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-black">
              سياسة التسعير المعتمدة
            </span>
            <span className="text-xs text-emerald-400 font-bold">
              عرض 2026 التأسيسي سارٍ حتى 31 ديسمبر 2026
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-white">
            الاشتراك الأساسي: 499 ج.م / فرع شهرياً (مع خصم 20% لـ 2-3 فروع و 40% لـ 4+ فروع)
          </h2>
          <p className="text-xs text-slate-300">
            كافة الصيدليات المسجلة حالياً معفاة 100% من رسوم الاشتراك والعمولات حتى نهاية عام 2026 تشجيعاً
            للانتشار وتكوين أكبر شبكة صيدليات في الجمهورية.
          </p>
        </div>

        <Link
          href="/pricing"
          target="_blank"
          className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 font-bold text-xs whitespace-nowrap transition flex items-center gap-1.5 shrink-0"
        >
          <span>معاينة صفحة الأسعار العامة</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4. PARTNER PHARMACIES MANAGEMENT SECTION */}
      <div className="glass-medical rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-white">إدارة الصيدليات الشريكة والفروع</h3>
            <p className="text-xs text-slate-400">
              متابعة مواعيد التجديد، حالة الاشتراكات، تفعيل/تعطيل الفروع
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="بحث بالاسم أو المدينة أو الهاتف..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-3 pr-9 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setFilterType("ALL")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  filterType === "ALL" ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white"
                }`}
              >
                الكل ({pharmacies.length})
              </button>
              <button
                onClick={() => setFilterType("FOUNDER")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  filterType === "FOUNDER" ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white"
                }`}
              >
                عرض 2026 ({pharmacies.filter((p) => p.isFounderPromo).length})
              </button>
              <button
                onClick={() => setFilterType("CHAINS")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  filterType === "CHAINS" ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white"
                }`}
              >
                سلاسل وفروع
              </button>
            </div>
          </div>
        </div>

        {/* Master Pharmacies Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-[#0a111e] text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-4 px-4">الصيدلية والفرع</th>
                <th className="py-4 px-4">الموقع والمحافظة</th>
                <th className="py-4 px-4">المدير المسؤول والتواصل</th>
                <th className="py-4 px-4">الباقة وموعد التجديد</th>
                <th className="py-4 px-4">التسعير والرسوم</th>
                <th className="py-4 px-4">الحالة والتشغيل</th>
                <th className="py-4 px-4 text-center">الإجراءات والروابط</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredPharmacies.map((p) => (
                <tr key={p.id} className="hover:bg-slate-800/30 transition">
                  {/* Name & Branch */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-white text-sm flex items-center gap-2">
                      <Store className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{p.nameAr}</span>
                      {p.slug === "dr-samir-hadayek-el-qobba" && (
                        <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-black">
                          صديق المنصة 🌟
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-emerald-400/90 font-mono block mt-0.5">
                      {p.branchName || "الفرع الرئيسي"} {p.chainName ? `• ${p.chainName}` : ""}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="py-4 px-4">
                    <div className="text-slate-200 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>
                        {p.city} — {p.governorate}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block line-clamp-1 mt-0.5">
                      {p.address}
                    </span>
                  </td>

                  {/* Contact */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-200">{p.ownerName}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5 flex items-center gap-2">
                      <span>{p.phone}</span>
                      {p.whatsapp && (
                        <a
                          href={`https://wa.me/2${p.whatsapp}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-400 hover:underline"
                        >
                          واتساب
                        </a>
                      )}
                    </div>
                  </td>

                  {/* Subscription */}
                  <td className="py-4 px-4">
                    {p.isFounderPromo ? (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold inline-flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        <span>مجاناً حتى 31/12/2026</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px]">
                        {p.subscriptionPlan}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-500 block mt-1">
                      الحالة: {p.subscriptionStatus === "ACTIVE" ? "نشط ومفعل" : p.subscriptionStatus}
                    </span>
                  </td>

                  {/* Pricing Fee */}
                  <td className="py-4 px-4">
                    <span className="font-mono font-bold text-white text-sm">
                      {p.monthlyFee || 499} ج.م
                    </span>
                    <span className="text-[10px] text-slate-500 block">شهرياً للفرع</span>
                  </td>

                  {/* Open / Active Status Toggle */}
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleToggleOpen(p.id, p.isOpen)}
                      disabled={actionLoadingId === p.id}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                        p.isOpen
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
                          : "bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          p.isOpen ? "bg-emerald-400" : "bg-rose-400"
                        }`}
                      />
                      <span>{p.isOpen ? "مفتوح ومتاح" : "مغلق مؤقتاً"}</span>
                    </button>
                  </td>

                  {/* Actions & Links */}
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        href={`/pharmacy/${p.slug}`}
                        target="_blank"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 transition"
                        title="معاينة صفحة المتجر"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/dashboard?slug=${p.slug}`}
                        target="_blank"
                        className="px-2.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-bold transition"
                        title="الدخول للوحة تحكم الصيدلية"
                      >
                        لوحة التحكم
                      </Link>

                      {!p.isFounderPromo && (
                        <button
                          onClick={() => handleExtendFounderPromo(p.id)}
                          disabled={actionLoadingId === p.id}
                          className="px-2.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition hover:bg-cyan-500/30"
                          title="تطبيق عرض 2026 التأسيسي"
                        >
                          تفعيل 2026
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. MODAL: ADD NEW PARTNER PHARMACY / BRANCH */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">إضافة صيدلية شريكة أو فرع جديد</h3>
                  <p className="text-xs text-slate-400">تجهيز حساب صيدلية معتمد وربطه بالمنظومة</p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddPharmacy} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    اسم الصيدلية (بالعربي) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: صيدلية د. سمير الجديدة"
                    value={addFormData.nameAr}
                    onChange={(e) => setAddFormData({ ...addFormData, nameAr: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    اسم الصيدلية (بالإنجليزي)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. Samir New Pharmacy"
                    value={addFormData.nameEn}
                    onChange={(e) => setAddFormData({ ...addFormData, nameEn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    اسم السلسلة (اختياري)
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: صيدليات د. سمير"
                    value={addFormData.chainName}
                    onChange={(e) => setAddFormData({ ...addFormData, chainName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">اسم الفرع</label>
                  <input
                    type="text"
                    placeholder="مثال: فرع سكة الوايلي - حدائق القبة"
                    value={addFormData.branchName}
                    onChange={(e) => setAddFormData({ ...addFormData, branchName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    اسم الصيدلي المدير المسؤول *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: د. سمير"
                    value={addFormData.ownerName}
                    onChange={(e) => setAddFormData({ ...addFormData, ownerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    هاتف الصيدلية / الأرضي *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: 0222584083"
                    value={addFormData.phone}
                    onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    رقم الواتساب للطلبات والتوصيل *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: 01289439659"
                    value={addFormData.whatsapp}
                    onChange={(e) => setAddFormData({ ...addFormData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">المحافظة *</label>
                  <select
                    value={addFormData.governorate}
                    onChange={(e) => setAddFormData({ ...addFormData, governorate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none cursor-pointer"
                  >
                    <option value="القاهرة">القاهرة</option>
                    <option value="الجيزة">الجيزة</option>
                    <option value="الغربية">الغربية</option>
                    <option value="الدقهلية">الدقهلية</option>
                    <option value="الإسكندرية">الإسكندرية</option>
                    <option value="الشرقية">الشرقية</option>
                    <option value="القليوبية">القليوبية</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    المدينة / الحي *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: حدائق القبة"
                    value={addFormData.city}
                    onChange={(e) => setAddFormData({ ...addFormData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    العنوان التفصيلي
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: 464 شارع سكة الوايلي — حدائق القبة"
                    value={addFormData.address}
                    onChange={(e) => setAddFormData({ ...addFormData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Founder Promo toggle */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">
                    تفعيل عرض الانطلاق التأسيسي 2026
                  </span>
                  <span className="text-[11px] text-emerald-400">
                    اشتراك مجاني 100% حتى 31 ديسمبر 2026 بدون أي عمولات
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={addFormData.isFounderPromo}
                  onChange={(e) =>
                    setAddFormData({ ...addFormData, isFounderPromo: e.target.checked })
                  }
                  className="w-5 h-5 rounded text-emerald-500 accent-emerald-500 cursor-pointer"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={addFormLoading}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition shadow-lg shadow-emerald-500/20"
                >
                  {addFormLoading ? "جارٍ الحفظ والاعتماد..." : "حفظ واعتماد الصيدلية"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
