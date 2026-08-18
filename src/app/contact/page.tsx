import React from 'react';
import { Mail, MapPin, Clock, PhoneCall, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl space-y-8">
      <div className="text-center border-b border-slate-800 pb-5">
        <h1 className="text-2xl md:text-3xl font-black text-white">اتصل بنا — خدمة الزبناء</h1>
        <p className="text-slate-400 text-xs mt-1">
          فريقنا رهن إشارتكم للإجابة على تساؤلاتكم ومتابعة الشحنات والضمان.
        </p>
      </div>

      <div className="space-y-4 text-xs md:text-sm text-slate-200">
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
          <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
          <div>
            <span className="font-bold text-white block">المقر الرئيسي بالمغرب:</span>
            <span className="text-slate-400 text-xs">الدار البيضاء - المملكة المغربية</span>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
          <Mail className="w-5 h-5 text-teal-400 shrink-0" />
          <div>
            <span className="font-bold text-white block">البريد الإلكتروني المباشر:</span>
            <span className="text-slate-400 text-xs">contact@vitalismaroc.shop</span>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
          <Clock className="w-5 h-5 text-teal-400 shrink-0" />
          <div>
            <span className="font-bold text-white block">أوقات العمل والتواصل:</span>
            <span className="text-slate-400 text-xs">من الإثنين إلى السبت (من 09:00 صباحاً إلى 18:00 مساءً)</span>
          </div>
        </div>
      </div>

      <div className="bg-teal-500/10 border border-teal-500/20 p-4 rounded-2xl text-center space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-teal-400">
          <ShieldCheck className="w-4 h-4" />
          <span>تتبع الشحنات والطلبات</span>
        </div>
        <p className="text-[11px] text-slate-300">
          إذا قمت بتسجيل طلب، سيتصل بك فريق التأكيد هاتفياً للتنسيق معك وتحديد موعد التسليم مع الموزع.
        </p>
      </div>
    </div>
  );
}
