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
      <div className="bg-gradient-to-r from-slate-950 via-[#0F2744] to-slate-950 text-white text-[11px] md:text-xs font-bold py-2.5 px-4 text-center flex items-center justify-center gap-3 md:gap-4 tracking-wide border-b border-slate-800/80 shadow-sm relative overflow-hidden" dir="rtl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay" />
        <div className="flex items-center gap-1.5 text-emerald-400 relative z-10">
          <Truck className="w-3.5 h-3.5 shrink-0" />
          <span>توصيل مجاني 24-48h لجميع المدن</span>
        </div>
        <span className="text-white/10 hidden md:inline relative z-10">|</span>
        <div className="hidden md:flex items-center gap-1.5 text-teal-300 relative z-10">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>المعاينة والفحص قبل دفع أي درهم</span>
        </div>
        <span className="text-white/10 hidden md:inline relative z-10">|</span>
        <div className="hidden md:flex items-center gap-1.5 text-amber-400 relative z-10">
          <Award className="w-3.5 h-3.5 shrink-0" />
          <span>ضمان استبدال معتمد 12 شهراً</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-sm" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          
          {/* Logo with Official VM Monogram */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] group-hover:scale-105 transition-all overflow-hidden shrink-0 ring-1 ring-slate-800">
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
              <span className="text-xl md:text-2xl font-black text-white tracking-wider block drop-shadow-sm">
                Vitalis<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Maroc</span><span className="text-slate-600 text-sm">™</span>
              </span>
              <span className="text-[9px] md:text-[10px] text-slate-400 block -mt-1 font-bold">
                حلول الراحة والعناية اليومية المبتكرة
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse text-xs font-black text-slate-300">
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
            className="relative bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/50 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-bold text-slate-200 transition-all cursor-pointer shadow-sm active:scale-95 group"
          >
            <ShoppingBag className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">سلة المشتريات</span>
            {cartCount > 0 && (
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-[11px] px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </header>
    </>
  );
}
