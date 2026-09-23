import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Truck, Clock, MapPin, Mail, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] mt-20 pt-12 pb-8 text-xs text-sky-100/80 relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-10 border-b border-white/10 text-center">
          <div className="bg-white/10 p-4 md:p-5 rounded-2xl border border-white/10 flex flex-col items-center hover:bg-white/15 transition-colors group">
            <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Truck className="w-5 h-5 text-emerald-300" />
            </div>
            <span className="font-black text-white text-[11px] md:text-xs">توصيل مجاني وسريع</span>
            <span className="text-[10px] md:text-[11px] text-sky-100/70 mt-1 font-medium">24 - 48 ساعة لباب منزلك</span>
          </div>

          <div className="bg-white/10 p-4 md:p-5 rounded-2xl border border-white/10 flex flex-col items-center hover:bg-white/15 transition-colors group">
            <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-teal-200" />
            </div>
            <span className="font-black text-white text-[11px] md:text-xs">المعاينة قبل الدفع</span>
            <span className="text-[10px] md:text-[11px] text-sky-100/70 mt-1 font-medium">افحص سلعتك عاد خلص الموزع</span>
          </div>

          <div className="bg-white/10 p-4 md:p-5 rounded-2xl border border-white/10 flex flex-col items-center hover:bg-white/15 transition-colors group">
            <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-amber-300" />
            </div>
            <span className="font-black text-white text-[11px] md:text-xs">ضمان ذهبي 12 شهراً</span>
            <span className="text-[10px] md:text-[11px] text-sky-100/70 mt-1 font-medium">استبدال فوري عند أي عيب مصنعي</span>
          </div>

          <div className="bg-white/10 p-4 md:p-5 rounded-2xl border border-white/10 flex flex-col items-center hover:bg-white/15 transition-colors group">
            <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 text-teal-200" />
            </div>
            <span className="font-black text-white text-[11px] md:text-xs">خدمة زبناء سريعة</span>
            <span className="text-[10px] md:text-[11px] text-sky-100/70 mt-1 font-medium">متابعة هاتفية طوال الأسبوع</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-right">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-white/20">
                <Image
                  src="/logo.png"
                  alt="Vitalis Maroc Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-black text-white text-base block leading-none">
                  Vitalis Maroc<span className="text-emerald-300">™</span>
                </span>
                <span className="text-[10px] text-sky-100/70 font-bold mt-1 block">العلامة المغربية المعتمدة للحلول اليومية</span>
              </div>
            </div>
            <p className="text-sky-100/75 leading-relaxed text-[11px] md:text-xs font-medium">
              العلامة المغربية المتخصصة في تقديم منتجات عملية ومبتكرة للعناية اليومية بالبيت والصحة. شحن مجاني لكافة المدن، معاينة قبل الدفع، وضمان استبدال معتمد 12 شهراً.
            </p>
            <div className="flex items-center gap-2 bg-white/10 border border-white/10 w-fit px-3 py-1.5 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-200 font-bold">+2,480 عميل راضٍ في المغرب</span>
            </div>
          </div>

          <div>
            <div className="font-black text-white text-xs md:text-sm mb-4">المنتجات المعتمدة</div>
            <ul className="space-y-3 text-[11px] md:text-xs font-medium">
              <li><Link href="/products/hydropure-shower" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5"><span className="text-white/30">▪</span> دوش التوربو المفلتر HydroPure™</Link></li>
              <li><Link href="/products/aurafloss-water-flosser" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5"><span className="text-white/30">▪</span> خيط الأسنان المائي AuraFloss™</Link></li>
              <li><Link href="/products/kneerelief-heated-brace" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5"><span className="text-white/30">▪</span> مشد الركبة الحراري KneeRelief™</Link></li>
              <li><Link href="/products/vitalfit-smart-scale" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5"><span className="text-white/30">▪</span> الميزان الذكي VitalFit™</Link></li>
              <li className="pt-1"><Link href="/collections" className="hover:text-emerald-100 font-black text-emerald-300 transition-colors inline-flex items-center gap-1">كافة المجموعات ❯</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-black text-white text-xs md:text-sm mb-4">السياسات والضمانات</div>
            <ul className="space-y-3 text-[11px] md:text-xs font-medium">
              <li><Link href="/policies/shipping-cod" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5"><span className="text-white/30">▪</span> سياسة الشحن والدفع عند الاستلام</Link></li>
              <li><Link href="/policies/refund-warranty" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5"><span className="text-white/30">▪</span> سياسة الضمان والاستبدال (12 شهراً)</Link></li>
              <li><Link href="/policies/privacy-terms" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5"><span className="text-white/30">▪</span> سياسة الخصوصية والشروط</Link></li>
              <li><Link href="/about" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5"><span className="text-white/30">▪</span> عن العلامة التجارية</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-black text-white text-xs md:text-sm mb-4">خدمة العملاء بالمغرب</div>
            <ul className="space-y-3.5 text-[11px] md:text-xs font-medium">
              <li className="flex items-center gap-2.5 text-sky-50">
                <div className="bg-white/10 p-1.5 rounded-lg"><MapPin className="w-3.5 h-3.5 text-teal-200" /></div>
                <span>الدار البيضاء - المملكة المغربية</span>
              </li>
              <li className="flex items-center gap-2.5 text-sky-50">
                <div className="bg-white/10 p-1.5 rounded-lg"><Mail className="w-3.5 h-3.5 text-teal-200" /></div>
                <span>contact@vitalismaroc.shop</span>
              </li>
              <li className="flex items-center gap-2.5 text-sky-50">
                <div className="bg-white/10 p-1.5 rounded-lg"><Clock className="w-3.5 h-3.5 text-teal-200" /></div>
                <span>من الإثنين إلى السبت (09:00 - 18:00)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sky-100/60 text-[10px] md:text-[11px] flex flex-col md:flex-row justify-between items-center gap-3 font-medium">
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()} Vitalis Maroc™ — حلول الراحة والترقية اليومية بالمغرب.</span>
          <span className="text-emerald-200 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">vitalismaroc.shop • جودة، ثقة، وضمان معتمد</span>
        </div>
      </div>
    </footer>
  );
}
