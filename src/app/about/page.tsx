import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Award, Sparkles, CheckCircle2,
  Truck, Users, Star, ArrowLeft, MapPin, Check,
  Package, ThumbsUp, HelpCircle, HeartHandshake, Eye
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto" dir="rtl">

      {/* ======== HERO — قصة وهوية العلامة ======== */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800/60 shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] group">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0a1122] to-slate-950" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-1000" />
        
        <div className="relative z-10 px-6 md:px-12 py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] md:text-xs font-black px-4 py-1.5 rounded-full mb-5 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>من نحن — قصة، هوية، والتزامات العلامة التجارية</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
            Vitalis Maroc™
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent text-2xl md:text-4xl font-bold drop-shadow-sm">
              حلول عملية مبتكرة لروتين يومي أكثر راحة
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-5 max-w-2xl mx-auto leading-relaxed font-medium">
            العلامة المغربية المتخصصة في تقديم منتجات أصلية ومختبرة بعناية، لمعالجة المشاكل اليومية الأكثر شيوعاً في المنازل والعمل، مع ضمان تجربة شراء آمنة 100% قائمة على الشفافية والمعاينة قبل الدفع.
          </p>
        </div>
      </div>

      {/* ======== رسالتنا وقصتنا ======== */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-xl space-y-6 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="inline-block text-[11px] md:text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full shadow-sm">
              رسالتنا (Notre Mission)
            </span>
            <h2 className="text-2xl font-black text-white leading-snug drop-shadow-sm">
              لماذا أسسنا Vitalis Maroc™؟
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
              انطلقت <strong>Vitalis Maroc™</strong> من ملاحظة واقعية: يعاني آلاف المغاربة يومياً من مشاكل متكررة تؤثر على راحتهم وصحتهم اليومية — مثل ضعف صبيب ماء الدوش وتراكم الكالكير، صعوبة تنظيف الأسنان وخاصة مع التقويم، والآلام الحادة لأسفل الظهر والعمود الفقري الناتجة عن الجلوس الطويل أثناء العمل أو السياقة.
            </p>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
              هدفنا هو توفير منتجات وظيفية عالية الجودة تضمن نتائج فورية، مع كسر مخاوف التجارة الإلكترونية من خلال توفير <strong>حق المعاينة والتجربة أمام الموزع قبل دفع أي درهم</strong>، مع <strong>ضمان استبدال رسمي لمدة سنة كاملة</strong>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: '+2,480', label: 'زبون راضٍ بالمغرب', color: 'text-emerald-400', border: 'border-emerald-500/20' },
              { num: '3', label: 'منتجات أساسية مختبرة بعناية', color: 'text-white', border: 'border-slate-700/60' },
              { num: '12', label: 'شهراً ضمان استبدال معتمد', color: 'text-amber-400', border: 'border-amber-500/20' },
              { num: '48h', label: 'أقصى وقت للتوصيل المجاني', color: 'text-teal-400', border: 'border-teal-500/20' },
            ].map((s, i) => (
              <div key={i} className={`bg-slate-950/80 border ${s.border} rounded-2xl p-4 text-center shadow-inner hover:bg-slate-900 transition-colors`}>
                <span className={`text-2xl font-black block drop-shadow-sm ${s.color}`}>{s.num}</span>
                <span className="text-[10px] md:text-xs text-slate-400 font-bold mt-1 block leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======== كيف نختار ونختبر منتجاتنا ======== */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-xl backdrop-blur-sm">
        <div className="text-center mb-8">
          <span className="inline-block text-[11px] md:text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-3 shadow-sm">
            معايير الجودة والمصداقية
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white drop-shadow-sm">
            كيف نختار كل منتج نعرضه في متجرنا؟
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-2 max-w-xl mx-auto font-medium">
            لا نعرض مئات المنتجات العشوائية — نركز بدقة فقط على الحلول التي أثبتت جدارتها وفعاليتها العملية.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              step: '01',
              title: 'حل مشكلة حقيقية وملموسة',
              desc: 'نختار فقط المنتجات التي تقدم فائدة مباشرة وفورية تحل مشكلاً حقيقياً يعاني منه البيت أو الفرد في المغرب.',
            },
            {
              step: '02',
              title: 'اختبار الجودة والمتانة مسبقاً',
              desc: 'يخضع كل منتج لفحص دقيق للتأكد من متانة المواد، مقاومتها للماء والضغط، وسلامة الاستخدام اليومي طويل الأمد.',
            },
            {
              step: '03',
              title: 'حق المعاينة والفحص قبل الدفع',
              desc: 'نضمن لك راحة البال المطلقة: يمكنك فتح الطرد وفحص جودة السلعة أمام الموزع قبل تسليم أي درهم.',
            },
            {
              step: '04',
              title: 'ضمان استبدال ذهبي لمدة 12 شهراً',
              desc: 'نثق تماماً في جودة ما نقدمه؛ وفي حال حدوث أي عيب مصنعي طوال سنة كاملة، يتم تعويضك باستبدال فوري دون أي تعقيد.',
            },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 md:p-5 bg-slate-950/80 border border-slate-800/80 rounded-2xl hover:border-teal-500/40 hover:bg-slate-900 transition-all shadow-sm">
              <span className="text-sm md:text-base font-black text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-xl shrink-0 shadow-sm">
                {s.step}
              </span>
              <div>
                <h3 className="font-black text-sm text-white mb-1.5">{s.title}</h3>
                <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======== قيمنا الجوهرية ======== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
            title: 'الشفافية والمصداقية',
            desc: 'المعاينة قبل الدفع والضمانات المكتوبة تضمن أنك لا تدفع إلا وأنت راضٍ 100% عن مشترياتك.',
          },
          {
            icon: <Award className="w-6 h-6 text-amber-400" />,
            title: 'جودة تدوم طويلاً',
            desc: 'مواد أصلية متينة ومطابقة للمواصفات القياسية العالمية لتتحمل الاستخدام اليومي المستمر.',
          },
          {
            icon: <Truck className="w-6 h-6 text-teal-400" />,
            title: 'خدمة عملاء قريبة وسريعة',
            desc: 'فريق محلي متواجد لمتابعة شحنتك، الإجابة على استفساراتك، وخدمتك طوال أيام الأسبوع.',
          },
        ].map((v, i) => (
          <div key={i} className="bg-slate-900/80 rounded-2xl border border-slate-800/80 p-5 shadow-lg space-y-3 hover:bg-slate-900 hover:border-slate-700 transition-colors backdrop-blur-sm group">
            <div className="bg-slate-950 border border-slate-800 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
              {v.icon}
            </div>
            <h3 className="font-black text-sm text-white">{v.title}</h3>
            <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* ======== معلومات المقر والتواصل ======== */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800/80 shadow-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-sm group hover:border-slate-700 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
          </div>
          <div>
            <span className="font-black text-sm text-white">Vitalis Maroc™</span>
            <span className="block text-xs text-slate-400">الدار البيضاء، المملكة المغربية • خدمة التوصيل السريع لجميع المدن</span>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Link
            href="/contact"
            className="flex-1 md:flex-none text-center text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 px-4 py-3 rounded-xl hover:bg-slate-700 transition-all cursor-pointer"
          >
            اتصل بنا
          </Link>
          <Link
            href="/collections"
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 px-5 py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer active:scale-[0.98]"
          >
            <span>استكشف المنتجات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
