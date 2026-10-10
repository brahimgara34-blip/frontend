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
    name: 'فاطمة الزهراء',
    city: 'الدار البيضاء (المعاريف)',
    productSlug: 'armoire-3-portes',
    productShortName: 'دولاب الملابس 3 أبواب',
    productImage: '/products/armoire.webp',
    rating: 5,
    date: 'منذ يومين',
    verified: true,
    highlight: 'صراحة مكنتش متوقعة تهز ليا كاع هاد الحوايج!',
    comment: 'ساهلة فالتركيب والبيت ولى نقي ومجموع. الثوب ديالها قاصح ومزيان، شكرا على التوصيل السريع والمعاينة قبل الدفع.',
    tag: 'تجربة مؤكدة بالمعاينة',
  },
  {
    id: 'rev-2',
    name: 'يوسف',
    city: 'الرباط (أكدال)',
    productSlug: 'foot-massager',
    productShortName: 'لوحة مساج القدمين',
    productImage: '/products/footmassager.webp',
    rating: 5,
    date: 'منذ 5 أيام',
    verified: true,
    highlight: 'خدمتي كنوقف فيها بزاف، هاد المساج عتقني!',
    comment: 'كنديرها شي دقايق فالعشية وكنحس برجلي خفافو. ساهلة وما محتاجاش تريسيتي، وكتستاهل الثمن ديالها.',
    tag: 'موصى به لآلام المفاصل',
  },
  {
    id: 'rev-3',
    name: 'مريم الإدريسي',
    city: 'مراكش (جيليز)',
    productSlug: 'chaise-haute-bebe',
    productShortName: 'كرسي الماكلة للأطفال',
    productImage: '/products/chaise-haute.webp',
    rating: 5,
    date: 'منذ أسبوع',
    verified: true,
    highlight: 'الكرسي زوين بزاف وعملي',
    comment: 'ولدي ولى كياكل معانا فالطبلة بكل أمان. ساهل فالتنظيف وهادشي لي كنت كنقلب عليه. شكرا على الاحترافية.',
    tag: 'أمان وراحة للطفل',
  },
  {
    id: 'rev-4',
    name: 'سناء بنجلون',
    city: 'طنجة (مالاباطا)',
    productSlug: 'makeup-storage-box',
    productShortName: 'منظم المكياج',
    productImage: '/products/makeupbox.webp',
    rating: 5,
    date: 'منذ أسبوعين',
    verified: true,
    highlight: 'واخيرا تهنيت من الروينة فوق الكوافوز!',
    comment: 'المنظم كيهز بزاف وشكلو راقي، والمكياج كيبقى نقي من الغبرة. الموزع خلاني نفتح الكولية ونفحصها عاد خلصتو.',
    tag: 'توصيل سريع ومعاينة مجانية',
  },
  {
    id: 'rev-5',
    name: 'هشام الصقلي',
    city: 'فاس (طريق إيموزار)',
    productSlug: 'foot-massager',
    productShortName: 'لوحة مساج القدمين',
    productImage: '/products/footmassager.webp',
    rating: 5,
    date: 'منذ أسبوعين',
    verified: true,
    highlight: 'شريتو للوالدة وعجبها بزاف',
    comment: 'كتديرها فالعشية قدام التلفزة وكتقول ليا رجليها كيرتاحو. التوصيل كان فالموعد والموزع كان محترم.',
    tag: 'هدية مثالية للوالدين',
  },
  {
    id: 'rev-6',
    name: 'ليلى العلمي',
    city: 'أكادير (صونابا)',
    productSlug: 'armoire-3-portes',
    productShortName: 'دولاب الملابس 3 أبواب',
    productImage: '/products/armoire.webp',
    rating: 5,
    date: 'منذ 3 أسابيع',
    verified: true,
    highlight: 'البلاكار كبير ويهز حوايج جوج دالناس',
    comment: 'ركبتو بوحدي فـ 15 دقيقة بلا حتى شي أداة. الثوب ديالو قاصح ومزيان، كنصح بيه أي واحد باغي ينظم بيتو.',
    tag: 'سهولة التركيب',
  },
];

export default function SharedSocialProofSection({ currentSlug }: { currentSlug?: string }) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredReviews = REVIEWS.filter((r) => {
    if (activeFilter === 'all') return true;
    return r.productSlug === activeFilter;
  });

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-[#E5E7EB] shadow-sm space-y-8 relative overflow-hidden group" dir="rtl">
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5E7EB] pb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center gap-1.5 text-[11px] md:text-xs font-black text-[#111827] bg-[#F7F8FA] border border-[#E5E7EB] px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#047857]" />
              <span>شهادات حقيقية 100% وموثوقة من زبنائنا بالمغرب</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] md:text-xs font-bold text-[#6B7280] bg-[#047857]/10 px-3 py-1.5 rounded-full border border-amber-500/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>+3,500 عميل راضٍ</span>
            </span>
          </div>

          <h2 className="text-xl md:text-3xl font-black text-[#111827] leading-tight">
            ماذا يقول عملاؤنا في مختلف المدن المغربية عن منتجاتنا؟
          </h2>
          <p className="text-[#6B7280] text-xs md:text-sm mt-2 max-w-2xl leading-relaxed font-medium">
            آراء زبناء جربو الخزانة، لوحة المساج، كرسي الماكلة ومنظم المكياج، مع المعاينة قبل الدفع والضمان 12 شهراً.
          </p>
        </div>

        {/* Global Rating Score Box */}
        <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-4 flex items-center gap-4 shrink-0">
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-black text-[#047857] block leading-none">4.9</span>
            <span className="text-[10px] md:text-[11px] text-[#6B7280] font-bold mt-1 block">من 5.0</span>
          </div>
          <div className="border-r border-[#E5E7EB] pr-4 space-y-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-[#6B7280]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#111827] block">تقييم ممتاز (Excellent)</span>
            <span className="text-[10px] text-[#047857] font-bold block">✓ 100% شحن مع المعاينة قبل الأداء</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs by Product */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-3 scrollbar-none text-xs font-bold relative z-10">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeFilter === 'all'
              ? 'bg-[#047857] text-white font-black'
              : 'bg-[#F7F8FA] text-[#6B7280] border border-[#E5E7EB] hover:text-[#111827] hover:bg-stone-100'
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
                ? 'bg-[#047857] text-white font-black'
                : 'bg-[#F7F8FA] text-[#6B7280] border border-[#E5E7EB] hover:text-[#111827] hover:bg-stone-100'
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
            className="bg-[#FFFFFF] hover:bg-white border border-[#E5E7EB] hover:border-[#E5E7EB] rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-sm group relative overflow-hidden"
          >
            <div className="space-y-3.5">
              
              {/* Review Card Header */}
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm text-[#111827]">{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#047857]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#6B7280] mt-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#047857]" />
                    <span>{review.city}</span>
                    <span className="text-[#6B7280]">•</span>
                    <span className="text-[#6B7280]">{review.date}</span>
                  </div>
                </div>

                <span className="bg-[#047857]/10 text-[#047857] text-[10px] font-black px-2.5 py-1 rounded-md border border-emerald-500/20 shadow-sm">
                  شراء مؤكد ✓
                </span>
              </div>

              {/* Stars & Tag */}
              <div className="flex items-center justify-between gap-2 border-y border-[#E5E7EB] py-2.5">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-[#6B7280]" />
                  ))}
                </div>
                <span className="text-[10px] text-[#111827] font-bold bg-[#F7F8FA] px-2.5 py-1 rounded-md border border-[#E5E7EB] truncate max-w-[180px]">
                  {review.tag}
                </span>
              </div>

              {/* Headline & Comment */}
              <div>
                <h4 className="font-black text-xs md:text-sm text-[#111827] mb-2 leading-snug">
                  "{review.highlight}"
                </h4>
                <p className="text-[#6B7280] text-xs leading-relaxed font-medium">
                  {review.comment}
                </p>
              </div>
            </div>

            {/* Product Mini Badge Footer */}
            <Link
              href={`/products/${review.productSlug}`}
              className="mt-5 pt-3.5 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280] hover:text-[#111827] transition-colors group-hover:border-[#E5E7EB]"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-lg bg-white p-1 border border-[#E5E7EB] shrink-0 group-hover:border-[#E5E7EB] transition-colors">
                  <Image
                    src={review.productImage}
                    alt={review.productShortName}
                    fill
                    sizes="36px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#6B7280] group-hover:text-[#111827] line-clamp-1 transition-colors">
                  {review.productShortName}
                </span>
              </div>
              <span className="text-[10px] text-[#047857] font-bold shrink-0 bg-[#047857]/10 px-2 py-1 rounded-md border border-teal-500/20">معاينة ❯</span>
            </Link>
          </div>
        ))}
      </div>

      {/* Trust Strip Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 text-center text-xs relative z-10">
        <div className="bg-[#F7F8FA] p-3.5 rounded-xl border border-[#E5E7EB] flex items-center justify-center gap-2 hover:border-[#E5E7EB] transition-colors">
          <Truck className="w-4 h-4 text-[#047857]" />
          <span className="font-bold text-[#111827]">توصيل 24-48 ساعة بالمغرب</span>
        </div>
        <div className="bg-[#F7F8FA] p-3.5 rounded-xl border border-[#E5E7EB] flex items-center justify-center gap-2 hover:border-[#E5E7EB] transition-colors">
          <ShieldCheck className="w-4 h-4 text-[#047857]" />
          <span className="font-bold text-[#111827]">المعاينة قبل دفع أي درهم</span>
        </div>
        <div className="bg-[#F7F8FA] p-3.5 rounded-xl border border-[#E5E7EB] flex items-center justify-center gap-2 hover:border-[#E5E7EB] transition-colors">
          <Award className="w-4 h-4 text-[#6B7280]" />
          <span className="font-bold text-[#111827]">ضمان استبدال ذهبي 12 شهراً</span>
        </div>
        <div className="bg-[#F7F8FA] p-3.5 rounded-xl border border-[#E5E7EB] flex items-center justify-center gap-2 hover:border-[#E5E7EB] transition-colors">
          <Package className="w-4 h-4 text-[#047857]" />
          <span className="font-bold text-[#111827]">طرد مغلف ومختوم بأمان</span>
        </div>
      </div>

    </section>
  );
}
