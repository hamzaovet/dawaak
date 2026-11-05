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
  city: string;
  isOpen: boolean;
}

export default function PharmacyDashboardPage() {
  const [pharmacies, setPharmacies] = useState<PharmacyOption[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string>("dr-ramon-tanta");
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

  // Load pharmacies and dashboard data
  useEffect(() => {
    async function initDashboard() {
      try {
        setLoading(true);
        // 1. Fetch all pharmacies
        const resP = await fetch("/api/pharmacies");
        const dataP = await resP.json();
        if (dataP.success && dataP.pharmacies?.length > 0) {
          setPharmacies(dataP.pharmacies);
        }

        // 2. Fetch selected pharmacy detail
        const resDetail = await fetch(`/api/pharmacies?slug=${selectedSlug}`);
        const dataDetail = await resDetail.json();
        if (dataDetail.success && dataDetail.pharmacy) {
          setSelectedPharmacy(dataDetail.pharmacy);
          setCouriers(dataDetail.pharmacy.couriers || []);
          setInventory(dataDetail.pharmacy.inventory || []);

          // Fetch orders for this pharmacy
          const resO = await fetch(`/api/orders?pharmacyId=${dataDetail.pharmacy.id}`);
          const dataO = await resO.json();
          if (dataO.success) {
            setOrders(dataO.orders || []);
          }
        }

        // 3. Fetch shortages in this city
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
    initDashboard();
  }, [selectedSlug]);

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
      med.tradeName.toLowerCase().includes(inventorySearch.toLowerCase()) ||
      (med.genericName && med.genericName.toLowerCase().includes(inventorySearch.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto space-y-8">
      {/* Top Banner with Pharmacy Switcher */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Store className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-400">لوحة تحكم الصيدلية الشريكة</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-slate-400">نظام الإدارة الفورية 2.0</span>
            </div>
            <h1 className="text-xl md:text-3xl font-black text-white mt-1">
              {selectedPharmacy?.nameAr || "صيدلية د. رامون التخصصية"}
            </h1>
          </div>
        </div>

        {/* Pharmacy Switcher Dropdown */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative">
            <label className="block text-[11px] text-slate-400 mb-1">الصيدلية النشطة:</label>
            <div className="relative">
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="appearance-none bg-slate-950 border border-slate-700 hover:border-emerald-500/60 rounded-xl pl-8 pr-4 py-2.5 text-xs font-bold text-white focus:outline-none transition-colors cursor-pointer"
              >
                {pharmacies.map((p) => (
                  <option key={p.id} value={p.slug} className="bg-slate-900 text-white">
                    {p.nameAr} ({p.city})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="pt-4 md:pt-0">
            <Link
              href={`/pharmacy/${selectedSlug}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors border border-slate-700 mt-4 md:mt-0"
            >
              <span>معاينة صفحة المتجر للجمهور</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>إجمالي الطلبات</span>
            <PackageCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-white">
            {orders.length}
          </div>
          <p className="text-[11px] text-slate-500">منظومة البيع والتوصيل المباشر</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>قيد التجهيز الآن</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-amber-400">
            {pendingOrders.length}
          </div>
          <p className="text-[11px] text-slate-500">طلبات تحتاج تحضير من الرف</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>مع الطيارين في الطريق</span>
            <Truck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-emerald-400">
            {deliveringOrders.length}
          </div>
          <p className="text-[11px] text-slate-500">توصيل دليفري نشط بالخريطة</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>إجمالي المبيعات المحققة</span>
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-white">
            {totalRevenue} <span className="text-sm font-normal text-slate-400">ج.م</span>
          </div>
          <p className="text-[11px] text-emerald-400 font-semibold">عمولة المنصة: 0% مجاناً</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-colors whitespace-nowrap ${
            activeTab === "orders"
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/40"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <PackageCheck className="w-4 h-4" />
          <span>الطلبات الحية ودورة التوصيل ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("fleet")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-colors whitespace-nowrap ${
            activeTab === "fleet"
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/40"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Bike className="w-4 h-4" />
          <span>أسطول الدليفري والطيارين ({couriers.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("radar")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-colors whitespace-nowrap ${
            activeTab === "radar"
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/40"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Radar className="w-4 h-4 text-cyan-400" />
          <span>رادار النواقص في منطقتك ({shortages.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("inventory")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-colors whitespace-nowrap ${
            activeTab === "inventory"
              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/40"
              : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          }`}
        >
          <Pill className="w-4 h-4" />
          <span>إدارة المخزون والأصناف ({inventory.length})</span>
        </button>
      </div>

      {/* Tab 1: Orders Tab */}
      {activeTab === "orders" && (
        <div className="space-y-4">
          {/* Status Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs text-slate-400 ml-2">تصفية حسب الحالة:</span>
            {["ALL", "PENDING", "PREPARING", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED"].map(
              (st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    filterStatus === st
                      ? "bg-slate-800 text-white border border-slate-700"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {st === "ALL" && "الكل"}
                  {st === "PENDING" && "طلب جديد"}
                  {st === "PREPARING" && "قيد التجهيز"}
                  {st === "OUT_FOR_DELIVERY" && "مع الطيار"}
                  {st === "DELIVERED" && "تم التسليم"}
                  {st === "CANCELLED" && "ملغي"}
                </button>
              )
            )}
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              let parsedItems: any[] = [];
              try {
                parsedItems = JSON.parse(order.items);
              } catch (e) {
                parsedItems = [{ tradeName: order.items, quantity: 1 }];
              }

              return (
                <div
                  key={order.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4 hover:border-slate-700 transition-all"
                >
                  {/* Order Card Top */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl text-sm">
                        {order.orderNumber}
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(order.createdAt).toLocaleTimeString("ar-EG", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {order.status === "PENDING" && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          طلب جديد معلق
                        </span>
                      )}
                      {order.status === "PREPARING" && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          جاري التجهيز بالصيدلية
                        </span>
                      )}
                      {order.status === "OUT_FOR_DELIVERY" && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center gap-1">
                          <Bike className="w-3.5 h-3.5" />
                          مع الطيار في الطريق
                        </span>
                      )}
                      {order.status === "DELIVERED" && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          تم التسليم والتحصيل
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Customer & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-5 space-y-1">
                      <div className="font-bold text-white flex items-center gap-2">
                        <User className="w-4 h-4 text-emerald-400" />
                        {order.customerName}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{order.customerAddress}</span>
                      </div>
                      {order.notes && (
                        <div className="text-xs text-amber-300/80 bg-amber-500/10 px-2.5 py-1 rounded-lg mt-1">
                          ملاحظة: {order.notes}
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-4 space-y-1 bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                      <div className="text-xs font-semibold text-slate-300">
                        الأصناف المطلوبة:
                      </div>
                      <div className="text-xs text-slate-400 space-y-0.5">
                        {parsedItems.map((it, i) => (
                          <div key={i} className="flex justify-between">
                            <span>
                              {it.tradeName || it.name} × {it.quantity || 1}
                            </span>
                            <span className="font-mono text-slate-300">
                              {it.total ? `${it.total} ج.م` : ""}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-1 border-t border-slate-800 flex justify-between text-xs font-bold text-emerald-400">
                        <span>المبلغ الإجمالي (شامل التوصيل):</span>
                        <span>{order.totalAmount} ج.م</span>
                      </div>
                    </div>

                    {/* Quick WhatsApp & Actions */}
                    <div className="md:col-span-3 flex flex-col gap-2">
                      <a
                        href={`https://wa.me/2${order.customerPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                          `السلام عليكم أ/ ${order.customerName}، معكم صيدلية ${selectedPharmacy?.nameAr || "دواك"} بخصوص طلبكم رقم ${order.orderNumber}`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 py-2 rounded-xl text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>محادثة العميل واتساب ({order.customerPhone})</span>
                      </a>

                      {/* Status Action Buttons */}
                      <div className="flex items-center gap-1.5">
                        {order.status === "PENDING" && (
                          <button
                            type="button"
                            onClick={() => handleUpdateStatus(order.id, "PREPARING")}
                            disabled={actionLoading === order.id}
                            className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 rounded-xl text-xs transition-colors"
                          >
                            بدء التجهيز
                          </button>
                        )}
                        {order.status === "PREPARING" && (
                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateStatus(
                                order.id,
                                "OUT_FOR_DELIVERY",
                                couriers[0]?.id
                              )
                            }
                            disabled={actionLoading === order.id}
                            className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 rounded-xl text-xs transition-colors"
                          >
                            إسناد للطيار
                          </button>
                        )}
                        {order.status === "OUT_FOR_DELIVERY" && (
                          <button
                            type="button"
                            onClick={() => handleUpdateStatus(order.id, "DELIVERED")}
                            disabled={actionLoading === order.id}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition-colors"
                          >
                            تم التسليم والتحصيل
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredOrders.length === 0 && (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center max-w-md mx-auto space-y-3">
                <PackageCheck className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-base font-bold text-white">لا توجد طلبات في هذا القسم</h4>
                <p className="text-xs text-slate-400">ستظهر الطلبات الجديدة هنا لحظياً بمجرد إرسالها</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Fleet Tab */}
      {activeTab === "fleet" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Bike className="w-5 h-5 text-emerald-400" />
                طيارو التوصيل المسجلون في الصيدلية
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                تتبع كباتن الدليفري وسرعة التسليم بدون وساطة
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {couriers.map((c) => (
              <div
                key={c.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                      <Bike className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{c.name}</h4>
                      <p className="text-xs text-slate-400">{c.phone}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      c.isAvailable
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {c.isAvailable ? "متاح للطلب" : "مشغول بتوصيل"}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>إجمالي الطلبات المنفذة:</span>
                  <span className="font-bold text-white">{c.totalOrders} أوردر</span>
                </div>

                <a
                  href={`tel:${c.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 py-2 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>اتصال بالكابتن</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Local Shortage Radar Alerts */}
      {activeTab === "radar" && (
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Radar className="w-5 h-5 text-cyan-400 animate-pulse" />
              طلبات النواقص المعلقة في منطقتك ({selectedPharmacy?.city || "طنطا"})
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              مرضى يبحثون عن أدوية غير متوفرة بالقرب منك — أكد توفر الصنف لتوجيه المريض لصيدليتك فوراً
            </p>
          </div>

          <div className="space-y-3">
            {shortages.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white">
                      {item.medicineNameQuery}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      مطلوب بشكل عاجل
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-3">
                    <span>المدينة: {item.city}</span>
                    <span>•</span>
                    <span>هاتف العميل: {item.customerPhone}</span>
                  </div>
                  {item.urgentNote && (
                    <p className="text-xs text-slate-300 bg-slate-950/60 p-2 rounded-lg mt-1 border border-slate-800/60">
                      &quot;{item.urgentNote}&quot;
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                  <a
                    href={`https://wa.me/2${item.customerPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `السلام عليكم، صيدلية ${selectedPharmacy?.nameAr} معكم. لاحظنا بحثكم عن دواء (${item.medicineNameQuery}) عبر شبكة رادار دواك، ونفيدكم بأنه متوفر لدينا الآن بالصيدلية ويمكن حجزه أو توصيله فوراً.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    <span>متوفر لدينا (إبلاغ المريض واتساب)</span>
                  </a>
                </div>
              </div>
            ))}

            {shortages.length === 0 && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-xs text-slate-400">
                لا توجد طلبات نواقص معلقة في نطاق مدينتك حالياً.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 4: Inventory Control */}
      {activeTab === "inventory" && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Pill className="w-5 h-5 text-emerald-400" />
                أصناف ومخزون صيدلية {selectedPharmacy?.nameAr}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                تحديث الكميات ومتابعة أسعار التسعيرة الجبرية المعتمدة من هيئة الدواء
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="ابحث بالاسم أو المادة الفعالة..."
                value={inventorySearch}
                onChange={(e) => setInventorySearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-9 pl-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60">
                    <th className="py-3 px-4 font-semibold">اسم الصنف التجاري</th>
                    <th className="py-3 px-4 font-semibold">المادة الفعالة (Generic)</th>
                    <th className="py-3 px-4 font-semibold text-center">الرصيد المتاح</th>
                    <th className="py-3 px-4 font-semibold text-center">السعر الرسمي (ج.م)</th>
                    <th className="py-3 px-4 font-semibold text-center">حالة النواقص</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredInventory.map((inv) => {
                    const med = inv.medicine;
                    return (
                      <tr key={inv.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-4 font-bold text-white">
                          {med.tradeName}
                        </td>
                        <td className="py-3 px-4 text-slate-400 font-mono">
                          {med.genericName || "—"}
                        </td>
                        <td className="py-3 px-4 text-center font-bold text-emerald-400 font-mono">
                          {inv.stockQuantity} علبة
                        </td>
                        <td className="py-3 px-4 text-center font-bold text-white font-mono">
                          {med.priceEgp} ج.م
                        </td>
                        <td className="py-3 px-4 text-center">
                          {med.isShortage ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              صنف نادر
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-400">
                              وفرة طبيعية
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
        </div>
      )}
    </div>
  );
}
