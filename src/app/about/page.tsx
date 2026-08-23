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
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0C192E] to-slate-950" />
        <div className="relative z-10 px-6 md:px-12 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-black px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>من نحن — قصة، هوية، والتزامات العلامة التجارية</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Vitalis Maroc™
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">
              حلول عملية مبتكرة لروتين يومي أكثر راحة
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            العلامة المغربية المتخصصة في تقديم منتجات أصلية ومختبرة بعناية، لمعالجة المشاكل اليومية الأكثر شيوعاً في المنازل والعمل، مع ضمان تجربة شراء آمنة 100% قائمة على الشفافية والمعاينة قبل الدفع.
          </p>
        </div>
      </div>

      {/* ======== رسالتنا وقصتنا ======== */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              رسالتنا (Notre Mission)
            </span>
            <h2 className="text-2xl font-black text-white leading-snug">
              لماذا أسسنا Vitalis Maroc™؟
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              انطلقت <strong>Vitalis Maroc™</strong> من ملاحظة واقعية: يعاني آلاف المغاربة يومياً من مشاكل متكررة تؤثر على راحتهم وصحتهم اليومية — مثل ضعف صبيب ماء الدوش وتراكم الكالكير، صعوبة تنظيف الأسنان وخاصة مع التقويم، والآلام الحادة لأسفل الظهر والعمود الفقري الناتجة عن الجلوس الطويل أثناء العمل أو السياقة.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              هدفنا هو توفير منتجات وظيفية عالية الجودة تضمن نتائج فورية، مع كسر مخاوف التجارة الإلكترونية من خلال توفير <strong>حق المعاينة والتجربة أمام الموزع قبل دفع أي درهم</strong>، مع <strong>ضمان استبدال رسمي لمدة سنة كاملة</strong>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: '+2,480', label: 'زبون راضٍ بالمغرب', color: 'text-emerald-400' },
              { num: '3', label: 'منتجات أساسية مختبرة بعناية', color: 'text-white' },
              { num: '12', label: 'شهراً ضمان استبدال معتمد', color: 'text-amber-400' },
              { num: '48h', label: 'أقصى وقت للتوصيل المجاني', color: 'text-teal-400' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4 text-center shadow-inner">
                <span className={`text-2xl font-black block ${s.color}`}>{s.num}</span>
                <span className="text-xs text-slate-400 font-medium mt-0.5 block leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======== كيف نختار ونختبر منتجاتنا ======== */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-3">
            معايير الجودة والمصداقية
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white">
            كيف نختار كل منتج نعرضه في متجرنا؟
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl mx-auto">
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
            <div key={i} className="flex items-start gap-4 p-4 bg-slate-950 border border-slate-800 rounded-2xl hover:border-teal-500/40 transition-all">
              <span className="text-base font-black text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-xl shrink-0">
                {s.step}
              </span>
              <div>
                <h3 className="font-black text-sm text-white mb-1">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
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
          <div key={i} className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-lg space-y-2">
            <div className="bg-slate-950 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center">
              {v.icon}
            </div>
            <h3 className="font-black text-sm text-white">{v.title}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* ======== معلومات المقر والتواصل ======== */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
          <div>
            <span className="font-black text-sm text-white">Vitalis Maroc™</span>
            <span className="block text-xs text-slate-400">الدار البيضاء، المملكة المغربية • خدمة التوصيل السريع لجميع المدن</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="text-xs font-bold text-slate-200 bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl hover:bg-slate-700 transition-all cursor-pointer"
          >
            اتصل بنا
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center gap-1.5 text-xs font-black text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 px-5 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
          >
            <span>استكشف المنتجات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
