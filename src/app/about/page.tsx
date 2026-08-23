import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck, Award, Sparkles, CheckCircle2,
  Truck, Users, Star, ArrowLeft, MapPin, Check,
  Package, ThumbsUp, HelpCircle
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">

      {/* ======== HERO — قصة وهوية العلامة ======== */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950" />
        <div className="relative z-10 px-6 md:px-12 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-black px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>من نحن — قصة وقيم العلامة التجارية</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Vitalis Maroc™
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
              حلول ذكية لروتين يومي أكثر راحة
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            علامة مغربية متخصصة في توفير منتجات عملية ومبتكرة تم اختبارها بدقة لحل المشاكل اليومية في البيت، العمل، والتنقل.
          </p>
        </div>
      </div>

      {/* ======== رسالتنا ======== */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              رسالتنا (Notre Mission)
            </span>
            <h2 className="text-2xl font-black text-gray-900 leading-snug">
              لماذا أسسنا Vitalis Maroc™؟
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              انطلقت <strong>Vitalis Maroc</strong> من ملاحظة بسيطة: هناك مشاكل يومية متكررة يعاني منها كل بيت ومكتب في المغرب — مثل ضعف صبيب الماء وتراكم شوائب الكالكير، صعوبة تنظيف الأسنان وخاصة مع التقويم، وآلام أسفل الظهر الناتجة عن الجلوس الطويل في العمل أو السياقة.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              هدفنا هو تقديم منتجات مجربة وفعالة تحل هذه المشاكل بشكل عملي وملموس، مع توفير تجربة تسوق آمنة 100% تقوم على المعاينة والفحص قبل الدفع وضمان الجودة لمدة سنة كاملة.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: '+2,480', label: 'زبون راضٍ بالمغرب', color: 'text-teal-600' },
              { num: '3', label: 'منتجات رابحة مختارة بعناية', color: 'text-gray-900' },
              { num: '12', label: 'شهراً ضمان استبدال', color: 'text-amber-600' },
              { num: '48h', label: 'أقصى وقت للتوصيل المجاني', color: 'text-emerald-600' },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center">
                <span className={`text-2xl font-black block ${s.color}`}>{s.num}</span>
                <span className="text-xs text-gray-500 font-medium mt-0.5 block leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======== كيف نختار منتجاتنا ======== */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full mb-3">
            معايير الجودة والمصداقية
          </span>
          <h2 className="text-xl md:text-2xl font-black text-gray-900">
            كيف نختار كل منتج نعرضه في متجرنا؟
          </h2>
          <p className="text-gray-500 text-sm mt-1 max-w-xl mx-auto">
            لا نعرض مئات المنتجات العشوائية — نركز فقط على المنتجات التي تثبت فائدتها وجودتها العالية.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              step: '01',
              title: 'حل مشكلة حقيقية وملموسة',
              desc: 'نختار فقط المنتجات التي تقدم فائدة مباشرة وسريعة للمستخدم في حياته اليومية.',
            },
            {
              step: '02',
              title: 'تجربة واختبار مسبق للجودة',
              desc: 'كل منتج يتم فحصه واختباره لنتأكد من متانة المواد وسهولة الاستخدام قبل إتاحته للطلب.',
            },
            {
              step: '03',
              title: 'ضمان الاستبدال لمدة 12 شهراً',
              desc: 'نثق في جودة ما نقدمه، لذلك نوفر ضمان استبدال مجاني طوال سنة كاملة عند أي عيب مصنعي.',
            },
            {
              step: '04',
              title: 'حق المعاينة والتجربة قبل الدفع',
              desc: 'يحق لكل زبون فتح الطرد والتأكد من السلعة أمام الموزع قبل دفع أي درهم.',
            },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-teal-300 transition-all">
              <span className="text-base font-black text-teal-600 bg-teal-50 px-2.5 py-1 rounded-xl shrink-0">
                {s.step}
              </span>
              <div>
                <h3 className="font-black text-sm text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======== قيمنا الجوهرية ======== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
            title: 'الشفافية والأمانة',
            desc: 'المعاينة قبل الدفع تضمن أنك لا تدفع إلا وأنت راضٍ 100% عن المنتج الذي وصلك.',
          },
          {
            icon: <Award className="w-6 h-6 text-amber-500" />,
            title: 'جودة تدوم طويلاً',
            desc: 'نختار مواد ممتازة تتحمل الاستخدام اليومي المكثف وتوفر لك قيمة حقيقية مقابل نقودك.',
          },
          {
            icon: <Truck className="w-6 h-6 text-emerald-600" />,
            title: 'خدمة زبناء قريبة وسريعة',
            desc: 'فريقنا متواجد لمتابعة طلبك خطوة بخطوة والإجابة على أي استفسار طوال أيام الأسبوع.',
          },
        ].map((v, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-2">
            <div>{v.icon}</div>
            <h3 className="font-black text-sm text-gray-900">{v.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* ======== معلومات التواصل والمقر ======== */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
          <div>
            <span className="font-black text-sm text-gray-900">Vitalis Maroc™</span>
            <span className="block text-xs text-gray-500">الدار البيضاء، المملكة المغربية • خدمة التوصيل لجميع المدن</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-200 transition-all"
          >
            اتصل بنا
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center gap-1.5 text-xs font-black text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 px-5 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <span>استكشف المنتجات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
