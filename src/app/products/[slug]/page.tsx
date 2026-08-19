'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { PRODUCTS, Product } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import { ShieldCheck, Star, CheckCircle, Sparkles, Truck, Lock, ArrowLeft } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : (Array.isArray(params?.slug) ? params.slug[0] : '');
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addItem } = useCartStore();
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const getTierPrice = (tier: number) => {
    if (tier === 1) return 249;
    if (tier === 2) return 379;
    return 499;
  };

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="space-y-16">
      
      {/* Product Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl">
        
        {/* Mockup / Image Gallery */}
        <div className="space-y-4">
          <div className="bg-slate-950 rounded-3xl flex items-center justify-center text-9xl py-20 border border-slate-800/80 shadow-inner">
            {product.icon}
          </div>
          
          {/* 3-4 Thumbnails Mockups */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-3 text-center text-xs text-slate-400 font-bold"
              >
                <div className="text-2xl mb-1">{product.icon}</div>
                <span>صورة زاوية {idx}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details & Purchasing Card */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
                {product.badge}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{product.rating} ({product.reviewsCount}+ مراجعة بالمغرب)</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
              {product.headline}
            </h1>
            <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
              {product.subheadline}
            </p>

            {/* Quick Feature Checklist */}
            <div className="space-y-2 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 my-5">
              <span className="text-xs font-bold text-slate-400 block mb-2">المواصفات والضمانات المعتمدة:</span>
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Offer Tier Selection (Official Matrix) */}
            <div className="space-y-2 mb-5">
              <label className="text-xs font-bold text-slate-300 block">اختر باقة العرض للاستفادة من الخصم والتوصيل المجاني:</label>
              
              <div
                onClick={() => setSelectedTier(1)}
                className={`p-3 rounded-2xl border-2 flex justify-between items-center cursor-pointer transition-all ${
                  selectedTier === 1 ? 'border-teal-500 bg-teal-500/10' : 'border-slate-800 bg-slate-950/50'
                }`}
              >
                <div>
                  <div className="font-bold text-xs text-white">باقة قطعة واحدة (1)</div>
                  <div className="text-[10px] text-slate-400">توصيل مجاني لباب المنزل</div>
                </div>
                <div className="text-base font-black text-teal-400">249 درهم</div>
              </div>

              <div
                onClick={() => setSelectedTier(2)}
                className={`p-3 rounded-2xl border-2 flex justify-between items-center cursor-pointer transition-all relative ${
                  selectedTier === 2 ? 'border-teal-500 bg-teal-500/10' : 'border-slate-800 bg-slate-950/50'
                }`}
              >
                <span className="absolute -top-2 left-4 bg-teal-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full">
                  الأكثر توفيراً (وفر 119 درهم)
                </span>
                <div>
                  <div className="font-bold text-xs text-white">باقة قطعتين (2) — لك وللعائلة</div>
                  <div className="text-[10px] text-emerald-400">توصيل مجاني + أولوية الإرسال</div>
                </div>
                <div className="text-base font-black text-teal-400">379 درهم</div>
              </div>

              <div
                onClick={() => setSelectedTier(3)}
                className={`p-3 rounded-2xl border-2 flex justify-between items-center cursor-pointer transition-all relative ${
                  selectedTier === 3 ? 'border-amber-500 bg-amber-500/10' : 'border-slate-800 bg-slate-950/50'
                }`}
              >
                <span className="absolute -top-2 left-4 bg-amber-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full">
                  باقة العائلة والراحة التامة (وفر 248 درهم)
                </span>
                <div>
                  <div className="font-bold text-xs text-white">باقة 3 قطع (3)</div>
                  <div className="text-[10px] text-amber-400">توصيل مجاني + ضمان استبدال موسع</div>
                </div>
                <div className="text-base font-black text-amber-400">499 درهم</div>
              </div>
            </div>
          </div>

          {/* Purchasing CTA Button */}
          <div className="border-t border-slate-800 pt-4 space-y-3">
            <button
              onClick={() => addItem(product, selectedTier)}
              className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-base py-4 rounded-2xl shadow-xl shadow-teal-500/15 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>أضف إلى السلة للمعاينة والدفع عند الاستلام ({getTierPrice(selectedTier)} درهم) 🛒</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>معاينة وفحص مجاني أمام الموزع + ضمان استبدال لمدة سنة كاملة</span>
            </div>
          </div>

        </div>

      </div>

      {/* Alternating Proof & Science Sections */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            الأساس العلمي والفيزيائي للمنتج
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mt-2">لماذا يثق آلاف المغاربة في {product.name}؟</h2>
        </div>

        <div className="space-y-8">
          {product.sections.map((sec, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-10"
            >
              {/* Text Side */}
              <div className={`space-y-3 ${sec.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                <span className="text-[11px] font-bold text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full">
                  {sec.highlight}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white leading-snug">
                  {sec.title}
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  {sec.description}
                </p>
              </div>

              {/* Image / Visual Side */}
              <div className={`bg-slate-950 rounded-3xl p-8 border border-slate-800 flex flex-col items-center justify-center text-center text-slate-400 text-xs ${sec.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                <div className="text-6xl mb-3">{product.icon}</div>
                <span className="font-bold text-slate-300">{sec.placeholderSvgText}</span>
                <span className="text-[10px] text-slate-500 mt-1">[صورة توضيحية ثلاثية الأبعاد للأدلة العلمية والتجريبية]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Sells Section at bottom of page */}
      <section className="border-t border-slate-800 pt-10">
        <h3 className="text-xl font-black text-white mb-6">منتجات إضافية تكميلية لروتينك اليومي (Cross-Sells):</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProducts.map((other) => (
            <div
              key={other.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <span className="text-4xl p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  {other.icon}
                </span>
                <div>
                  <h4 className="font-bold text-xs md:text-sm text-white line-clamp-1">{other.name}</h4>
                  <span className="text-teal-400 font-black text-xs block mt-0.5">249 درهم مغربي</span>
                  <span className="text-[10px] text-emerald-400 font-bold">شامل التوصيل المجاني</span>
                </div>
              </div>
              <button
                onClick={() => addItem(other, 1)}
                className="bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-sm"
              >
                + أضف للسلة
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
