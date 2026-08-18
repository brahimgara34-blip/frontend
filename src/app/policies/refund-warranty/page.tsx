import React from 'react';

export default function RefundWarrantyPage() {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl space-y-6 text-xs md:text-sm text-slate-300 leading-relaxed">
      <h1 className="text-2xl font-black text-white border-b border-slate-800 pb-4">
        سياسة الضمان الذهبي والاستبدال الفوري
      </h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-teal-400 mb-1">1. الضمان الذهبي لمدة 12 شهراً:</h2>
          <p>
            جميع منتجات Vitalis Maroc مشمولة بضمان استبدال شامل لمدة سنة كاملة ضد أي عيب مصنعي أو خلل فني غير ناتج عن سوء الاستخدام.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-teal-400 mb-1">2. الاستبدال المجاني خلال 14 يوماً:</h2>
          <p>
            إذا واجهتم أي ملاحظة على المنتج خلال أول 14 يوماً من الاستلام، نتحمل تكاليف الشحن كاملة ونقوم بإرسال قطعة جديدة فوراً لباب منزلكم.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-teal-400 mb-1">3. إجراءات الاستبدال:</h2>
          <p>
            يكفي التواصل مع فريق خدمة الزبناء عبر البريد الإلكتروني <span className="text-teal-400 font-mono">contact@vitalismaroc.shop</span> مع ذكر رقم الطلب وسيتم التكفل بطلبكم خلال ساعات قليلة.
          </p>
        </div>
      </div>
    </div>
  );
}
