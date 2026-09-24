import React from 'react';

export default function PrivacyTermsPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-[#E8E0D5] rounded-3xl p-6 md:p-10 shadow-sm space-y-6 text-xs md:text-sm text-[#8B8176] leading-relaxed">
      <h1 className="text-2xl font-black text-[#3B342C] border-b border-[#E8E0D5] pb-4">
        سياسة الخصوصية والشروط والأحكام
      </h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-[#5C6B4F] mb-1">1. حماية البيانات والخصوصية:</h2>
          <p>
            نلتزم بحماية خصوصية زبنائنا الكرام. تُستخدم بيانات الاسم ورقم الهاتف فقط لغرض تأكيد الشحن وتوصيل الطرود مع شركات النقل المعتمدة في المغرب، ولا يتم مشاركتها أو بيعها لأي طرف ثالث.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-[#5C6B4F] mb-1">2. المعاملات والدفع:</h2>
          <p>
            تتم جميع المعاملات في المتجر بنظام الدفع عند الاستلام (Cash on Delivery) لضمان أقصى درجات الأمان وراحة البال للمشتري المغربي.
          </p>
        </div>
      </div>
    </div>
  );
}
