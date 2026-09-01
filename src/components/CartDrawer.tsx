'use client';

import React from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { PRODUCTS } from '@/lib/products';
import { X, Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

export default function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    updateItemQuantity,
    openCheckout,
    getTotalPrice,
    getTotalItemsCount,
    addItem
  } = useCartStore();

  if (!isDrawerOpen) return null;

  const totalCount = getTotalItemsCount();
  const totalPrice = getTotalPrice();

  // Find products not in cart for Cross-Sells
  const crossSellCandidates = PRODUCTS.filter(
    (p) => !items.some((item) => item.id === p.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-fadeIn" dir="rtl">
      <div className="w-full max-w-md bg-slate-900/95 h-full border-r border-slate-800/80 p-5 flex flex-col justify-between overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                <span className="text-sm">🛒</span>
              </div>
              <h2 className="text-base font-black text-white drop-shadow-sm">
                سلة المشتريات ({totalCount} {totalCount === 1 ? 'منتج' : 'منتجات'})
              </h2>
            </div>
            <button
              onClick={closeDrawer}
              className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/80 mb-5 shadow-inner">
            <div className="flex items-center justify-between text-[11px] font-bold text-teal-400 mb-2">
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> التوصيل المجاني مفعل لطلبك!</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500 h-full w-full rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
            </div>
          </div>

          {/* Cart Items List */}
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-20 h-20 bg-slate-950 rounded-full border border-slate-800 flex items-center justify-center mx-auto shadow-inner">
                <span className="text-4xl block">🛍️</span>
              </div>
              <p className="text-slate-400 text-xs font-medium">سلة المشتريات فارغة حالياً.</p>
              <button
                onClick={closeDrawer}
                className="text-teal-400 text-xs font-bold underline cursor-pointer hover:text-teal-300 transition-colors"
              >
                تصفح المنتجات المتوفرة
              </button>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 bg-slate-900 rounded-xl border border-slate-700/60 shrink-0 p-1 overflow-hidden flex items-center justify-center shadow-inner group-hover:border-teal-500/30 transition-colors">
                      <Image
                        src={item.product.image || '/products/shower.png'}
                        alt={item.product.name}
                        fill
                        sizes="56px"
                        className="object-contain p-1 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-teal-300 transition-colors">
                        {item.product.name}
                      </h4>
                      <div className="text-emerald-400 font-black text-sm mt-0.5">
                        {item.tierPrice} درهم
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                          {item.quantity} {item.quantity === 1 ? 'قطعة' : 'قطع'}
                        </span>
                        {item.selectedColor && (
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                            {item.selectedColor}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-500 hover:text-red-400 hover:bg-red-500/10 p-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    
                    <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/80 px-2 py-1 rounded-lg text-xs shadow-inner">
                      <button
                        onClick={() => updateItemQuantity(item.id, -1)}
                        className="text-slate-400 hover:text-white cursor-pointer active:scale-95"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-black text-white text-xs px-1 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(item.id, 1)}
                        className="text-slate-400 hover:text-white cursor-pointer active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* In-Drawer Cross-Sells */}
          {crossSellCandidates.length > 0 && items.length > 0 && (
            <div className="border-t border-slate-800/80 pt-4 mb-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>أضف لطلبك ووفر أكثر (عروض متقاطعة):</span>
              </div>
              <div className="space-y-2">
                {crossSellCandidates.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between gap-2 hover:border-teal-500/30 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative w-10 h-10 bg-slate-900 rounded-lg border border-slate-700/60 shrink-0 overflow-hidden group-hover:border-teal-500/30 transition-colors shadow-inner">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="40px"
                          className="object-contain p-0.5 group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-white line-clamp-1 group-hover:text-teal-300 transition-colors">
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          باقة قطعة واحدة: <span className="font-bold text-emerald-400">199 درهم</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => addItem(prod, 1)}
                      className="bg-teal-500/10 hover:bg-teal-500 text-teal-400 hover:text-slate-950 border border-teal-500/20 text-[11px] font-black px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-sm"
                    >
                      + أضف للسلة
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer & Checkout Action */}
        {items.length > 0 && (
          <div className="border-t border-slate-800/80 pt-4 space-y-3 bg-slate-900/95 relative z-10">
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/80 flex items-center justify-between shadow-inner">
              <div>
                <span className="text-xs text-slate-400 font-bold block">المبلغ الإجمالي عند الاستلام:</span>
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1"><Truck className="w-3 h-3" /> شامل التوصيل المجاني</span>
              </div>
              <span className="text-2xl font-black text-teal-400 drop-shadow-sm">
                {totalPrice} <span className="text-xs text-slate-400 font-bold">درهم</span>
              </span>
            </div>

            <button
              onClick={openCheckout}
              className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-400 hover:via-teal-400 hover:to-emerald-400 text-slate-950 font-black text-sm py-4 rounded-2xl shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] group"
            >
              <span>إتمام الطلب والدفع عند الاستلام</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center font-medium bg-slate-950/50 py-1.5 rounded-lg border border-slate-800/50">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>المعاينة والفحص متاحان بالكامل قبل دفع أي درهم للموزع</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
