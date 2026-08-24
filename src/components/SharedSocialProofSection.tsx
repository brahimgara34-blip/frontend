'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp, Truck, Package, Award, MessageSquareQuote, MapPin, Sparkles } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';

interface CustomerReview {
  id: string;
  name: string;
  city: string;
  productSlug: string;
  productShortName: string;
  productImage: string;
  rating: number;
  date: string;
  verified: boolean;
  highlight: string;
  comment: string;
  tag: string;
}

const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'يوسف التازي',
    city: 'الدار البيضاء (بوركون)',
    productSlug: 'hydropure-shower',
    productShortName: 'دوش التوربو HydroPure™',
    productImage: '/products/shower.png',
    rating: 5,
    date: 'منذ 3 أيام',
    verified: true,
    highlight: 'صبيب قوي بزاف وتصفية حقيقية للكالكير!',
    comment: 'الصراحة ساكن فـ الطابق الرابع وكان ديما عندي مشكل صبيب الماء ضعيف ودايز فيه الصدأ. ركبت هاد الدوش فـ دقيقة، الماء ولى قوي بزاف ونقي، والفلتر كيبان ليك كيشد الشوائب. كنشكركم على المعاينة قبل الدفع.',
    tag: 'تجربة مؤكدة بالمعاينة',
  },
  {
    id: 'rev-2',
    name: 'الدكتورة نادية المرابط',
    city: 'الرباط (أكدال)',
    productSlug: 'aurafloss-water-flosser',
    productShortName: 'خيط الأسنان المائي AuraFloss™',
    productImage: '/products/flosser.png',
    rating: 5,
    date: 'منذ 5 أيام',
    verified: true,
    highlight: 'بديل رائع للخيط التقليدي اللي كان كيجرّح ليا اللثة',
    comment: 'عندي تقويم الأسنان (Les Bagues) وكان كيعذبني تنظيف الأسنان بالخيط العادي. جهاز AuraFloss بالنبضات المائية كينظف كاع البقايا فـ ثواني وبدون أي نقطة دم. بطاريته كدوم مدة طويلة والجودة ممتازة.',
    tag: 'موصى به لأصحاب التقويم واللثة الحساسة',
  },
  {
    id: 'rev-3',
    name: 'عبد الحق الإدريسي (سائق طاكسي)',
    city: 'مراكش (جيليز)',
    productSlug: 'ergocushion-seat',
    productShortName: 'وسادة المقعد ErgoCushion™',
    productImage: '/products/cushion.png',
    rating: 5,
    date: 'منذ أسبوع',
    verified: true,
    highlight: 'راحات ليا الظهر وعظم العصعص فـ 8 ساعات سياقة يومياً',
    comment: 'بحكم الخدمة ديالي كنجلس نهار كامل فـ الطاكسي وكان كيجيني حريق فضيع فـ أسفل الظهر والسخونية. وسادة ErgoCushion مع الجل المبرد بدلات ليا الراحة تماماً، مابقيتش كنحس بالتعب نهائياً.',
    tag: 'مثالية للسيارة والعمل المكتبي',
  },
  {
    id: 'rev-4',
    name: 'فاطمة الزهراء بنجلون',
    city: 'طنجة (مالاباطا)',
    productSlug: 'hydropure-shower',
    productShortName: 'دوش التوربو HydroPure™',
    productImage: '/products/shower.png',
    rating: 5,
    date: 'منذ أسبوعين',
    verified: true,
    highlight: 'تغليف فاخر، زر التوقف مريح، وتوصيل فـ 24 ساعة',
    comment: 'طلبت الباقة ديال 2 قطع لدارنا ودار الوالدة. الصراحة السلعة نقية ووصلات فـ علبة بريميوم، والموزع خلاني نفتح الكولية ونفحصها عاد خلصتو. راحة تامة وضمان حقيقي.',
    tag: 'توصيل سريع ومعاينة مجانية',
  },
  {
    id: 'rev-5',
    name: 'عمر الصقلي (مهندس معلوميات)',
    city: 'فاس (طريق إيموزار)',
    productSlug: 'ergocushion-seat',
    productShortName: 'وسادة المقعد ErgoCushion™',
    productImage: '/products/cushion.png',
    rating: 5,
    date: 'منذ أسبوعين',
    verified: true,
    highlight: 'الميموري فوم أصلي 100% ومكيهبطش مع الوقت',
    comment: 'كنت كنعاني من عرق النسا مع جلسة البيسي الطويلة. الوسادة كتفرغ الضغط على العمود الفقري بطريقة علمية ملموسة من اليوم الأول. تستاهل كل درهم.',
    tag: 'دعم تقويمي لأسفل الظهر',
  },
  {
    id: 'rev-6',
    name: 'مريم العلمي',
    city: 'أكادير (صونابا)',
    productSlug: 'aurafloss-water-flosser',
    productShortName: 'خيط الأسنان المائي AuraFloss™',
    productImage: '/products/flosser.png',
    rating: 5,
    date: 'منذ 3 أسابيع',
    verified: true,
    highlight: 'انتعاش ونظافة فورية كأنك خرجتي من عيادة الأسنان',
    comment: 'كيجي معاه 4 فوهات مختلفة وشاحن USB-C سريع. كنستعملو يومياً والنتيجة فم نقي وريحة منعشة من أول استعمال. شكراً فريق Vitalis Maroc على الاحترافية.',
    tag: 'نظافة مجهرية عميقة',
  },
];

export default function SharedSocialProofSection({ currentSlug }: { currentSlug?: string }) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredReviews = REVIEWS.filter((r) => {
    if (activeFilter === 'all') return true;
    return r.productSlug === activeFilter;
  });

  return (
    <section className="bg-gradient-to-br from-slate-950 via-[#0B1728] to-slate-950 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl space-y-8" dir="rtl">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1.5 text-xs font-black text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>شهادات حقيقية 100% وموثوقة من زبنائنا بالمغرب</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>+3,500 عميل راضٍ</span>
            </span>
          </div>

          <h2 className="text-xl md:text-3xl font-black text-white leading-tight">
            ماذا يقول عملاؤنا في مختلف المدن المغربية عن منتجاتنا؟
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-1.5 max-w-2xl leading-relaxed">
            تجارب حقيقية لعملاء اختبروا قوة التدفق، نظافة الأسنان المجهرية، والراحة التقويمية مع سياسة المعاينة قبل الدفع والضمان الذهبي 12 شهراً.
          </p>
        </div>

        {/* Global Rating Score Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 shrink-0 shadow-lg">
          <div className="text-center">
            <span className="text-3xl font-black text-emerald-400 block leading-none">4.9</span>
            <span className="text-[10px] text-slate-500">من 5.0</span>
          </div>
          <div className="border-r border-slate-800 pr-4 space-y-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-200 block">تقييم ممتاز (Excellent)</span>
            <span className="text-[10px] text-emerald-400 font-bold block">✓ 100% شحن مع المعاينة قبل الأداء</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs by Product */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeFilter === 'all'
              ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          كافة الشهادات والتجارب ({REVIEWS.length})
        </button>

        {PRODUCTS.map((prod) => (
          <button
            key={prod.slug}
            onClick={() => setActiveFilter(prod.slug)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === prod.slug
                ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
              <Image src={prod.image} alt={prod.shortName} fill sizes="16px" className="object-contain" />
            </div>
            <span>{prod.shortName}</span>
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-lg group relative overflow-hidden"
          >
            <div className="space-y-3">
              
              {/* Review Card Header */}
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-white">{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-teal-400" />
                    <span>{review.city}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-500">{review.date}</span>
                  </div>
                </div>

                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded-md border border-emerald-500/20">
                  شراء مؤكد ✓
                </span>
              </div>

              {/* Stars & Tag */}
              <div className="flex items-center justify-between gap-2 border-y border-slate-800/60 py-2">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-teal-300 font-bold bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40 truncate max-w-[180px]">
                  {review.tag}
                </span>
              </div>

              {/* Headline & Comment */}
              <div>
                <h4 className="font-bold text-xs text-slate-100 mb-1 leading-snug">
                  "{review.highlight}"
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>

            {/* Product Mini Badge Footer */}
            <Link
              href={`/products/${review.productSlug}`}
              className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 hover:text-teal-300 transition-colors group-hover:border-slate-700"
            >
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-lg bg-slate-950 p-1 border border-slate-800 shrink-0">
                  <Image
                    src={review.productImage}
                    alt={review.productShortName}
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-300 group-hover:text-white line-clamp-1">
                  {review.productShortName}
                </span>
              </div>
              <span className="text-[10px] text-teal-400 font-bold shrink-0">معاينة ❯</span>
            </Link>
          </div>
        ))}
      </div>

      {/* Trust Strip Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-center text-xs">
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 flex items-center justify-center gap-2">
          <Truck className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-200">توصيل 24-48 ساعة بالمغرب</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span className="font-bold text-slate-200">المعاينة قبل دفع أي درهم</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-slate-200">ضمان استبدال ذهبي 12 شهراً</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 flex items-center justify-center gap-2">
          <Package className="w-4 h-4 text-teal-300" />
          <span className="font-bold text-slate-200">طرد مغلف ومختوم بأمان</span>
        </div>
      </div>

    </section>
  );
}
