'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import SharedSocialProofSection from '@/components/SharedSocialProofSection';
import {
  ShieldCheck, Star, CheckCircle2, ArrowLeft,
  Truck, Award, Sparkles, Check, Package, RotateCcw,
  BadgeCheck, Lock, CheckCircle, ShieldAlert, Zap
} from 'lucide-react';

export default function HomePage() {
  const { addItem } = useCartStore();

  return (
    <div className="space-y-16">

      {/* ======== HERO — تموضع قوي، موثوق، واحترافي ======== */}
      <section className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0C192E] to-slate-950" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 40%, #059669 0%, transparent 50%), radial-gradient(circle at 80% 30%, #0D9488 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 px-6 md:px-12 py-14 md:py-20 text-center">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-black px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Vitalis Maroc™ — العلامة المغربية المعتمدة لحلول الراحة اليومية</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl mx-auto leading-tight tracking-tight">
            حلول عملية ومبتكرة —
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              لروتين يومي أكثر راحة ونظافة
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed font-normal">
            منتجات أصلية ومختبرة بدقة لحل المشاكل الأكثر إزعاجاً في البيت، العمل، والسيارة بالمغرب. تمتع بمضاعفة صبيب الماء وتصفيته، تنظيف احترافي للأسنان واللثة، وتخفيف آلام الظهر وعرق النسا.
          </p>

          {/* Trust Metrics Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 text-xs text-slate-300">
            {[
              { icon: <Award className="w-4 h-4 text-amber-400" />, text: '+2,480 عميل راضٍ بالمغرب' },
              { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, text: 'ضمان استبدال معتمد 12 شهراً' },
              { icon: <Truck className="w-4 h-4 text-teal-400" />, text: 'توصيل مجاني 24-48 ساعة' },
              { icon: <Lock className="w-4 h-4 text-slate-400" />, text: 'المعاينة والفحص قبل الدفع' },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-1.5 font-bold bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-xl">
                {m.icon}
                <span>{m.text}</span>
              </div>
            ))}
          </div>

          {/* Official Pricing Matrix */}
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg mx-auto">
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl backdrop-blur-sm">
              <span className="text-[10px] text-slate-400 block font-bold">1 قطعة</span>
              <span className="text-xl font-black text-emerald-400 mt-0.5 block">249 د.م</span>
              <span className="text-[9px] text-slate-500 font-medium">توصيل مجاني</span>
            </div>
            <div className="bg-slate-950/80 border border-emerald-500/40 p-3.5 rounded-2xl backdrop-blur-sm relative ring-1 ring-emerald-500/20 shadow-lg shadow-emerald-950/30">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[9px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                الأكثر طلباً بالمغرب 🔥
              </span>
              <span className="text-[10px] text-slate-400 block font-bold">2 قطع</span>
              <span className="text-xl font-black text-emerald-400 mt-0.5 block">379 د.م</span>
              <span className="text-[9px] text-emerald-400 font-black">وفر 119 درهم</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl backdrop-blur-sm">
              <span className="text-[10px] text-slate-400 block font-bold">3 قطع</span>
              <span className="text-xl font-black text-amber-400 mt-0.5 block">499 د.م</span>
              <span className="text-[9px] text-amber-400 font-black">وفر 248 درهم</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-emerald-950/40 transition-all cursor-pointer"
            >
              <span>اكتشف المنتجات واطلب الآن</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== ركائز الثقة والاعتمادية الأربعة ======== */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
            title: 'حلول عملية ومثبتة',
            desc: 'منتجات مختبرة تحل مشاكل حقيقية بنتائج فورية وملموسة من أول استعمال.',
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
            title: 'المعاينة قبل الدفع',
            desc: 'افتح طردك وافحص منتجك أمام الموزع بكل راحة قبل دفع أي درهم.',
          },
          {
            icon: <RotateCcw className="w-6 h-6 text-amber-400" />,
            title: 'ضمان ذهبي 12 شهراً',
            desc: 'استبدال فوري بمنتج جديد عند أي عيب مصنعي طوال سنة كاملة.',
          },
          {
            icon: <Truck className="w-6 h-6 text-emerald-400" />,
            title: 'توصيل مجاني وسريع',
            desc: 'شحن مجاني لكافة المدن والقرى المغربية خلال 24 إلى 48 ساعة لباب بيتك.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all shadow-md"
          >
            <div className="bg-slate-950 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
              {item.icon}
            </div>
            <h3 className="font-black text-sm text-white mb-1">{item.title}</h3>
            <p className="text-slate-400 text-[11px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ======== 3 منتجات معتمدة ======== */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>منتجاتنا الثلاثة الأساسية بالمغرب</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            اختر الحل المناسب لاحتياجك اليومي
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-1.5">
            حلول هندسية مصممة بدقة لمضاعفة صبيب الماء، تنظيف الأسنان المتقدم، والجلوس الصحي المريح.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </section>

      {/* ======== تجارب وآراء الزبناء بالمغرب المشتركة ======== */}
      <SharedSocialProofSection />

      {/* ======== التزاماتنا وضمانات الشراء المعتمدة ======== */}
      <section className="relative rounded-3xl overflow-hidden border border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
        <div className="relative z-10 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-black text-white">
              تسوق بكل راحة واطمئنان مع Vitalis Maroc™
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              التزامات تجارية واضحة وصريحة لحماية كل مشتري في المغرب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
                title: 'حق المعاينة والفحص الكامل',
                desc: 'افتح الطرد وتفقد جودة المنتج أمام الموزع قبل دفع أي درهم. الدفع نقداً عند الاستلام بعد الرضا الكامل.',
              },
              {
                num: '02',
                icon: <Award className="w-7 h-7 text-amber-400" />,
                title: 'ضمان استبدال ذهبي 12 شهراً',
                desc: 'أي عيب مصنعي خلال سنة كاملة يتم تعويضه باستبدال فوري بمنتج جديد دون أي مصاريف أو تعقيدات.',
              },
              {
                num: '03',
                icon: <Truck className="w-7 h-7 text-teal-400" />,
                title: 'توصيل مجاني وسريع لكافة المدن',
                desc: 'شحن مجاني 100% لباب منزلك خلال 24 إلى 48 ساعة أينما كنت في ربوع المملكة المغربية.',
              },
            ].map((g, i) => (
              <div key={i} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 font-black text-2xl">{g.num}</span>
                  {g.icon}
                </div>
                <h3 className="font-black text-sm text-white">{g.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition-all cursor-pointer"
            >
              <span>تصفح المنتجات واطلب الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// ——— بطاقة المنتج (Product Card) ———
function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (p: Product, qty: number) => void }) {
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const tierData = [
    { tier: 1, label: '1 قطعة', price: 249, sub: 'شخصي', accent: 'teal' },
    { tier: 2, label: '2 قطع', price: 379, sub: 'وفر 119 د.م', accent: 'emerald', popular: true },
    { tier: 3, label: '3 قطع', price: 499, sub: 'وفر 248 د.م', accent: 'amber' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group hover:shadow-2xl hover:shadow-teal-950/20">
      <div>
        {/* Real Product Image Box */}
        <Link href={`/products/${product.slug}`} className="block relative bg-slate-950 rounded-2xl p-4 border border-slate-800/80 mb-4 overflow-hidden group-hover:border-teal-500/40 transition-all">
          <div className="w-full h-56 relative flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>

        {/* Category badge */}
        <span className="text-[10px] font-bold text-teal-400 bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-teal-400/20">
          {product.badge}
        </span>

        <h3 className="font-bold text-base text-white mt-2 mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">
          {product.subheadline}
        </p>

        {/* Tier selector */}
        <div className="space-y-1.5 mb-4">
          {tierData.map(({ tier, label, price, sub, accent, popular }) => (
            <div
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all relative ${
                selectedTier === tier
                  ? accent === 'amber'
                    ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                    : 'border-emerald-500 bg-emerald-500/10 text-white font-bold ring-1 ring-emerald-500/30'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
              }`}
            >
              {popular && (
                <span className="absolute -top-2 right-2 text-[8px] font-black bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded-full shadow-sm">
                  ★ الأكثر طلباً بالمغرب
                </span>
              )}
              <span>{label}</span>
              <div className="text-left">
                <span className={`font-black ${accent === 'amber' ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {price} د.م
                </span>
                {sub && <span className="text-[9px] text-slate-500 block">{sub}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 pt-3 space-y-2">
        <button
          onClick={() => onAddToCart(product, selectedTier)}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs py-3 rounded-xl shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
        >
          أضف للسلة ({tierData.find((t) => t.tier === selectedTier)?.price} د.م) 🛒
        </button>

        <Link
          href={`/products/${product.slug}`}
          className="block text-center text-slate-400 hover:text-teal-400 text-[11px] font-bold py-1 cursor-pointer transition-colors"
        >
          التفاصيل والمواصفات الكاملة ❯
        </Link>
      </div>
    </div>
  );
}
