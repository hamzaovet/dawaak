"use client";

import React, { useState } from "react";
import {
  QrCode,
  Smartphone,
  Globe,
  Download,
  Share2,
  Printer,
  Sparkles,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";

export default function DoubleQrCard() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // Dynamic URLs - Defaults to production or vercel fallback
  const websiteUrl = typeof window !== "undefined" ? window.location.origin : "https://dawaak.vercel.app";
  const appDownloadUrl = `${websiteUrl}/download/dawaak.apk`;

  // QR Code Image generator URLs (high-contrast, crystal-clear 300x300)
  const websiteQrImg = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(
    websiteUrl
  )}`;
  const appQrImg = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(
    appDownloadUrl
  )}`;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(key);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="smart-card" className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
          <QrCode className="w-3.5 h-3.5" />
          <span>كارت المنظومة الذكي المزدوج (2-in-1 Dual QR Card)</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white">
          كارت دواك الترويجي الذكي للصيدليات والمرضى
        </h2>
        <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto">
          كارت موحد يوضع على كاونتر الصيدلية أو يُشارك مع المرضى: كود مباشر لفتح الموقع وكود فوري لتحميل تطبيق الموبايل
        </p>
      </div>

      {/* The Printable VIP Card */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 shadow-2xl shadow-emerald-950/60 group">
        <div className="bg-[#070d18] rounded-[22px] p-6 md:p-8 space-y-6 relative overflow-hidden backdrop-blur-2xl">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Card Top Branding */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/30">
                <div className="w-full h-full bg-[#070d18] rounded-[14px] flex items-center justify-center font-black text-xl text-emerald-400">
                  د
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    دَواك — Dawaak
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    رسمي معتمد
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  شبكة الصيدليات الذكية ورادار النواقص المصري • 0% عمولة
                </p>
              </div>
            </div>

            <div className="text-right sm:text-left">
              <span className="text-[11px] text-slate-400 block">خط الطوارئ والواتساب:</span>
              <span className="font-mono font-bold text-sm text-emerald-400 dir-ltr inline-block">
                01018671000
              </span>
            </div>
          </div>

          {/* Dual QR Code Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* QR Code 1: Web Portal */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center space-y-4 hover:border-emerald-500/50 transition-all shadow-inner">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                <Globe className="w-3.5 h-3.5" />
                <span>امسح لزيارة الموقع والمنصة</span>
              </div>

              {/* QR Image Box */}
              <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center border-2 border-emerald-500/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={websiteQrImg}
                  alt="QR Code الموقع الإلكتروني"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">منصة الويب الفورية</h4>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                  بحث النواقص، فحص الروشتات بالذكاء الاصطناعي، وطلب الأدوية مباشرة بدون تنزيل
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(websiteUrl, "web")}
                  className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedLink === "web" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>تم نسخ الرابط!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الرابط</span>
                    </>
                  )}
                </button>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-500/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>فتح</span>
                </a>
              </div>
            </div>

            {/* QR Code 2: Mobile App Download */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center space-y-4 hover:border-cyan-500/50 transition-all shadow-inner">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                <Smartphone className="w-3.5 h-3.5" />
                <span>امسح لتحميل تطبيق الموبايل</span>
              </div>

              {/* QR Image Box */}
              <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center border-2 border-cyan-500/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={appQrImg}
                  alt="QR Code تطبيق الموبايل"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">تطبيق دواك (Android / APK)</h4>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                  إشعارات فورية بنواقص الأدوية، تتبع حركة الطيار لحظياً، وسرعة فائقة في الطلب
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(appDownloadUrl, "app")}
                  className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedLink === "app" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>تم نسخ رابط الـ APK!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ رابط التطبيق</span>
                    </>
                  )}
                </button>
                <a
                  href={appDownloadUrl}
                  className="inline-flex items-center gap-1 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-cyan-500/30 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>تنزيل APK</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card Footer Features */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>تسعيرة جبرية رسمية وفق هيئة الدواء المصرية (EDA)</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>طباعة الكارت</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
