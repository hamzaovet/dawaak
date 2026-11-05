"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Store,
  Bike,
  PackageCheck,
  Radar,
  Pill,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Truck,
  User,
  MapPin,
  TrendingUp,
  Search,
  Filter,
  RefreshCw,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Check,
  Lock,
  LogOut,
  Building2,
} from "lucide-react";

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: string;
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
  status: "PENDING" | "PREPARING" | "OUT_FOR_DELIVERY" | "DELIVERED" | "CANCELLED";
  createdAt: string;
  notes?: string | null;
  courier?: { name: string; phone: string } | null;
}

interface Courier {
  id: string;
  name: string;
  phone: string;
  vehicleType?: string | null;
  isAvailable: boolean;
  totalOrders: number;
}

interface ShortageItem {
  id: string;
  customerPhone: string;
  medicineNameQuery: string;
  city: string;
  status: string;
  urgentNote?: string | null;
  createdAt: string;
}

interface PharmacyOption {
  id: string;
  slug: string;
  nameAr: string;
  branchName?: string | null;
  city: string;
  isOpen: boolean;
}

export default function PharmacyDashboardPage() {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [staffUser, setStaffUser] = useState<any>(null);
  const [loginUsername, setLoginUsername] = useState<string>("samir");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  // Pharmacy & Dashboard Data
  const [pharmacies, setPharmacies] = useState<PharmacyOption[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string>("");
  const [selectedPharmacy, setSelectedPharmacy] = useState<any>(null);

  const [activeTab, setActiveTab] = useState<"orders" | "fleet" | "radar" | "inventory">("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [couriers, setCouriers] = useState<Courier[]>([]);
  const [shortages, setShortages] = useState<ShortageItem[]>([]);
  const [inventory, setInventory] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [inventorySearch, setInventorySearch] = useState("");

  // Check saved session on mount
  useEffect(() => {
    const session = localStorage.getItem("dawaak_staff_session");
    if (session) {
      try {
        const parsed = JSON.parse(session);
        setStaffUser(parsed.staff);
        setSelectedPharmacy(parsed.pharmacy);
        setPharmacies(parsed.branches || [parsed.pharmacy]);
        setSelectedSlug(parsed.pharmacy.slug);
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem("dawaak_staff_session");
      }
    }
  }, []);

  // Handle Staff Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const res = await fetch("/api/auth/pharmacy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });
      const data = await res.json();
      if (data.success && data.staff) {
        setStaffUser(data.staff);
        setSelectedPharmacy(data.pharmacy);
        setPharmacies(data.branches || [data.pharmacy]);
        setSelectedSlug(data.pharmacy.slug);
        setIsAuthenticated(true);
        localStorage.setItem("dawaak_staff_session", JSON.stringify(data));
      } else {
        setLoginError(data.error || "بيانات الدخول غير صحيحة");
      }
    } catch (err) {
      console.error(err);
      setLoginError("حدث خطأ في الاتصال بالخادم");
    } finally {
      setLoginLoading(false);
    }
  };

  // Quick fill demo helper
  const quickFill = (u: string, p: string) => {
    setLoginUsername(u);
    setLoginPassword(p);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("dawaak_staff_session");
    setIsAuthenticated(false);
    setStaffUser(null);
    setSelectedPharmacy(null);
    setOrders([]);
    setCouriers([]);
    setInventory([]);
  };

  // Load pharmacy data once authenticated and slug changes
  useEffect(() => {
    if (!isAuthenticated || !selectedSlug) {
      setLoading(false);
      return;
    }

    async function loadPharmacyData() {
      try {
        setLoading(true);
        // 1. Fetch selected pharmacy detail
        const resDetail = await fetch(`/api/pharmacies?slug=${encodeURIComponent(selectedSlug)}`);
        const dataDetail = await resDetail.json();
        if (dataDetail.success && dataDetail.pharmacy) {
          setSelectedPharmacy(dataDetail.pharmacy);
          setCouriers(dataDetail.pharmacy.couriers || []);
          setInventory(dataDetail.pharmacy.inventory || []);

          // 2. Fetch orders for this pharmacy
          const resO = await fetch(`/api/orders?pharmacyId=${dataDetail.pharmacy.id}`);
          const dataO = await resO.json();
          if (dataO.success) {
            setOrders(dataO.orders || []);
          }
        }

        // 3. Fetch shortages
        const resS = await fetch("/api/shortage");
        const dataS = await resS.json();
        if (dataS.success) {
          setShortages(dataS.requests || []);
        }
      } catch (err) {
        console.error("Dashboard init error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPharmacyData();
  }, [isAuthenticated, selectedSlug]);

  // Update order status
  const handleUpdateStatus = async (orderId: string, nextStatus: Order["status"], courierId?: string) => {
    try {
      setActionLoading(orderId);
      const res = await fetch("/api/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          status: nextStatus,
          courierId: courierId || null,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setOrders((prev) =>
          prev.map((o) => (o.id === orderId ? { ...o, status: nextStatus } : o))
        );
      } else {
        alert(data.error || "فشل تحديث حالة الطلب");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ في الاتصال بالخادم");
    } finally {
      setActionLoading(null);
    }
  };

  // Metrics
  const pendingOrders = orders.filter((o) => o.status === "PENDING" || o.status === "PREPARING");
  const deliveringOrders = orders.filter((o) => o.status === "OUT_FOR_DELIVERY");
  const deliveredOrders = orders.filter((o) => o.status === "DELIVERED");
  const totalRevenue = deliveredOrders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);

  // Filtered Orders
  const filteredOrders = orders.filter((o) => {
    if (filterStatus === "ALL") return true;
    return o.status === filterStatus;
  });

  // Filtered Inventory
  const filteredInventory = inventory.filter((inv) => {
    if (!inventorySearch) return true;
    const med = inv.medicine;
    return (
      med.tradeNameAr?.toLowerCase().includes(inventorySearch.toLowerCase()) ||
      med.tradeNameEn?.toLowerCase().includes(inventorySearch.toLowerCase()) ||
      (med.genericName && med.genericName.toLowerCase().includes(inventorySearch.toLowerCase()))
    );
  });

  // -------------------------------------------------------------
  // VIEW 1: LOGIN GATE IF NOT AUTHENTICATED
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <Store className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-white">بوابة دخول الصيدليات الشريكة</h1>
            <p className="text-xs text-slate-400">
              يرجى إدخال اسم المستخدم وكلمة المرور الخاصة بطاقم الصيدلية للوصول للطلبات والمخزون
            </p>
          </div>

          {/* Quick Demo Chips */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-[11px] text-slate-400 block font-bold">
              حسابات تجريبية سريعة:
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => quickFill("samir", "password123")}
                className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-[11px] text-emerald-300 font-bold transition"
              >
                صيدلية د. سمير (حدائق القبة)
              </button>
              <button
                type="button"
                onClick={() => quickFill("ramon", "password123")}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition"
              >
                صيدلية د. رامون (طنطا)
              </button>
              <button
                type="button"
                onClick={() => quickFill("amal_cairo", "password123")}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition"
              >
                صيدليات الأمل (مدينة نصر)
              </button>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                اسم المستخدم (Username):
              </label>
              <input
                type="text"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition"
                placeholder="e.g. samir"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">كلمة المرور:</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none transition"
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
              disabled={loginLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-sm transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>{loginLoading ? "جارٍ التحقق والدخول..." : "دخول لوحة تحكم الصيدلية"}</span>
            </button>

            <div className="pt-2 text-center border-t border-slate-800/80">
              <span className="text-[11px] text-slate-400">
                أنت مالك المنصة؟{" "}
                <Link href="/admin" className="text-cyan-400 hover:underline font-bold">
                  انتقل إلى بوابة المالك العام (Super Admin) 🛡️
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED PHARMACY DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto space-y-8">
      {/* Top Banner with Authenticated Pharmacy Info */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Store className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-400">
                مرحباً {staffUser?.name || "د. سمير"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-slate-400">
                {staffUser?.role === "manager" ? "المدير المسؤول" : "صيدلي معتمد"}
              </span>
            </div>
            <h1 className="text-xl md:text-3xl font-black text-white mt-1">
              {selectedPharmacy?.nameAr || "صيدلية د. سمير الجديدة"}
            </h1>
          </div>
        </div>

        {/* Branch Switcher (If chain has multiple branches) & Actions */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {pharmacies.length > 1 ? (
            <div className="relative">
              <label className="block text-[11px] text-slate-400 mb-1">فروع السلسلة:</label>
              <div className="relative">
                <select
                  value={selectedSlug}
                  onChange={(e) => setSelectedSlug(e.target.value)}
                  className="appearance-none bg-slate-950 border border-slate-700 hover:border-emerald-500/60 rounded-xl pl-8 pr-4 py-2 text-xs font-bold text-white focus:outline-none transition-colors cursor-pointer"
                >
                  {pharmacies.map((p) => (
                    <option key={p.id} value={p.slug} className="bg-slate-900 text-white">
                      {p.branchName || p.nameAr} ({p.city})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          ) : (
            <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{selectedPharmacy?.branchName || selectedPharmacy?.city || "الفرع الرئيسي"}</span>
            </div>
          )}

          <Link
            href={`/pharmacy/${selectedSlug}`}
            target="_blank"
            className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold px-3.5 py-2 rounded-xl text-xs transition-colors border border-slate-700"
          >
            <span>معاينة صفحة المتجر للجمهور</span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          </Link>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-bold px-3 py-2 rounded-xl text-xs transition-colors"
            title="تسجيل الخروج"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>خروج</span>
          </button>
        </div>
      </div>

      {/* Subscription & Branch Status Banner */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/40 rounded-3xl p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black">
                {selectedPharmacy?.isFounderPromo ? "عرض 2026 التأسيسي (مجاني 100%)" : "اشتراك نشط"}
              </span>
              <span className="text-xs text-slate-400">
                الفرع: {selectedPharmacy?.branchName || "الفرع الرئيسي"}
                {selectedPharmacy?.chainName ? ` • ${selectedPharmacy.chainName}` : ""}
              </span>
            </div>
            <h2 className="text-sm md:text-base font-bold text-white mt-1">
              {selectedPharmacy?.isFounderPromo
                ? "اشتراك صيدليتكم مجاني بالكامل حتى 31 ديسمبر 2026 (0 ج.م رسوم و 0% عمولة) 🎉"
                : `الاشتراك الشهري: ${selectedPharmacy?.monthlyFee || 499} ج.م`}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block">رسوم التجديد بعد 2026:</span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              {selectedPharmacy?.monthlyFee || 499} ج.م / فرع شهرياً
            </span>
          </div>
          <Link
            href="/pricing"
            target="_blank"
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition flex items-center gap-1"
          >
            <span>تفاصيل الباقات</span>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>إجمالي الطلبات</span>
            <PackageCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-white font-mono">
            {orders.length}
          </div>
          <p className="text-[11px] text-slate-500">منظومة البيع والتوصيل المباشر</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>قيد التجهيز الآن</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-amber-400 font-mono">
            {pendingOrders.length}
          </div>
          <p className="text-[11px] text-slate-500">طلبات تحتاج تحضير من الرف</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>مع الطيارين في الطريق</span>
            <Truck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-emerald-400 font-mono">
            {deliveringOrders.length}
          </div>
          <p className="text-[11px] text-slate-500">توصيل دليفري نشط بالخريطة</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>إجمالي المبيعات المحققة</span>
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-white font-mono">
            {totalRevenue} ج.م
          </div>
          <p className="text-[11px] text-emerald-400">عمولة المنصة: 0% مجاناً</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === "orders"
              ? "bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          <PackageCheck className="w-4 h-4" />
          <span>الطلبات الحية ودورة التوصيل ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("radar")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === "radar"
              ? "bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          <Radar className="w-4 h-4" />
          <span>رادار النواقص في منطقتك ({shortages.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("fleet")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === "fleet"
              ? "bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          <Bike className="w-4 h-4" />
          <span>أسطول الدليفري والطيارين ({couriers.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("inventory")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === "inventory"
              ? "bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          <Pill className="w-4 h-4" />
          <span>إدارة المخزون والأصناف ({inventory.length})</span>
        </button>
      </div>

      {/* TAB 1: LIVE ORDERS */}
      {activeTab === "orders" && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
              {["ALL", "PENDING", "PREPARING", "OUT_FOR_DELIVERY", "DELIVERED"].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    filterStatus === st
                      ? "bg-emerald-500 text-slate-950 font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {st === "ALL" && "كافة الحالات"}
                  {st === "PENDING" && "جديدة"}
                  {st === "PREPARING" && "قيد التحضير"}
                  {st === "OUT_FOR_DELIVERY" && "مع الطيار"}
                  {st === "DELIVERED" && "تم التسليم"}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-400">
              تحديث آلي مباشر كل 15 ثانية ⏱️
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredOrders.map((order) => {
              let parsedItems: any[] = [];
              try {
                parsedItems = JSON.parse(order.items);
              } catch {
                parsedItems = [];
              }

              return (
                <div
                  key={order.id}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 hover:border-slate-700 transition"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        #{order.orderNumber}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                        {new Date(order.createdAt).toLocaleTimeString("ar-EG", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div>
                      {order.status === "PENDING" && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          طلب جديد
                        </span>
                      )}
                      {order.status === "PREPARING" && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          قيد التجهيز
                        </span>
                      )}
                      {order.status === "OUT_FOR_DELIVERY" && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          مع الطيار
                        </span>
                      )}
                      {order.status === "DELIVERED" && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          تم التسليم
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        {order.customerName}
                      </span>
                      <a
                        href={`tel:${order.customerPhone}`}
                        className="text-cyan-400 font-mono hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        {order.customerPhone}
                      </a>
                    </div>
                    <div className="text-xs text-slate-400 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{order.customerAddress}</span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="bg-slate-950/60 rounded-2xl p-3 space-y-2 border border-slate-800/80">
                    <span className="text-[11px] font-bold text-slate-400 block">الأصناف المطلوبة:</span>
                    <div className="space-y-1">
                      {parsedItems.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs">
                          <span className="text-slate-200">
                            {item.name || item.tradeName} <b className="text-emerald-400 font-mono">×{item.qty || item.quantity}</b>
                          </span>
                          <span className="font-mono text-slate-300">
                            {item.total || (item.price || item.unitPrice) * (item.qty || item.quantity)} ج.م
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-400">الإجمالي (شامل التوصيل):</span>
                      <span className="text-emerald-400 font-mono text-sm">{order.totalAmount} ج.م</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {order.status === "PENDING" && (
                      <button
                        onClick={() => handleUpdateStatus(order.id, "PREPARING")}
                        disabled={actionLoading === order.id}
                        className="flex-1 py-2 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition"
                      >
                        بدء تجهيز الطلب
                      </button>
                    )}

                    {order.status === "PREPARING" && (
                      <button
                        onClick={() => handleUpdateStatus(order.id, "OUT_FOR_DELIVERY", couriers[0]?.id)}
                        disabled={actionLoading === order.id}
                        className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition"
                      >
                        تسليم للطيار ({couriers[0]?.name || "طيار الصيدلية"})
                      </button>
                    )}

                    {order.status === "OUT_FOR_DELIVERY" && (
                      <button
                        onClick={() => handleUpdateStatus(order.id, "DELIVERED")}
                        disabled={actionLoading === order.id}
                        className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
                      >
                        تأكيد تحصيل المبلغ والتسليم
                      </button>
                    )}

                    <a
                      href={`https://wa.me/2${order.customerPhone}?text=${encodeURIComponent(
                        `مرحباً ${order.customerName}، معكم صيدلية ${selectedPharmacy.nameAr} بشأن طلبكم رقم #${order.orderNumber}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 transition"
                      title="واتساب العميل"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredOrders.length === 0 && (
            <div className="p-10 text-center bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
              <PackageCheck className="w-10 h-10 text-slate-500 mx-auto" />
              <h4 className="font-bold text-white text-sm">لا توجد طلبات في هذا القسم حالياً</h4>
              <p className="text-xs text-slate-400">ستظهر الطلبات الجديدة هنا فور إرسالها من المرضى</p>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SHORTAGES RADAR */}
      {activeTab === "radar" && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Radar className="w-6 h-6 text-emerald-400 animate-spin" />
              <div>
                <h4 className="text-sm font-bold text-white">رادار النواقص الحصري لمنطقتك</h4>
                <p className="text-xs text-slate-400">
                  مرضى يبحثون عن أدوية ناقصة في محيط صيدليتك ({selectedPharmacy.city})
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shortages.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-full">
                      صنف شحيح مطلوب
                    </span>
                    <h5 className="font-bold text-white text-base mt-1">
                      {item.medicineNameQuery}
                    </h5>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {new Date(item.createdAt).toLocaleDateString("ar-EG")}
                  </span>
                </div>

                <div className="text-xs text-slate-300">
                  <span className="text-slate-400">المنطقة:</span> {item.city}
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                  <a
                    href={`https://wa.me/2${item.customerPhone}?text=${encodeURIComponent(
                      `مرحباً، بخصوص طلبكم لدواء (${item.medicineNameQuery}) عبر رادار دواك، نود إبلاغكم بتوفره لدينا في ${selectedPharmacy.nameAr}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-1.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>تأكيد توفره وتوصيله للمريض</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: FLEET & COURIERS */}
      {activeTab === "fleet" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {couriers.map((c) => (
              <div
                key={c.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Bike className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{c.name}</h5>
                    <span className="text-xs text-slate-400 font-mono">{c.phone}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-800">
                  <span className="text-slate-400">الطلبات المسلمة:</span>
                  <span className="font-bold text-emerald-400 font-mono">{c.totalOrders} طلب</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">الحالة:</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    متاح للتوصيل الفوري
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: INVENTORY */}
      {activeTab === "inventory" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="بحث في المخزون بالاسم التجاري أو المادة الفعالة..."
                value={inventorySearch}
                onChange={(e) => setInventorySearch(e.target.value)}
                className="w-full pl-3 pr-9 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-2xl">
            <table className="w-full text-right text-xs">
              <thead className="bg-[#0a111e] text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">اسم الدواء</th>
                  <th className="py-3 px-4">المادة الفعالة</th>
                  <th className="py-3 px-4">التسعيرة الجبرية</th>
                  <th className="py-3 px-4">الكمية بالمخزن</th>
                  <th className="py-3 px-4">حالة التوفر</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredInventory.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-800/30 transition">
                    <td className="py-3 px-4">
                      <span className="font-bold text-white block">{inv.medicine.tradeNameAr}</span>
                      <span className="text-[11px] text-slate-400 font-mono">{inv.medicine.tradeNameEn}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{inv.medicine.genericName}</td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-400">
                      {inv.price || inv.medicine.officialPrice} ج.م
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-white">
                      {inv.stockQuantity} علبة
                    </td>
                    <td className="py-3 px-4">
                      {inv.isAvailable && inv.stockQuantity > 0 ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                          جاهز للبيع
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                          غير متوفر
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
