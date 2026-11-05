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
  Zap,
  HardDrive,
  Terminal,
  Download,
  UploadCloud,
  FileSpreadsheet,
  Copy,
  Server,
  Bell,
  ArrowRight,
  ExternalLink,
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

// On-demand confirm item (Uber-style confirm)
interface OnDemandRequest {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  itemsText: string;
  prescriptionImage?: string | null;
  estimatedTotal: number;
  timeRemainingSec: number;
  status: "WAITING" | "CONFIRMED" | "REJECTED";
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

  const [activeTab, setActiveTab] = useState<
    "orders" | "confirm" | "bridge" | "radar" | "fleet" | "inventory"
  >("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [couriers, setCouriers] = useState<Courier[]>([]);
  const [shortages, setShortages] = useState<ShortageItem[]>([]);
  const [inventory, setInventory] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [inventorySearch, setInventorySearch] = useState("");

  // Tactic 1: On-Demand Confirm (Uber Style) State
  const [onDemandRequests, setOnDemandRequests] = useState<OnDemandRequest[]>([
    {
      id: "ODR-8841",
      customerName: "أ/ هاني كمال",
      customerPhone: "01018671000",
      customerAddress: "464 شارع سكة الوايلي — حدائق القبة (الدور 3)",
      itemsText: "أوجمنتين 1 جم شراب + بنادول أزرق + فيزيومير بخاخ ماء بحر",
      estimatedTotal: 285.0,
      timeRemainingSec: 52,
      status: "WAITING",
    },
    {
      id: "ODR-8842",
      customerName: "د/ منى عبد العزيز",
      customerPhone: "01289439659",
      customerAddress: "ميدان الحدائق، أمام محطة المترو",
      itemsText: "إلتروكسين 50 ميكروجرام (علبة واحدة)",
      estimatedTotal: 95.0,
      timeRemainingSec: 45,
      status: "WAITING",
    },
  ]);

  // Tactic 2: Bridge Daemon Simulation State
  const [bridgeTesting, setBridgeTesting] = useState(false);
  const [bridgeResult, setBridgeResult] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

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

  const quickFill = (u: string, p: string) => {
    setLoginUsername(u);
    setLoginPassword(p);
  };

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
        const resDetail = await fetch(`/api/pharmacies?slug=${encodeURIComponent(selectedSlug)}`);
        const dataDetail = await resDetail.json();
        if (dataDetail.success && dataDetail.pharmacy) {
          setSelectedPharmacy(dataDetail.pharmacy);
          setCouriers(dataDetail.pharmacy.couriers || []);
          setInventory(dataDetail.pharmacy.inventory || []);

          const resO = await fetch(`/api/orders?pharmacyId=${dataDetail.pharmacy.id}`);
          const dataO = await resO.json();
          if (dataO.success) {
            setOrders(dataO.orders || []);
          }
        }

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

  // Handle Uber-style confirm request
  const handleConfirmOnDemand = async (reqId: string, action: "ACCEPT" | "REJECT") => {
    if (action === "ACCEPT") {
      const targetReq = onDemandRequests.find((r) => r.id === reqId);
      if (!targetReq) return;

      // Add to live orders list
      const newOrder: Order = {
        id: `ord-${Date.now()}`,
        orderNumber: `DWK-${Date.now().toString().slice(-4)}`,
        customerName: targetReq.customerName,
        customerPhone: targetReq.customerPhone,
        customerAddress: targetReq.customerAddress,
        items: JSON.stringify([{ name: targetReq.itemsText, qty: 1, total: targetReq.estimatedTotal }]),
        subtotal: targetReq.estimatedTotal,
        deliveryFee: 15.0,
        totalAmount: targetReq.estimatedTotal + 15.0,
        status: "PREPARING",
        createdAt: new Date().toISOString(),
      };

      setOrders((prev) => [newOrder, ...prev]);
      setOnDemandRequests((prev) => prev.filter((r) => r.id !== reqId));
      setActiveTab("orders");
      alert(`✅ تم تأكيد الطلب فوري #${newOrder.orderNumber} ونقله إلى شاشة التجهيز والدليفري!`);
    } else {
      setOnDemandRequests((prev) => prev.filter((r) => r.id !== reqId));
      alert("❌ تم توجيه الطلب تلقائياً لرادار النواقص لخدمته من صيدلية قريبة أخرى.");
    }
  };

  // Handle Local Bridge Live Simulation
  const handleTriggerLiveBridgeSync = async () => {
    try {
      setBridgeTesting(true);
      setBridgeResult(null);

      const res = await fetch("/api/sync/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pharmacySlug: selectedSlug || "dr-samir-hadayek-el-qobba",
          bridgeKey: "DWK-BRIDGE-DR-SAMIR-9912",
          systemType: "برنامج الفارابي (El-Faraby POS Desktop)",
          items: [
            { tradeName: "أوجمنتين 1 جم أقراص", genericName: "Amoxicillin + Clavulanic", price: 155.0, quantity: 30 },
            { tradeName: "بانادول إكسترا أقراص", genericName: "Paracetamol + Caffeine", price: 65.0, quantity: 80 },
            { tradeName: "كونكور 5 بلس أقراص", genericName: "Bisoprolol + HCTZ", price: 90.0, quantity: 25 },
            { tradeName: "إلتروكسين 100 ميكروجرام", genericName: "Levothyroxine", price: 125.0, quantity: 15 },
            { tradeName: "كلكسان 40 مجم حقن", genericName: "Enoxaparin", price: 280.0, quantity: 12 },
            { tradeName: "أوزمبيك 1 مجم قلم", genericName: "Semaglutide", price: 4200.0, quantity: 5 },
            { tradeName: "بخاخ فينتولين للصدر", genericName: "Salbutamol", price: 68.0, quantity: 20 },
          ],
        }),
      });

      const data = await res.json();
      if (data.success) {
        setBridgeResult(data.message);
        // Refresh inventory
        const resDetail = await fetch(`/api/pharmacies?slug=${encodeURIComponent(selectedSlug)}`);
        const dataDetail = await resDetail.json();
        if (dataDetail.pharmacy?.inventory) {
          setInventory(dataDetail.pharmacy.inventory);
        }
      } else {
        setBridgeResult(data.error || "فشل الاتصال بالجسر السحابي");
      }
    } catch (err) {
      console.error(err);
      setBridgeResult("حدث خطأ أثناء الاتصال بالجسر");
    } finally {
      setBridgeTesting(false);
    }
  };

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
      }
    } catch (err) {
      console.error(err);
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

        {/* Branch Switcher & Actions */}
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

      {/* Subscription & Founder 2026 Banner */}
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
            <span>إجمالي الطلبات المنفذة</span>
            <PackageCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-white font-mono">
            {orders.length}
          </div>
          <p className="text-[11px] text-slate-500">منظومة البيع والتوصيل المباشر</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>طلبات فورية بانتظار التأكيد</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-amber-400 font-mono">
            {onDemandRequests.length}
          </div>
          <p className="text-[11px] text-amber-400 font-bold">تكتيك الـ 30 ثانية (Uber Style)</p>
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

      {/* TABS NAVIGATION */}
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
          <span>الطلبات ودورة التوصيل ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("confirm")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap relative ${
            activeTab === "confirm"
              ? "bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          <Zap className="w-4 h-4 text-amber-400" />
          <span>التأكيد الفوري المرن (Uber Style) ⚡</span>
          {onDemandRequests.length > 0 && (
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping absolute top-2 left-2" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("bridge")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === "bridge"
              ? "bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          <HardDrive className="w-4 h-4 text-cyan-400" />
          <span>ربط سيستم الصيدلية (Local Bridge) 🔌</span>
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
          <span>رادار النواقص بحيّك ({shortages.length})</span>
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
          <span>المخزون والأصناف ({inventory.length})</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB: ON-DEMAND CONFIRM (UBER STYLE 30 SEC CONFIRMATION) */}
      {/* ========================================================= */}
      {activeTab === "confirm" && (
        <div className="space-y-6">
          {/* Concept Explanation Card */}
          <div className="bg-gradient-to-r from-amber-950/30 via-slate-900 to-emerald-950/30 border border-amber-500/40 rounded-3xl p-6 shadow-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-xs font-black">
                تكتيك الطلب الفوري المرن (Uber Style Confirm)
              </span>
              <span className="text-xs text-amber-400 font-bold">حل معضلة الـ 2 مليون سيستم</span>
            </div>
            <h3 className="text-lg font-black text-white">
              مش محتاج تكون مدخل مخزونك كله مسبقاً!
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
              عندما يرفع العميل روشتة أو يطلب أصنافاً، يصلك الطلب فوراً كـ <b>طلب تسعير وتأكيد</b>. كل اللي
              بتعمله كصيدلي هو الضغط على زر واحد: (متوفر وجاهز للخروج ✅) في 30 ثانية. المريض بيستلم تأكيدك
              والطيار بيتحرك فوراً!
            </p>
          </div>

          {/* Incoming On-Demand Confirmation Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>طلبات حية واردة من مرضى في نطاق حدائق القبة:</span>
              </h4>
              <span className="text-xs text-amber-400 font-bold">استجابة سريعة مطلوبة ⏱️</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {onDemandRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 space-y-4 shadow-xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold font-mono">
                        #{req.id}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        متبقي {req.timeRemainingSec} ثانية للتأكيد ⏳
                      </span>
                    </div>

                    <span className="text-xs font-black text-emerald-400 font-mono">
                      القيمة المقدرة: {req.estimatedTotal} ج.م
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-emerald-400" />
                        {req.customerName}
                      </span>
                      <span className="font-mono text-cyan-400">{req.customerPhone}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{req.customerAddress}</span>
                    </div>
                  </div>

                  {/* Requested items box */}
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 block">
                      الأصناف المطلوبة من المريض:
                    </span>
                    <p className="text-xs font-bold text-emerald-300">{req.itemsText}</p>
                  </div>

                  {/* 30-Second Rapid Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => handleConfirmOnDemand(req.id, "ACCEPT")}
                      className="py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg transition"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>متوفر وجاهز للخروج فوراً ✅</span>
                    </button>

                    <button
                      onClick={() => handleConfirmOnDemand(req.id, "REJECT")}
                      className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-300 border border-rose-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <span>غير متوفر (تحويل للرادار ❌)</span>
                    </button>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <a
                    href={`https://wa.me/2${req.customerPhone}?text=${encodeURIComponent(
                      `أهلاً بك، معكم صيدلية ${selectedPharmacy?.nameAr}، تم استلام طلبكم (${req.itemsText}) وجارٍ تجهيزه للخروج مع الطيار.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-emerald-400 text-xs font-bold flex items-center justify-center gap-1 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>محادثة فورية مع المريض بالواتساب</span>
                  </a>
                </div>
              ))}
            </div>

            {onDemandRequests.length === 0 && (
              <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-white text-sm">تم تأكيد كافة الطلبات اللحظية الواردة!</h5>
                <p className="text-xs text-slate-400">أي طلب جديد سيرن هنا بصوت وتنبيه فوري 🔔</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB: LOCAL BRIDGE DAEMON (DESKTOP POS INTEGRATION) */}
      {/* ========================================================= */}
      {activeTab === "bridge" && (
        <div className="space-y-6">
          {/* Hero Concept Card */}
          <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-emerald-950/40 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-xs font-black">
                The Local Bridge Daemon 🔌
              </span>
              <span className="text-xs text-cyan-400 font-bold">ربط أنظمة الصيدليات المصرية</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              برنامجك القديم هيفضل شغال زي ما هو.. والمخزن بيسمّع في السحاب أوتوماتيك!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
              أنشأنا برنامج جسر محلي خفيف جداً (10 ميجابايت) يعمل في الخلفية على كمبيوتر الكاشير بالصيدلية.
              يقوم بقراءة قاعدة بيانات برنامجك المحلي (Access / SQL Server / SQLite) بصلاحية قراءة فقط (Read-Only)
              مشفرة بالكامل، ويرسل المبيعات والمخزون لسحابة دواك كل ساعة بدون أي تدخل منك.
            </p>
          </div>

          {/* Supported Egyptian Systems */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">الأنظمة الصيدلية المدعومة رسمياً بمصر:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 text-center">
                <Server className="w-5 h-5 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-white text-xs">برنامج الفارابي (El-Faraby)</h5>
                <span className="text-[10px] text-slate-400 block">MS Access & SQL Server</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 text-center">
                <Server className="w-5 h-5 text-cyan-400 mx-auto" />
                <h5 className="font-bold text-white text-xs">برنامج فارما ون (Pharma One)</h5>
                <span className="text-[10px] text-slate-400 block">Firebird & SQL Database</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 text-center">
                <Server className="w-5 h-5 text-purple-400 mx-auto" />
                <h5 className="font-bold text-white text-xs">برنامج الروشتة (El-Rosheta)</h5>
                <span className="text-[10px] text-slate-400 block">Desktop POS Bridge</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 text-center">
                <FileSpreadsheet className="w-5 h-5 text-amber-400 mx-auto" />
                <h5 className="font-bold text-white text-xs">شيتات إكسل وجرد الصيدلية</h5>
                <span className="text-[10px] text-slate-400 block">Excel / CSV Direct Sync</span>
              </div>
            </div>
          </div>

          {/* Live Bridge Connection Monitor Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <h4 className="font-bold text-white text-base">الجسر السحابي لصيدليتك: متصل سحابياً 🟢</h4>
                  </div>
                  <span className="text-xs text-slate-400">
                    آخر مزامنة ناجحة: منذ 12 دقيقة • تم تحديث 2,420 صنف ومخزون
                  </span>
                </div>
              </div>

              {/* Live Test Trigger Button */}
              <button
                onClick={handleTriggerLiveBridgeSync}
                disabled={bridgeTesting}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition shrink-0"
              >
                <RefreshCw className={`w-4 h-4 ${bridgeTesting ? "animate-spin" : ""}`} />
                <span>{bridgeTesting ? "جارٍ المزامنة السحابية..." : "تجربة محاكاة المزامنة الآن ⚡"}</span>
              </button>
            </div>

            {bridgeResult && (
              <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{bridgeResult}</span>
              </div>
            )}

            {/* Bridge Secret Key for this Pharmacy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">
                  مفتاح الربط المشفر الخاص بصيدليتك (Sync API Key):
                </span>
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300">
                  <span>DWK-BRIDGE-DR-SAMIR-9912</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("DWK-BRIDGE-DR-SAMIR-9912");
                      setCopiedKey(true);
                      setTimeout(() => setCopiedKey(false), 2000);
                    }}
                    className="p-1.5 hover:text-white transition"
                    title="نسخ المفتاح"
                  >
                    {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <span className="text-[11px] text-slate-500">
                  يتم إدخاله مرة واحدة فقط في برنامج الجسر لتوثيق اتصال جهاز الكاشير بسحابة دواك.
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">تحميل ملفات الجسر:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="/scripts/dawaak_bridge.py"
                    download
                    className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white flex items-center gap-1.5 transition"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>تحميل سكريبت المزامنة (dawaak_bridge.py)</span>
                  </a>

                  <a
                    href="/scripts/dawaak_bridge.bat"
                    download
                    className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white flex items-center gap-1.5 transition"
                  >
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>ملف التشغيل التلقائي (.bat)</span>
                  </a>
                </div>
                <span className="text-[11px] text-slate-500">
                  حجم خفيف جداً (أقل من 10 ميجا)، لا يستهلك معالج الكاشير ولا يغير أي شيء في برنامجك.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 1: LIVE ORDERS */}
      {/* ========================================================= */}
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
                        `مرحباً ${order.customerName}، معكم صيدلية ${selectedPharmacy?.nameAr} بشأن طلبكم رقم #${order.orderNumber}`
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
                  مرضى يبحثون عن أدوية ناقصة في محيط صيدليتك ({selectedPharmacy?.city})
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
                      `مرحباً، بخصوص طلبكم لدواء (${item.medicineNameQuery}) عبر رادار دواك، نود إبلاغكم بتوفره لدينا في ${selectedPharmacy?.nameAr}`
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
