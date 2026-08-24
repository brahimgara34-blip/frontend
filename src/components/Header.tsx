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
      {/* Top Authority Banner */}
      <div className="bg-[#0F2744] text-white text-xs font-bold py-2 px-4 text-center flex items-center justify-center gap-3 tracking-wide border-b border-slate-800" dir="rtl">
        <div className="flex items-center gap-1 text-emerald-400">
          <Truck className="w-3.5 h-3.5 shrink-0" />
          <span>توصيل مجاني 24-48 ساعة لجميع مدن المغرب</span>
        </div>
        <span className="text-white/20 hidden md:inline">|</span>
        <div className="hidden md:flex items-center gap-1 text-teal-300">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>المعاينة والفحص قبل دفع أي درهم</span>
        </div>
        <span className="text-white/20 hidden md:inline">|</span>
        <div className="hidden md:flex items-center gap-1 text-amber-400">
          <Award className="w-3.5 h-3.5 shrink-0" />
          <span>ضمان استبدال معتمد 12 شهراً</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          
          {/* Logo with Official VM Monogram */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-full shadow-lg shadow-teal-950/40 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <Image
                src="/logo.png"
                alt="Vitalis Maroc Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-wider block">
                Vitalis<span className="text-emerald-400">Maroc</span><span className="text-slate-500 text-sm">™</span>
              </span>
              <span className="text-[10px] text-slate-400 block -mt-1 font-medium">
                حلول الراحة والعناية اليومية المبتكرة
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse text-xs font-bold text-slate-300">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              الرئيسية
            </Link>
            <Link href="/collections" className="hover:text-teal-400 transition-colors">
              كافة المنتجات
            </Link>
            <Link href="/about" className="hover:text-teal-400 transition-colors">
              من نحن
            </Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">
              اتصل بنا
            </Link>
          </nav>

          {/* Cart Drawer Trigger */}
          <button
            onClick={openDrawer}
            className="relative bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/50 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-slate-200 transition-all cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-teal-400" />
            <span className="hidden sm:inline">سلة المشتريات</span>
            {cartCount > 0 && (
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-[11px] px-2 py-0.5 rounded-full animate-pulse shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </header>
    </>
  );
}
