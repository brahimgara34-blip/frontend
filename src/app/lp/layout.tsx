import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitalis Maroc | متجر إلكتروني مغربي',
  description: 'متجر إلكتروني مغربي للتوصيل داخل المملكة. معاينة الطلب عند الاستلام وخدمة زبائن واضحة.',
  keywords: 'متجر مغربي, توصيل المغرب, دفع عند الاستلام',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Vitalis Maroc | متجر إلكتروني مغربي',
    description: 'متجر إلكتروني مغربي للتوصيل داخل المملكة. معاينة الطلب عند الاستلام.',
    url: 'https://vitalismaroc.shop/lp',
    siteName: 'Vitalis Maroc',
    locale: 'ar_MA',
    type: 'website',
  },
};

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
