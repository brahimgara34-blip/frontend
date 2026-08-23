'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import {
  ShieldCheck, Star, CheckCircle2, ArrowLeft,
  Truck, Award, Sparkles, Check, Package, RotateCcw,
  BadgeCheck, Lock
} from 'lucide-react';

export default function HomePage() {
  const { addItem } = useCartStore();

  return (
    <div className="space-y-16">

      {/* ======== HERO — عصري ومباشر وواقعي ======== */}
      <section className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0F1E35] to-slate-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #059669 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0D9488 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 px-6 md:px-12 py-14 md:py-20 text-center">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-black px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>منتجات عملية ومبتكرة لحياة يومية أكثر راحة</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl mx-auto leading-tight">
            حلول ذكية ومجرّبة —
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              لراحتك ونظافتك اليومية
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            منتجات أصلية مختارة بعناية لحل المشاكل الأكثر إزعاجاً في البيت والعمل: ضعف صبيب الماء وتصفية الكالكير، تنظيف احترافي للأسنان واللثة، وتخفيف آلام الظهر أثناء الجلوس والقيادة.
          </p>

          {/* Trust Metrics Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-slate-300">
            {[
              { icon: <Award className="w-4 h-4 text-amber-400" />, text: '+2,480 عميل راضٍ بالمغرب' },
              { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, text: 'ضمان استبدال 12 شهراً' },
              { icon: <Truck className="w-4 h-4 text-teal-400" />, text: 'توصيل مجاني 24-48 ساعة' },
              { icon: <Lock className="w-4 h-4 text-slate-400" />, text: 'الدفع بعد المعاينة والفحص' },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-1.5 font-bold">
                {m.icon}
                <span>{m.text}</span>
              </div>
            ))}
          </div>

          {/* Official Pricing Matrix */}
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg mx-auto">
            <div className="bg-slate-950/70 border border-slate-700/60 p-3.5 rounded-2xl backdrop-blur-sm">
              <span className="text-[10px] text-slate-400 block font-bold">1 قطعة</span>
              <span className="text-xl font-black text-emerald-400 mt-0.5 block">249 د.م</span>
              <span className="text-[9px] text-slate-500">توصيل مجاني</span>
            </div>
            <div className="bg-slate-950/70 border border-emerald-500/30 p-3.5 rounded-2xl backdrop-blur-sm relative">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full whitespace-nowrap">
                الأكثر طلباً بالمغرب
              </span>
              <span className="text-[10px] text-slate-400 block font-bold">2 قطع</span>
              <span className="text-xl font-black text-emerald-400 mt-0.5 block">379 د.م</span>
              <span className="text-[9px] text-emerald-400 font-bold">وفر 119 درهم</span>
            </div>
            <div className="bg-slate-950/70 border border-slate-700/60 p-3.5 rounded-2xl backdrop-blur-sm">
              <span className="text-[10px] text-slate-400 block font-bold">3 قطع</span>
              <span className="text-xl font-black text-amber-400 mt-0.5 block">499 د.م</span>
              <span className="text-[9px] text-emerald-400 font-bold">وفر 248 درهم</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-emerald-900/40 transition-all cursor-pointer"
            >
              <span>اكتشف المنتجات الثلاثة الرابحة</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== مميزات ومصداقية العلامة ======== */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
            title: 'حلول عملية ومجرّبة',
            desc: 'منتجات مصممة لحل مشاكل يومية حقيقية بنتائج ملموسة من أول استخدام.',
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
            title: 'المعاينة قبل الدفع',
            desc: 'افتح طردك وتأكد من جودة المنتج أمام الموزع قبل دفع أي درهم.',
          },
          {
            icon: <RotateCcw className="w-6 h-6 text-emerald-400" />,
            title: 'ضمان سنة كاملة',
            desc: 'استبدال فوري عند أي عيب مصنعي طوال 12 شهراً بلا شروط معقدة.',
          },
          {
            icon: <Truck className="w-6 h-6 text-emerald-400" />,
            title: 'توصيل سريع ومجاني',
            desc: 'شحن مجاني لكافة المدن والقرى المغربية خلال 24 إلى 48 ساعة.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all"
          >
            <div className="bg-emerald-500/10 border border-emerald-500/20 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
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
            <span>منتجاتنا الثلاثة الأكثر طلباً بالمغرب</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            اختر المنتج المناسب لاحتياجك
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-1.5">
            حلول مصممة بدقة لمضاعفة صبيب الماء، العناية بالفم واللثة، والجلوس المريح.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </section>

      {/* ======== تجارب وآراء الزبناء بالمغرب ======== */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-white text-xs font-black mr-2">4.9 / 5 تقييم ممتاز</span>
            </div>
            <h3 className="text-xl font-black text-white">
              آراء وتجارب حقيقية من زبنائنا في المغرب
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              أكثر من 2,480 مغربي ومغربية يثقون في منتجات Vitalis Maroc.
            </p>
          </div>
          <div className="shrink-0 bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-center">
            <span className="text-emerald-400 font-black text-lg block">+2,480</span>
            <span className="text-slate-400 text-[10px]">مشتري موثق بالمغرب</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: 'ياسين المنصوري',
              city: 'الدار البيضاء',
              product: 'HydroPure™',
              stars: 5,
              review: '"دوش التوربو بدّل ليا الدوش 180 درجة فـ الطابق الرابع. الصبيب ولى مجهد بزاف والماء نقي ومصفي من الكالكير والصدأ. سلعة ممتازة وتوصيل سريع لباب الدار."',
            },
            {
              name: 'سكينة العلمي',
              city: 'الرباط',
              product: 'AuraFloss™',
              stars: 5,
              review: '"خيط الأسنان المائي عتقني مع التقويم (Les bagues). كينقي كاع البقايا فـ ثواني بلا أي نزيف فـ اللثة. سهل الاستعمال وبطارية كتدوم شهراً كاملاً."',
            },
            {
              name: 'حميد بناني',
              city: 'طنجة',
              product: 'ErgoCushion™',
              stars: 5,
              review: '"كسائق مهني كنجلس ساعات فـ الطاكسي. وسادة ErgoCushion حيدات عليا الحريق د الظهر وعرق النسا تماماً. باردة ومريحة بزاف ومثالية للجلوس الطويل."',
            },
          ].map((r, i) => (
            <div key={i} className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-black text-xs text-white">{r.name}</span>
                  <span className="block text-[10px] text-slate-500">{r.city}</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  مشتري موثق
                </span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(r.stars)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{r.review}</p>
              <div className="text-[10px] text-teal-400 font-bold border-t border-slate-800 pt-2">
                المنتج: {r.product}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======== ضمانات الشراء ======== */}
      <section className="relative rounded-3xl overflow-hidden border border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
        <div className="relative z-10 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-black text-white">
              تسوق بكل راحة واطمئنان مع Vitalis Maroc™
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              التزامات واضحة ومباشرة لكل عميل في المغرب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
                title: 'حق المعاينة والفحص الكامل',
                desc: 'افتح الطرد وتفقد المنتج أمام الموزع قبل دفع أي درهم. الدفع يتم نقداً عند الاستلام بعد التأكد التام.',
              },
              {
                num: '02',
                icon: <Award className="w-7 h-7 text-amber-400" />,
                title: 'ضمان استبدال ذهبي 12 شهراً',
                desc: 'أي عيب مصنعي خلال سنة كاملة = استبدال فوري بمنتج جديد بدون أي تعقيدات أو مصاريف إضافية.',
              },
              {
                num: '03',
                icon: <Truck className="w-7 h-7 text-teal-400" />,
                title: 'توصيل مجاني لجميع مدن المغرب',
                desc: 'شحن مجاني 100% لباب منزلك خلال 24 إلى 48 ساعة أينما كنت في المملكة المغربية.',
              },
            ].map((g, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-all">
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
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg group">
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
              className={`p-2 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all relative ${
                selectedTier === tier
                  ? accent === 'amber'
                    ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                    : 'border-teal-500 bg-teal-500/10 text-white font-bold'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400'
              }`}
            >
              {popular && (
                <span className="absolute -top-2 right-2 text-[8px] font-black bg-teal-500 text-slate-950 px-1.5 py-0.5 rounded-full">
                  ★ الأكثر طلباً
                </span>
              )}
              <span>{label}</span>
              <div className="text-left">
                <span className={`font-black ${accent === 'amber' ? 'text-amber-400' : 'text-teal-400'}`}>
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
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-xs py-3 rounded-xl shadow-lg transition-all cursor-pointer"
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
