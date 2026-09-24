'use client';

import React, { useState, useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import { PRODUCTS, Product } from '@/lib/products';
import { X, ShieldCheck, Zap, Lock, Phone, User } from 'lucide-react';
import { trackInitiateCheckout } from '@/lib/pixel';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    closeCheckout,
    items,
    getTotalPrice,
    openUpsell
  } = useCartStore();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const totalPrice = getTotalPrice();

  useEffect(() => {
    if (isCheckoutOpen && items.length > 0) {
      trackInitiateCheckout(
        totalPrice,
        items.map((i) => ({ id: i.id, name: i.product.name, quantity: i.quantity }))
      );
    }
  }, [isCheckoutOpen, items, totalPrice]);

  if (!isCheckoutOpen) return null;

  // Validate Moroccan phone number
  const validatePhone = (phone: string) => {
    const cleaned = phone.trim();
    // Starts with 0, second digit 5, 6, or 7, total 10 digits
    const regex = /^0[5-7][0-9]{8}$/;
    return regex.test(cleaned);
  };

  // Smart Upsell Target Logic
  const getSmartUpsellTarget = (): Product => {
    const cartIds = items.map((i) => i.id);
    const pick = (id: string) => PRODUCTS.find((p) => p.id === id);

    if (cartIds.includes('shower') && !cartIds.includes('scale')) {
      return pick('scale') || PRODUCTS[3];
    }
    if (cartIds.includes('cushion') && !cartIds.includes('flosser')) {
      return pick('flosser') || PRODUCTS[1];
    }
    if (cartIds.includes('flosser') && !cartIds.includes('cushion')) {
      return pick('cushion') || PRODUCTS[2];
    }
    if (!cartIds.includes('scale')) {
      return pick('scale') || PRODUCTS[3];
    }
    if (!cartIds.includes('shower')) {
      return pick('shower') || PRODUCTS[0];
    }
    return PRODUCTS.find((p) => !cartIds.includes(p.id)) || PRODUCTS[2];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      alert('المرجو إدخال الاسم الكامل');
      return;
    }

    if (!validatePhone(customerPhone)) {
      setPhoneError('المرجو إدخال رقم هاتف مغربي صحيح يبدأ بـ 0 ويتكون من 10 أرقام (مثال: 0612345678)');
      return;
    }

    setPhoneError('');
    const targetProduct = getSmartUpsellTarget();
    openUpsell(targetProduct, customerName.trim(), customerPhone.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B342C]/40 backdrop-blur-md animate-fadeIn" dir="rtl">
      <div className="w-full max-w-md bg-[#FFFFFF] border border-[#E8E0D5] rounded-3xl p-6 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={closeCheckout}
          className="absolute top-4 left-4 text-[#8B8176] hover:text-[#3B342C] p-1 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-[#F6F1EA]0/10 text-[#5C6B4F] text-xs font-bold px-3 py-1 rounded-full border border-teal-500/20 mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>تأكيد فوري بدون بطاقة بنكية — الدفع عند الاستلام</span>
          </div>
          <h2 className="text-xl font-black text-[#3B342C]">إتمام الطلب وتأكيد الشحن</h2>
          <p className="text-[#8B8176] text-xs mt-0.5">
            أدخل اسمك ورقم هاتفك لحجز شحنتك وإرسالها لباب منزلك.
          </p>
        </div>

        {/* Quick Cart Summary */}
        <div className="bg-white p-3.5 rounded-2xl border border-[#E8E0D5] mb-5 text-xs space-y-1.5">
          <div className="flex justify-between text-[#8B8176]">
            <span>المنتجات المطلوبة:</span>
            <span className="font-bold text-[#3B342C]">{items.length} باقة</span>
          </div>
          <div className="flex justify-between items-center text-[#8B8176] border-t border-[#E8E0D5] pt-2 font-bold">
            <span>المبلغ المستحق عند الاستلام:</span>
            <span className="text-[#3B342C] font-black text-base">{totalPrice} درهم</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-[#8B8176] flex items-center gap-1.5 mb-1.5">
              <User className="w-3.5 h-3.5 text-[#5C6B4F]" />
              <span>الاسم الكامل *</span>
            </label>
            <input
              type="text"
              placeholder="مثال: يوسف التازي"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="w-full bg-white border border-[#E8E0D5] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#8B8176] flex items-center gap-1.5 mb-1.5">
              <Phone className="w-3.5 h-3.5 text-[#5C6B4F]" />
              <span>رقم الهاتف المغربي *</span>
            </label>
            <input
              type="tel"
              placeholder="06XXXXXXXX أو 07XXXXXXXX"
              value={customerPhone}
              onChange={(e) => {
                setCustomerPhone(e.target.value);
                setPhoneError('');
              }}
              required
              className="w-full bg-white border border-[#E8E0D5] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors text-left font-mono"
              dir="ltr"
            />
            <span className="text-[10px] text-[#8B8176] block mt-1">
              يبدأ بـ 0 (مثال: 0612345678)
            </span>
            {phoneError && (
              <span className="text-[11px] text-red-400 font-bold block mt-1">
                {phoneError}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#5C6B4F] hover:bg-[#4A5740] text-white font-black text-sm py-4 rounded-xl transition-all cursor-pointer mt-4 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            <span>تأكيد الطلب وحجز الشحنة الآن</span>
          </button>
        </form>

        <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8B8176] font-bold relative z-10 bg-[#F6F1EA] py-2 rounded-lg border border-emerald-100 mt-5">
          <Lock className="w-3.5 h-3.5 text-[#5C6B4F]" />
          <span>بياناتك محمية ومشفرة 100% وفق معايير الأمان</span>
        </div>

      </div>
    </div>
  );
}
