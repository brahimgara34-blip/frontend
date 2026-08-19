import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import TimedUpsellModal from "@/components/TimedUpsellModal";
import TrackingScripts from "@/components/TrackingScripts";

export const metadata: Metadata = {
  title: "Vitalis Maroc™ | حلول الراحة والتقويم والعناية اليومية بالمغرب",
  description: "المتجر المغربي الأول المتخصص في حلول الراحة التقويمية والعناية اليومية المبتكرة. دوش التوربو المفلتر، خيط الأسنان المائي، ووسادة المقعد التقويمية مع الدفع عند الاستلام والمعاينة قبل الدفع.",
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
