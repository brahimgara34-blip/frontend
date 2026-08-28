'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { Sparkles, Timer, Check, ArrowRight } from 'lucide-react';
import { trackPurchase } from '@/lib/pixel';

export default function TimedUpsellModal() {
  const router = useRouter();
  const {
    isUpsellOpen,
    closeUpsell,
    activeUpsellProduct,
    items,
    getTotalPrice,
    setLastOrder,
    clearCart,
    pendingCustomerName,
    pendingCustomerPhone,
  } = useCartStore();

  const [countdown, setCountdown] = useState(15);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset countdown each time the modal opens
  useEffect(() => {
    if (isUpsellOpen) {
      setCountdown(15);
      setIsSubmitting(false);
    }
  }, [isUpsellOpen]);

  // Active countdown timer
  useEffect(() => {
    if (isUpsellOpen && countdown > 0) {
      timerRef.current = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isUpsellOpen && countdown === 0) {
      handleFinalize(false);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpsellOpen, countdown]);

  if (!isUpsellOpen || !activeUpsellProduct) return null;

  const currentTotal = getTotalPrice();

  const handleFinalize = async (acceptUpsell: boolean) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsSubmitting(true);

    const eventId = 'evt_' + Math.random().toString(36).substring(2, 15) + Date.now();
    // Unique order ID starting with 'vitalis'
    const orderId = 'vitalis-' + Math.floor(100000 + Math.random() * 900000);

    const getItemSku = (id: string, name: string) => {
      if (id === 'shower' || name.includes('HydroPure') || name.includes('دوش') || name.includes('رشاش')) return 'VM-SHW-01';
      if (id === 'flosser' || name.includes('AuraFloss') || name.includes('خيط') || name.includes('الأسنان')) return 'VM-FLS-02';
      if (id === 'cushion' || name.includes('ErgoCushion') || name.includes('وسادة')) return 'VM-CSH-03';
      return `VM-${id.toUpperCase()}-01`;
    };

    let orderItems = items.map((i) => ({
      id: i.id,
      sku: i.product?.sku || getItemSku(i.id, i.product?.name || ''),
      name: i.product.name,
      quantity: i.quantity,
      price: i.tierPrice,
    }));

    let finalTotal = currentTotal;

    if (acceptUpsell) {
      orderItems.push({
        id: activeUpsellProduct.id,
        sku: activeUpsellProduct.sku || getItemSku(activeUpsellProduct.id, activeUpsellProduct.name),
        name: `[عرض حصري بـ 199 د.م] ${activeUpsellProduct.name}`,
        quantity: 1,
        price: 199,
      });
      finalTotal += 199;
    }

    const payload = {
      orderId,
      customerName: pendingCustomerName || 'عميل فيتاليس ماروك',
      phoneNumber: pendingCustomerPhone || '0600000000',
      items: orderItems,
      totalAmount: finalTotal,
      hasUpsell: acceptUpsell,
      upsellProduct: acceptUpsell ? activeUpsellProduct.name : null,
      upsellAmount: acceptUpsell ? 199.0 : 0.0,
      eventId,
    };

    // 1. Trigger Client-Side Purchase Pixels (Meta, TikTok, Snapchat) with Deduplication ID and Phone
    try {
      trackPurchase(orderId, finalTotal, orderItems, eventId, pendingCustomerPhone);
    } catch (pixelErr) {
      console.warn('Pixel tracking warning:', pixelErr);
    }

    // 2. Send to Backend for Database storage, Google Sheets Webhook, and Server-Side CAPI
    try {
      const response = await fetch('/api/v1/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Fallback: Try direct API URL if configured
        const directApi = process.env.NEXT_PUBLIC_API_URL;
        if (directApi) {
          await fetch(`${directApi.replace(/\/+$/, '')}/api/v1/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
        }
      }
    } catch (err) {
      console.error('❌ [Order Submit Notice]:', err);
    }

    setLastOrder(payload);
    clearCart();
    closeUpsell();
    router.push('/thank-you');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn" dir="rtl">
      <div className="w-full max-w-lg bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(245,158,11,0.2)] relative text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Countdown Header */}
        <div className="flex items-center justify-between bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6 relative z-10 shadow-inner">
          <div className="flex items-center gap-1.5 text-[11px] md:text-xs font-bold text-amber-400">
            <Timer className="w-4 h-4 animate-spin" />
            <span>عرض الفرصة الأخيرة لمرة واحدة:</span>
          </div>
          <span className="bg-amber-500 text-slate-950 text-[11px] md:text-xs font-black px-3 py-1 rounded-full animate-pulse shadow-sm">
            {countdown} ثانية متبقية
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-xl md:text-2xl font-black text-white leading-tight relative z-10 drop-shadow-sm">
          هل ترغب في إضافة هذا المنتج بـ <span className="text-teal-400 font-black">199 درهم فقط</span>؟
        </h2>
        <p className="text-slate-400 text-xs mt-2 mb-6 relative z-10 font-medium">
          بصفتك طلبت الآن، يمكنك إضافة هذا المنتج لنفس الطرد بـ 199 درهم بدلاً من 249 درهم وبدون أي مصاريف شحن إضافية.
        </p>

        {/* Product Card */}
        <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 text-right mb-6 relative z-10 shadow-inner">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="relative w-20 h-20 bg-slate-900 p-2 rounded-2xl border border-slate-700/60 shrink-0 overflow-hidden flex items-center justify-center shadow-inner">
              <Image
                src={activeUpsellProduct.image || '/products/shower.png'}
                alt={activeUpsellProduct.name}
                fill
                sizes="80px"
                className="object-contain p-1 drop-shadow-lg"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold text-teal-400 bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                {activeUpsellProduct.badge}
              </span>
              <h4 className="font-black text-sm text-white mt-1.5 drop-shadow-sm">
                {activeUpsellProduct.name}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-slate-500 text-xs line-through font-bold">249 درهم</span>
                <span className="text-lg font-black text-emerald-400 drop-shadow-sm">199 درهم فقط!</span>
                <span className="text-[10px] bg-red-500/20 text-red-400 font-bold px-1.5 py-0.5 rounded border border-red-500/20">وفر 50 درهم</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-3 leading-relaxed font-medium">
            {activeUpsellProduct.subheadline}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3 relative z-10">
          <button
            onClick={() => handleFinalize(true)}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-400 hover:via-teal-400 hover:to-emerald-400 text-slate-950 font-black text-sm md:text-base py-4 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Sparkles className="w-5 h-5" />
            <span>نعم! أضفه لشحنتي بـ (+199 درهم فقط) 🎁</span>
          </button>

          <button
            onClick={() => handleFinalize(false)}
            disabled={isSubmitting}
            className="w-full bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-slate-300 text-xs md:text-sm font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-800/80 hover:border-slate-700"
          >
            <span>لا شكراً، اكتفِ بطلبي الأساسي</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
