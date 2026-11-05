"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  Store,
  Building2,
  ShieldCheck,
  Zap,
  HelpCircle,
  PhoneCall,
  MessageCircle,
  ChevronRight,
  TrendingDown,
  Gift,
  ArrowRight,
  Calculator,
} from "lucide-react";

export default function PricingPage() {
  const [branchesCount, setBranchesCount] = useState<number>(1);
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  // Pricing calculation
  // Base: 499 EGP for 1 branch
  // 2-3 branches: 399 EGP/branch
  // 4+ branches: 299 EGP/branch
  const getBranchFee = (count: number) => {
    if (count >= 4) return 299;
    if (count >= 2) return 399;
    return 499;
  };

  const branchFee = getBranchFee(branchesCount);
  const totalMonthly = branchFee * branchesCount;
  const regularTotalMonthly = 499 * branchesCount;
  const monthlySavings = regularTotalMonthly - totalMonthly;

  const PLANS = [
    {
      id: "single",
      name: "باقة الفرع الفردي",
      tagline: "للصيدليات المستقلة التي تسعى للتوسع الرقمي السريع",
      pricePerBranch: 499,
      branchesBadge: "فرع واحد",
      featured: false,
      features: [
        "صفحة متجر رقمي كاملة باسم الصيدلية (White-Label)",
        "فاحص الروشتات الفوري بالذكاء الاصطناعي (Gemini Multimodal)",
        "ربط مع رادار النواقص والأدوية الشحيحة في محيطك",
        "إدارة أسطول الدليفري والطيارين مع التتبع المباشر",
        "استقبال الطلبات الفورية عبر الواتساب الآلي والمنصة",
        "إدارة المخزون والتسعيرة الجبرية الرسمية",
        "دعم فني واستشارات تشغيل على مدار الساعة",
      ],
      ctaText: "ابدأ مجاناً حتى نهاية 2026",
      ctaLink: "/dashboard",
    },
    {
      id: "chain-pro",
      name: "باقة السلاسل والفروع (2 - 3 فروع)",
      tagline: "الأكثر طلباً لمجموعات الصيدليات المتوسطة",
      pricePerBranch: 399,
      branchesBadge: "2 - 3 فروع (وفّر 20%)",
      featured: true,
      badgeText: "الأكثر شعبية 🌟",
      features: [
        "كل مزايا باقة الفرع الفردي لكافة الفروع",
        "لوحة تحكم إدارية موحدة لمالك السلسلة",
        "توجيه الطلبات تلقائياً لأقرب فرع للعميل لتسريع التوصيل",
        "تبادل ومناقلة الأصناف والنواقص بين الفروع بنقرة زر",
        "تقارير مبيعات وإيرادات مجمعة وتحليل أداء الطيارين",
        "حسابات مستقلة لكل مدير فرع مع صلاحيات مخصصة",
        "أولوية ظهور متقدمة على رادار دواك في مدينتك",
      ],
      ctaText: "اشترك الآن مجاناً 100%",
      ctaLink: "/dashboard",
    },
    {
      id: "enterprise",
      name: "باقة الشبكات الكبرى (4 فروع فأكثر)",
      tagline: "للسلاسل الكبيرة والمجموعات الصيدلانية الضخمة",
      pricePerBranch: 299,
      branchesBadge: "4+ فروع (وفّر 40%)",
      featured: false,
      features: [
        "كل مزايا باقة السلاسل بدون أي قيود أو حدود",
        "الربط السحابي المباشر مع برامج الصيدليات (ERP API Integration)",
        "نظام ذكي لتوزيع طلبيات الشركات والمؤسسات والتعاقدات",
        "مدير حساب تقني مخصص للتدريب والمتابعة اليومية",
        "حملات تسويقية وإعلانية ممولة مشتركة داخل التطبيق",
        "تخصيص كامل للهوية البصرية ودومين مخصص اختياري",
        "اتفاقية مستوى خدمة SLA بنسبة توفر 99.9%",
      ],
      ctaText: "تواصل مع الإدارة للربط",
      ctaLink: "https://wa.me/201018671000?text=" + encodeURIComponent("مرحباً، أود الاستفسار عن باقة الشبكات الكبرى لمنظومة دواك."),
    },
  ];

  const FAQ = [
    {
      q: "ما هو عرض الانطلاق التأسيسي 2026 المجاني؟",
      a: "تقديراً لدور شركائنا من الصيادلة الأوائل، تمنح منصة دواك اشتراكاً مجانياً بنسبة 100% وبدون أي عمولات على المبيعات (0 ج.م رسوم و 0% عمولة) لكافة الصيدليات التي تنضم إلينا، وذلك حتى 31 ديسمبر 2026 كاملاً.",
    },
    {
      q: "هل توجد أي رسوم خفية أو عمولات على طلبات المرضى؟",
      a: "إطلاقاً! قيمة الطلب وتكلفة التوصيل تذهب بالكامل 100% لخزينة الصيدلية والطيارين بدون أي استقطاع، سواء كان الدفع نقداً أو عبر إنستاباي أو المحافظ الإلكترونية.",
    },
    {
      q: "كيف تتم محاسبة السلاسل التي تمتلك أكثر من فرع؟",
      a: "نظام التسعير مرن وتصاعدي الخصم: الفرع الفردي بـ 499 ج.م شهرياً، وإذا كان لديك فرعين أو 3 ينخفض السعر إلى 399 ج.م لكل فرع، أما إذا كان لديك 4 فروع فأكثر فينخفض السعر إلى 299 ج.م فقط لكل فرع شهرياً (مع العلم أن كل ذلك مجاني تماماً طوال عام 2026).",
    },
    {
      q: "كيف يستفيد الصيدلي من الذكاء الاصطناعي في المنظومة؟",
      a: "المنظومة مجهزة بنموذج Gemini الطبي المتخصص لقراءة الروشتات الطبية المكتوبة بخط اليد وتحويلها لأصناف وجرعات، بالإضافة لمفسر التحاليل الطبية الشامل، ورادار توجيه المرضى لأماكن الأدوية الناقصة.",
    },
    {
      q: "ما المطلوب لتسجيل صيدليتي واعتمادها في دواك؟",
      a: "صورة ترخيص وزارة الصحة للصيدلية أو كارنيه النقابة للمدير المسؤول، وبيانات التواصل والعنوان، وسيتم تفعيل حسابك ورفع متجرك في أقل من ساعتين عمل.",
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 max-w-7xl mx-auto space-y-16">
      {/* 1. HERO HEADER WITH FOUNDER PROMO HIGHLIGHT */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        {/* Founder Ribbon */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold shadow-lg shadow-emerald-500/10 animate-pulse">
          <Gift className="w-5 h-5 text-emerald-400" />
          <span>هدية الانطلاق التأسيسية: اشتراك مجاني 100% حتى 31 ديسمبر 2026 🎉</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          خطط تسعير واضحة وعادلة <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            مصممة لنمو صيدليتك وزيادة مبيعاتك
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          انضم لأول شبكة صيدليات ذكية في مصر بدون مخاطرة. تسعير ثابت بالجنيه المصري لكل فرع،
          وخصومات فورية متصاعدة كلما زادت فروع صيدليتك.
        </p>

        {/* Free promo highlight card */}
        <div className="bg-gradient-to-b from-emerald-950/40 to-slate-900 border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 text-right shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-emerald-500 text-slate-950 text-xs font-black">
                  عرض 2026 التأسيسي
                </span>
                <span className="text-xs text-emerald-400 font-bold">بدون شروط مسبقة</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                0 جنيه شهرياً و 0% عمولة طوال فترة الانطلاق التأسيسية!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                استمتع بكافة الخواص الاحترافية، وتجهيز متجرك، والربط بالرادار والذكاء الاصطناعي مجاناً بالكامل.
                يبدأ تطبيق رسوم الاشتراك الموضحة أدناه اعتباراً من 1 يناير 2027.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:items-end gap-2">
              <Link
                href="/dashboard"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 transition text-center"
              >
                انضم كصيدلية شريكة الآن 🚀
              </Link>
              <span className="text-[11px] text-slate-400 text-center sm:text-right">
                التفعيل يستغرق دقائق معدودة
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE BRANCH CALCULATOR */}
      <div className="glass-medical rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono">
              <Calculator className="w-4 h-4" />
              <span>حاسبة خصومات الفروع المتعددة</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              احسب اشتراك سلسلتك وفر وفّر حتى 40%
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            حدد عدد الفروع لحساب التكلفة الفعلية والوفر التلقائي
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between items-center text-sm font-bold text-white mb-2">
                <span>عدد فروع الصيدلية:</span>
                <span className="text-emerald-400 font-mono text-lg">{branchesCount} فرع</span>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                step={1}
                value={branchesCount}
                onChange={(e) => setBranchesCount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                <span>فرع 1 (أساسي)</span>
                <span>3 فروع (خصم 20%)</span>
                <span>4+ فروع (خصم 40%)</span>
                <span>15 فرع</span>
              </div>
            </div>

            {/* Quick buttons */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-slate-400 self-center ml-2">اختيار سريع:</span>
              {[1, 2, 3, 4, 5, 8, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setBranchesCount(num)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    branchesCount === num
                      ? "bg-emerald-500 text-slate-950 font-black shadow-md"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {num} {num === 1 ? "فرع" : "فروع"}
                </button>
              ))}
            </div>
          </div>

          {/* Calculator Output Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-700/80 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-400">سعر الاشتراك الشهري للفرع الواحد:</span>
              <span className="text-sm font-black text-white font-mono">
                {branchFee} ج.م <span className="text-xs text-slate-400 font-normal">/ فرع</span>
              </span>
            </div>

            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-400">إجمالي الاشتراك لـ ({branchesCount}) فرع:</span>
              <div className="text-left">
                {monthlySavings > 0 && (
                  <span className="line-through text-xs text-slate-500 block font-mono">
                    {regularTotalMonthly} ج.م
                  </span>
                )}
                <span className="text-xl font-black text-emerald-400 font-mono">
                  {totalMonthly} ج.م <span className="text-xs text-slate-400 font-normal">/ شهرياً</span>
                </span>
              </div>
            </div>

            {monthlySavings > 0 && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300 font-bold">
                <span>وفر شهري بفضل باقة الفروع:</span>
                <span className="font-mono text-sm">{monthlySavings} ج.م / شهر</span>
              </div>
            )}

            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 text-center space-y-1">
              <span className="text-[11px] text-emerald-400 font-bold block">
                السعر الفعلي المطلوب سداده الآن:
              </span>
              <span className="text-2xl font-black text-white font-mono">0.00 ج.م</span>
              <span className="text-[10px] text-slate-300 block">
                مجاناً 100% طوال عام 2026 لجميع الفروع
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THREE PRICING TIERS */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-emerald-400 font-mono">SUBSCRIPTION TIERS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            اختر الباقة المناسبة لحجم أعمالك
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.featured
                  ? "bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/40 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/15 md:-translate-y-2"
                  : "bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-xl"
              }`}
            >
              {plan.badgeText && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-xs shadow-md">
                  {plan.badgeText}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px] font-bold">
                    {plan.branchesBadge}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-3">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                      {plan.pricePerBranch}
                    </span>
                    <span className="text-xs text-slate-400">جنيه مصري / فرع / شهر</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-bold">حتى نهاية 2026:</span>
                    <span className="font-black text-emerald-300 font-mono">0 ج.م مجاناً</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-300 block">المزايا المضمنة:</span>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 shadow-lg ${
                    plan.featured
                      ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/25"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. VALUE PROPOSITION / COMPARISON */}
      <div className="glass-medical rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            لماذا تختار صيدليتك منظومة دواك؟
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            صُممت المنظومة خصيصاً لتناسب خصوصية وسوق الدواء في مصر، دون احتكار أو فرض عمولات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Store className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">متجرك المستقل بالكامل</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              صفحة ورابط خاص بصيدليتك لعملائك الدائمين، مع إتاحة الطلب عبر الواتساب الآلي والمنصة.
            </p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">فاحص الروشتات الطبي</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              محرك ذكاء اصطناعي فائق يقرأ أصناف الروشتة وتراكيزها ويوجهها مباشرة لصيدليتك لتجهيزها.
            </p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">صفر عمولة على المبيعات</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              أرباح مبيعات الأدوية ومصاريف التوصيل تذهب 100% لخزينة الصيدلية والطيارين بدون أي استقطاع.
            </p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">إدارة الفروع والسلاسل</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              لوحة واحدة تمنحك رؤية فورية على مبيعات كافة فروعك ومخزونها ومتابعة طاقم الدليفري.
            </p>
          </div>
        </div>
      </div>

      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
            <HelpCircle className="w-4 h-4" />
            <span>الأسئلة الشائعة</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">كل ما تريد معرفته عن الاشتراك</h3>
        </div>

        <div className="space-y-3">
          {FAQ.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2 text-right"
            >
              <h4 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 pr-4 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. DIRECT CONTACT CTA */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          هل تحتاج باقة مخصصة أو لديك شبكة صيدليات كبيرة؟
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          فريقنا الطبي والتقني جاهز لزيارة صيدليتك ومساعدتك في الربط وتدريب فريق العمل والطيارين مجاناً.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/201018671000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%86%D8%B6%D9%85%D8%A7%D9%85%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%AA%D9%8A%20%D9%84%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9%20%D8%AF%D9%88%D8%A7%D9%83"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>تواصل معنا عبر الواتساب المباشر</span>
          </a>

          <a
            href="tel:01018671000"
            className="px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>اتصل بإدارة المبيعات والشركاء (01018671000)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
