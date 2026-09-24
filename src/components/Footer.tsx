import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Truck, Clock, MapPin, Mail, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E0D5] mt-20 pt-12 pb-8 text-xs text-[#8B8176]" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-10 border-b border-[#E8E0D5] text-center">
          {[
            { icon: <Truck className="w-5 h-5" />, title: 'توصيل مجاني وسريع', desc: '24 - 48 ساعة لباب منزلك' },
            { icon: <ShieldCheck className="w-5 h-5" />, title: 'المعاينة قبل الدفع', desc: 'افحص سلعتك عاد خلص الموزع' },
            { icon: <Award className="w-5 h-5" />, title: 'ضمان ذهبي 12 شهراً', desc: 'استبدال فوري عند أي عيب مصنعي' },
            { icon: <Clock className="w-5 h-5" />, title: 'خدمة زبناء سريعة', desc: 'متابعة هاتفية طوال الأسبوع' },
          ].map((item) => (
            <div key={item.title} className="bg-[#F6F1EA] p-4 md:p-5 rounded-2xl border border-[#E8E0D5] flex flex-col items-center">
              <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-[#5C6B4F] border border-[#E8E0D5]">
                {item.icon}
              </div>
              <span className="font-black text-[#3B342C] text-[11px] md:text-xs">{item.title}</span>
              <span className="text-[10px] md:text-[11px] text-[#8B8176] mt-1 font-medium">{item.desc}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-right">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image src="/logo.png" alt="Vitalis Maroc Logo" fill sizes="48px" className="object-contain" />
              </div>
              <div>
                <span className="font-black text-[#3B342C] text-base block leading-none">Vitalis Maroc™</span>
                <span className="text-[10px] text-[#8B8176] font-bold mt-1 block">العلامة المغربية المعتمدة للحلول اليومية</span>
              </div>
            </div>
            <p className="text-[#8B8176] leading-relaxed text-[11px] md:text-xs font-medium">
              العلامة المغربية المتخصصة في تقديم منتجات عملية ومبتكرة للعناية اليومية بالبيت والصحة. شحن مجاني لكافة المدن، معاينة قبل الدفع، وضمان استبدال معتمد 12 شهراً.
            </p>
          </div>

          <div>
            <div className="font-black text-[#3B342C] text-xs md:text-sm mb-4">المنتجات المعتمدة</div>
            <ul className="space-y-3 text-[11px] md:text-xs font-medium">
              <li><Link href="/products/hydropure-shower" className="hover:text-[#3B342C] transition-colors">دوش التوربو المفلتر HydroPure™</Link></li>
              <li><Link href="/products/aurafloss-water-flosser" className="hover:text-[#3B342C] transition-colors">خيط الأسنان المائي AuraFloss™</Link></li>
              <li><Link href="/products/kneerelief-heated-brace" className="hover:text-[#3B342C] transition-colors">مشد الركبة الحراري KneeRelief™</Link></li>
              <li><Link href="/products/vitalfit-smart-scale" className="hover:text-[#3B342C] transition-colors">الميزان الذكي VitalFit™</Link></li>
              <li className="pt-1"><Link href="/collections" className="font-black text-[#3B342C]">كافة المجموعات ❯</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-black text-[#3B342C] text-xs md:text-sm mb-4">السياسات والضمانات</div>
            <ul className="space-y-3 text-[11px] md:text-xs font-medium">
              <li><Link href="/policies/shipping-cod" className="hover:text-[#3B342C] transition-colors">سياسة الشحن والدفع عند الاستلام</Link></li>
              <li><Link href="/policies/refund-warranty" className="hover:text-[#3B342C] transition-colors">سياسة الضمان والاستبدال (12 شهراً)</Link></li>
              <li><Link href="/policies/privacy-terms" className="hover:text-[#3B342C] transition-colors">سياسة الخصوصية والشروط</Link></li>
              <li><Link href="/about" className="hover:text-[#3B342C] transition-colors">عن العلامة التجارية</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-black text-[#3B342C] text-xs md:text-sm mb-4">خدمة العملاء بالمغرب</div>
            <ul className="space-y-3.5 text-[11px] md:text-xs font-medium">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-[#5C6B4F]" />
                <span>الدار البيضاء - المملكة المغربية</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 shrink-0 text-[#5C6B4F]" />
                <span>contact@vitalismaroc.shop</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 shrink-0 text-[#5C6B4F]" />
                <span>من الإثنين إلى السبت (09:00 - 18:00)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E8E0D5] pt-6 text-center text-[#8B8176] text-[10px] md:text-[11px] flex flex-col md:flex-row justify-between items-center gap-3 font-medium">
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()} Vitalis Maroc™ — حلول الراحة والترقية اليومية بالمغرب.</span>
          <span>vitalismaroc.shop</span>
        </div>
      </div>
    </footer>
  );
}
