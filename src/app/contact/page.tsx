import React from 'react';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
      <div className="text-center border-b border-stone-200 pb-5">
        <h1 className="text-2xl md:text-3xl font-black text-[#1E3A5F]">اتصل بنا — خدمة الزبناء</h1>
        <p className="text-slate-500 text-xs mt-1">
          فريقنا رهن إشارتكم للإجابة على تساؤلاتكم ومتابعة الشحنات والضمان.
        </p>
      </div>

      <div className="space-y-4 text-xs md:text-sm text-slate-700">
        <div className="bg-[#F6F1E8] p-4 rounded-2xl border border-stone-200 flex items-center gap-3">
          <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
          <div>
            <span className="font-bold text-[#1E3A5F] block">المقر الرئيسي بالمغرب:</span>
            <span className="text-slate-500 text-xs">الدار البيضاء - المملكة المغربية</span>
          </div>
        </div>

        <div className="bg-[#F6F1E8] p-4 rounded-2xl border border-stone-200 flex items-center gap-3">
          <Mail className="w-5 h-5 text-teal-600 shrink-0" />
          <div>
            <span className="font-bold text-[#1E3A5F] block">البريد الإلكتروني المباشر:</span>
            <span className="text-slate-500 text-xs">contact@vitalismaroc.shop</span>
          </div>
        </div>

        <div className="bg-[#F6F1E8] p-4 rounded-2xl border border-stone-200 flex items-center gap-3">
          <Clock className="w-5 h-5 text-teal-600 shrink-0" />
          <div>
            <span className="font-bold text-[#1E3A5F] block">أوقات العمل والتواصل:</span>
            <span className="text-slate-500 text-xs">من الإثنين إلى السبت (من 09:00 صباحاً إلى 18:00 مساءً)</span>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 p-4 rounded-2xl text-center space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-teal-700">
          <ShieldCheck className="w-4 h-4" />
          <span>تتبع الشحنات والطلبات</span>
        </div>
        <p className="text-[11px] text-slate-600">
          إذا قمت بتسجيل طلب، سيتصل بك فريق التأكيد هاتفياً للتنسيق معك وتحديد موعد التسليم مع الموزع.
        </p>
      </div>
    </div>
  );
}
