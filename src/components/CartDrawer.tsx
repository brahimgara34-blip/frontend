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
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-fadeIn" dir="rtl">
      <div className="w-full max-w-md bg-slate-900 h-full border-r border-slate-800 p-5 flex flex-col justify-between overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛒</span>
              <h2 className="text-base font-black text-white">
                سلة المشتريات ({totalCount} {totalCount === 1 ? 'منتج' : 'منتجات'})
              </h2>
            </div>
            <button
              onClick={closeDrawer}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 mb-5">
            <div className="flex items-center justify-between text-[11px] font-bold text-teal-400 mb-1.5">
              <span>🎉 التوصيل المجاني مفعل لطلبك!</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full w-full rounded-full"></div>
            </div>
          </div>

          {/* Cart Items List */}
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <span className="text-4xl block">🛍️</span>
              <p className="text-slate-400 text-xs">سلة المشتريات فارغة حالياً.</p>
              <button
                onClick={closeDrawer}
                className="text-teal-400 text-xs font-bold underline cursor-pointer"
              >
                تصفح المنتجات المتوفرة
              </button>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 bg-slate-900 rounded-xl border border-slate-800 shrink-0 p-1 overflow-hidden flex items-center justify-center">
                      <Image
                        src={item.product.image || '/products/shower.png'}
                        alt={item.product.name}
                        fill
                        sizes="48px"
                        className="object-contain p-0.5"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="text-teal-400 font-black text-xs mt-0.5">
                        {item.tierPrice} درهم مغربي
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] text-slate-400">
                          {item.quantity} {item.quantity === 1 ? 'قطعة' : 'قطع'}
                        </span>
                        {item.selectedColor && (
                          <>
                            <span className="text-slate-600">·</span>
                            <span className="text-[10px] text-slate-400">
                              {item.selectedColor}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    
                    <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded-lg text-xs">
                      <button
                        onClick={() => updateItemQuantity(item.id, -1)}
                        className="text-slate-400 hover:text-white cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-white text-xs px-1">{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(item.id, 1)}
                        className="text-slate-400 hover:text-white cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* In-Drawer Cross-Sells */}
          {crossSellCandidates.length > 0 && items.length > 0 && (
            <div className="border-t border-slate-800 pt-4 mb-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>أضف لطلبك ووفر أكثر (عروض متقاطعة):</span>
              </div>
              <div className="space-y-2">
                {crossSellCandidates.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative w-10 h-10 bg-slate-900 rounded-lg border border-slate-800 shrink-0 overflow-hidden">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="40px"
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-white line-clamp-1">
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          باقة قطعة واحدة: 249 درهم
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => addItem(prod, 1)}
                      className="bg-teal-500/10 hover:bg-teal-500 text-teal-400 hover:text-slate-950 border border-teal-500/20 text-[11px] font-black px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap"
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
          <div className="border-t border-slate-800 pt-4 space-y-3 bg-slate-900">
            <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">المبلغ الإجمالي عند الاستلام:</span>
                <span className="text-[10px] text-emerald-400 font-bold">شامل التوصيل المجاني بالمغرب</span>
              </div>
              <span className="text-2xl font-black text-teal-400">
                {totalPrice} <span className="text-xs text-slate-300 font-normal">درهم</span>
              </span>
            </div>

            <button
              onClick={openCheckout}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-sm py-4 rounded-2xl shadow-xl shadow-teal-500/10 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>إتمام الطلب والدفع عند الاستلام</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>المعاينة والفحص متاحان بالكامل قبل دفع أي درهم للموزع</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
