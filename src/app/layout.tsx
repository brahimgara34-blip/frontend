import type { Metadata } from "next";
import "./globals.css";
import TrackingScripts from "@/components/TrackingScripts";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalismaroc.shop'),
  title: "Vitalis Maroc™ | منتجات الدار بأحسن الأثمنة والعروض",
  description: "فرشاة السيشوار، طقم المفك، مجفف الثياب، صنبور الماء، ساعة الهدية، مدلك الرقبة، آلة الملاكمة، الخزانة، كرسي الأطفال ومنظم المكياج. عرض القطعة والجوج والتلاتة، توصيل مجاني، والمعاينة قبل الدفع.",
  keywords: "متجر مغربي, خزانة ملابس, مساج القدمين, كرسي أطفال, منظم مكياج, دفع عند الاستلام المغرب, Vitalis Maroc, أثاث منزلي, صحة واسترخاء",
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
    title: "Vitalis Maroc™ | منتجات الدار بأحسن الأثمنة والعروض",
    description: "كل منتج فبلاصتو، بثمن واضح وعرض الجوج والتلاتة. توصيل مجاني لكافة مدن المغرب، والمعاينة قبل الدفع.",
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
      <body className="bg-[#F7F8FA] text-[#111827] min-h-screen flex flex-col antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
