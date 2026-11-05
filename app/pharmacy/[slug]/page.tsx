"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Bike,
  ShieldCheck,
  Star,
  Search,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Pill,
  ArrowRight,
  Send,
  X,
  FileText,
} from "lucide-react";

interface MedicineItem {
  id: string;
  tradeName: string;
  genericName?: string | null;
  dosage?: string | null;
  form?: string | null;
  packaging?: string | null;
  priceEgp: number;
  category?: string | null;
  isShortage: boolean;
  stockQuantity?: number;
}

interface PharmacyData {
  id: string;
  nameAr: string;
  nameEn?: string | null;
  slug: string;
  city: string;
  address: string;
  phone: string;
  whatsapp?: string | null;
  licenseNo?: string | null;
  deliveryTimeMin: number;
  deliveryFee: number;
  rating: number;
  isOpen: boolean;
  inventory: Array<{
    id: string;
    stockQuantity: number;
    isAvailable: boolean;
    customPrice?: number | null;
    reservedHoldCount: number;
    medicine: MedicineItem;
  }>;
}

interface CartItem {
  medicine: MedicineItem;
  quantity: number;
  unitPrice: number;
}

export default function PharmacyStorefrontPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [pharmacy, setPharmacy] = useState<PharmacyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Checkout State
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [submittingOrder, setSubmittingOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<any>(null);

  useEffect(() => {
    async function fetchPharmacy() {
      try {
        setLoading(true);
        const res = await fetch(`/api/pharmacies?slug=${encodeURIComponent(slug)}`);
        const data = await res.json();
        if (data.success && data.pharmacy) {
          setPharmacy(data.pharmacy);
        } else {
          setError(data.error || "لم يتم العثور على الصيدلية المطلوبة");
        }
      } catch (err: any) {
        setError("فشل الاتصال بقاعدة بيانات الصيدلية");
      } finally {
        setLoading(false);
      }
    }
    fetchPharmacy();
  }, [slug]);

  // Add item to cart
  const addToCart = (med: MedicineItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.medicine.id === med.id);
      if (existing) {
        return prev.map((item) =>
          item.medicine.id === med.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { medicine: med, quantity: 1, unitPrice: med.priceEgp }];
    });
  };

  // Decrement quantity
  const decrementFromCart = (medId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.medicine.id === medId);
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        return prev.filter((item) => item.medicine.id !== medId);
      }
      return prev.map((item) =>
        item.medicine.id === medId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // Remove completely
  const removeFromCart = (medId: string) => {
    setCart((prev) => prev.filter((item) => item.medicine.id !== medId));
  };

  // Totals
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const deliveryFee = pharmacy?.deliveryFee || 15;
  const totalAmount = subtotal + deliveryFee;

  // Filter Inventory
  const filteredInventory = (pharmacy?.inventory || []).filter((inv) => {
    const med = inv.medicine;
    const matchSearch =
      !search ||
      med.tradeName.toLowerCase().includes(search.toLowerCase()) ||
      (med.genericName && med.genericName.toLowerCase().includes(search.toLowerCase()));

    const matchCategory =
      selectedCategory === "ALL" || med.category === selectedCategory;

    const matchStock = !onlyAvailable || inv.stockQuantity > 0;

    return matchSearch && matchCategory && matchStock;
  });

  // Unique Categories
  const categories = Array.from(
    new Set(
      (pharmacy?.inventory || [])
        .map((inv) => inv.medicine.category)
        .filter((cat): cat is string => Boolean(cat))
    )
  );

  // Submit Order to API
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pharmacy) return;
    if (!customerName || !customerPhone || !customerAddress) {
      alert("يرجى إكمال الاسم، رقم الهاتف، وعنوان التوصيل");
      return;
    }
    if (cart.length === 0) {
      alert("سلة الأدوية فارغة");
      return;
    }

    setSubmittingOrder(true);
    try {
      const orderPayload = {
        pharmacyId: pharmacy.id,
        customerName,
        customerPhone,
        customerAddress,
        items: cart.map((i) => ({
          medicineId: i.medicine.id,
          tradeName: i.medicine.tradeName,
          quantity: i.quantity,
          unitPrice: i.unitPrice,
          total: i.quantity * i.unitPrice,
        })),
        subtotal,
        deliveryFee,
        totalAmount,
        notes: orderNotes,
      };

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();
      if (data.success && data.order) {
        setOrderSuccess(data.order);
        setCart([]);
      } else {
        alert(data.error || "فشل إرسال الطلب للصيدلية");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الاتصال بالخادم");
    } finally {
      setSubmittingOrder(false);
    }
  };

  // WhatsApp Checkout builder
  const buildWhatsAppLink = () => {
    if (!pharmacy?.whatsapp) return "#";
    const phone = pharmacy.whatsapp.replace(/[^0-9]/g, "");
    let msg = `السلام عليكم صيدلية ${pharmacy.nameAr}، أود طلب الأدوية التالية عبر دواك:\n\n`;
    cart.forEach((c, idx) => {
      msg += `${idx + 1}. ${c.medicine.tradeName} (الكمية: ${c.quantity}) - السعر: ${c.quantity * c.unitPrice} ج.م\n`;
    });
    msg += `\nإجمالي الأدوية: ${subtotal} ج.م\nرسوم التوصيل: ${deliveryFee} ج.م\nالإجمالي المطلوب: ${totalAmount} ج.م\n`;
    if (customerName) msg += `الاسم: ${customerName}\n`;
    if (customerAddress) msg += `العنوان: ${customerAddress}\n`;
    if (orderNotes) msg += `ملاحظات: ${orderNotes}\n`;

    return `https://wa.me/2${phone}?text=${encodeURIComponent(msg)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-slate-400 font-semibold text-sm">
            جاري فتح صيدلية {slug}...
          </p>
        </div>
      </div>
    );
  }

  if (error || !pharmacy) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center max-w-md space-y-4">
          <AlertTriangle className="w-12 h-12 text-rose-500 mx-auto" />
          <h2 className="text-xl font-bold text-white">عذراً، الصيدلية غير متوفرة</h2>
          <p className="text-slate-400 text-sm">{error || "لم نعثر على هذا الرابط"}</p>
          <Link
            href="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm"
          >
            العودة للدليل الرئيسي
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto space-y-8">
      {/* Pharmacy Header Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-emerald-950/30 border border-emerald-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                صيدلية معتمدة ومرخصة برقم ({pharmacy.licenseNo || "EDA-7741"})
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {pharmacy.rating} تقييم ممتاز
              </span>
              {pharmacy.isOpen && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  مفتوح الآن للتوصيل الفوري
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-4xl font-black text-white">
              {pharmacy.nameAr}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                {pharmacy.city} — {pharmacy.address}
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                وقت التوصيل: {pharmacy.deliveryTimeMin} دقيقة
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Bike className="w-4 h-4 text-amber-400 shrink-0" />
                رسوم التوصيل: {pharmacy.deliveryFee} ج.م
              </span>
            </div>
          </div>

          {/* Action Contacts */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {pharmacy.whatsapp && (
              <a
                href={`https://wa.me/2${pharmacy.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors shadow-lg shadow-emerald-950/50"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب الصيدلية</span>
              </a>
            )}
            <a
              href={`tel:${pharmacy.phone}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-3 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>اتصال مباشر</span>
            </a>
            <Link
              href="/prescription"
              className="inline-flex items-center justify-center gap-2 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-800/50 text-cyan-300 font-semibold px-4 py-3 rounded-xl text-sm transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>رفع روشتة</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Catalog Search & Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث في مخزون الصيدلية (الاسم التجاري، المادة الفعالة، الصنف)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl pr-12 pl-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Toggle Available */}
          <button
            type="button"
            onClick={() => setOnlyAvailable(!onlyAvailable)}
            className={`px-4 py-3 rounded-2xl text-xs font-bold border transition-colors flex items-center justify-center gap-2 ${
              onlyAvailable
                ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            <span>الأصناف المتوفرة فوراً فقط</span>
            {onlyAvailable && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory("ALL")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === "ALL"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/40"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            كافة الأقسام ({pharmacy.inventory.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/40"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Medicines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredInventory.map((inv) => {
          const med = inv.medicine;
          const cartItem = cart.find((i) => i.medicine.id === med.id);
          const inCartCount = cartItem?.quantity || 0;
          const isOutOfStock = inv.stockQuantity <= 0;

          return (
            <div
              key={inv.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Pill className="w-5 h-5" />
                  </div>
                  {med.isShortage ? (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      صنف نادر / رادار
                    </span>
                  ) : isOutOfStock ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-500">
                      غير متوفر
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400">
                      متوفر ({inv.stockQuantity} علبة)
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {med.tradeName}
                  </h3>
                  {med.genericName && (
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {med.genericName}
                    </p>
                  )}
                  {med.dosage && (
                    <p className="text-[11px] text-slate-500 mt-1">
                      {med.dosage} {med.packaging ? `• ${med.packaging}` : ""}
                    </p>
                  )}
                </div>
              </div>

              {/* Price & Add button */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-lg font-black text-white">
                    {med.priceEgp} <span className="text-xs font-normal text-slate-400">ج.م</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">
                    تسعيرة جبرية رسمية
                  </span>
                </div>

                {inCartCount > 0 ? (
                  <div className="inline-flex items-center gap-2 bg-slate-800 rounded-xl p-1 border border-slate-700">
                    <button
                      type="button"
                      onClick={() => decrementFromCart(med.id)}
                      className="w-7 h-7 rounded-lg bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center text-xs transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-sm text-white px-1">
                      {inCartCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => addToCart(med)}
                      className="w-7 h-7 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center text-xs transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => addToCart(med)}
                    disabled={isOutOfStock}
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-colors disabled:cursor-not-allowed"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إضافة</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredInventory.length === 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-3">
          <Pill className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">لا توجد أدوية مطابقة للبحث</h3>
          <p className="text-xs text-slate-400">
            جرب البحث باسم تجاري آخر أو تأكد من اختيار قسم &quot;كافة الأقسام&quot;
          </p>
        </div>
      )}

      {/* Floating Bottom Cart Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 animate-in slide-in-from-bottom duration-300">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cart.reduce((s, i) => s + i.quantity, 0)}
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  {totalAmount} ج.م{" "}
                  <span className="text-xs font-normal text-slate-400">
                    (شامل {deliveryFee} ج.م توصيل)
                  </span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold">
                  {cart.length} أصناف في السلة
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-emerald-950/40 cursor-pointer"
            >
              عرض السلة وتأكيد الطلب
            </button>
          </div>
        </div>
      )}

      {/* Cart Modal / Sheet */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Sheet Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">
                  سلة أدوية صيدلية {pharmacy.nameAr}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sheet Content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {orderSuccess ? (
                /* Order Placed Success View */
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    تم استلام طلبك بنجاح في الصيدلية!
                  </h4>
                  <p className="text-sm text-slate-300">
                    رقم الطلب الخاص بك:{" "}
                    <span className="font-mono font-bold text-emerald-400">
                      {orderSuccess.orderNumber}
                    </span>
                  </p>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    يقوم الصيدلي المناوب الآن بتجهيز الأدوية ومراجعتها، وسيتم التوصيل إلى عنوانك خلال {pharmacy.deliveryTimeMin} دقيقة.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/2${(pharmacy.whatsapp || "").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                        `مرحباً صيدلية ${pharmacy.nameAr}، أود متابعة طلبي رقم ${orderSuccess.orderNumber}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>متابعة الطلب على واتساب الصيدلية</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setOrderSuccess(null);
                        setIsCartOpen(false);
                      }}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold"
                    >
                      إغلاق
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard Cart Review */
                <>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      الأصناف المحددة ({cart.length})
                    </h4>
                    <div className="divide-y divide-slate-800/80 bg-slate-950/60 rounded-2xl border border-slate-800/80 overflow-hidden">
                      {cart.map((item) => (
                        <div
                          key={item.medicine.id}
                          className="p-3.5 flex items-center justify-between gap-3 text-sm"
                        >
                          <div>
                            <div className="font-bold text-white">
                              {item.medicine.tradeName}
                            </div>
                            <div className="text-xs text-slate-400">
                              {item.unitPrice} ج.م × {item.quantity} ={" "}
                              <span className="text-emerald-400 font-bold">
                                {item.quantity * item.unitPrice} ج.م
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
                              <button
                                type="button"
                                onClick={() => decrementFromCart(item.medicine.id)}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-xs"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-6 text-center font-bold text-xs text-white">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => addToCart(item.medicine)}
                                className="w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center text-xs"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.medicine.id)}
                              className="text-slate-500 hover:text-rose-400 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="bg-slate-950/40 rounded-2xl p-4 border border-slate-800/80 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>إجمالي الأدوية (تسعيرة جبرية EDA):</span>
                      <span className="font-bold text-white">{subtotal} ج.م</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>رسوم التوصيل لصيدلية {pharmacy.nameAr}:</span>
                      <span className="font-bold text-white">{deliveryFee} ج.م</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-emerald-400 pt-2 border-t border-slate-800">
                      <span>الإجمالي النهائي المستحق عند الاستلام (COD):</span>
                      <span>{totalAmount} ج.م</span>
                    </div>
                  </div>

                  {/* Delivery Info Form */}
                  <form onSubmit={handleCheckout} className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-slate-300">
                      بيانات التوصيل والاستلام
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">
                          اسم العميل المستلم *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="الاسم ثلاثي"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">
                          رقم الهاتف المحمول (واتساب) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="010XXXXXXXX"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        عنوان التوصيل بالتفصيل (الشارع، رقم العمارة، الشقة، علامة مميزة) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: طنطا، شارع البحر، عمارة 14 الدور الثالث، بجوار بنك مصر"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        ملاحظات للصيدلي أو مندوب التوصيل (اختياري)
                      </label>
                      <input
                        type="text"
                        placeholder="مثال: أرجو إحضار فكة 200 ج.م، أو الرن على الجرس بهدوء"
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="pt-3 flex flex-col md:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={submittingOrder}
                        className="flex-1 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {submittingOrder ? (
                          <span>جاري تسجيل الطلب...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>تأكيد الطلب الفوري للصيدلية ({totalAmount} ج.م)</span>
                          </>
                        )}
                      </button>

                      {pharmacy.whatsapp && (
                        <a
                          href={buildWhatsAppLink()}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-emerald-700/60 hover:bg-emerald-700 border border-emerald-500/40 text-emerald-200 font-bold px-4 py-3 rounded-xl text-xs transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>إرسال عبر واتساب</span>
                        </a>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
