import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirect Killer',
  robots: { index: false, follow: false },
};

export default function RedirectKillerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
