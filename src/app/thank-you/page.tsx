'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { CheckCircle2, PackageCheck, PhoneCall, Truck, ArrowLeft } from 'lucide-react';

export default function ThankYouPage() {
  const { lastOrder } = useCartStore();

  const orderId = lastOrder?.orderId || 'vitalis-' + Math.floor(100000 + Math.random() * 900000);
  const totalAmount = lastOrder?.totalAmount || 249;
  const items = lastOrder?.items || [{ name: 'طلب معتمد من فيتاليس ماروك', quantity: 1, price: 249 }];

  return (
    <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl text-center space-y-6" dir="rtl">
      
      {/* Success Badge */}
      <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl animate-bounce">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div>
        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          رقم الطلب: {orderId}
        </span>
        <h1 className="text-2xl md:text-3xl font-black text-white mt-3">
          شكراً لثقتكم! تم تسجيل طلبكم بنجاح 🎉
        </h1>
        <p className="text-slate-400 text-xs md:text-sm mt-1">
          تم حجز شحنتكم وسيتم تجهيز الطرد وإرساله لباب منزلكم خلال 24 إلى 48 ساعة.
        </p>
      </div>

      {/* Order Items Summary */}
      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-right text-xs space-y-2.5">
        <div className="font-bold text-teal-400 border-b border-slate-800 pb-2 flex items-center gap-1.5">
          <PackageCheck className="w-4 h-4" />
          <span>ملخص الطرد المؤكد:</span>
        </div>

        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex justify-between items-center text-slate-300 py-1">
            <span>{item.name} × {item.quantity}</span>
            <span className="font-bold text-white">{item.price} د.م</span>
          </div>
        ))}

        <div className="border-t border-slate-800 pt-2.5 flex justify-between items-center text-sm font-black">
          <span className="text-white">المبلغ المطلوب عند الاستلام:</span>
          <span className="text-emerald-400 text-base">{totalAmount} درهم</span>
        </div>
      </div>

      {/* Next Steps for Customer */}
      <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-right space-y-3">
        <h3 className="text-xs font-black text-white flex items-center gap-1.5">
          <span>📋 الخطوات التالية لتسليم طلبك:</span>
        </h3>
        
        <div className="flex items-start gap-2.5 text-xs text-slate-400">
          <PhoneCall className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <span>سيتصل بك فريق التأكيد هاتفياً أو عبر الواتساب لتأكيد العنوان وموعد التسليم.</span>
        </div>

        <div className="flex items-start gap-2.5 text-xs text-slate-400">
          <Truck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <span>الموزع سيحضر الطرد لباب دارك، ويمكنك فتح الطرد ومعاينته بالكامل قبل دفع أي درهم.</span>
        </div>
      </div>

      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-3.5 rounded-xl transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>العودة للصفحة الرئيسية</span>
      </Link>

    </div>
  );
}
