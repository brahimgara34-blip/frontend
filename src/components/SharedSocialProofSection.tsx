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
    productImage: '/products/shower-hero.png',
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
    productImage: '/products/flosser-usage.jpg',
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
    productSlug: 'kneerelief-heated-brace',
    productShortName: 'مشد الركبة KneeRelief™',
    productImage: '/products/knee-hero.png',
    rating: 5,
    date: 'منذ أسبوع',
    verified: true,
    highlight: 'الحرارة والمساج هداو عليا برودة الركبة من أول ليلة',
    comment: 'بحكم الخدمة ديالي كنجلس نهار كامل فـ الطاكسي وكانت كتجيني برودة وحريق فالركبة. مشد KneeRelief بالحرارة والاهتزاز بدّل ليا الراحة تماماً، مابقيتش كنحس بالتصلب فالمشي.',
    tag: 'مثالي للسائقين وآلام المفاصل',
  },
  {
    id: 'rev-4',
    name: 'فاطمة الزهراء بنجلون',
    city: 'طنجة (مالاباطا)',
    productSlug: 'hydropure-shower',
    productShortName: 'دوش التوربو HydroPure™',
    productImage: '/products/shower-hero.png',
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
    productSlug: 'vitalfit-smart-scale',
    productShortName: 'الميزان الذكي VitalFit™',
    productImage: '/products/scale-hero.png',
    rating: 5,
    date: 'منذ أسبوعين',
    verified: true,
    highlight: 'ما بقيتش كنغشّ راسي بالوزن الكلي، كنشوف الدهون فالتيليفون',
    comment: 'كنت كنحسب الراجيم ما خدامش حيت الميزان العادي كيزيد. مع VitalFit بان ليا باللي كنحرق الدهون وكنزيد فالعضلات. التطبيق ساهل وكيسجّل كل قراءة أوتوماتيك.',
    tag: 'تتبع الوزن والدهون على الهاتف',
  },
  {
    id: 'rev-6',
    name: 'مريم العلمي',
    city: 'أكادير (صونابا)',
    productSlug: 'aurafloss-water-flosser',
    productShortName: 'خيط الأسنان المائي AuraFloss™',
    productImage: '/products/flosser-usage.jpg',
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
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-[#E8E0D5] shadow-sm space-y-8 relative overflow-hidden group" dir="rtl">
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E0D5] pb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center gap-1.5 text-[11px] md:text-xs font-black text-[#3B342C] bg-[#F6F1EA] border border-[#E8E0D5] px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#5C6B4F]" />
              <span>شهادات حقيقية 100% وموثوقة من زبنائنا بالمغرب</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] md:text-xs font-bold text-[#8B8176] bg-[#F6F1EA]0/10 px-3 py-1.5 rounded-full border border-amber-500/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>+3,500 عميل راضٍ</span>
            </span>
          </div>

          <h2 className="text-xl md:text-3xl font-black text-[#3B342C] leading-tight">
            ماذا يقول عملاؤنا في مختلف المدن المغربية عن منتجاتنا؟
          </h2>
          <p className="text-[#8B8176] text-xs md:text-sm mt-2 max-w-2xl leading-relaxed font-medium">
            تجارب حقيقية لعملاء اختبروا قوة التدفق، نظافة الأسنان المجهرية، راحة الركبة، وتتبع الوزن الذكي مع سياسة المعاينة قبل الدفع والضمان الذهبي 12 شهراً.
          </p>
        </div>

        {/* Global Rating Score Box */}
        <div className="bg-[#F6F1EA] border border-[#E8E0D5] rounded-2xl p-4 flex items-center gap-4 shrink-0">
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-black text-[#5C6B4F] block leading-none">4.9</span>
            <span className="text-[10px] md:text-[11px] text-[#8B8176] font-bold mt-1 block">من 5.0</span>
          </div>
          <div className="border-r border-[#E8E0D5] pr-4 space-y-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-[#8B8176]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#3B342C] block">تقييم ممتاز (Excellent)</span>
            <span className="text-[10px] text-[#5C6B4F] font-bold block">✓ 100% شحن مع المعاينة قبل الأداء</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs by Product */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-3 scrollbar-none text-xs font-bold relative z-10">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeFilter === 'all'
              ? 'bg-[#5C6B4F] text-white font-black'
              : 'bg-[#F6F1EA] text-[#8B8176] border border-[#E8E0D5] hover:text-[#3B342C] hover:bg-stone-100'
          }`}
        >
          كافة الشهادات والتجارب ({REVIEWS.length})
        </button>

        {PRODUCTS.map((prod) => (
          <button
            key={prod.slug}
            onClick={() => setActiveFilter(prod.slug)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === prod.slug
                ? 'bg-[#5C6B4F] text-white font-black'
                : 'bg-[#F6F1EA] text-[#8B8176] border border-[#E8E0D5] hover:text-[#3B342C] hover:bg-stone-100'
            }`}
          >
            <div className={`relative w-5 h-5 rounded-full overflow-hidden shrink-0 ${activeFilter === prod.slug ? 'bg-white/20' : 'bg-white'}`}>
              <Image src={prod.image} alt={prod.shortName} fill sizes="20px" className="object-contain p-0.5" />
            </div>
            <span>{prod.shortName}</span>
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 relative z-10">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#FFFFFF] hover:bg-white border border-[#E8E0D5] hover:border-[#E8E0D5] rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-sm group relative overflow-hidden"
          >
            <div className="space-y-3.5">
              
              {/* Review Card Header */}
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#3B342C]">{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5C6B4F]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8B8176] mt-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#5C6B4F]" />
                    <span>{review.city}</span>
                    <span className="text-[#8B8176]">•</span>
                    <span className="text-[#8B8176]">{review.date}</span>
                  </div>
                </div>

                <span className="bg-[#F6F1EA]0/10 text-[#5C6B4F] text-[10px] font-black px-2.5 py-1 rounded-md border border-emerald-500/20 shadow-sm">
                  شراء مؤكد ✓
                </span>
              </div>

              {/* Stars & Tag */}
              <div className="flex items-center justify-between gap-2 border-y border-[#E8E0D5] py-2.5">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-[#8B8176]" />
                  ))}
                </div>
                <span className="text-[10px] text-[#3B342C] font-bold bg-[#F6F1EA] px-2.5 py-1 rounded-md border border-[#E8E0D5] truncate max-w-[180px]">
                  {review.tag}
                </span>
              </div>

              {/* Headline & Comment */}
              <div>
                <h4 className="font-black text-xs md:text-sm text-[#3B342C] mb-2 leading-snug">
                  "{review.highlight}"
                </h4>
                <p className="text-[#8B8176] text-xs leading-relaxed font-medium">
                  {review.comment}
                </p>
              </div>
            </div>

            {/* Product Mini Badge Footer */}
            <Link
              href={`/products/${review.productSlug}`}
              className="mt-5 pt-3.5 border-t border-[#E8E0D5] flex items-center justify-between text-xs text-[#8B8176] hover:text-[#3B342C] transition-colors group-hover:border-[#E8E0D5]"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-lg bg-white p-1 border border-[#E8E0D5] shrink-0 group-hover:border-[#E8E0D5] transition-colors">
                  <Image
                    src={review.productImage}
                    alt={review.productShortName}
                    fill
                    sizes="36px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#8B8176] group-hover:text-[#3B342C] line-clamp-1 transition-colors">
                  {review.productShortName}
                </span>
              </div>
              <span className="text-[10px] text-[#5C6B4F] font-bold shrink-0 bg-[#F6F1EA]0/10 px-2 py-1 rounded-md border border-teal-500/20">معاينة ❯</span>
            </Link>
          </div>
        ))}
      </div>

      {/* Trust Strip Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 text-center text-xs relative z-10">
        <div className="bg-[#F6F1EA] p-3.5 rounded-xl border border-[#E8E0D5] flex items-center justify-center gap-2 hover:border-[#E8E0D5] transition-colors">
          <Truck className="w-4 h-4 text-[#5C6B4F]" />
          <span className="font-bold text-[#3B342C]">توصيل 24-48 ساعة بالمغرب</span>
        </div>
        <div className="bg-[#F6F1EA] p-3.5 rounded-xl border border-[#E8E0D5] flex items-center justify-center gap-2 hover:border-[#E8E0D5] transition-colors">
          <ShieldCheck className="w-4 h-4 text-[#5C6B4F]" />
          <span className="font-bold text-[#3B342C]">المعاينة قبل دفع أي درهم</span>
        </div>
        <div className="bg-[#F6F1EA] p-3.5 rounded-xl border border-[#E8E0D5] flex items-center justify-center gap-2 hover:border-[#E8E0D5] transition-colors">
          <Award className="w-4 h-4 text-[#8B8176]" />
          <span className="font-bold text-[#3B342C]">ضمان استبدال ذهبي 12 شهراً</span>
        </div>
        <div className="bg-[#F6F1EA] p-3.5 rounded-xl border border-[#E8E0D5] flex items-center justify-center gap-2 hover:border-[#E8E0D5] transition-colors">
          <Package className="w-4 h-4 text-[#5C6B4F]" />
          <span className="font-bold text-[#3B342C]">طرد مغلف ومختوم بأمان</span>
        </div>
      </div>

    </section>
  );
}
