import React from 'react';

export default function PrivacyTermsPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
      <h1 className="text-2xl font-black text-[#1E3A5F] border-b border-stone-200 pb-4">
        سياسة الخصوصية والشروط والأحكام
      </h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-teal-400 mb-1">1. حماية البيانات والخصوصية:</h2>
          <p>
            نلتزم بحماية خصوصية زبنائنا الكرام. تُستخدم بيانات الاسم ورقم الهاتف فقط لغرض تأكيد الشحن وتوصيل الطرود مع شركات النقل المعتمدة في المغرب، ولا يتم مشاركتها أو بيعها لأي طرف ثالث.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-teal-400 mb-1">2. المعاملات والدفع:</h2>
          <p>
            تتم جميع المعاملات في المتجر بنظام الدفع عند الاستلام (Cash on Delivery) لضمان أقصى درجات الأمان وراحة البال للمشتري المغربي.
          </p>
        </div>
      </div>
    </div>
  );
}
