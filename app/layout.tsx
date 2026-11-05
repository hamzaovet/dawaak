import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#060b13",
};

export const metadata: Metadata = {
  title: "دَواك — Dawaak | شبكة الصيدليات الذكية ورادار النواقص بمصر",
  description:
    "المنظومة الرقمية الشاملة لربط الصيدليات المصرية، وتوفير نواقص الأدوية عبر شبكة رادار حية، وفحص الروشتات وتفسير التحاليل الطبية بالذكاء الاصطناعي.",
  keywords: [
    "صيدلية",
    "دواء",
    "نواقص الأدوية في مصر",
    "روشتة",
    "قراءة الروشتات",
    "تفسير التحاليل",
    "صيدليات طنطا",
    "صيدليات القاهرة",
    "توصيل أدوية",
    "دواك",
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "دَواك",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-[#060b13] text-slate-100 antialiased font-sans">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
