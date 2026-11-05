"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Radar,
  Camera,
  FlaskConical,
  Store,
  LayoutDashboard,
  Menu,
  X,
  PhoneCall,
  Sun,
  Moon,
  Sparkles,
  User,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [authOpen, setAuthOpen] = useState(false);
  const [customer, setCustomer] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("dawaak_theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      if (saved === "light") document.documentElement.classList.add("theme-light");
    }

    const savedUser = localStorage.getItem("dawaak_user");
    if (savedUser) {
      try {
        setCustomer(JSON.parse(savedUser));
      } catch (e) {}
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("dawaak_theme", next);
    if (next === "light") {
      document.documentElement.classList.add("theme-light");
    } else {
      document.documentElement.classList.remove("theme-light");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dawaak_user");
    setCustomer(null);
  };

  const NAV_LINKS = [
    { href: "/radar", label: "رادار النواقص", icon: Radar, badge: "حي" },
    { href: "/prescription", label: "فاحص الروشتات", icon: Camera, badge: "AI" },
    { href: "/lab-analyzer", label: "مفسر التحاليل", icon: FlaskConical, badge: "ذكاء طبي" },
    { href: "/#pharmacies", label: "دليل الصيدليات", icon: Store },
    { href: "/dashboard", label: "بوابة الصيدلية", icon: LayoutDashboard },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#060b13]/90 backdrop-blur-md border-b border-emerald-500/20 shadow-xl transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-0.5 shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#060b13] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <Activity className="text-emerald-400 animate-pulse" size={22} />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black font-sans tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                    دَواك
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
                    Dawaak
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium">
                  شبكة الصيدليات الذكية الأولى في مصر 🇪🇬
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-black"
                        : "text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10"
                    }`}
                  >
                    <Icon size={16} className={isActive ? "text-slate-950" : "text-emerald-400"} />
                    <span>{link.label}</span>
                    {link.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded-full font-black ${
                          isActive
                            ? "bg-slate-950 text-emerald-400"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: User Auth, Theme Toggle & WhatsApp Hotline */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Customer Account Button */}
              {customer ? (
                <div className="flex items-center gap-1.5 bg-slate-900 border border-emerald-500/40 rounded-xl px-3 py-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-white font-bold">
                    <User size={14} className="text-emerald-400" />
                    <span>{customer.name}</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded-full font-bold">
                      موثّق
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    title="تسجيل الخروج"
                    className="text-slate-400 hover:text-rose-400 p-1 transition"
                  >
                    <LogOut size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500 font-bold text-xs flex items-center gap-1.5 transition"
                >
                  <User size={14} />
                  <span>تسجيل / توثيق حساب</span>
                </button>
              )}

              <button
                onClick={toggleTheme}
                title="تبديل الوضع (ليلي / نهاري)"
                className="p-2.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition"
              >
                {theme === "dark" ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-400" />}
              </button>

              <a
                href="https://wa.me/201018671000?text=مرحباً%20دواك،%20أحتاج%20مساعدة%20عاجلة%20في%20توفير%20دواء"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <PhoneCall size={15} />
                <span>طوارئ النواقص 24/7</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setAuthOpen(true)}
                className="p-2 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400"
                title="حسابي"
              >
                <User size={16} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300"
              >
                {theme === "dark" ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-emerald-500/20 bg-[#0a111e] p-4 space-y-2 animate-fadeIn">
            {customer && (
              <div className="p-3 bg-slate-900/90 border border-emerald-500/30 rounded-xl flex items-center justify-between text-xs text-white mb-2">
                <div className="flex items-center gap-2">
                  <User size={15} className="text-emerald-400" />
                  <span className="font-bold">{customer.name} (حساب موثّق)</span>
                </div>
                <button onClick={handleLogout} className="text-rose-400 text-xs font-bold">
                  خروج
                </button>
              </div>
            )}

            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 font-black"
                      : "text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon size={18} className={isActive ? "text-slate-950" : "text-emerald-400"} />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-2">
              <a
                href="https://wa.me/201018671000"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} />
                <span>طوارئ النواقص واتساب (01018671000)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal for Customer Registration & Verification */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={(c) => setCustomer(c)}
      />
    </>
  );
}
