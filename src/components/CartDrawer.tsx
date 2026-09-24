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
    <div className="fixed inset-0 z-50 flex justify-end bg-[#3B342C]/40 backdrop-blur-md animate-fadeIn" dir="rtl">
      <div className="w-full max-w-md bg-[#FFFFFF] h-full border-r border-[#E8E0D5] p-5 flex flex-col justify-between overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F6F1EA] flex items-center justify-center border border-[#E8E0D5]">
                <span className="text-sm">🛒</span>
              </div>
              <h2 className="text-base font-black text-[#3B342C]">
                سلة المشتريات ({totalCount} {totalCount === 1 ? 'منتج' : 'منتجات'})
              </h2>
            </div>
            <button
              onClick={closeDrawer}
              className="text-[#8B8176] hover:text-[#3B342C] p-1.5 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#F6F1EA] p-3.5 rounded-2xl border border-[#E8E0D5] mb-5">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#3B342C] mb-2">
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
              <div className="w-20 h-20 bg-white rounded-full border border-[#E8E0D5] flex items-center justify-center mx-auto">
                <span className="text-4xl block">🛍️</span>
              </div>
              <p className="text-[#8B8176] text-xs font-medium">سلة المشتريات فارغة حالياً.</p>
              <button
                onClick={closeDrawer}
                className="text-[#5C6B4F] text-xs font-bold underline cursor-pointer hover:text-[#5C6B4F] transition-colors"
              >
                تصفح المنتجات المتوفرة
              </button>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-2xl border border-[#E8E0D5] flex items-center justify-between gap-3 hover:border-[#E8E0D5] transition-colors shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 bg-[#F6F1EA] rounded-xl border border-[#E8E0D5] shrink-0 p-1 overflow-hidden flex items-center justify-center group-hover:border-[#E8E0D5] transition-colors">
                      <Image
                        src={item.product.image || '/products/shower.png'}
                        alt={item.product.name}
                        fill
                        sizes="56px"
                        className="object-contain p-1 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#3B342C] line-clamp-1 group-hover:text-[#3B342C] transition-colors">
                        {item.product.name}
                      </h4>
                      <div className="text-[#5C6B4F] font-black text-sm mt-0.5">
                        {item.tierPrice} درهم
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[10px] font-bold text-[#8B8176] bg-[#F6F1EA] px-1.5 py-0.5 rounded border border-[#E8E0D5]">
                          {item.quantity} {item.quantity === 1 ? 'قطعة' : 'قطع'}
                        </span>
                        {item.selectedColor && (
                          <span className="text-[10px] font-bold text-[#8B8176] bg-[#F6F1EA] px-1.5 py-0.5 rounded border border-[#E8E0D5] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F6F1EA]0"></span>
                            {item.selectedColor}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#8B8176] hover:text-red-400 hover:bg-red-500/10 p-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    
                    <div className="flex items-center gap-2 bg-[#F6F1EA] border border-[#E8E0D5] px-2 py-1 rounded-lg text-xs">
                      <button
                        onClick={() => updateItemQuantity(item.id, -1)}
                        className="text-[#8B8176] hover:text-[#3B342C] cursor-pointer active:scale-95"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-black text-[#3B342C] text-xs px-1 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(item.id, 1)}
                        className="text-[#8B8176] hover:text-[#3B342C] cursor-pointer active:scale-95"
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
            <div className="border-t border-[#E8E0D5] pt-4 mb-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#3B342C] mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8B8176] animate-pulse" />
                <span>أضف لطلبك ووفر أكثر (عروض متقاطعة):</span>
              </div>
              <div className="space-y-2">
                {crossSellCandidates.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white p-2.5 rounded-xl border border-[#E8E0D5] flex items-center justify-between gap-2 hover:border-[#E8E0D5] transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative w-10 h-10 bg-[#F6F1EA] rounded-lg border border-[#E8E0D5] shrink-0 overflow-hidden group-hover:border-[#E8E0D5] transition-colors">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="40px"
                          className="object-contain p-0.5 group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-[#3B342C] line-clamp-1 group-hover:text-[#3B342C] transition-colors">
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-[#8B8176]">
                          باقة قطعة واحدة: <span className="font-bold text-[#5C6B4F]">179 درهم</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => addItem(prod, 1)}
                      className="bg-[#F6F1EA]0/10 hover:bg-[#F6F1EA]0 text-[#5C6B4F] hover:text-slate-950 border border-teal-500/20 text-[11px] font-black px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-sm"
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
          <div className="border-t border-[#E8E0D5] pt-4 space-y-3 bg-[#FFFFFF] relative z-10">
            <div className="bg-white p-3.5 rounded-2xl border border-[#E8E0D5] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#8B8176] font-bold block">المبلغ الإجمالي عند الاستلام:</span>
                <span className="text-[10px] text-[#5C6B4F] font-bold flex items-center gap-1"><Truck className="w-3 h-3" /> شامل التوصيل المجاني</span>
              </div>
              <span className="text-2xl font-black text-[#3B342C]">
                {totalPrice} <span className="text-xs text-[#8B8176] font-bold">درهم</span>
              </span>
            </div>

            <button
              onClick={openCheckout}
              className="w-full bg-[#5C6B4F] hover:bg-[#4A5740] text-white font-black text-sm py-4 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] group"
            >
              <span>إتمام الطلب والدفع عند الاستلام</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8B8176] text-center font-medium bg-[#F6F1EA] py-1.5 rounded-lg border border-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5C6B4F]" />
              <span>المعاينة والفحص متاحان بالكامل قبل دفع أي درهم للموزع</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
