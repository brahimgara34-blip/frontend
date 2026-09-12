'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import TimedUpsellModal from '@/components/TimedUpsellModal';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';
  const hideStoreChrome =
    pathname.startsWith('/lp') ||
    pathname.startsWith('/redirectkiller') ||
    pathname.startsWith('/ads');

  if (hideStoreChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <CheckoutModal />
      <TimedUpsellModal />
    </>
  );
}
