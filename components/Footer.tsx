"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, ShieldCheck, HeartPulse, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on management dashboards
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="border-t border-emerald-500/20 bg-[#04080e] text-slate-400 text-xs mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#060b13] rounded-[10px] flex items-center justify-center">
                  <Activity className="text-emerald-400" size={16} />
                </div>
              </div>
              <span className="text-xl font-black text-white">دَواك — Dawaak</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              المنظومة الرقمية الشاملة لربط الصيدليات المصرية، وتوفير نواقص الأدوية عبر شبكة رادار حية، وتحليل الروشتات والتحاليل بالذكاء الاصطناعي.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-bold">
              <ShieldCheck size={14} />
              <span>مطابق لتسعيرة وضوابط هيئة الدواء المصرية (EDA)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">الخدمات الرئيسية</h4>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <Link href="/radar" className="hover:text-emerald-400 transition">
                  📡 رادار النواقص وحجز العبوات
                </Link>
              </li>
              <li>
                <Link href="/prescription" className="hover:text-emerald-400 transition">
                  📸 فاحص الروشتات بـ Gemini AI
                </Link>
              </li>
              <li>
                <Link href="/lab-analyzer" className="hover:text-emerald-400 transition">
                  🧪 مترجم نتائج التحاليل الطبية
                </Link>
              </li>
              <li>
                <Link href="/#medicines" className="hover:text-emerald-400 transition">
                  💊 دليل الأدوية والبدائل والمثائل
                </Link>
              </li>
            </ul>
          </div>

          {/* For Pharmacies */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">للصيدليات والشركاء</h4>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition text-emerald-400 font-bold">
                  💎 باقات الأسعار (مجاناً حتى نهاية 2026)
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition">
                  🛵 بوابة الصيدلية وإدارة الطيارين
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-emerald-400 transition text-slate-400">
                  🛡️ بوابة المالك العام (Super Admin)
                </Link>
              </li>
              <li>
                <a href="https://wa.me/201018671000?text=أريد%20تسجيل%20صيدليتي%20في%20منظومة%20دواك" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">
                  ➕ انضمام صيدلية جديدة للشبكة (0% عمولة)
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage & Emergency */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">نطاق التغطية والطوارئ</h4>
            <div className="space-y-1 text-slate-300">
              <div className="flex items-center gap-1.5 text-[11px]">
                <MapPin size={13} className="text-emerald-400 shrink-0" />
                <span>الغربية (طنطا - المحلة)، القاهرة الكبرى، الدقهلية (المنصورة)، الإسكندرية.</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] pt-1">
                <Phone size={13} className="text-emerald-400 shrink-0" />
                <span>الخط الساخن: 01018671000 (24 ساعة)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} لمنظومة دَواك — تطوير وإدارة شركة أوركا لتقنية المعلومات 🐋
          </div>
          <div className="flex items-center gap-2">
            <HeartPulse size={14} className="text-rose-500" />
            <span>معاً لتوفير الدواء لكل مريض في مصر</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
