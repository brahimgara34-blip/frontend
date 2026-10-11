'use client';

import React from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { PRODUCTS } from '@/lib/products';
import { X, Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Sparkles, Truck } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex justify-end bg-[#111827]/40 backdrop-blur-md animate-fadeIn" dir="rtl">
      <div className="w-full max-w-md bg-[#FFFFFF] h-full border-r border-[#E5E7EB] p-5 flex flex-col justify-between overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F7F8FA] flex items-center justify-center border border-[#E5E7EB]">
                <span className="text-sm">🛒</span>
              </div>
              <h2 className="text-base font-black text-[#111827]">
                سلة المشتريات ({totalCount} {totalCount === 1 ? 'منتج' : 'منتجات'})
              </h2>
            </div>
            <button
              onClick={closeDrawer}
              className="text-[#6B7280] hover:text-[#111827] p-1.5 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#F7F8FA] p-3.5 rounded-2xl border border-[#E5E7EB] mb-5">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#111827] mb-2">
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> التوصيل المجاني مفعل لطلبك!</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500 h-full w-full rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
            </div>
          </div>

          {/* Cart Items List */}
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-20 h-20 bg-white rounded-full border border-[#E5E7EB] flex items-center justify-center mx-auto">
                <span className="text-4xl block">🛍️</span>
              </div>
              <p className="text-[#6B7280] text-xs font-medium">سلة المشتريات فارغة حالياً.</p>
              <button
                onClick={closeDrawer}
                className="text-[#047857] text-xs font-bold underline cursor-pointer hover:text-[#047857] transition-colors"
              >
                تصفح المنتجات المتوفرة
              </button>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-2xl border border-[#E5E7EB] flex items-center justify-between gap-3 hover:border-[#E5E7EB] transition-colors shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 bg-[#F7F8FA] rounded-xl border border-[#E5E7EB] shrink-0 p-1 overflow-hidden flex items-center justify-center group-hover:border-[#E5E7EB] transition-colors">
                      <Image
                        src={item.product.image || '/products/shower.png'}
                        alt={item.product.name}
                        fill
                        sizes="56px"
                        className="object-contain p-1 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111827] line-clamp-1 group-hover:text-[#111827] transition-colors">
                        {item.product.name}
                      </h4>
                      <div className="text-[#047857] font-black text-sm mt-0.5">
                        {item.tierPrice} درهم
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[10px] font-bold text-[#6B7280] bg-[#F7F8FA] px-1.5 py-0.5 rounded border border-[#E5E7EB]">
                          {item.quantity} {item.quantity === 1 ? 'قطعة' : 'قطع'}
                        </span>
                        {item.selectedColor && (
                          <span className="text-[10px] font-bold text-[#6B7280] bg-[#F7F8FA] px-1.5 py-0.5 rounded border border-[#E5E7EB] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#047857]"></span>
                            {item.selectedColor}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#6B7280] hover:text-red-400 hover:bg-red-500/10 p-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    
                    <div className="flex items-center gap-2 bg-[#F7F8FA] border border-[#E5E7EB] px-2 py-1 rounded-lg text-xs">
                      <button
                        onClick={() => updateItemQuantity(item.id, -1)}
                        className="text-[#6B7280] hover:text-[#111827] cursor-pointer active:scale-95"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-black text-[#111827] text-xs px-1 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(item.id, 1)}
                        className="text-[#6B7280] hover:text-[#111827] cursor-pointer active:scale-95"
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
            <div className="border-t border-[#E5E7EB] pt-4 mb-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#111827] mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#6B7280] animate-pulse" />
                <span>أضف لطلبك ووفر أكثر (عروض متقاطعة):</span>
              </div>
              <div className="space-y-2">
                {crossSellCandidates.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white p-2.5 rounded-xl border border-[#E5E7EB] flex items-center justify-between gap-2 hover:border-[#E5E7EB] transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative w-10 h-10 bg-[#F7F8FA] rounded-lg border border-[#E5E7EB] shrink-0 overflow-hidden group-hover:border-[#E5E7EB] transition-colors">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="40px"
                          className="object-contain p-0.5 group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-[#111827] line-clamp-1 group-hover:text-[#111827] transition-colors">
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-[#6B7280]">
                          باقة قطعة واحدة: <span className="font-bold text-[#047857]">{prod.offerTiers[0].price} درهم</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => addItem(prod, 1)}
                      className="bg-[#047857]/10 hover:bg-[#047857] text-[#047857] hover:text-slate-950 border border-teal-500/20 text-[11px] font-black px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-sm"
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
          <div className="border-t border-[#E5E7EB] pt-4 space-y-3 bg-[#FFFFFF] relative z-10">
            <div className="bg-white p-3.5 rounded-2xl border border-[#E5E7EB] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#6B7280] font-bold block">المبلغ الإجمالي عند الاستلام:</span>
                <span className="text-[10px] text-[#047857] font-bold flex items-center gap-1"><Truck className="w-3 h-3" /> شامل التوصيل المجاني</span>
              </div>
              <span className="text-2xl font-black text-[#111827]">
                {totalPrice} <span className="text-xs text-[#6B7280] font-bold">درهم</span>
              </span>
            </div>

            <button
              onClick={openCheckout}
              className="w-full bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-orange-500/25 text-white font-black text-sm py-4 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] group"
            >
              <span>إتمام الطلب والدفع عند الاستلام</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#6B7280] text-center font-medium bg-[#F7F8FA] py-1.5 rounded-lg border border-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5 text-[#047857]" />
              <span>المعاينة والفحص متاحان بالكامل قبل دفع أي درهم للموزع</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
