import React from 'react';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white border border-[#E8E0D5] rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
      <div className="text-center border-b border-[#E8E0D5] pb-5">
        <h1 className="text-2xl md:text-3xl font-black text-[#3B342C]">اتصل بنا — خدمة الزبناء</h1>
        <p className="text-[#8B8176] text-xs mt-1">
          فريقنا رهن إشارتكم للإجابة على تساؤلاتكم ومتابعة الشحنات والضمان.
        </p>
      </div>

      <div className="space-y-4 text-xs md:text-sm text-slate-700">
        <div className="bg-[#F6F1EA] p-4 rounded-2xl border border-[#E8E0D5] flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[#5C6B4F] shrink-0" />
          <div>
            <span className="font-bold text-[#3B342C] block">المقر الرئيسي بالمغرب:</span>
            <span className="text-[#8B8176] text-xs">الدار البيضاء - المملكة المغربية</span>
          </div>
        </div>

        <div className="bg-[#F6F1EA] p-4 rounded-2xl border border-[#E8E0D5] flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#5C6B4F] shrink-0" />
          <div>
            <span className="font-bold text-[#3B342C] block">البريد الإلكتروني المباشر:</span>
            <span className="text-[#8B8176] text-xs">contact@vitalismaroc.shop</span>
          </div>
        </div>

        <div className="bg-[#F6F1EA] p-4 rounded-2xl border border-[#E8E0D5] flex items-center gap-3">
          <Clock className="w-5 h-5 text-[#5C6B4F] shrink-0" />
          <div>
            <span className="font-bold text-[#3B342C] block">أوقات العمل والتواصل:</span>
            <span className="text-[#8B8176] text-xs">من الإثنين إلى السبت (من 09:00 صباحاً إلى 18:00 مساءً)</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F1EA] border border-[#E8E0D5] p-4 rounded-2xl text-center space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#3B342C]">
          <ShieldCheck className="w-4 h-4" />
          <span>تتبع الشحنات والطلبات</span>
        </div>
        <p className="text-[11px] text-[#8B8176]">
          إذا قمت بتسجيل طلب، سيتصل بك فريق التأكيد هاتفياً للتنسيق معك وتحديد موعد التسليم مع الموزع.
        </p>
      </div>
    </div>
  );
}
