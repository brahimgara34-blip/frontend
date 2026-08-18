'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { CheckCircle2, PackageCheck, PhoneCall, Truck, ArrowLeft } from 'lucide-react';

export default function ThankYouPage() {
  const { lastOrder } = useCartStore();

  const orderId = lastOrder?.orderId || 'VM-' + Math.floor(1000 + Math.random() * 9000);
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

        <ul className="space-y-1.5 text-slate-300">
          {items.map((item: any, idx: number) => (
            <li key={idx} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span className="font-bold text-white">×{item.quantity}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-slate-800 pt-2.5 flex justify-between items-center text-sm font-bold">
          <span className="text-slate-400">المبلغ الإجمالي عند الاستلام:</span>
          <span className="text-teal-400 font-black text-lg">{totalAmount} درهم</span>
        </div>
      </div>

      {/* Delivery Guidance */}
      <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-right text-xs text-slate-300 space-y-2">
        <div className="flex items-center gap-2 text-teal-400 font-bold">
          <Truck className="w-4 h-4" />
          <span>خطوات الاستلام السلس:</span>
        </div>
        <p>1. سيتصل بكم الموزع هاتفياً قبل الوصول لتحديد موعد التسليم الدقيق.</p>
        <p>2. المرجو تحضير المبلغ نقداً (<strong className="text-emerald-400">{totalAmount} درهم</strong>).</p>
        <p>3. يحق لكم تفقد ومعاينة المنتجات داخل الطرد قبل دفع أي درهم.</p>
      </div>

      <div className="pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 text-xs font-bold underline cursor-pointer"
        >
          <span>العودة للصفحة الرئيسية للمتجر</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
