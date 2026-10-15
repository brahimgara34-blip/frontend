'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import SharedSocialProofSection from '@/components/SharedSocialProofSection';
import {
  ShieldCheck, CheckCircle2, ArrowLeft,
  Truck, Award, Sparkles, Package, RotateCcw,
} from 'lucide-react';

const HERO_PICKS = [
  { id: 'hair-brush', line: 'تنشيف وتصفيف فالدار' },
  { id: 'screwdriver-set', line: 'خدمة الرفوف والأثاث' },
  { id: 'clothes-dryer', line: 'الثياب كتنشف فالشتا' },
  { id: 'faucet-filter', line: 'ماء مصفى وماء ساخن' },
];

const GROUPS: { id: string; title: string; why: string; ids: string[] }[] = [
  {
    id: 'style',
    title: 'التصفيف والأناقة',
    why: 'الشعر، الهدية، والتسريحة. كل واحد كيجمع خدمة كانت متفرقة، وبثمن باين من الأول.',
    ids: ['hair-brush', 'gift-set', 'makeup-box'],
  },
  {
    id: 'home',
    title: 'خدمة الدار',
    why: 'الرف، الماء، الثياب، والحوايج. أدوات كتدخل فالنهار العادي، ماشي للورش ولا للصالون.',
    ids: ['screwdriver-set', 'faucet-filter', 'clothes-dryer', 'armoire-3-portes'],
  },
  {
    id: 'rest',
    title: 'الراحة من بعد النهار',
    why: 'مساج للرقبة والرجلين فالدار. للراحة بعد الخدمة، ماشي علاج.',
    ids: ['neck-massager', 'foot-massager'],
  },
  {
    id: 'kids',
    title: 'الدار مع الولاد',
    why: 'اللعب بالحركة، والماكلة جالسين بأمان. حاجات كتخدم مع العائلة كل نهار.',
    ids: ['boxing-machine', 'chaise-haute'],
  },
];

function byId(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export default function HomePage() {
  const { addItem } = useCartStore();

  return (
    <div className="space-y-16">

      <section className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] bg-gradient-to-bl from-[#ECFDF5] via-white to-white">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-12 py-10 md:py-16">
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white border border-[#A7F3D0] text-[#047857] text-[11px] md:text-xs font-black px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span>أحسن الأثمنة · أحسن العروض · الدفع عند الاستلام</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-[#111827] leading-tight tracking-tight">
              منتجات الدار، كل واحد
              <span className="text-[#047857]"> فبلاصتو</span>
            </h1>

            <p className="text-[#6B7280] text-sm md:text-base mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              التصفيف، خدمة الدار، الماء، الثياب، الراحة، والولاد. الثمن ديال القطعة باين، وعرض الجوج وعرض التلاتة كينقصو عليك الثمن. التوصيل فابور، وكتخلص حتى تشوف السلعة.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 text-[11px] md:text-xs text-[#111827]">
              {[
                { icon: <ShieldCheck className="w-4 h-4 text-[#047857]" />, text: 'المعاينة قبل الدفع' },
                { icon: <Truck className="w-4 h-4 text-[#047857]" />, text: 'توصيل مجاني 24-48 ساعة' },
                { icon: <RotateCcw className="w-4 h-4 text-[#047857]" />, text: 'استبدال 12 شهراً' },
              ].map((m) => (
                <div key={m.text} className="flex items-center gap-1.5 font-bold bg-white border border-[#E5E7EB] px-3 py-2 rounded-xl shadow-sm">
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
                <span>شوف المنتجات والعروض</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {HERO_PICKS.map((pick) => {
              const p = byId(pick.id);
              if (!p) return null;
              const pair = p.offerTiers.find((t) => t.tier === 2);
              return (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all"
                >
                  <Image
                    src={p.beforeAfterImage || p.image}
                    alt={p.shortName}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-3 text-right">
                    <span className="block text-white text-xs md:text-sm font-black leading-tight">{p.shortName}</span>
                    <span className="block text-white/80 text-[10px] md:text-xs font-medium mt-0.5">{pick.line}</span>
                    <span className="block text-[#FDBA74] text-xs font-black mt-1">
                      من {p.offerTiers[0].price} درهم
                      {pair ? ` · جوج بـ ${pair.price}` : ''}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {[
          { num: '1', title: 'قطعة وحدة', desc: 'الثمن ديالها مكتوب واضح. ما كاين حتى ثمن مخبي.' },
          { num: '2', title: 'جوج قطع', desc: 'العرض الأكثر طلباً. الثمن على القطعة كينقص.' },
          { num: '3', title: 'تلاتة قطع', desc: 'أفضل قيمة. للدار، للهدية، ولا لأكثر من بيت.' },
        ].map((item) => (
          <div key={item.num} className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex gap-4 items-start">
            <span className="text-[#047857] font-black text-2xl leading-none">{item.num}</span>
            <div>
              <h3 className="font-black text-sm text-[#111827]">{item.title}</h3>
              <p className="text-[#6B7280] text-xs leading-relaxed mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="products" className="space-y-12 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] bg-white px-3 py-1 rounded-full border border-[#E5E7EB] mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>كل منتجات الستور</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#111827]">
            اختار على حساب شنو محتاج فالدار
          </h2>
          <p className="text-[#6B7280] text-xs md:text-sm mt-2 leading-relaxed">
            كل قسم فيه غير المنتجات اللي كيمشيو معاه. الثمن دابا هو اللي مكتوب، وعرض الجوج والتلاتة تحت كل منتج.
          </p>
        </div>

        {GROUPS.map((group) => {
          const items = group.ids.map(byId).filter((p): p is Product => Boolean(p));
          return (
            <div key={group.id} className="space-y-5">
              <div className="text-right border-r-4 border-[#047857] pr-4">
                <h3 className="text-xl md:text-2xl font-black text-[#111827]">{group.title}</h3>
                <p className="text-[#6B7280] text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">{group.why}</p>
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-2 ${items.length === 3 ? 'xl:grid-cols-3' : ''} gap-6`}>
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={addItem} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <SharedSocialProofSection />

      <section className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] bg-white">
        <div className="relative z-10 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-black text-[#111827]">
              علاش الطلب من Vitalis Maroc
            </h2>
            <p className="text-[#6B7280] text-xs mt-1">
              نفس الشروط على كل المنتجات، من فرشاة السيشوار حتى كرسي الولاد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                icon: <CheckCircle2 className="w-7 h-7 text-[#047857]" />,
                title: 'الثمن والعرض باينين',
                desc: 'كتشوف ثمن القطعة، وثمن الجوج، وثمن التلاتة قبل ما تطلب. التوصيل داخل فالعرض.',
              },
              {
                num: '02',
                icon: <ShieldCheck className="w-7 h-7 text-[#047857]" />,
                title: 'كتشوف السلعة قبل الخلاص',
                desc: 'افتح الطرد قدام الموزع. إلى عجبك، خلّص. إلى ما عجبكش، ما تخلصش.',
              },
              {
                num: '03',
                icon: <Award className="w-7 h-7 text-[#047857]" />,
                title: 'استبدال إلا كان عيب',
                desc: 'إلى بان عيب فالمصنّع فـ 12 شهر، كنبدلوه. التوصيل فابور لجميع المدن.',
              },
            ].map((g) => (
              <div key={g.num} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-5 space-y-3">
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
              href="#products"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-orange-500/25 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all cursor-pointer"
            >
              <span>رجع للمنتجات واختار العرض</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (p: Product, qty: number) => void }) {
  const [selectedTier, setSelectedTier] = useState<number>(2);
  const selected = product.offerTiers.find((t) => t.tier === selectedTier) ?? product.offerTiers[0];

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-3xl p-5 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm group hover:shadow-md">
      <div>
        <Link href={`/products/${product.slug}`} className="block relative rounded-2xl border border-[#E5E7EB] mb-4 overflow-hidden group-hover:border-slate-300 transition-all">
          <div className="w-full aspect-[4/3] relative bg-[#F7F8FA]">
            <Image
              src={product.beforeAfterImage || product.image}
              alt={product.shortName}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>

        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold text-[#047857] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
            {product.category}
          </span>
          <span className="text-[10px] font-black text-[#111827]">من {product.offerTiers[0].price} درهم</span>
        </div>

        <h3 className="font-black text-base text-[#111827] mt-2 mb-1 leading-snug">
          <Link href={`/products/${product.slug}`}>{product.shortName}</Link>
        </h3>
        <p className="text-[#6B7280] text-xs line-clamp-2 mb-4 leading-relaxed">
          {product.headline}
        </p>

        <div className="space-y-1.5 mb-4">
          {product.offerTiers.map((t) => (
            <button
              key={t.tier}
              type="button"
              onClick={() => setSelectedTier(t.tier)}
              className={`w-full p-2.5 rounded-xl border text-xs flex justify-between items-center cursor-pointer transition-all relative text-right ${
                selectedTier === t.tier
                  ? 'border-[#047857] bg-[#F7F8FA] text-[#111827] font-bold'
                  : 'border-[#E5E7EB] bg-[#F7F8FA] text-[#6B7280] hover:border-slate-300'
              }`}
            >
              {t.popular && (
                <span className="absolute -top-2 right-2 text-[8px] font-black bg-[#047857] text-white px-1.5 py-0.5 rounded-full shadow-sm">
                  ★ الأكثر طلباً
                </span>
              )}
              <span>{t.name}</span>
              <span className="text-left">
                <span className="font-black text-[#111827]">{t.price} درهم</span>
                <span className="text-[9px] text-[#9CA3AF] line-through block">{t.originalPrice} درهم</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] pt-3 space-y-2">
        <p className="text-[11px] text-[#6B7280] text-center font-bold">
          الثمن دابا: <span className="text-[#111827]">{selected.price} درهم</span>
          {selected.perUnitPrice && selected.tier > 1 ? ` · ${selected.perUnitPrice} للقطعة` : ''}
        </p>
        <button
          onClick={() => onAddToCart(product, selectedTier)}
          className="w-full bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-orange-500/25 text-white font-black text-xs py-3 rounded-xl transition-all cursor-pointer"
        >
          أضف للسلة — {selected.price} درهم
        </button>
        <Link
          href={`/products/${product.slug}`}
          className="block text-center text-[#6B7280] hover:text-[#111827] text-[11px] font-bold py-1 cursor-pointer transition-colors"
        >
          شوف التفاصيل ❯
        </Link>
      </div>
    </div>
  );
}
