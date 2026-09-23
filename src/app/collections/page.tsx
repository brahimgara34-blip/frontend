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
      <div className="bg-gradient-to-br from-[#1E3A5F] via-[#234E70] to-[#0F766E] border border-[#1E3A5F]/20 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_-20px_rgba(30,58,95,0.35)] relative overflow-hidden text-center md:text-right group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl group-hover:bg-emerald-400/30 transition-colors duration-1000" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] md:text-xs font-black px-4 py-1.5 rounded-full mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>المنتجات الحصرية المعتمدة 2026 — Vitalis Maroc™</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">
            تشكيلة المنتجات الرابحة لحياة يومية أكثر راحة ونظافة
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed font-medium">
            منتجات أصلية مختارة ومختبرة بعناية لحل مشاكل يومية حقيقية بنتائج فورية. جميع المنتجات مشمولة بـ <span className="text-emerald-400 font-bold">التوصيل المجاني</span> و<span className="text-teal-300 font-bold">المعاينة قبل الدفع</span> و<span className="text-amber-400 font-bold">ضمان 12 شهراً</span>.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] md:text-xs text-slate-300">
          <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3.5 py-2 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors">
            <Truck className="w-4 h-4 text-emerald-300" />
            <span className="font-bold">شحن مجاني 24-48h</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3.5 py-2 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors">
            <ShieldCheck className="w-4 h-4 text-teal-200" />
            <span className="font-bold">افحص السلعة عاد خلص</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3.5 py-2 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span className="font-bold">ضمان استبدال سنة كاملة</span>
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
  const t1 = product.offerTiers.find((t) => t.tier === 1);
  const t2 = product.offerTiers.find((t) => t.tier === 2);
  const t3 = product.offerTiers.find((t) => t.tier === 3);

  const getTierPrice = (tier: number) => {
    const match = product.offerTiers.find((t) => t.tier === tier);
    return match?.price ?? product.offerTiers[0].price;
  };

  return (
    <div className="bg-white border border-stone-200 hover:border-emerald-300 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 shadow-sm group hover:shadow-xl">
      <div>
        <Link href={`/products/${product.slug}`} className="block relative bg-[#F6F1E8] rounded-2xl p-4 border border-stone-200 mb-5 overflow-hidden group-hover:border-emerald-300 transition-all">
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10 pointer-events-none" />
          
          {/* Badges Overlay */}
          <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 items-end">
            <span className="bg-white/95 backdrop-blur-md text-teal-700 text-[10px] font-black px-3 py-1.5 rounded-lg border border-teal-200 shadow-md">
              {product.badge}
            </span>
            <span className="flex items-center gap-1 text-[9px] font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md backdrop-blur-sm">
              <Flame className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>متبقي {product.stockLeft} قطع</span>
            </span>
          </div>

          <div className="w-full h-60 relative flex items-center justify-center p-2 z-10 group-hover:scale-110 transition-transform duration-700">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-600 flex items-center gap-1.5 border border-stone-200 shadow-sm transition-colors group-hover:text-teal-700 group-hover:border-teal-300">
            <Eye className="w-3.5 h-3.5" />
            <span>عرض التفاصيل</span>
          </div>
        </Link>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-black text-[#1E3A5F]">4.9</span>
          </div>
          <span className="text-[10px] font-bold text-slate-500">({product.reviewsCount} تقييم)</span>
        </div>

        {/* Title */}
        <Link href={`/products/${product.slug}`} className="px-1 block">
          <h2 className="font-black text-base md:text-lg text-[#1E3A5F] group-hover:text-teal-700 transition-colors leading-snug line-clamp-2">
            {product.name}
          </h2>
        </Link>
        <p className="text-slate-500 text-[11px] md:text-xs mt-2 mb-5 line-clamp-2 leading-relaxed font-medium px-1">
          {product.subheadline}
        </p>

        {/* Tier Selector */}
        <div className="space-y-1.5 mb-4">
          <div
            onClick={() => setSelectedTier(1)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 1
                ? 'border-teal-400 bg-teal-50 font-bold text-[#1E3A5F] shadow-sm'
                : 'border-stone-200 bg-[#FDFBF7] text-slate-500 hover:border-stone-300'
            }`}
          >
            <div>
              <span className="block font-bold text-[#1E3A5F]">1 قطعة ({t1?.price} درهم)</span>
              <span className="text-[10px] text-slate-400">للاستخدام الفردي</span>
            </div>
            <span className="text-[10px] text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">توصيل مجاني</span>
          </div>

          <div
            onClick={() => setSelectedTier(2)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 2
                ? 'border-emerald-400 bg-emerald-50 font-bold text-[#1E3A5F] shadow-sm ring-1 ring-emerald-200'
                : 'border-stone-200 bg-[#FDFBF7] text-slate-500 hover:border-stone-300'
            }`}
          >
            <div>
              <span className="block font-bold text-[#1E3A5F]">2 قطع ({t2?.price} درهم) 🔥</span>
              <span className="text-[10px] text-emerald-400 font-bold">{t2?.perUnitPrice} درهم للقطعة</span>
            </div>
              <span className="text-[10px] text-emerald-400 font-black bg-emerald-500/20 px-2 py-0.5 rounded">{t2?.savingsText ? 'عرض مميز' : 'وفر'}</span>
          </div>

          <div
            onClick={() => setSelectedTier(3)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 3
                ? 'border-amber-400 bg-amber-50 font-bold text-[#1E3A5F] shadow-sm'
                : 'border-stone-200 bg-[#FDFBF7] text-slate-500 hover:border-stone-300'
            }`}
          >
            <div>
              <span className="block font-bold text-[#1E3A5F]">3 قطع ({t3?.price} درهم) 🏆</span>
              <span className="text-[10px] text-amber-400 font-bold">{t3?.perUnitPrice} درهم للقطعة</span>
            </div>
              <span className="text-[10px] text-amber-400 font-black bg-amber-500/20 px-2 py-0.5 rounded">أفضل قيمة</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="border-t border-stone-200 pt-3 space-y-2">
        <button
          onClick={() => onQuickBuy(product, selectedTier)}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs md:text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-200/60 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>تأكيد الطلب الآن — {getTierPrice(selectedTier)} درهم</span>
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onAddToCart(product, selectedTier)}
            className="w-full bg-emerald-50 hover:bg-emerald-100 text-[#1E3A5F] text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-emerald-200"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-teal-600" />
            <span>+ أضف للسلة</span>
          </button>
          
          <Link
            href={`/products/${product.slug}`}
            className="w-full bg-white border border-stone-200 hover:bg-[#F6F1E8] text-slate-600 text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1"
          >
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>عرض الشرح</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
