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
      <div className="bg-white border border-[#E8E0D5] rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden text-center md:text-right">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#F6F1EA] border border-[#E8E0D5] text-[#3B342C] text-[11px] md:text-xs font-black px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#5C6B4F]" />
            <span>المنتجات الحصرية المعتمدة 2026 — Vitalis Maroc™</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-[#3B342C] leading-tight">
            تشكيلة المنتجات الرابحة لحياة يومية أكثر راحة ونظافة
          </h1>
          <p className="text-[#8B8176] text-xs md:text-sm mt-3 leading-relaxed font-medium">
            منتجات أصلية مختارة ومختبرة بعناية لحل مشاكل يومية حقيقية بنتائج فورية. جميع المنتجات مشمولة بـ <span className="text-[#3B342C] font-bold">التوصيل المجاني</span> و<span className="text-[#3B342C] font-bold">المعاينة قبل الدفع</span> و<span className="text-[#3B342C] font-bold">ضمان 12 شهراً</span>.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] md:text-xs text-[#3B342C]">
          <div className="flex items-center gap-1.5 bg-[#F6F1EA] border border-[#E8E0D5] px-3.5 py-2 rounded-xl">
            <Truck className="w-4 h-4 text-[#5C6B4F]" />
            <span className="font-bold">شحن مجاني 24-48h</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#F6F1EA] border border-[#E8E0D5] px-3.5 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#5C6B4F]" />
            <span className="font-bold">افحص السلعة عاد خلص</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#F6F1EA] border border-[#E8E0D5] px-3.5 py-2 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-[#5C6B4F]" />
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
    <div className="bg-white border border-[#E8E0D5] hover:border-[#E8E0D5] rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 shadow-sm group hover:shadow-xl">
      <div>
        <Link href={`/products/${product.slug}`} className="block relative bg-[#F6F1EA] rounded-2xl p-4 border border-[#E8E0D5] mb-5 overflow-hidden group-hover:border-[#E8E0D5] transition-all">
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10 pointer-events-none" />
          
          {/* Badges Overlay */}
          <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 items-end">
            <span className="bg-white/95 backdrop-blur-md text-[#3B342C] text-[10px] font-black px-3 py-1.5 rounded-lg border border-[#E8E0D5] shadow-md">
              {product.badge}
            </span>
            <span className="flex items-center gap-1 text-[9px] font-black text-[#8B8176] bg-[#F6F1EA] border border-[#E8E0D5] px-2.5 py-1 rounded-md">
              <Flame className="w-3 h-3 text-[#8B8176] animate-pulse" />
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

          <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#8B8176] flex items-center gap-1.5 border border-[#E8E0D5] shadow-sm transition-colors group-hover:text-[#3B342C] group-hover:border-[#E8E0D5]">
            <Eye className="w-3.5 h-3.5" />
            <span>عرض التفاصيل</span>
          </div>
        </Link>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-[#8B8176]" />
              ))}
            </div>
            <span className="text-xs font-black text-[#3B342C]">4.9</span>
          </div>
          <span className="text-[10px] font-bold text-[#8B8176]">({product.reviewsCount} تقييم)</span>
        </div>

        {/* Title */}
        <Link href={`/products/${product.slug}`} className="px-1 block">
          <h2 className="font-black text-base md:text-lg text-[#3B342C] group-hover:text-[#3B342C] transition-colors leading-snug line-clamp-2">
            {product.name}
          </h2>
        </Link>
        <p className="text-[#8B8176] text-[11px] md:text-xs mt-2 mb-5 line-clamp-2 leading-relaxed font-medium px-1">
          {product.subheadline}
        </p>

        {/* Tier Selector */}
        <div className="space-y-1.5 mb-4">
          <div
            onClick={() => setSelectedTier(1)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 1
                ? 'border-[#5C6B4F] bg-[#F6F1EA] font-bold text-[#3B342C] shadow-sm'
                : 'border-[#E8E0D5] bg-[#FFFFFF] text-[#8B8176] hover:border-stone-300'
            }`}
          >
            <div>
              <span className="block font-bold text-[#3B342C]">1 قطعة ({t1?.price} درهم)</span>
              <span className="text-[10px] text-[#8B8176]">للاستخدام الفردي</span>
            </div>
            <span className="text-[10px] text-[#5C6B4F] font-bold bg-[#F6F1EA]0/10 px-2 py-0.5 rounded">توصيل مجاني</span>
          </div>

          <div
            onClick={() => setSelectedTier(2)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 2
                ? 'border-[#5C6B4F] bg-[#F6F1EA] font-bold text-[#3B342C] shadow-sm'
                : 'border-[#E8E0D5] bg-[#FFFFFF] text-[#8B8176] hover:border-stone-300'
            }`}
          >
            <div>
              <span className="block font-bold text-[#3B342C]">2 قطع ({t2?.price} درهم) 🔥</span>
              <span className="text-[10px] text-[#5C6B4F] font-bold">{t2?.perUnitPrice} درهم للقطعة</span>
            </div>
              <span className="text-[10px] text-[#5C6B4F] font-black bg-[#F6F1EA]0/20 px-2 py-0.5 rounded">{t2?.savingsText ? 'عرض مميز' : 'وفر'}</span>
          </div>

          <div
            onClick={() => setSelectedTier(3)}
            className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 3
                ? 'border-[#5C6B4F] bg-[#F6F1EA] font-bold text-[#3B342C] shadow-sm'
                : 'border-[#E8E0D5] bg-[#FFFFFF] text-[#8B8176] hover:border-stone-300'
            }`}
          >
            <div>
              <span className="block font-bold text-[#3B342C]">3 قطع ({t3?.price} درهم) 🏆</span>
              <span className="text-[10px] text-[#8B8176] font-bold">{t3?.perUnitPrice} درهم للقطعة</span>
            </div>
              <span className="text-[10px] text-[#8B8176] font-black bg-[#F6F1EA]0/20 px-2 py-0.5 rounded">أفضل قيمة</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="border-t border-[#E8E0D5] pt-3 space-y-2">
        <button
          onClick={() => onQuickBuy(product, selectedTier)}
          className="w-full bg-[#5C6B4F] hover:bg-[#4A5740] text-white font-black text-xs md:text-sm py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>تأكيد الطلب الآن — {getTierPrice(selectedTier)} درهم</span>
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onAddToCart(product, selectedTier)}
            className="w-full bg-[#F6F1EA] hover:bg-[#E8E0D5] text-[#3B342C] text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-[#E8E0D5]"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-[#5C6B4F]" />
            <span>+ أضف للسلة</span>
          </button>
          
          <Link
            href={`/products/${product.slug}`}
            className="w-full bg-white border border-[#E8E0D5] hover:bg-[#F6F1EA] text-[#8B8176] text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1"
          >
            <Eye className="w-3.5 h-3.5 text-[#8B8176]" />
            <span>عرض الشرح</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
