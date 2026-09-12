'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, Clock, Lock, Mail, MapPin, ShieldCheck, Star, Truck, User, Phone } from 'lucide-react';

const REVIEWS = [
  {
    name: 'سارة ب.',
    city: 'الدار البيضاء',
    text: 'الطلب وصل في علبة مرتبة، والموزع خلاني نتفقد الطرد قبل ما نخلص. التعامل كان واضح وبدون ضغط.',
  },
  {
    name: 'يوسف م.',
    city: 'الرباط',
    text: 'التوصيل كان في الوقت المتفق عليه. التواصل عبر الهاتف سهل، والأسئلة تجاوبوا عليها بسرعة.',
  },
  {
    name: 'إيمان ك.',
    city: 'مراكش',
    text: 'أعجبني أن الدفع يتم عند الاستلام. فتحت الطرد، تأكدت من محتواه، ثم أتممت الدفع بكل راحة.',
  },
  {
    name: 'حمزة ن.',
    city: 'طنجة',
    text: 'تجربة شراء عادية ومنظمة. التغليف نظيف، والموظف كان محترم وشرح خطوات الاستلام باختصار.',
  },
];

export default function WarmupLandingPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#08111d] text-slate-100" dir="rtl">
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-slate-800">
              <Image src="/logo.png" alt="Vitalis Maroc" fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <p className="font-black text-white leading-none">Vitalis Maroc</p>
              <p className="text-[11px] text-slate-400 mt-1">متجر إلكتروني مغربي</p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
            توصيل داخل المغرب
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <section className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            معاينة عند الاستلام
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            تسوق بخطوات واضحة
            <span className="block text-emerald-400 mt-2">ودفع عند الاستلام</span>
          </h1>
          <p className="mt-5 text-slate-300 text-sm md:text-base leading-relaxed">
            صفحة تعريفية بسيطة لمتجر إلكتروني يخدم المدن المغربية. الطلب يُراجع عند الباب، والدفع يتم بعد معاينة الطرد.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
          {[
            { icon: Truck, title: 'توصيل منظم', text: 'إرسال داخل المملكة خلال أيام العمل.' },
            { icon: ShieldCheck, title: 'معاينة الطرد', text: 'تقدر تفتح العلبة أمام الموزع قبل الأداء.' },
            { icon: Clock, title: 'تواصل واضح', text: 'متابعة هاتفية لمواعيد التوصيل والاستفسارات.' },
          ].map((item) => (
            <div key={item.title} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <item.icon className="w-5 h-5 text-emerald-400 mb-3" />
              <h2 className="font-black text-white text-sm">{item.title}</h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
          <div className="space-y-3">
            <h2 className="font-black text-white text-xl mb-4">ماذا يقول الزبناء؟</h2>
            {REVIEWS.map((review) => (
              <article key={review.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div>
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <p className="text-[11px] text-slate-500">{review.city}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{review.text}</p>
              </article>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sticky top-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Check className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="font-black text-white text-lg">تم استلام طلب التواصل</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  شكراً لك. هذه صفحة تعريفية، ولن يتم إنشاء شحنة حقيقية من هنا.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-black text-white text-lg">نموذج طلب معاينة</h3>
                <p className="text-xs text-slate-400 mt-1 mb-5">
                  اترك اسمك ورقم هاتفك. هذا النموذج للعرض فقط ولا يُرسل أي طلب للمتجر.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-1.5">
                      <User className="w-3.5 h-3.5 text-teal-400" />
                      الاسم الكامل
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="مثال: يوسف التازي"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-1.5">
                      <Phone className="w-3.5 h-3.5 text-teal-400" />
                      رقم الهاتف
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="06XXXXXXXX"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 text-left font-mono"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      المدينة
                    </label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="الدار البيضاء"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-xl"
                  >
                    إرسال طلب التواصل
                  </button>
                </form>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-bold mt-4">
                  <Lock className="w-3.5 h-3.5" />
                  النموذج لا يحفظ بيانات ولا ينشئ طلباً
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 mt-10">
        <div className="max-w-5xl mx-auto px-4 py-8 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Vitalis Maroc — متجر إلكتروني بالمغرب.</p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> الدار البيضاء</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> contact@vitalismaroc.shop</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
