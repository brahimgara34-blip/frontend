import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import TimedUpsellModal from "@/components/TimedUpsellModal";
import TrackingScripts from "@/components/TrackingScripts";

export const metadata: Metadata = {
  title: "Vitalis Maroc™ | حلول الراحة والعناية اليومية المبتكرة بالمغرب",
  description: "المتجر المغربي الموثوق لمنتجات الراحة والترقية اليومية. دوش التوربو المفلتر HydroPure™، خيط الأسنان المائي AuraFloss™، ووسادة المقعد ErgoCushion™ — توصيل مجاني 24-48 ساعة، معاينة قبل الدفع، وضمان سنة كاملة.",
  keywords: "متجر مغربي, دوش توربو كالكير, خيط أسنان مائي, وسادة مقعد مريحة, دفع عند الاستلام المغرب, Vitalis Maroc",
  openGraph: {
    title: "Vitalis Maroc™ | حلول ذكية لروتين يومي أكثر راحة",
    description: "منتجات عملية ومبتكرة لراحتك اليومية في البيت والعمل. معاينة قبل الدفع وتوصيل مجاني لجميع مدن المغرب.",
    url: "https://vitalismaroc.shop",
    siteName: "Vitalis Maroc™",
    locale: "ar_MA",
    type: "website",
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
        <TrackingScripts />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />

        {/* Global Modals & Drawers */}
        <CartDrawer />
        <CheckoutModal />
        <TimedUpsellModal />
      </body>
    </html>
  );
}
