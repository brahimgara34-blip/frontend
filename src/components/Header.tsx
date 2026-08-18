'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export default function Header() {
  const { openDrawer, getTotalItemsCount } = useCartStore();
  const cartCount = getTotalItemsCount();

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-700 text-white text-xs md:text-sm font-bold py-2 px-4 text-center flex items-center justify-center gap-2 tracking-wide">
        <Truck className="w-4 h-4 text-emerald-300 animate-bounce" />
        <span>توصيل مجاني وسريع لجميع مدن المغرب (24-48 ساعة) • الدفع عند الاستلام بعد المعاينة</span>
      </div>

      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          
          {/* Logo with VM Monogram */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-400 p-0.5 shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <span className="text-sm font-black tracking-tighter bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  VM
                </span>
              </div>
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-wider block">
                vitalis<span className="text-teal-400">maroc</span>
              </span>
              <span className="text-[10px] text-slate-400 block -mt-1 font-medium">
                حلول الراحة والعناية المتقدمة
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
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-black text-[11px] px-2 py-0.5 rounded-full animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </header>
    </>
  );
}
