'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { PRODUCTS } from '@/lib/products';
import { 
  CheckCircle2, PackageCheck, PhoneCall, Truck, ArrowLeft, 
  AlertTriangle, MessageCircle, User, MapPin, ShieldCheck,
  Clock, Sparkles
} from 'lucide-react';

export default function ThankYouPage() {
  const { lastOrder } = useCartStore();

  const orderId = lastOrder?.orderId || 'vitalis-' + Math.floor(100000 + Math.random() * 900000);
  const totalAmount = lastOrder?.totalAmount || 179;
  const items = lastOrder?.items || [{ name: 'طلب معتمد من فيتاليس ماروك', quantity: 1, price: 179 }];
  const customerName = lastOrder?.customerName || 'عميلنا العزيز';
  const phoneNumber = lastOrder?.phoneNumber || 'الرقم غير متوفر';

  // WhatsApp Message Generation
  const whatsappMessage = encodeURIComponent(`مرحباً، قمت بطلب من متجركم برقم الطلب (${orderId}). أريد تأكيد طلبي وشحنه في أسرع وقت. الاسم: ${customerName}`);
  const whatsappLink = `https://wa.me/212681825745?text=${whatsappMessage}`;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12" dir="rtl">
      
      {/* 1. URGENCY BANNER */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-start gap-3 animate-pulse">
        <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-black text-amber-400">انتباه: طلبك قيد المراجعة!</h3>
          <p className="text-xs text-amber-200/80 mt-1">
            تبقت خطوة واحدة فقط لتأكيد الشحن. يرجى إبقاء هاتفك قريباً منك للرد على مكالمة التأكيد.
          </p>
        </div>
      </div>

      {/* MAIN THANK YOU CARD */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />

        {/* Success Header */}
        <div className="text-center relative z-10">
          <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl mb-5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-sm">
            رقم الطلب: {orderId}
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-[#1E3A5F] mt-5 leading-tight">
            شكراً لثقتكم {customerName}! <br/> تم تسجيل طلبكم بنجاح 🎉
          </h1>
        </div>

        {/* 2. CALL EXPECTATION BOX */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 text-right relative">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-teal-500 rounded-r-2xl" />
          <h3 className="text-sm font-black text-[#1E3A5F] flex items-center gap-2 mb-2">
            <PhoneCall className="w-4 h-4 text-teal-600 animate-bounce" />
            <span>استعد! سيتصل بك فريقنا قريباً</span>
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            سنتصل بك من رقم غير مسجل لديك لتأكيد عنوانك وموعد التسليم. 
            <br/><br/>
            <span className="text-teal-700 font-bold">⏰ متى؟</span> في غضون أقل من 10 دقائق (بين 9 صباحاً و 9 مساءً). إذا طلبت خارج هذا الوقت، فانتظر مكالمتنا في الصباح الباكر.
          </p>
        </div>

        {/* 4. CUSTOMER DETAILS VERIFICATION */}
        <div className="space-y-3 relative z-10">
          <h3 className="text-xs font-black text-slate-600 flex items-center gap-2">
            <User className="w-4 h-4 text-teal-600" />
            <span>بيانات الاتصال الخاصة بك:</span>
          </h3>
          <div className="bg-[#F6F1E8] border border-stone-200 rounded-xl p-4 flex items-center justify-between">
            <div className="space-y-1 text-right">
              <p className="text-xs text-slate-500 font-bold">رقم الهاتف المسجل:</p>
              <p className="text-sm font-black text-[#1E3A5F] tracking-wider" dir="ltr">{phoneNumber}</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[10px] text-teal-400 underline font-bold hover:text-teal-300 transition-colors">
              الرقم خاطئ؟ صححه هنا
            </a>
          </div>
        </div>

        {/* 5. CLEAN ORDER SUMMARY */}
        <div className="space-y-3 relative z-10">
          <h3 className="text-xs font-black text-slate-600 flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-teal-600" />
            <span>ملخص الطرد المؤكد:</span>
          </h3>
          <div className="bg-[#F6F1E8] border border-stone-200 rounded-xl overflow-hidden">
            <div className="divide-y divide-stone-200">
              {items.map((item: any, idx: number) => (
                <div key={idx} className="p-3 flex items-center justify-between text-right hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg border border-stone-200 flex items-center justify-center shrink-0">
                      <span className="text-xs">📦</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1E3A5F] line-clamp-1">{item.name}</p>
                      <p className="text-[10px] text-slate-500 mt-1 font-bold">الكمية: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-sm font-black text-[#1E3A5F] shrink-0">
                    {item.price} د.م
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-600">المبلغ المطلوب عند الاستلام:</span>
              <span className="text-lg font-black text-emerald-400 drop-shadow-sm">{totalAmount} درهم</span>
            </div>
          </div>
        </div>

        {/* 6. SOCIAL PROOF & GUARANTEE */}
        <div className="bg-[#F6F1E8] rounded-2xl p-4 text-center space-y-4 border border-stone-200 relative z-10">
          <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-[10px] font-bold text-slate-600">معاينة قبل الدفع</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Truck className="w-5 h-5 text-emerald-600" />
              <span className="text-[10px] font-bold text-slate-600">توصيل مجاني</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span className="text-[10px] font-bold text-slate-600">ضمان 12 شهراً</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">
            أنت الآن واحد من +10,000 مغربي اختاروا الراحة والجودة مع Vitalis Maroc.
          </p>
        </div>

      </div>

      {/* 7. CROSS-SELL / DISCOVER MORE */}
      <div className="pt-4 space-y-4">
        <div className="text-center">
          <h3 className="text-sm font-black text-[#1E3A5F] flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
            <span>اكتشف المزيد من الحلول المبتكرة</span>
          </h3>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">يمكنك إضافة منتجات أخرى لنفس الطرد وتوفير مصاريف الشحن.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PRODUCTS.slice(0, 2).map((p) => (
            <Link key={p.id} href={`/products/${p.slug}`} className="bg-white border border-stone-200 rounded-2xl p-3 flex items-center gap-3 hover:border-emerald-300 transition-colors group shadow-sm">
              <div className="relative w-16 h-16 bg-[#F6F1E8] rounded-xl border border-stone-200 shrink-0 overflow-hidden group-hover:border-emerald-300 transition-colors">
                <Image src={p.image} alt={p.name} fill sizes="64px" className="object-contain p-1 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-[#1E3A5F] line-clamp-2 group-hover:text-teal-700 transition-colors">{p.name}</p>
                <p className="text-[10px] text-teal-400 font-black mt-1.5 bg-teal-500/10 inline-block px-2 py-0.5 rounded border border-teal-500/20">اكتشف التفاصيل ❯</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 w-full bg-white border border-stone-200 hover:bg-[#F6F1E8] text-[#1E3A5F] font-bold text-xs py-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>العودة للصفحة الرئيسية</span>
      </Link>

    </div>
  );
}
