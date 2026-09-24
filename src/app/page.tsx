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
      <section className="relative rounded-3xl overflow-hidden border border-[#E8E0D5] bg-white">
        <div className="relative z-10 px-6 md:px-12 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F6F1EA] border border-[#E8E0D5] text-[#3B342C] text-[11px] md:text-xs font-black px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Vitalis Maroc™ — العلامة المغربية المعتمدة لحلول الراحة اليومية</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#3B342C] max-w-4xl mx-auto leading-tight tracking-tight">
            حلول عملية ومبتكرة —
            <br />
            لروتين يومي أكثر راحة ونظافة
          </h1>

          <p className="text-[#8B8176] text-sm md:text-base mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
            منتجات أصلية ومختبرة بدقة لحل المشاكل الأكثر إزعاجاً في بيوت المغاربة. تمتع بمضاعفة صبيب الماء وتصفيته، تنظيف احترافي للأسنان واللثة، راحة فورية لآلام الركبة، وتتبع ذكي لوزنك وصحتك.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 text-[11px] md:text-xs text-[#3B342C]">
            {[
              { icon: <Award className="w-4 h-4" />, text: '+2,480 عميل راضٍ بالمغرب' },
              { icon: <ShieldCheck className="w-4 h-4" />, text: 'ضمان استبدال معتمد 12 شهراً' },
              { icon: <Truck className="w-4 h-4" />, text: 'توصيل مجاني 24-48 ساعة' },
              { icon: <Lock className="w-4 h-4" />, text: 'المعاينة والفحص قبل الدفع' },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-1.5 font-bold bg-[#F6F1EA] border border-[#E8E0D5] px-3.5 py-2 rounded-xl">
                {m.icon}
                <span>{m.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 md:gap-4 max-w-xl mx-auto">
            <div className="bg-[#F6F1EA] border border-[#E8E0D5] p-4 rounded-2xl">
              <span className="text-[10px] md:text-xs text-[#8B8176] block font-bold">1 قطعة</span>
              <span className="text-xl md:text-2xl font-black text-[#3B342C] mt-1 block">179 د.م</span>
              <span className="text-[9px] md:text-[10px] text-[#8B8176] font-bold mt-0.5 block">توصيل مجاني</span>
            </div>
            <div className="bg-white border-2 border-[#5C6B4F] p-4 rounded-2xl relative z-10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5C6B4F] text-white text-[10px] font-black px-3 py-0.5 rounded-full whitespace-nowrap">
                الأكثر طلباً بالمغرب
              </span>
              <span className="text-[10px] md:text-xs text-[#8B8176] block font-bold">2 قطع</span>
              <span className="text-xl md:text-2xl font-black text-[#3B342C] mt-1 block">269 د.م</span>
              <span className="text-[9px] md:text-[10px] text-[#5C6B4F] font-black mt-0.5 block">وفر 89 درهم</span>
            </div>
            <div className="bg-[#F6F1EA] border border-[#E8E0D5] p-4 rounded-2xl">
              <span className="text-[10px] md:text-xs text-[#8B8176] block font-bold">3 قطع</span>
              <span className="text-xl md:text-2xl font-black text-[#3B342C] mt-1 block">359 د.م</span>
              <span className="text-[9px] md:text-[10px] text-[#8B8176] font-bold mt-0.5 block">وفر 178 درهم</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 bg-[#5C6B4F] hover:bg-[#4A5740] text-white font-black text-sm md:text-base px-8 py-4.5 rounded-2xl transition-all cursor-pointer group active:scale-[0.98]"
            >
              <span>اكتشف المنتجات واطلب الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== ركائز الثقة والاعتمادية الأربعة ======== */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          {
            icon: <CheckCircle2 className="w-6 h-6 text-[#5C6B4F]" />,
            title: 'حلول عملية ومثبتة',
            desc: 'منتجات مختبرة تحل مشاكل حقيقية بنتائج فورية وملموسة من أول استعمال.',
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-[#5C6B4F]" />,
            title: 'المعاينة قبل الدفع',
            desc: 'افتح طردك وافحص منتجك أمام الموزع بكل راحة قبل دفع أي درهم.',
          },
          {
            icon: <RotateCcw className="w-6 h-6 text-[#5C6B4F]" />,
            title: 'ضمان ذهبي 12 شهراً',
            desc: 'استبدال فوري بمنتج جديد عند أي عيب مصنعي طوال سنة كاملة.',
          },
          {
            icon: <Truck className="w-6 h-6 text-[#5C6B4F]" />,
            title: 'توصيل مجاني وسريع',
            desc: 'شحن مجاني لكافة المدن والقرى المغربية خلال 24 إلى 48 ساعة لباب بيتك.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-[#E8E0D5] rounded-2xl p-5 hover:border-slate-300 hover:shadow-md transition-all group"
          >
            <div className="bg-[#F6F1EA] border border-[#E8E0D5] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="font-black text-sm text-[#3B342C] mb-1.5">{item.title}</h3>
            <p className="text-[#8B8176] text-[11px] leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ======== 3 منتجات معتمدة ======== */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B342C] bg-white px-3 py-1 rounded-full border border-[#E8E0D5] mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>منتجاتنا الثلاثة الأساسية بالمغرب</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#3B342C]">
            اختر الحل المناسب لاحتياجك اليومي
          </h2>
          <p className="text-[#8B8176] text-xs md:text-sm mt-1.5">
            حلول هندسية مصممة بدقة لمضاعفة صبيب الماء، تنظيف الأسنان المتقدم، راحة المفاصل، وتتبع الوزن الذكي.
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
      <section className="relative rounded-3xl overflow-hidden border border-[#E8E0D5] bg-white">
        <div className="relative z-10 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-black text-[#3B342C]">
              تسوق بكل راحة واطمئنان مع Vitalis Maroc™
            </h2>
            <p className="text-[#8B8176] text-xs mt-1">
              التزامات تجارية واضحة وصريحة لحماية كل مشتري في المغرب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                icon: <ShieldCheck className="w-7 h-7 text-[#5C6B4F]" />,
                title: 'حق المعاينة والفحص الكامل',
                desc: 'افتح الطرد وتفقد جودة المنتج أمام الموزع قبل دفع أي درهم. الدفع نقداً عند الاستلام بعد الرضا الكامل.',
              },
              {
                num: '02',
                icon: <Award className="w-7 h-7 text-[#5C6B4F]" />,
                title: 'ضمان استبدال ذهبي 12 شهراً',
                desc: 'أي عيب مصنعي خلال سنة كاملة يتم تعويضه باستبدال فوري بمنتج جديد دون أي مصاريف أو تعقيدات.',
              },
              {
                num: '03',
                icon: <Truck className="w-7 h-7 text-[#5C6B4F]" />,
                title: 'توصيل مجاني وسريع لكافة المدن',
                desc: 'شحن مجاني 100% لباب منزلك خلال 24 إلى 48 ساعة أينما كنت في ربوع المملكة المغربية.',
              },
            ].map((g, i) => (
              <div key={i} className="bg-[#F6F1EA] border border-[#E8E0D5] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#8B8176] font-black text-2xl">{g.num}</span>
                  {g.icon}
                </div>
                <h3 className="font-black text-sm text-[#3B342C]">{g.title}</h3>
                <p className="text-[#8B8176] text-xs leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-[#5C6B4F] hover:bg-[#4A5740] text-white font-black text-sm px-8 py-4 rounded-2xl transition-all cursor-pointer"
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

  const tierData = product.offerTiers.map((t) => ({
    tier: t.tier,
    label: t.tier === 1 ? '1 قطعة' : t.tier === 2 ? '2 قطع' : '3 قطع',
    price: t.price,
    sub: t.tier === 1 ? 'شخصي' : t.savingsText,
    accent: t.accent,
    popular: t.popular,
  }));

  return (
    <div className="bg-white border border-[#E8E0D5] rounded-3xl p-5 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm group hover:shadow-md">
      <div>
        <Link href={`/products/${product.slug}`} className="block relative bg-[#F6F1EA] rounded-2xl p-4 border border-[#E8E0D5] mb-4 overflow-hidden group-hover:border-slate-300 transition-all">
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
        <span className="text-[10px] font-bold text-[#3B342C] bg-[#F6F1EA] px-2.5 py-0.5 rounded-full border border-[#E8E0D5]">
          {product.badge}
        </span>

        <h3 className="font-bold text-base text-[#3B342C] mt-2 mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-[#8B8176] text-xs line-clamp-2 mb-4 leading-relaxed">
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
                  ? 'border-[#5C6B4F] bg-[#F6F1EA] text-[#3B342C] font-bold'
                  : 'border-[#E8E0D5] bg-[#F6F1EA] text-[#8B8176] hover:border-slate-300'
              }`}
            >
              {popular && (
                <span className="absolute -top-2 right-2 text-[8px] font-black bg-[#F6F1EA]0 text-slate-950 px-1.5 py-0.5 rounded-full shadow-sm">
                  ★ الأكثر طلباً بالمغرب
                </span>
              )}
              <span>{label}</span>
              <div className="text-left">
                <span className="font-black text-[#3B342C]">
                  {price} د.م
                </span>
                {sub && <span className="text-[9px] text-[#8B8176] block">{sub}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#E8E0D5] pt-3 space-y-2">
        <button
          onClick={() => onAddToCart(product, selectedTier)}
          className="w-full bg-[#5C6B4F] hover:bg-[#4A5740] text-white font-black text-xs py-3 rounded-xl transition-all cursor-pointer"
        >
          أضف للسلة ({tierData.find((t) => t.tier === selectedTier)?.price} د.م) 🛒
        </button>

        <Link
          href={`/products/${product.slug}`}
          className="block text-center text-[#8B8176] hover:text-[#3B342C] text-[11px] font-bold py-1 cursor-pointer transition-colors"
        >
          التفاصيل والمواصفات الكاملة ❯
        </Link>
      </div>
    </div>
  );
}
