import type { Metadata } from "next";
import "./globals.css";
import TrackingScripts from "@/components/TrackingScripts";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalismaroc.shop'),
  title: "Vitalis Maroc™ | حلول الراحة والتقويم والعناية اليومية بالمغرب",
  description: "المتجر المغربي المعتمد لمنتجات الراحة اليومية. دوش التوربو HydroPure™، خيط الأسنان المائي AuraFloss™، مشد الركبة الحراري KneeRelief™، والميزان الذكي VitalFit™ — توصيل مجاني 24-48 ساعة، معاينة قبل الدفع، وضمان استبدال 12 شهراً.",
  keywords: "متجر مغربي, دوش توربو كالكير, خيط أسنان مائي, مشد ركبة حراري, ميزان ذكي, دفع عند الاستلام المغرب, Vitalis Maroc, آلام الركبة, صبيب ماء قوي",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Vitalis Maroc™ | حلول عملية مبتكرة لروتين يومي أكثر راحة",
    description: "منتجات أصلية ومختبرة لراحتك اليومية في البيت والعمل. معاينة قبل الدفع، ضمان 12 شهراً، وتوصيل مجاني لكافة مدن المغرب.",
    url: "https://vitalismaroc.shop",
    siteName: "Vitalis Maroc™",
    images: [
      {
        url: "/logo.png",
        width: 732,
        height: 732,
        alt: "Vitalis Maroc™ Logo",
      },
    ],
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
