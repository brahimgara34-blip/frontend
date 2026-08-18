'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import { ShieldCheck, Star, Sparkles, CheckCircle2, ArrowLeft, Truck, Zap } from 'lucide-react';

export default function HomePage() {
  const { addItem } = useCartStore();

  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 text-xs md:text-sm font-black px-4 py-1.5 rounded-full border border-teal-500/20 mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>العلامة المغربية الأولى لحلول الراحة والعناية المتطورة</span>
        </div>

        <h1 className="text-3xl md:text-6xl font-black text-white max-w-4xl mx-auto leading-tight md:leading-tight">
          إعادة هندسة روتينك اليومي لحياة <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">أكثر راحة وصحة</span>
        </h1>

        <p className="text-slate-300 text-sm md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          حلول تقويمية ومائية معتمدة تحمي شعرك وبشرتك من الكالكير، تحافظ على صحة فمك ولثتك، وتخلصك من آلام أسفل الظهر والجلوس الطويل.
        </p>

        {/* Official Pricing Matrix Banner */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
            <span className="text-[11px] text-slate-400 block font-bold">باقة القطعة الواحدة</span>
            <span className="text-xl font-black text-teal-400 mt-1 block">249 درهم</span>
            <span className="text-[10px] text-slate-500">توصيل مجاني</span>
          </div>

          <div className="bg-slate-950/80 border border-teal-500/40 p-3.5 rounded-2xl relative">
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-teal-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
              الأكثر طلباً بالمغرب
            </span>
            <span className="text-[11px] text-slate-400 block font-bold">باقة قطعتين (2)</span>
            <span className="text-xl font-black text-teal-400 mt-1 block">379 درهم</span>
            <span className="text-[10px] text-emerald-400 font-bold">وفر 119 درهم</span>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
            <span className="text-[11px] text-slate-400 block font-bold">باقة 3 قطع (العائلة)</span>
            <span className="text-xl font-black text-amber-400 mt-1 block">499 درهم</span>
            <span className="text-[10px] text-emerald-400 font-bold">وفر 248 درهم</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/collections"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-sm md:text-base px-8 py-4 rounded-2xl shadow-xl shadow-teal-500/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>استكشف المنتجات الثلاثة الرابحة</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 3 Featured Products Showcase */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white">منتجاتنا الثلاثة المعتمدة</h2>
          <p className="text-slate-400 text-xs md:text-sm mt-1">
            صُممت بدقة لحل المشاكل الجسدية والمنزلية الأكثر إزعاجاً وقلقاً في المغرب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </section>

      {/* Social Proof & Scientific Testimonials */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-white text-xs font-bold mr-2">4.9 / 5 تقييم ممتاز</span>
            </div>
            <h3 className="text-xl font-black text-white">آراء وتجارب موثقة من زبنائنا في المغرب</h3>
          </div>
          <span className="text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800">
            أكثر من 2,480+ عميل راضٍ عبر المملكة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white">ياسين المنصوري</span>
              <span className="text-[10px] text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">مشتري موثق • الدار البيضاء</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              "دوش التوربو بدل ليا الدوش 180 درجة فـ الطابق الرابع. الصبيب ولى مجهد بزاف وشعري مابقاش كيطيح بسبب الكالكير. سلعة ممتازة وتوصيل سريع."
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white">د. سكينة العلمي</span>
              <span className="text-[10px] text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">مشتري موثق • الرباط</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              "خيط الأسنان المائي AuraFloss عتقني مع التقويم (Les bagues). كينقي كاع البقايا فـ ثواني بلا أي دم فـ اللثة. كنصح بيه أي واحد."
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-white">حميد بناني</span>
              <span className="text-[10px] text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded">مشتري موثق • طنجة</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              "كسائق مهني كنجلس ساعات فـ الطاكسي، وسادة ErgoCushion حيدات عليا الحريق د الظهر وعرق النسا تماماً. باردة ومريحة بزاف."
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (p: Product, qty: number) => void }) {
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const getTierPrice = (tier: number) => {
    if (tier === 1) return 249;
    if (tier === 2) return 379;
    return 499;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg group">
      <div>
        {/* Mockup / Image Placeholder */}
        <div className="bg-slate-950 rounded-2xl py-8 flex items-center justify-center text-6xl border border-slate-800/80 mb-4 group-hover:scale-105 transition-transform">
          {product.icon}
        </div>

        <span className="text-[10px] font-bold text-teal-400 bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-teal-400/20">
          {product.badge}
        </span>

        <h3 className="font-bold text-base text-white mt-2 mb-1.5 leading-snug">
          {product.name}
        </h3>

        <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">
          {product.subheadline}
        </p>

        {/* Tier Selector in Card */}
        <div className="space-y-1.5 mb-4">
          <div
            onClick={() => setSelectedTier(1)}
            className={`p-2 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 1 ? 'border-teal-500 bg-teal-500/10 font-bold text-white' : 'border-slate-800 bg-slate-950/60 text-slate-400'
            }`}
          >
            <span>1 قطعة (شخصي)</span>
            <span className="text-teal-400 font-black">249 درهم</span>
          </div>

          <div
            onClick={() => setSelectedTier(2)}
            className={`p-2 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 2 ? 'border-teal-500 bg-teal-500/10 font-bold text-white' : 'border-slate-800 bg-slate-950/60 text-slate-400'
            }`}
          >
            <span>2 قطع (وفر 119 درهم)</span>
            <span className="text-teal-400 font-black">379 درهم</span>
          </div>

          <div
            onClick={() => setSelectedTier(3)}
            className={`p-2 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 3 ? 'border-amber-500 bg-amber-500/10 font-bold text-white' : 'border-slate-800 bg-slate-950/60 text-slate-400'
            }`}
          >
            <span>3 قطع (باقة العائلة)</span>
            <span className="text-amber-400 font-black">499 درهم</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-3 space-y-2">
        <button
          onClick={() => onAddToCart(product, selectedTier)}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-xs py-3 rounded-xl shadow-lg transition-all cursor-pointer"
        >
          أضف إلى السلة ({getTierPrice(selectedTier)} درهم) 🛒
        </button>

        <Link
          href={`/products/${product.slug}`}
          className="block text-center text-slate-400 hover:text-teal-400 text-[11px] font-bold py-1 cursor-pointer"
        >
          عرض التفاصيل والأدلة العلمية ❯
        </Link>
      </div>
    </div>
  );
}
