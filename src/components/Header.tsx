'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag, ShieldCheck, Truck, Award } from 'lucide-react';

export default function Header() {
  const { openDrawer, getTotalItemsCount } = useCartStore();
  const cartCount = getTotalItemsCount();

  return (
    <>
      <div className="bg-[#5C6B4F] text-white text-[11px] md:text-xs font-bold py-2.5 px-4 text-center flex items-center justify-center gap-3 md:gap-4" dir="rtl">
        <div className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 shrink-0" />
          <span>توصيل مجاني 24-48h لجميع المدن</span>
        </div>
        <span className="text-white/20 hidden md:inline">|</span>
        <div className="hidden md:flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>المعاينة والفحص قبل دفع أي درهم</span>
        </div>
        <span className="text-white/20 hidden md:inline">|</span>
        <div className="hidden md:flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 shrink-0" />
          <span>ضمان استبدال معتمد 12 شهراً</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-[#E8E0D5]" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-11 h-11 md:w-12 md:h-12 shrink-0">
              <Image
                src="/logo.png"
                alt="Vitalis Maroc Logo"
                fill
                sizes="(max-width: 768px) 44px, 48px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-black text-[#3B342C] tracking-wider block">
                Vitalis Maroc<span className="text-[#8B8176] text-sm">™</span>
              </span>
              <span className="text-[9px] md:text-[10px] text-[#8B8176] block -mt-1 font-bold">
                حلول الراحة والعناية اليومية المبتكرة
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 space-x-reverse text-xs font-black text-[#8B8176]">
            <Link href="/" className="hover:text-[#3B342C] transition-colors">الرئيسية</Link>
            <Link href="/collections" className="hover:text-[#3B342C] transition-colors">كافة المنتجات</Link>
            <Link href="/about" className="hover:text-[#3B342C] transition-colors">من نحن</Link>
            <Link href="/contact" className="hover:text-[#3B342C] transition-colors">اتصل بنا</Link>
          </nav>

          <button
            onClick={openDrawer}
            className="relative bg-[#F6F1EA] border border-[#E8E0D5] px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-[#3B342C] transition-all cursor-pointer active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">سلة المشتريات</span>
            {cartCount > 0 && (
              <span className="bg-[#5C6B4F] text-white font-black text-[11px] px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
