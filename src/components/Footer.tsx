import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Truck, RotateCcw, Clock, MapPin, Mail, Award, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 mt-20 pt-12 pb-8 text-xs text-slate-400 relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Trust Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-10 border-b border-slate-800/60 text-center">
          <div className="bg-slate-900/60 p-4 md:p-5 rounded-2xl border border-slate-800/80 flex flex-col items-center shadow-lg backdrop-blur-sm hover:bg-slate-900 transition-colors group">
            <div className="bg-slate-950 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <Truck className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-black text-white text-[11px] md:text-xs">توصيل مجاني وسريع</span>
            <span className="text-[10px] md:text-[11px] text-slate-400 mt-1 font-medium">24 - 48 ساعة لباب منزلك</span>
          </div>

          <div className="bg-slate-900/60 p-4 md:p-5 rounded-2xl border border-slate-800/80 flex flex-col items-center shadow-lg backdrop-blur-sm hover:bg-slate-900 transition-colors group">
            <div className="bg-slate-950 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
            </div>
            <span className="font-black text-white text-[11px] md:text-xs">المعاينة قبل الدفع</span>
            <span className="text-[10px] md:text-[11px] text-slate-400 mt-1 font-medium">افحص سلعتك عاد خلص الموزع</span>
          </div>

          <div className="bg-slate-900/60 p-4 md:p-5 rounded-2xl border border-slate-800/80 flex flex-col items-center shadow-lg backdrop-blur-sm hover:bg-slate-900 transition-colors group">
            <div className="bg-slate-950 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <span className="font-black text-white text-[11px] md:text-xs">ضمان ذهبي 12 شهراً</span>
            <span className="text-[10px] md:text-[11px] text-slate-400 mt-1 font-medium">استبدال فوري عند أي عيب مصنعي</span>
          </div>

          <div className="bg-slate-900/60 p-4 md:p-5 rounded-2xl border border-slate-800/80 flex flex-col items-center shadow-lg backdrop-blur-sm hover:bg-slate-900 transition-colors group">
            <div className="bg-slate-950 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <Clock className="w-5 h-5 text-teal-400" />
            </div>
            <span className="font-black text-white text-[11px] md:text-xs">خدمة زبناء سريعة</span>
            <span className="text-[10px] md:text-[11px] text-slate-400 mt-1 font-medium">متابعة هاتفية طوال الأسبوع</span>
          </div>
        </div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-right">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(20,184,166,0.2)] shrink-0 ring-1 ring-slate-800">
                <Image
                  src="/logo.png"
                  alt="Vitalis Maroc Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-black text-white text-base block leading-none drop-shadow-sm">
                  Vitalis Maroc<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">™</span>
                </span>
                <span className="text-[10px] text-slate-400 font-bold mt-1 block">العلامة المغربية المعتمدة للحلول اليومية</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px] md:text-xs font-medium">
              العلامة المغربية المتخصصة في تقديم منتجات عملية ومبتكرة للعناية اليومية بالبيت والصحة. شحن مجاني لكافة المدن، معاينة قبل الدفع، وضمان استبدال معتمد 12 شهراً.
            </p>
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800/80 w-fit px-3 py-1.5 rounded-lg shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-[10px] text-emerald-400 font-bold">+2,480 عميل راضٍ في المغرب</span>
            </div>
          </div>

          <div>
            <div className="font-black text-white text-xs md:text-sm mb-4">المنتجات المعتمدة</div>
            <ul className="space-y-3 text-[11px] md:text-xs font-medium">
              <li><Link href="/products/hydropure-shower" className="hover:text-teal-400 transition-colors flex items-center gap-1.5"><span className="text-slate-600">▪</span> دوش التوربو المفلتر HydroPure™</Link></li>
              <li><Link href="/products/aurafloss-water-flosser" className="hover:text-teal-400 transition-colors flex items-center gap-1.5"><span className="text-slate-600">▪</span> خيط الأسنان المائي AuraFloss™</Link></li>
              <li><Link href="/products/kneerelief-heated-brace" className="hover:text-teal-400 transition-colors flex items-center gap-1.5"><span className="text-slate-600">▪</span> مشد الركبة الحراري KneeRelief™</Link></li>
              <li><Link href="/products/vitalfit-smart-scale" className="hover:text-teal-400 transition-colors flex items-center gap-1.5"><span className="text-slate-600">▪</span> الميزان الذكي VitalFit™</Link></li>
              <li className="pt-1"><Link href="/collections" className="hover:text-emerald-300 font-black text-emerald-400 transition-colors inline-flex items-center gap-1">كافة المجموعات ❯</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-black text-white text-xs md:text-sm mb-4">السياسات والضمانات</div>
            <ul className="space-y-3 text-[11px] md:text-xs font-medium">
              <li><Link href="/policies/shipping-cod" className="hover:text-teal-400 transition-colors flex items-center gap-1.5"><span className="text-slate-600">▪</span> سياسة الشحن والدفع عند الاستلام</Link></li>
              <li><Link href="/policies/refund-warranty" className="hover:text-teal-400 transition-colors flex items-center gap-1.5"><span className="text-slate-600">▪</span> سياسة الضمان والاستبدال (12 شهراً)</Link></li>
              <li><Link href="/policies/privacy-terms" className="hover:text-teal-400 transition-colors flex items-center gap-1.5"><span className="text-slate-600">▪</span> سياسة الخصوصية والشروط</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition-colors flex items-center gap-1.5"><span className="text-slate-600">▪</span> عن العلامة التجارية</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-black text-white text-xs md:text-sm mb-4">خدمة العملاء بالمغرب</div>
            <ul className="space-y-3.5 text-[11px] md:text-xs font-medium">
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg"><MapPin className="w-3.5 h-3.5 text-teal-400" /></div>
                <span>الدار البيضاء - المملكة المغربية</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg"><Mail className="w-3.5 h-3.5 text-teal-400" /></div>
                <span>contact@vitalismaroc.shop</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg"><Clock className="w-3.5 h-3.5 text-teal-400" /></div>
                <span>من الإثنين إلى السبت (09:00 - 18:00)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/60 pt-6 text-center text-slate-500 text-[10px] md:text-[11px] flex flex-col md:flex-row justify-between items-center gap-3 font-medium">
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()} Vitalis Maroc™ — حلول الراحة والترقية اليومية بالمغرب.</span>
          <span className="text-emerald-400/80 font-bold bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">vitalismaroc.shop • جودة، ثقة، وضمان معتمد</span>
        </div>

      </div>
    </footer>
  );
}
