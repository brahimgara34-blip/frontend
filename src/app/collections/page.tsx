'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function CollectionsPage() {
  const { addItem } = useCartStore();

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>كافة المنتجات المعتمدة في المغرب</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-white">مجموعة حلول الراحة والعناية المتطورة</h1>
        <p className="text-slate-400 text-xs md:text-sm mt-1">
          منتجات أصلية مصممة بأعلى معايير الهندسة التقويمية والمائية، مع التوصيل المجاني والدفع عند المعاينة.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <CollectionCard key={product.id} product={product} onAddToCart={addItem} />
        ))}
      </div>

    </div>
  );
}

function CollectionCard({ product, onAddToCart }: { product: Product; onAddToCart: (p: Product, qty: number) => void }) {
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const getTierPrice = (tier: number) => {
    if (tier === 1) return 249;
    if (tier === 2) return 379;
    return 499;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
      <div>
        <div className="bg-slate-950 rounded-2xl py-10 flex items-center justify-center text-7xl border border-slate-800 mb-4">
          {product.icon}
        </div>

        <span className="text-[10px] font-bold text-teal-400 bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-teal-400/20">
          {product.badge}
        </span>

        <h2 className="font-bold text-base text-white mt-2 mb-1.5">{product.name}</h2>
        <p className="text-slate-400 text-xs mb-4 leading-relaxed">{product.subheadline}</p>

        {/* Tier Selector */}
        <div className="space-y-1.5 mb-4">
          <div
            onClick={() => setSelectedTier(1)}
            className={`p-2 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 1 ? 'border-teal-500 bg-teal-500/10 font-bold text-white' : 'border-slate-800 bg-slate-950/60 text-slate-400'
            }`}
          >
            <span>1 قطعة (249 درهم)</span>
            <span className="text-[10px] text-teal-400">توصيل مجاني</span>
          </div>

          <div
            onClick={() => setSelectedTier(2)}
            className={`p-2 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 2 ? 'border-teal-500 bg-teal-500/10 font-bold text-white' : 'border-slate-800 bg-slate-950/60 text-slate-400'
            }`}
          >
            <span>2 قطع (379 درهم)</span>
            <span className="text-[10px] text-emerald-400 font-bold">وفر 119 درهم</span>
          </div>

          <div
            onClick={() => setSelectedTier(3)}
            className={`p-2 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all ${
              selectedTier === 3 ? 'border-amber-500 bg-amber-500/10 font-bold text-white' : 'border-slate-800 bg-slate-950/60 text-slate-400'
            }`}
          >
            <span>3 قطع (499 درهم)</span>
            <span className="text-[10px] text-amber-400 font-bold">وفر 248 درهم</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-3 space-y-2">
        <button
          onClick={() => onAddToCart(product, selectedTier)}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 text-slate-950 font-black text-xs py-3 rounded-xl shadow-lg transition-all cursor-pointer"
        >
          أضف إلى السلة ({getTierPrice(selectedTier)} درهم) 🛒
        </button>

        <Link
          href={`/products/${product.slug}`}
          className="block text-center text-slate-400 hover:text-teal-400 text-[11px] font-bold py-1 cursor-pointer"
        >
          صفحة المنتج والأدلة ❯
        </Link>
      </div>
    </div>
  );
}
