'use client';

import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import SharedSocialProofSection from '@/components/SharedSocialProofSection';
import {
  ShieldCheck, Star, CheckCircle, Truck, Lock,
  ArrowLeft, ChevronLeft, Package, Sparkles, Eye,
  Flame, Check, X, HelpCircle, ChevronDown, Award,
  Clock, RotateCcw, ThumbsUp, AlertCircle, PhoneCall, User
} from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);
  if (!product) notFound();

  const { addItem, openCheckout } = useCartStore();
  const [selectedTier, setSelectedTier] = useState<number>(2); // Default to Tier 2 (Most popular)
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  const [activeThumb, setActiveThumb] = useState<number>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const selectedColor = product.colors[selectedColorIdx];
  const currentTierObj = product.offerTiers.find((t) => t.tier === selectedTier) || product.offerTiers[1];
  const activeScene = product.visualStory[activeThumb] || product.visualStory[0];
  const sceneAccentClass = {
    teal: 'from-teal-500 to-cyan-500 text-teal-700 bg-teal-50 border-teal-200',
    emerald: 'from-emerald-500 to-teal-500 text-emerald-700 bg-emerald-50 border-emerald-200',
    amber: 'from-amber-500 to-orange-500 text-amber-700 bg-amber-50 border-amber-200',
    rose: 'from-rose-500 to-red-500 text-rose-700 bg-rose-50 border-rose-200',
  }[activeScene.accent];

  const handleDirectOrder = () => {
    addItem(product, selectedTier, selectedColor.nameFr);
    openCheckout();
  };

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="space-y-8" dir="rtl">

      {/* ========================================================= */}
      {/* 1. HERO & OFFER SECTION — بطاقة العرض المباشرة عالية الإقناع */}
      {/* ========================================================= */}
      <div className="relative rounded-3xl shadow-2xl border border-slate-800 overflow-hidden bg-gradient-to-br from-slate-950 via-[#102033] to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.22),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.10),transparent_34%)] pointer-events-none" />

        {/* Breadcrumb & Social Proof Header */}
        <div className="relative z-10 px-5 md:px-8 pt-5 pb-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2 bg-slate-950/45 backdrop-blur-xl">
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-medium flex-wrap">
            <Link href="/" className="hover:text-teal-300 transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/collections" className="hover:text-teal-300 transition-colors">المنتجات</Link>
            <ChevronLeft className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold line-clamp-1">{product.shortName}</span>
          </nav>
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[11px] font-black text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
              <span>متبقي {product.stockLeft} قطع فقط فـ الستوك</span>
            </span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* ——— الجانب الأيمن: معرض صور المنتج والعلامات ——— */}
          <div className="lg:col-span-5 p-5 md:p-8 space-y-4 bg-slate-950/25">
            
            {/* Main Visual Story Card */}
            <div
              className="rounded-3xl p-4 md:p-5 relative overflow-hidden transition-all shadow-2xl border min-h-[440px] backdrop-blur-xl flex flex-col justify-between"
              style={{
                background: `radial-gradient(circle at top left, ${selectedColor.hex}24 0%, rgba(15,23,42,0.92) 46%, rgba(2,6,23,0.98) 100%)`,
                borderColor: `${selectedColor.hex}40`,
              }}
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${sceneAccentClass.split(' ').slice(0, 2).join(' ')}`} />

              {/* Badge top-right */}
              <div className="absolute top-4 right-4 z-10 bg-slate-900/90 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-md backdrop-blur-sm flex items-center gap-1.5 border border-slate-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>المنتج الأصلي المضمون 100%</span>
              </div>

              {/* Scene Title & Badge */}
              <div className="pt-10 space-y-2 relative z-10">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-black px-3 py-1 rounded-full border ${sceneAccentClass.split(' ').slice(2).join(' ')}`}>
                  {activeScene.type === 'problem' && <AlertCircle className="w-3.5 h-3.5" />}
                  {activeScene.type === 'usage' && <Package className="w-3.5 h-3.5" />}
                  {activeScene.type === 'result' && <ThumbsUp className="w-3.5 h-3.5" />}
                  {activeScene.type === 'trust' && <Award className="w-3.5 h-3.5" />}
                  <span>{activeScene.badge}</span>
                </span>
                <h2 className="text-lg md:text-xl font-black text-white leading-snug">
                  {activeScene.title}
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeScene.subtitle}
                </p>
              </div>

              {/* Central High-Res Scene Image Container */}
              <div className="relative my-3 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-950/60 group">
                <div className="absolute inset-0 rounded-2xl blur-3xl opacity-30" style={{ backgroundColor: selectedColor.hex }} />
                <Image
                  src={activeScene.image || product.image}
                  alt={activeScene.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Callouts Bar */}
              <div className="grid grid-cols-3 gap-2 relative z-10">
                {activeScene.callouts.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-2 text-center shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-slate-200 leading-snug block">{item}</span>
                  </div>
                ))}
              </div>

              {/* Active Color Tag */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 mt-2 text-xs">
                <div className="flex items-center gap-2 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-700 shadow-sm">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-gray-300 shadow-sm"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <span className="text-[11px] font-bold text-white">{selectedColor.nameAr}</span>
                </div>
                <span className="text-[10px] text-teal-400 font-bold">انقر على المشاهد أدناه للاستكشاف ⬇️</span>
              </div>
            </div>

            {/* Visual Story Thumbnails with Miniature Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.visualStory.map((scene, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`rounded-2xl p-1.5 flex flex-col items-center justify-between border-2 transition-all cursor-pointer text-center overflow-hidden relative group ${
                    activeThumb === i
                      ? 'border-teal-400 bg-teal-500/20 shadow-lg shadow-teal-950/40 ring-2 ring-teal-400/40'
                      : 'border-slate-800 bg-slate-900/80 hover:border-slate-600'
                  }`}
                >
                  <div className="relative w-full h-12 rounded-lg overflow-hidden mb-1 border border-slate-800/60 bg-slate-950">
                    <Image
                      src={scene.image || product.image}
                      alt={scene.badge}
                      fill
                      sizes="90px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[9px] font-black text-slate-200 leading-tight line-clamp-1">
                    {scene.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Micro Guarantees in Visual Box */}
            <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-3.5 grid grid-cols-2 gap-2 text-center text-xs">
              <div className="flex items-center gap-2 text-slate-200 font-bold p-1">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px]">توصيل مجاني لجميع المدن</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 font-bold p-1">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-[11px]">معاينة وفحص قبل الدفع</span>
              </div>
            </div>
          </div>

          {/* ——— الجانب الأيسر: صياغة العرض الفائقة + الباقات التنافسية + زر الشراء الفوري ——— */}
          <div className="lg:col-span-7 p-5 md:p-8 border-t lg:border-t-0 lg:border-r border-slate-800 bg-slate-950/35 backdrop-blur-xl flex flex-col justify-between space-y-6">

            <div>
              {/* Category & Verified Reviews Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <div className="flex items-center gap-1.5 bg-amber-50/80 border border-amber-200/80 px-2.5 py-1 rounded-full">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-gray-900">4.9/5</span>
                  <span className="text-[11px] text-gray-500">({product.reviewsCount} تقييم حقيقي بالمغرب)</span>
                </div>
              </div>

              {/* Main Compelling Title */}
              <h1 className="text-xl md:text-3xl font-black text-white leading-tight">
                {product.headline}
              </h1>

              {/* Compelling Subheadline */}
              <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
                {product.subheadline}
              </p>

              {/* Instant Proof Bullets (Why this solves the problem right now) */}
              <div className="my-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-3.5 space-y-2">
                <span className="text-[11px] font-black text-emerald-300 block mb-1">
                  💡 لماذا يختار المغاربة هذا المنتج تحديداً؟
                </span>
                {product.heroBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Color / Variant Selector */}
              <div className="bg-slate-900/70 rounded-2xl p-3.5 border border-slate-700 my-4">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-slate-300">
                    1. اختر اللون / الشكل المفضل:
                  </span>
                  <span className="text-xs font-black text-white">
                    {selectedColor.nameAr}
                    <span className="text-gray-400 font-normal"> ({selectedColor.nameFr})</span>
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIdx(idx)}
                      title={`${color.nameAr} — ${color.nameFr}`}
                      className={`relative w-10 h-10 rounded-full border-2 transition-all cursor-pointer shadow-sm flex items-center justify-center ${
                        selectedColorIdx === idx
                          ? 'border-teal-600 scale-110 ring-4 ring-teal-100 ring-offset-1'
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColorIdx === idx && (
                        <Check className={`w-4 h-4 ${color.hex === '#F5F5F5' || color.hex === '#C0C0C0' ? 'text-gray-900' : 'text-white'} font-black stroke-[3]`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* ======================================================== */}
              {/* THE HIGH-CONVERTING OFFER MATRIX — مصفوفة العرض الأكثر إقناعاً */}
              {/* ======================================================== */}
              <div className="space-y-2.5 my-5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-white">
                    2. اختر باقة العرض للاستفادة من خصم الشحن والكمية:
                  </label>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    شحن مجاني 100%
                  </span>
                </div>

                {product.offerTiers.map((tier) => {
                  const isSelected = selectedTier === tier.tier;
                  return (
                    <div
                      key={tier.tier}
                      onClick={() => setSelectedTier(tier.tier)}
                      className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer select-none ${
                        isSelected
                          ? tier.accent === 'amber'
                            ? 'border-amber-400 bg-amber-500/10 shadow-xl shadow-amber-950/20 ring-2 ring-amber-400/25'
                            : 'border-teal-400 bg-teal-500/10 shadow-xl shadow-teal-950/30 ring-2 ring-teal-400/25'
                          : 'border-slate-700 bg-slate-900/80 hover:border-slate-500 hover:bg-slate-800/80'
                      }`}
                    >
                      {/* Popular / Best value badge */}
                      {tier.badge && (
                        <span
                          className={`absolute -top-3 left-4 text-[10px] font-black px-3 py-0.5 rounded-full text-white shadow-sm ${
                            tier.accent === 'amber' ? 'bg-amber-600' : 'bg-teal-600'
                          }`}
                        >
                          {tier.badge}
                        </span>
                      )}

                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          {/* Radio circle */}
                          <div
                            className={`w-5 h-5 rounded-full mt-0.5 flex items-center justify-center shrink-0 border-2 transition-colors ${
                              isSelected
                                ? tier.accent === 'amber' ? 'border-amber-600 bg-amber-600' : 'border-teal-600 bg-teal-600'
                                : 'border-slate-500 bg-slate-950'
                            }`}
                          >
                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>

                          <div>
                            <div className="font-black text-sm text-white flex items-center gap-2">
                              <span>{tier.name}</span>
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                              {tier.subtitle}
                            </div>
                            <div className="text-[11px] font-bold text-emerald-300 mt-1 flex items-center gap-1">
                              <span>✓ {tier.savingsText}</span>
                            </div>
                          </div>
                        </div>

                        {/* Price Display */}
                        <div className="text-left shrink-0">
                          <div className="flex items-center gap-1.5 justify-end">
                            <span className="text-xs text-slate-500 line-through">{tier.originalPrice} د.م</span>
                            <span className="text-xl font-black text-white">{tier.price} <span className="text-xs font-bold text-teal-300">د.م</span></span>
                          </div>
                          <span className="text-[10px] text-slate-400 block">
                            (فقط {tier.perUnitPrice.toFixed(0)} درهم للقطعة)
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* ======================================================== */}
            {/* CTA ACTION BUTTONS — أزرار الشراء الفوري ودرج السلة */}
            {/* ======================================================== */}
            <div className="space-y-3 pt-2">
              
              {/* Primary Instant Buy Button */}
              <button
                onClick={handleDirectOrder}
                className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base md:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-emerald-700/20 hover:shadow-emerald-700/30 transition-all cursor-pointer flex items-center justify-between group active:scale-[0.99]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🛍️</span>
                  <span>تأكيد الطلب الآن — الدفع عند الاستلام</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-xl text-sm font-black">
                  <span>{currentTierObj.price} درهم</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Secondary Add to Cart button */}
              <button
                onClick={() => addItem(product, selectedTier, selectedColor.nameFr)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 font-bold text-xs md:text-sm py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>+ أضف إلى السلة واستمر في التسوق</span>
              </button>

              {/* Trust Badges Strip Under CTA */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-3 grid grid-cols-3 gap-2 text-center text-slate-200">
                <div className="flex flex-col items-center">
                  <PhoneCall className="w-4 h-4 text-teal-400 mb-0.5" />
                  <span className="text-[10px] font-bold">تأكيد سريع</span>
                  <span className="text-[9px] text-slate-500">نتصل بك هاتفياً</span>
                </div>
                <div className="flex flex-col items-center border-x border-slate-700">
                  <Package className="w-4 h-4 text-emerald-400 mb-0.5" />
                  <span className="text-[10px] font-bold">معاينة مجانية</span>
                  <span className="text-[9px] text-slate-500">افتح الطرد وتأكد</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-amber-400 mb-0.5" />
                  <span className="text-[10px] font-bold">الدفع كاش</span>
                  <span className="text-[9px] text-slate-500">خلص الموزع يداً بيد</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>تأكيد فوري عبر الهاتف بدون بطاقة بنكية — الدفع نقداً عند استلام الطرد</span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1.5 GOLDEN REVIEW — الدليل الاجتماعي المبكر */}
      {/* ========================================================= */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl mx-auto max-w-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1.5 h-full bg-amber-500 rounded-r-3xl" />
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
            <User className="w-6 h-6 text-slate-400" />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm font-bold text-white italic leading-relaxed">
              "{product.slug === 'hydropure-shower' ? 'دوش التوربو بدل ليا الدوش 180 درجة فـ الطابق الرابع. الصبيب ولى مجهد بزاف وشعري مابقاش كيطيح بسبب الكالكير. سلعة ممتازة وتوصيل سريع.' : product.slug === 'aurafloss-water-flosser' ? 'خيط الأسنان المائي عتقني مع التقويم. كينقي كاع البقايا فـ ثواني بلا أي دم فـ اللثة. كنصح بيه أي واحد.' : 'كسائق مهني كنجلس ساعات فـ الطاكسي، هاد الوسادة حيدات عليا الحريق د الظهر وعرق النسا تماماً. باردة ومريحة بزاف.'}"
            </p>
            <div className="flex items-center gap-2 mt-2 text-[10px]">
              <span className="text-slate-400 font-bold">زبون مؤكد من المغرب</span>
              <span className="text-emerald-500 font-black flex items-center gap-0.5">
                <CheckCircle className="w-3 h-3" /> تم الاستلام
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. THE PROBLEM VS SOLUTION — تحليل المشاكل الحقيقية والدلائل القاطعة */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            المشاكل الحقيقية التي نعاني منها يومياً
          </span>
          <h2 className="text-xl md:text-3xl font-black text-white">
            لماذا تفشل الطرق والمنتجات التقليدية؟
          </h2>
          <p className="text-slate-400 text-xs md:text-sm">
            نظرة واقعية على الأضرار والإحباط الذي تسببه الحلول العادية في بيوتنا وسياراتنا.
          </p>
        </div>

        {/* 3 Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {product.painPoints.map((pain, idx) => (
            <div key={idx} className="bg-rose-950/30 border border-rose-500/20 rounded-2xl p-5 space-y-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-300 flex items-center justify-center font-black text-sm">
                ✕
              </div>
              <h3 className="font-black text-sm text-white">{pain.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>

        {/* Real Before/After Visual Proof Card */}
        {product.beforeAfterImage && (
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950/90 p-5 md:p-8 shadow-2xl relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 relative aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                <Image
                  src={product.beforeAfterImage}
                  alt={`مقارنة قبل وبعد ${product.shortName}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-black text-white border border-slate-700 shadow-md">
                  ✦ دليل بصري واقعي: قبل مقابل بعد
                </div>
              </div>
              <div className="md:col-span-6 space-y-3.5">
                <span className="text-[10px] font-black text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full inline-block">
                  النتيجة الحقيقية الملموسة
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white leading-snug">
                  شاهد الفرق الحاسم من أول دقيقة مع {product.shortName}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  تخلص نهائياً من المشاكل اليومية واستعد الراحة والنظافة الكاملة بفضل التصميم الهندسي المبتكر مع حق المعاينة والتجربة أمام الموزع قبل دفع أي درهم.
                </p>
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="bg-rose-950/40 border border-rose-500/20 rounded-2xl p-3 text-center">
                    <span className="text-[10px] font-black text-rose-400 block mb-1">المعاناة قبل الحل ✕</span>
                    <span className="text-xs font-bold text-slate-200">{product.painPoints[0]?.title || 'معاناة وإحباط يومي'}</span>
                  </div>
                  <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-3 text-center">
                    <span className="text-[10px] font-black text-emerald-400 block mb-1">الراحة بعد الاستعمال ✓</span>
                    <span className="text-xs font-bold text-emerald-200">{product.solutionProofs[0]?.title || 'راحة ونظافة تامة'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 Strong Solution Proofs */}
        <div className="border-t border-slate-800 pt-8 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-2">
              الدلائل الهندسية القاطعة للحل
            </span>
            <h3 className="text-lg md:text-2xl font-black text-white">
              كيف يحل {product.shortName} المشكلة من أول استخدام؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.solutionProofs.map((proof, idx) => (
              <div key={idx} className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 space-y-2 text-center">
                <span className="text-2xl md:text-3xl font-black text-emerald-300 block">{proof.metric}</span>
                <span className="text-xs font-bold text-emerald-100 bg-slate-950/70 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-block">
                  {proof.iconText}
                </span>
                <h4 className="font-black text-sm text-white mt-2">{proof.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{proof.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DIRECT COMPARISON TABLE — جدول المقارنة الفاضح للبدائل */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-br from-slate-950 via-[#0b1728] to-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-xl space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
            المقارنة الشفافة
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white">
            مقارنة مباشرة: منتج Vitalis الأصلي مقابل السلع التقليدية
          </h2>
          <p className="text-slate-400 text-xs">
            لماذا يعتبر منتجنا استثماراً يوفر عليك المال والتعب على المدى البعيد.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse text-xs md:text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="p-3.5 font-bold text-slate-300 rounded-r-2xl">المعيار والمواصفة</th>
                <th className="p-3.5 font-black text-teal-200 bg-teal-500/10 border-x border-teal-500/20">
                  ⭐️ {product.shortName}
                </th>
                <th className="p-3.5 font-bold text-slate-400 rounded-l-2xl">المنتجات المقلدة في السوق</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {product.comparison.map((comp, idx) => (
                <tr key={idx} className="hover:bg-slate-900/60">
                  <td className="p-3.5 font-bold text-slate-200">{comp.feature}</td>
                  <td className="p-3.5 font-bold text-teal-100 bg-teal-500/5 border-x border-teal-500/20 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{comp.vitalis}</span>
                  </td>
                  <td className="p-3.5 text-slate-400">
                    <span className="text-red-500 font-bold ml-1">✕</span>
                    {comp.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ALTERNATING SCIENTIFIC SECTIONS — الشرح المرئي المفصل */}
      {/* ========================================================= */}
      <div className="space-y-4">
        <div className="text-center py-2">
          <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
            التفاصيل والمزايا الملموسة
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white mt-2">
            كل ما تريد معرفته عن جودة وطريقة عمل المنتج
          </h2>
        </div>

        {product.sections.map((sec, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950"
          >
            {/* Text Side */}
            <div className={`p-7 md:p-10 flex flex-col justify-center space-y-3 ${
              sec.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'
            }`}>
              <span className="inline-block text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full w-fit">
                ✦ {sec.highlight}
              </span>
              <h3 className="text-lg md:text-2xl font-black text-white leading-snug">
                {sec.title}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {sec.description}
              </p>
            </div>

            {/* Visual Side with High-Res Feature Image */}
            <div
              className={`flex flex-col items-center justify-center p-6 md:p-8 min-h-[280px] text-center relative overflow-hidden ${
                sec.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'
              }`}
              style={{
                background: `radial-gradient(circle at center, ${selectedColor.hex}25 0%, #020617 90%)`,
              }}
            >
              <div className="relative w-full aspect-[4/3] max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 mb-3 group bg-slate-950">
                <Image
                  src={sec.image || product.image}
                  alt={sec.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-xs font-black text-slate-200">{sec.placeholderSvgText}</span>
              <span className="text-[10px] text-emerald-300 font-bold mt-1">✓ فحص الجودة والمواصفات الأصلية 100%</span>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================= */}
      {/* 4.5 CROSS-SELLS — منتجات يشتريها عملاؤنا مع هذا المنتج */}
      {/* ========================================================= */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            عروض إضافية
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white">
            زبناؤنا يفضلون إضافة هذه المنتجات لطلباتهم
          </h2>
          <p className="text-slate-400 text-xs">
            أضف منتجاً آخر واستفد من شحنة واحدة وتوصيل مجاني لجميع المنتجات.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherProducts.slice(0, 2).map((p) => (
            <Link key={p.id} href={`/products/${p.slug}`} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 hover:border-teal-500/50 transition-colors group">
              <div className="relative w-20 h-20 bg-slate-900 rounded-xl border border-slate-700 shrink-0 overflow-hidden">
                <Image src={p.image} alt={p.name} fill sizes="80px" className="object-contain p-1.5 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-right flex-1">
                <span className="text-[10px] font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full mb-1 inline-block">
                  {p.badge}
                </span>
                <p className="text-sm font-bold text-white line-clamp-2">{p.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-emerald-400 font-black text-sm">249 درهم</span>
                  <span className="text-[10px] text-teal-400 font-bold border border-teal-500/30 px-2 py-1 rounded-lg group-hover:bg-teal-500/10 transition-colors">
                    اكتشف التفاصيل ❯
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SHARED REAL CUSTOMER TESTIMONIALS & SOCIAL PROOF */}
      {/* ========================================================= */}
      <SharedSocialProofSection currentSlug={product.slug} />

      {/* ========================================================= */}
      {/* 6. FAQs — إزالة جميع الاعتراضات ومخاوف الزبون المغربي */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-xl space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
            الأسئلة الشائعة والأجوبة
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white">
            كل التساؤلات التي قد تخطر ببالك قبل الطلب
          </h2>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {product.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden transition-all bg-slate-950/70"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-4 text-right font-black text-xs md:text-sm text-white bg-slate-900/70 hover:bg-slate-800 flex items-center justify-between gap-3 cursor-pointer transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 bg-slate-950 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-slate-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. DISCOVERY & CROSS-SELLS — العروض المتقاطعة للطلب المجمع */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0b1728] to-slate-900 rounded-3xl shadow-xl border border-slate-800 overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  عروض إضافية للشحن المجمع
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white">
                أضف منتجاً مكملاً لنفس الشحنة ووفر أكثر
              </h3>
              <p className="text-slate-400 text-xs md:text-sm mt-1 max-w-xl">
                زبناؤنا يفضلون إضافة منتج آخر لنفس الطرد للاستفادة من شحنة واحدة وتوفير مصاريف النقل.
              </p>
            </div>
            <Link
              href="/collections"
              className="shrink-0 flex items-center gap-1.5 text-xs font-black text-teal-700 bg-teal-50 border border-teal-200 px-4 py-2.5 rounded-xl hover:bg-teal-100 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>مشاهدة كافة المنتجات</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProducts.map((other) => (
              <div
                key={other.id}
                className="group bg-slate-900/75 border border-slate-800 rounded-2xl p-4 hover:border-teal-500/50 hover:shadow-md transition-all"
              >
                <div className="flex gap-4 items-center">
                  <div className="shrink-0 bg-slate-950 border border-slate-700 rounded-2xl w-20 h-20 relative flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform shadow-sm overflow-hidden">
                    <Image
                      src={other.image}
                      alt={other.name}
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                      {other.badge}
                    </span>
                    <h4 className="font-black text-sm text-white mt-1.5 leading-snug line-clamp-1">
                      {other.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {other.subheadline}
                    </p>

                    <div className="flex items-center justify-between mt-3 gap-2">
                      <div>
                        <span className="text-base font-black text-teal-700">249 د.م</span>
                        <span className="text-[10px] text-emerald-600 font-bold block">توصيل مجاني</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => addItem(other, 1)}
                          className="bg-teal-600 hover:bg-teal-700 text-white text-[11px] font-black px-3.5 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                        >
                          + أضف للسلة
                        </button>
                        <Link
                          href={`/products/${other.slug}`}
                          className="bg-slate-950 border border-slate-700 hover:bg-slate-800 text-slate-200 text-[11px] font-bold px-3 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>تفاصيل</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 7. STICKY MOBILE BUY BUTTON */}
      {/* ========================================================= */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 z-40 md:hidden animate-slideUp">
        <button
          onClick={handleDirectOrder}
          className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white font-black text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-700/20 flex items-center justify-between active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">🛍️</span>
            <span>تأكيد الطلب الآن</span>
          </div>
          <div className="flex items-center gap-1 bg-white/20 px-2.5 py-0.5 rounded-lg text-xs font-black">
            <span>{currentTierObj.price} درهم</span>
            <ArrowLeft className="w-3 h-3" />
          </div>
        </button>
      </div>

    </div>
  );
}
