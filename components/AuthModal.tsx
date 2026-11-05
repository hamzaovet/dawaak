"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  X,
  MessageCircle,
  KeyRound,
  RefreshCw,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (customer: any) => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [step, setStep] = useState<"REGISTER" | "VERIFY">("REGISTER");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("طنطا");
  const [address, setAddress] = useState("");
  const [otpCode, setOtpCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null);

  if (!isOpen) return null;

  // Step 1: Send OTP via Gmail & WhatsApp
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "send_otp",
          name,
          email,
          phone,
          city,
          address,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setWhatsappLink(data.whatsappActivationUrl || null);
        setStep("VERIFY");
      } else {
        setError(data.error || "فشل إرسال كود التحقق");
      }
    } catch (err: any) {
      setError("حدث خطأ في الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "verify_otp",
          email,
          phone,
          code: otpCode,
        }),
      });

      const data = await res.json();
      if (data.success && data.customer) {
        localStorage.setItem("dawaak_user", JSON.stringify(data.customer));
        onSuccess(data.customer);
        onClose();
      } else {
        setError(data.error || "كود التحقق غير صحيح");
      }
    } catch (err: any) {
      setError("حدث خطأ أثناء تأكيد الحساب");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0c1424] border border-emerald-500/30 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between bg-[#080d18]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {step === "REGISTER" ? "تسجيل حساب عميل موثّق" : "تأكيد كود التحقق السري"}
              </h3>
              <p className="text-xs text-slate-400">منظومة دَواك للرعاية الصيدلانية الذكية</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
              {error}
            </div>
          )}

          {step === "REGISTER" ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  الاسم بالكامل *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="مثال: د. أحمد عبد الرحمن"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#060b13] border border-slate-800 rounded-xl pr-10 pl-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    البريد الإلكتروني (Gmail) *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#060b13] border border-slate-800 rounded-xl pr-10 pl-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    رقم الهاتف (واتساب) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="010XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#060b13] border border-slate-800 rounded-xl pr-10 pl-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    المدينة / المحافظة
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="طنطا، القاهرة، المنصورة..."
                    className="w-full bg-[#060b13] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    عنوان التوصيل المفضل
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="الشارع، رقم العمارة"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-[#060b13] border border-slate-800 rounded-xl pr-10 pl-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>جاري إرسال كود التحقق إلى Gmail والواتساب...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>إرسال رمز التفعيل (OTP)</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <div className="text-center space-y-1.5">
                <p className="text-xs text-slate-300">
                  تم إرسال كود مكون من 6 أرقام إلى بريدك الإلكتروني:
                </p>
                <div className="font-mono font-bold text-sm text-emerald-400 bg-emerald-500/10 py-1 px-3 rounded-xl inline-block">
                  {email}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 text-center">
                  أدخل كود التحقق السري (OTP):
                </label>
                <div className="relative max-w-xs mx-auto">
                  <KeyRound className="w-5 h-5 text-emerald-400 absolute right-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    maxLength={6}
                    required
                    placeholder="______"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full bg-[#060b13] border-2 border-emerald-500/50 rounded-2xl text-center py-3 text-xl font-mono font-black text-emerald-400 tracking-[0.5em] focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || otpCode.length < 4}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>جاري التحقق وتفعيل الحساب...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>تأكيد وتفعيل الحساب الآن</span>
                  </>
                )}
              </button>

              {/* WhatsApp Alternative Activation */}
              {whatsappLink && (
                <div className="pt-2 text-center space-y-2 border-t border-slate-800">
                  <p className="text-[11px] text-slate-400">تأخر وصول الإيميل؟ فعّل حسابك بضغطة واحدة:</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/60 py-2.5 rounded-xl text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>تفعيل الحساب مباشرة عبر واتساب</span>
                  </a>
                </div>
              )}

              <button
                type="button"
                onClick={() => setStep("REGISTER")}
                className="w-full text-center text-xs text-slate-400 hover:text-slate-200 mt-2"
              >
                تعديل البيانات أو إعادة الإرسال
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
