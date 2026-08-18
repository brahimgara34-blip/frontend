import React from 'react';

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl space-y-6 text-xs md:text-sm text-slate-300 leading-relaxed">
      <h1 className="text-2xl font-black text-white border-b border-slate-800 pb-4">
        سياسة الشحن والتوصيل والدفع عند الاستلام (COD)
      </h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-teal-400 mb-1">1. مدة التوصيل وتكلفته بالمغرب:</h2>
          <p>
            نوفر خدمة التوصيل المجاني بنسبة 100% لكافة المدن والقرى المغربية. تستغرق مدة الشحن من 24 إلى 48 ساعة كحد أقصى من تاريخ تأكيد الطلب هاتفياً.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-teal-400 mb-1">2. حق المعاينة والفحص قبل الدفع:</h2>
          <p>
            لأن ثقتكم هي أولويتنا، يتيح لكم متجر Vitalis Maroc الحق الكامل في فتح الطرد ومعاينة المنتجات والتأكد من مطابقتها التامة أمام موزع شركة التوصيل قبل تسليم أي مبلغ نقدي.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-teal-400 mb-1">3. التنسيق الهاتفي وموعد التسليم:</h2>
          <p>
            بمجرد وصول الشحنة لمدينتكم، سيتصل بكم الموزع المحلي لتحديد الوقت والمكان الأنسب لاستلام طردكم بكل سهولة.
          </p>
        </div>
      </div>
    </div>
  );
}
