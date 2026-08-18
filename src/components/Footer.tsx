import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, RotateCcw, Clock, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20 pt-12 pb-8 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Trust Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-slate-800 text-center">
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 flex flex-col items-center">
            <Truck className="w-6 h-6 text-teal-400 mb-2" />
            <span className="font-bold text-white text-xs">توصيل مجاني وسريع</span>
            <span className="text-[11px] text-slate-400 mt-0.5">24 - 48 ساعة لباب منزلك</span>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-teal-400 mb-2" />
            <span className="font-bold text-white text-xs">معاينة قبل الدفع</span>
            <span className="text-[11px] text-slate-400 mt-0.5">افحص سلعتك عاد خلص الموزع</span>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 flex flex-col items-center">
            <RotateCcw className="w-6 h-6 text-teal-400 mb-2" />
            <span className="font-bold text-white text-xs">ضمان ذهبي 12 شهراً</span>
            <span className="text-[11px] text-slate-400 mt-0.5">استبدال فوري عند أي عيب مصنعي</span>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 flex flex-col items-center">
            <Clock className="w-6 h-6 text-teal-400 mb-2" />
            <span className="font-bold text-white text-xs">خدمة زبناء سريعة</span>
            <span className="text-[11px] text-slate-400 mt-0.5">مرافقة مستمرة طوال الأسبوع</span>
          </div>
        </div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-right">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                <span className="text-xs font-black text-teal-400">VM</span>
              </div>
              <span className="font-black text-white text-sm">VITALIS MAROC™</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              العلامة المغربية الأولى المتخصصة في الحلول التقويمية والعناية اليومية المبتكرة. نلتزم بتقديم أعلى معايير الجودة والمصداقية لزبنائنا في كافة ربوع المملكة.
            </p>
          </div>

          <div>
            <div className="font-bold text-white text-xs mb-3">المنتجات الرئيسية</div>
            <ul className="space-y-2 text-[11px]">
              <li><Link href="/products/hydropure-shower" className="hover:text-teal-400">دوش التوربو المفلتر HydroPure™</Link></li>
              <li><Link href="/products/aurafloss-water-flosser" className="hover:text-teal-400">خيط الأسنان المائي AuraFloss™</Link></li>
              <li><Link href="/products/ergocushion-seat" className="hover:text-teal-400">وسادة المقعد التقويمية ErgoCushion™</Link></li>
              <li><Link href="/collections" className="hover:text-teal-400 font-bold text-teal-400">كافة المجموعات ❯</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-xs mb-3">السياسات والضمانات</div>
            <ul className="space-y-2 text-[11px]">
              <li><Link href="/policies/shipping-cod" className="hover:text-teal-400">سياسة الشحن والدفع عند الاستلام</Link></li>
              <li><Link href="/policies/refund-warranty" className="hover:text-teal-400">سياسة الضمان والاستبدال (14 يوماً)</Link></li>
              <li><Link href="/policies/privacy-terms" className="hover:text-teal-400">سياسة الخصوصية والشروط</Link></li>
              <li><Link href="/about" className="hover:text-teal-400">عن العلامة التجارية</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-xs mb-3">خدمة الزبناء بالمغرب</div>
            <ul className="space-y-2.5 text-[11px]">
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>الدار البيضاء - المملكة المغربية</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>contact@vitalismaroc.shop</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>من الإثنين إلى السبت (09:00 - 18:00)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 pt-6 text-center text-slate-500 text-[11px] flex flex-col md:flex-row justify-between items-center gap-2">
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()} Vitalis Maroc. الدفع عند الاستلام بعد الفحص.</span>
          <span className="text-teal-500/80 font-medium">vitalismaroc.shop • صنع لراحتك اليومية</span>
        </div>

      </div>
    </footer>
  );
}
