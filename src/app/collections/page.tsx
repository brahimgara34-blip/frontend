'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import SharedSocialProofSection from '@/components/SharedSocialProofSection';
import {
  Sparkles, ArrowLeft, Star, ShieldCheck, Truck,
  CheckCircle2, Flame, Eye, ShoppingCart
} from 'lucide-react';

export default function CollectionsPage() {
  const { addItem, openCheckout } = useCartStore();

  const handleQuickBuy = (product: Product, tier: number) => {
    addItem(product, tier);
    openCheckout();
  };

  return (
    <div className="space-y-10" dir="rtl">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden text-center md:text-right">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black px-4 py-1.5 rounded-full mb-3 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>المنتجات الحصرية المعتمدة 2026 — Vitalis Maroc™</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">
            تشكيلة المنتجات الرابحة لحياة يومية أكثر راحة ونظافة
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-2 leading-relaxed">
            منتجات أصلية مختارة ومختبرة بعناية لحل مشاكل يومية حقيقية بنتائج فورية. جميع المنتجات مشمولة بـ <span className="text-emerald-400 font-bold">التوصيل المجاني</span> و<span className="text-teal-300 font-bold">المعاينة قبل الدفع</span> و<span className="text-amber-400 font-bold">ضمان 12 شهراً</span>.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-xl">
            <Truck className="w-4 h-4 text-emerald-400" />
            <span>شحن مجاني 24-48h</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>افحص السلعة عاد خلص</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>ضمان استبدال سنة كاملة</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <CollectionCard
            key={product.id}
            product={product}
            onAddToCart={addItem}
            onQuickBuy={handleQuickBuy}
          />
        ))}
      </div>

      {/* Shared Customer Testimonials & Verified Moroccan Reviews */}
      <SharedSocialProofSection />

    </div>
  );
}

function CollectionCard({
  product,
  onAddToCart,
  onQuickBuy,
}: {
  product: Product;
  onAddToCart: (p: Product, qty: number) => void;
  onQuickBuy: (p: Product, qty: number) => void;
}) {
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const getTierPrice = (tier: number) => {
    if (tier === 1) return 249;
    if (tier === 2) return 379;
    return 499;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:shadow-2xl hover:shadow-teal-950/30">
      <div>
        
        {/* Real Product Image Container */}
        <Link href={`/products/${product.slug}`} className="block relative bg-slate-950 rounded-2xl p-4 border border-slate-800/80 mb-4 overflow-hidden group-hover:border-teal-500/40 transition-all">
          
          {/* Badges Overlay */}
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 items-end">
            <span className="bg-slate-900/90 backdrop-blur-md text-teal-400 text-[10px] font-black px-2.5 py-1 rounded-lg border border-teal-500/30 shadow-md">
              {product.badge}
            </span>
            <span className="flex items-center gap-1 text-[9px] font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
              <Flame className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>متبقي {product.stockLeft} قطع</span>
            </span>
          </div>

          <div className="w-full h-60 relative flex items-center justify-center p-2">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-slate-400 flex items-center gap-1">
            <Eye className="w-3 h-3 text-teal-400" />
            <span>عرض تفاصيل المنتج</span>
          </div>
        </Link>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-300">4.9</span>
          </div>
          <span className="text-[10px] text-slate-500">({product.reviewsCount} تقييم مغربي)</span>
        </div>

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h2 className="font-black text-base text-white hover:text-teal-400 transition-colors leading-snug line-clamp-2">
            {product.name}
          </h2>
        </Link>
        <p className="text-slate-400 text-xs mt-1.5 mb-4 line-clamp-2 leading-relaxed">
          {product.subheadline}
        </p>

        {/* Tier Selector */}
        <div className="space-y-1.5 mb-4">
          <div
            onClick={() => setSelectedTier(1)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 1
                ? 'border-teal-500 bg-teal-500/10 font-bold text-white shadow-sm'
                : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="block font-bold text-white">1 قطعة (249 درهم)</span>
              <span className="text-[10px] text-slate-400">للاستخدام الفردي</span>
            </div>
            <span className="text-[10px] text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">توصيل مجاني</span>
          </div>

          <div
            onClick={() => setSelectedTier(2)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 2
                ? 'border-emerald-500 bg-emerald-500/10 font-bold text-white shadow-sm ring-1 ring-emerald-500/30'
                : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="block font-bold text-white">2 قطع (379 درهم) 🔥</span>
              <span className="text-[10px] text-emerald-400 font-bold">189.5 درهم للقطعة</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-black bg-emerald-500/20 px-2 py-0.5 rounded">وفر 119 د.م</span>
          </div>

          <div
            onClick={() => setSelectedTier(3)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 3
                ? 'border-amber-500 bg-amber-500/10 font-bold text-white shadow-sm'
                : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div>
              <span className="block font-bold text-white">3 قطع (499 درهم) 🏆</span>
              <span className="text-[10px] text-amber-400 font-bold">166 درهم للقطعة</span>
            </div>
            <span className="text-[10px] text-amber-400 font-black bg-amber-500/20 px-2 py-0.5 rounded">وفر 248 د.م</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="border-t border-slate-800 pt-3 space-y-2">
        <button
          onClick={() => onQuickBuy(product, selectedTier)}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs md:text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>تأكيد الطلب الآن — {getTierPrice(selectedTier)} درهم</span>
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onAddToCart(product, selectedTier)}
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-teal-400" />
            <span>+ أضف للسلة</span>
          </button>
          
          <Link
            href={`/products/${product.slug}`}
            className="w-full bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1"
          >
            <Eye className="w-3.5 h-3.5 text-slate-400" />
            <span>عرض الشرح</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
