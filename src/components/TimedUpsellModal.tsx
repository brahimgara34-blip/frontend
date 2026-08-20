'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
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
    const orderId = 'VM-' + Math.floor(1000 + Math.random() * 9000);

    let orderItems = items.map((i) => ({
      id: i.id,
      name: i.product.name,
      quantity: i.quantity,
      price: i.tierPrice,
    }));

    let finalTotal = currentTotal;

    if (acceptUpsell) {
      orderItems.push({
        id: activeUpsellProduct.id,
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

    // 1. Trigger Client-Side Purchase Pixels (Meta, TikTok, Snapchat) with Deduplication ID
    try {
      trackPurchase(orderId, finalTotal, orderItems, eventId);
    } catch (pixelErr) {
      console.warn('Pixel tracking warning:', pixelErr);
    }

    // 2. Send to Backend for Database storage, Google Sheets Webhook, and Server-Side CAPI
    // We send via relative API endpoint `/api/v1/orders` (Proxied seamlessly by Next.js to backend)
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
      <div className="w-full max-w-lg bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 md:p-8 shadow-2xl relative text-center">
        
        {/* Countdown Header */}
        <div className="flex items-center justify-between bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
            <Timer className="w-4 h-4 animate-spin" />
            <span>عرض الفرصة الأخيرة لمرة واحدة:</span>
          </div>
          <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-0.5 rounded-full animate-pulse">
            {countdown} ثانية متبقية
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
          هل ترغب في إضافة هذا المنتج بـ <span className="text-teal-400 font-black">199 درهم فقط</span>؟
        </h2>
        <p className="text-slate-400 text-xs mt-1.5 mb-6">
          بصفتك طلبت الآن، يمكنك إضافة هذا المنتج لنفس الطرد بـ 199 درهم بدلاً من 249 درهم وبدون أي مصاريف شحن إضافية.
        </p>

        {/* Product Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-right mb-6">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="text-4xl bg-slate-900 p-3 rounded-2xl border border-slate-800">
              {activeUpsellProduct.icon}
            </div>
            <div>
              <span className="text-[10px] font-bold text-teal-400 bg-teal-400/10 px-2.5 py-0.5 rounded-full">
                {activeUpsellProduct.badge}
              </span>
              <h4 className="font-bold text-sm text-white mt-1">
                {activeUpsellProduct.name}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-slate-500 text-xs line-through">249 درهم</span>
                <span className="text-lg font-black text-emerald-400">199 درهم فقط!</span>
                <span className="text-[10px] bg-red-500/20 text-red-400 font-bold px-1.5 py-0.5 rounded">وفر 50 درهم</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 border-t border-slate-800 pt-2.5 leading-relaxed">
            {activeUpsellProduct.subheadline}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={() => handleFinalize(true)}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm md:text-base py-4 rounded-2xl shadow-xl shadow-emerald-500/10 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>نعم! أضفه لشحنتي بـ (+199 درهم فقط) 🎁</span>
          </button>

          <button
            onClick={() => handleFinalize(false)}
            disabled={isSubmitting}
            className="w-full text-slate-400 hover:text-white text-xs py-2 transition-colors cursor-pointer"
          >
            لا شكراً، اكتفِ بطلبي الأساسي ❯
          </button>
        </div>

      </div>
    </div>
  );
}
