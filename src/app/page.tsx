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
      <section className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] bg-gradient-to-bl from-[#ECFDF5] via-white to-white">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-12 py-10 md:py-16">
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white border border-[#A7F3D0] text-[#047857] text-[11px] md:text-xs font-black px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span>الدفع عند الاستلام — توصيل مجاني لجميع المدن</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-[#111827] leading-tight tracking-tight">
              دارك مرتبة، ونهارك
              <span className="text-[#047857]"> أسهل</span>
            </h1>

            <p className="text-[#6B7280] text-sm md:text-base mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              منتجات عملية للبيت المغربي: آلة ملاكمة موسيقية للولاد، خزانة للحوايج، لوحة مساج للرجلين، كرسي الماكلة، ومنظم المكياج. شوف المنتج بعينيك قبل ما تخلص.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 text-[11px] md:text-xs text-[#111827]">
              {[
                { icon: <Lock className="w-4 h-4 text-[#047857]" />, text: 'المعاينة قبل الدفع' },
                { icon: <Truck className="w-4 h-4 text-[#047857]" />, text: 'توصيل 24-48 ساعة' },
                { icon: <ShieldCheck className="w-4 h-4 text-[#047857]" />, text: 'ضمان استبدال 12 شهراً' },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-1.5 font-bold bg-white border border-[#E5E7EB] px-3 py-2 rounded-xl shadow-sm">
                  {m.icon}
                  <span>{m.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-orange-500/25 text-white font-black text-sm md:text-base px-8 py-4 rounded-2xl transition-all cursor-pointer group active:scale-[0.98]"
              >
                <span>شوف المنتجات واطلب دابا</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {PRODUCTS.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all ${
                  p.id === 'boxing-machine' ? 'col-span-2 aspect-[16/8]' : 'aspect-square'
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.shortName}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-right">
                  <span className="block text-white text-xs md:text-sm font-black leading-tight">{p.shortName}</span>
                  <span className="block text-[#FDBA74] text-xs font-black mt-0.5">{p.offerTiers[0].price} درهم</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== ركائز الثقة والاعتمادية الأربعة ======== */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          {
            icon: <CheckCircle2 className="w-6 h-6 text-[#047857]" />,
            title: 'حلول عملية ومثبتة',
            desc: 'منتجات مختبرة تحل مشاكل حقيقية بنتائج فورية وملموسة من أول استعمال.',
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-[#047857]" />,
            title: 'المعاينة قبل الدفع',
            desc: 'افتح طردك وافحص منتجك أمام الموزع بكل راحة قبل دفع أي درهم.',
          },
          {
            icon: <RotateCcw className="w-6 h-6 text-[#047857]" />,
            title: 'ضمان ذهبي 12 شهراً',
            desc: 'استبدال فوري بمنتج جديد عند أي عيب مصنعي طوال سنة كاملة.',
          },
          {
            icon: <Truck className="w-6 h-6 text-[#047857]" />,
            title: 'توصيل مجاني وسريع',
            desc: 'شحن مجاني لكافة المدن والقرى المغربية خلال 24 إلى 48 ساعة لباب بيتك.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:border-slate-300 hover:shadow-md transition-all group"
          >
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="font-black text-sm text-[#111827] mb-1.5">{item.title}</h3>
            <p className="text-[#6B7280] text-[11px] leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ======== 3 منتجات معتمدة ======== */}
      <section id="products" className="space-y-6 scroll-mt-24">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] bg-white px-3 py-1 rounded-full border border-[#E5E7EB] mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>منتجاتنا الأساسية بالمغرب</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#111827]">
            اختر الحل المناسب لاحتياجك اليومي
          </h2>
          <p className="text-[#6B7280] text-xs md:text-sm mt-1.5">
            آلة ملاكمة للولاد فيها موسيقى ونقاط، وتنظيم الدار، راحة الرجلين، وكرسي الماكلة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </section>

      {/* ======== تجارب وآراء الزبناء بالمغرب المشتركة ======== */}
      <SharedSocialProofSection />

      {/* ======== التزاماتنا وضمانات الشراء المعتمدة ======== */}
      <section className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] bg-white">
        <div className="relative z-10 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-black text-[#111827]">
              تسوق بكل راحة واطمئنان مع Vitalis Maroc™
            </h2>
            <p className="text-[#6B7280] text-xs mt-1">
              التزامات تجارية واضحة وصريحة لحماية كل مشتري في المغرب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                icon: <ShieldCheck className="w-7 h-7 text-[#047857]" />,
                title: 'حق المعاينة والفحص الكامل',
                desc: 'افتح الطرد وتفقد جودة المنتج أمام الموزع قبل دفع أي درهم. الدفع نقداً عند الاستلام بعد الرضا الكامل.',
              },
              {
                num: '02',
                icon: <Award className="w-7 h-7 text-[#047857]" />,
                title: 'ضمان استبدال ذهبي 12 شهراً',
                desc: 'أي عيب مصنعي خلال سنة كاملة يتم تعويضه باستبدال فوري بمنتج جديد دون أي مصاريف أو تعقيدات.',
              },
              {
                num: '03',
                icon: <Truck className="w-7 h-7 text-[#047857]" />,
                title: 'توصيل مجاني وسريع لكافة المدن',
                desc: 'شحن مجاني 100% لباب منزلك خلال 24 إلى 48 ساعة أينما كنت في ربوع المملكة المغربية.',
              },
            ].map((g, i) => (
              <div key={i} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#6B7280] font-black text-2xl">{g.num}</span>
                  {g.icon}
                </div>
                <h3 className="font-black text-sm text-[#111827]">{g.title}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-orange-500/25 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all cursor-pointer"
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
    label: t.name,
    price: t.price,
    sub: t.savingsText,
    accent: t.accent,
    popular: t.popular,
  }));

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-3xl p-5 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm group hover:shadow-md">
      <div>
        <Link href={`/products/${product.slug}`} className="block relative rounded-2xl border border-[#E5E7EB] mb-4 overflow-hidden group-hover:border-slate-300 transition-all">
          <div className="w-full aspect-[4/3] relative bg-[#F7F8FA]">
            <Image
              src={product.beforeAfterImage || product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>

        {/* Category badge */}
        <span className="text-[10px] font-bold text-[#111827] bg-[#F7F8FA] px-2.5 py-0.5 rounded-full border border-[#E5E7EB]">
          {product.badge}
        </span>

        <h3 className="font-bold text-base text-[#111827] mt-2 mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-[#6B7280] text-xs line-clamp-2 mb-4 leading-relaxed">
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
                  ? 'border-[#047857] bg-[#F7F8FA] text-[#111827] font-bold'
                  : 'border-[#E5E7EB] bg-[#F7F8FA] text-[#6B7280] hover:border-slate-300'
              }`}
            >
              {popular && (
                <span className="absolute -top-2 right-2 text-[8px] font-black bg-[#047857] text-white px-1.5 py-0.5 rounded-full shadow-sm">
                  ★ الأكثر طلباً بالمغرب
                </span>
              )}
              <span>{label}</span>
              <div className="text-left">
                <span className="font-black text-[#111827]">
                  {price} د.م
                </span>
                {sub && <span className="text-[9px] text-[#6B7280] block">{sub}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] pt-3 space-y-2">
        <button
          onClick={() => onAddToCart(product, selectedTier)}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-orange-500/25 text-white font-black text-xs py-3 rounded-xl transition-all cursor-pointer"
        >
          أضف للسلة ({tierData.find((t) => t.tier === selectedTier)?.price} د.م) 🛒
        </button>

        <Link
          href={`/products/${product.slug}`}
          className="block text-center text-[#6B7280] hover:text-[#111827] text-[11px] font-bold py-1 cursor-pointer transition-colors"
        >
          التفاصيل والمواصفات الكاملة ❯
        </Link>
      </div>
    </div>
  );
}
