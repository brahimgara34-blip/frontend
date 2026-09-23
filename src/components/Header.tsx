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
      <div className="bg-[#1E3A5F] text-white text-[11px] md:text-xs font-bold py-2.5 px-4 text-center flex items-center justify-center gap-3 md:gap-4 tracking-wide" dir="rtl">
        <div className="flex items-center gap-1.5 text-emerald-300">
          <Truck className="w-3.5 h-3.5 shrink-0" />
          <span>توصيل مجاني 24-48h لجميع المدن</span>
        </div>
        <span className="text-white/20 hidden md:inline">|</span>
        <div className="hidden md:flex items-center gap-1.5 text-teal-200">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>المعاينة والفحص قبل دفع أي درهم</span>
        </div>
        <span className="text-white/20 hidden md:inline">|</span>
        <div className="hidden md:flex items-center gap-1.5 text-amber-200">
          <Award className="w-3.5 h-3.5 shrink-0" />
          <span>ضمان استبدال معتمد 12 شهراً</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-stone-200/80 shadow-sm" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full shadow-md group-hover:scale-105 transition-all overflow-hidden shrink-0 ring-1 ring-stone-200">
              <Image
                src="/logo.png"
                alt="Vitalis Maroc Logo"
                fill
                sizes="(max-width: 768px) 40px, 44px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-black text-[#1E3A5F] tracking-wider block">
                Vitalis<span className="text-emerald-600">Maroc</span><span className="text-stone-400 text-sm">™</span>
              </span>
              <span className="text-[9px] md:text-[10px] text-slate-500 block -mt-1 font-bold">
                حلول الراحة والعناية اليومية المبتكرة
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 space-x-reverse text-xs font-black text-slate-600">
            <Link href="/" className="hover:text-emerald-700 transition-colors">الرئيسية</Link>
            <Link href="/collections" className="hover:text-emerald-700 transition-colors">كافة المنتجات</Link>
            <Link href="/about" className="hover:text-emerald-700 transition-colors">من نحن</Link>
            <Link href="/contact" className="hover:text-emerald-700 transition-colors">اتصل بنا</Link>
          </nav>

          <button
            onClick={openDrawer}
            className="relative bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-400 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-slate-700 transition-all cursor-pointer shadow-sm active:scale-95 group"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">سلة المشتريات</span>
            {cartCount > 0 && (
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-[11px] px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
