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
      <div className="relative rounded-3xl overflow-hidden border border-[#E8E0D5] bg-white shadow-sm group">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#F6F1EA]0/10 rounded-full blur-3xl group-hover:bg-[#F6F1EA]0/20 transition-colors duration-1000" />
        
        <div className="relative z-10 px-6 md:px-12 py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F6F1EA] border border-[#E8E0D5] text-[#3B342C] text-[11px] md:text-xs font-black px-4 py-1.5 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-[#8B8176] animate-pulse" />
            <span>من نحن — قصة، هوية، والتزامات العلامة التجارية</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#3B342C] leading-tight">
            Vitalis Maroc™
            <br />
            <span className="text-[#3B342C] text-2xl md:text-4xl font-bold">
              حلول عملية مبتكرة لروتين يومي أكثر راحة
            </span>
          </h1>
          <p className="text-[#8B8176] text-sm md:text-base mt-5 max-w-2xl mx-auto leading-relaxed font-medium">
            العلامة المغربية المتخصصة في تقديم منتجات أصلية ومختبرة بعناية، لمعالجة المشاكل اليومية الأكثر شيوعاً في المنازل والعمل، مع ضمان تجربة شراء آمنة 100% قائمة على الشفافية والمعاينة قبل الدفع.
          </p>
        </div>
      </div>

      {/* ======== رسالتنا وقصتنا ======== */}
      <div className="bg-white border border-[#E8E0D5] rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="inline-block text-[11px] md:text-xs font-bold text-[#5C6B4F] bg-[#F6F1EA]0/10 border border-emerald-500/20 px-3 py-1 rounded-full shadow-sm">
              رسالتنا (Notre Mission)
            </span>
            <h2 className="text-2xl font-black text-[#3B342C] leading-snug">
              لماذا أسسنا Vitalis Maroc™؟
            </h2>
            <p className="text-[#8B8176] text-xs md:text-sm leading-relaxed font-medium">
              انطلقت <strong>Vitalis Maroc™</strong> من ملاحظة واقعية: يعاني آلاف المغاربة يومياً من مشاكل متكررة تؤثر على راحتهم وصحتهم اليومية — مثل ضعف صبيب ماء الدوش وتراكم الكالكير، صعوبة تنظيف الأسنان وخاصة مع التقويم، برودة الركبة وآلام المفاصل، وصعوبة تتبع الوزن الحقيقي.
            </p>
            <p className="text-[#8B8176] text-xs md:text-sm leading-relaxed font-medium">
              هدفنا هو توفير منتجات وظيفية عالية الجودة تضمن نتائج فورية، مع كسر مخاوف التجارة الإلكترونية من خلال توفير <strong>حق المعاينة والتجربة أمام الموزع قبل دفع أي درهم</strong>، مع <strong>ضمان استبدال رسمي لمدة سنة كاملة</strong>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: '+2,480', label: 'زبون راضٍ بالمغرب', color: 'text-[#5C6B4F]', border: 'border-emerald-500/20' },
              { num: '4', label: 'منتجات أساسية مختبرة بعناية', color: 'text-[#3B342C]', border: 'border-[#E8E0D5]' },
              { num: '12', label: 'شهراً ضمان استبدال معتمد', color: 'text-[#8B8176]', border: 'border-amber-500/20' },
              { num: '48h', label: 'أقصى وقت للتوصيل المجاني', color: 'text-[#5C6B4F]', border: 'border-teal-500/20' },
            ].map((s, i) => (
              <div key={i} className={`bg-[#F6F1EA] border ${s.border} rounded-2xl p-4 text-center hover:bg-white transition-colors`}>
                <span className={`text-2xl font-black block drop-shadow-sm ${s.color}`}>{s.num}</span>
                <span className="text-[10px] md:text-xs text-[#8B8176] font-bold mt-1 block leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======== كيف نختار ونختبر منتجاتنا ======== */}
      <div className="bg-white border border-[#E8E0D5] rounded-3xl p-6 md:p-10 shadow-sm">
        <div className="text-center mb-8">
          <span className="inline-block text-[11px] md:text-xs font-bold text-[#3B342C] bg-[#F6F1EA] border border-[#E8E0D5] px-3 py-1 rounded-full mb-3">
            معايير الجودة والمصداقية
          </span>
          <h2 className="text-xl md:text-2xl font-black text-[#3B342C]">
            كيف نختار كل منتج نعرضه في متجرنا؟
          </h2>
          <p className="text-[#8B8176] text-xs md:text-sm mt-2 max-w-xl mx-auto font-medium">
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
            <div key={i} className="flex items-start gap-4 p-4 md:p-5 bg-[#F6F1EA] border border-[#E8E0D5] rounded-2xl hover:border-[#E8E0D5] hover:bg-white transition-all">
              <span className="text-sm md:text-base font-black text-[#3B342C] bg-[#F6F1EA] border border-[#E8E0D5] px-3 py-1.5 rounded-xl shrink-0">
                {s.step}
              </span>
              <div>
                <h3 className="font-black text-sm text-[#3B342C] mb-1.5">{s.title}</h3>
                <p className="text-[#8B8176] text-[11px] md:text-xs leading-relaxed font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======== قيمنا الجوهرية ======== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: <ShieldCheck className="w-6 h-6 text-[#5C6B4F]" />,
            title: 'الشفافية والمصداقية',
            desc: 'المعاينة قبل الدفع والضمانات المكتوبة تضمن أنك لا تدفع إلا وأنت راضٍ 100% عن مشترياتك.',
          },
          {
            icon: <Award className="w-6 h-6 text-[#8B8176]" />,
            title: 'جودة تدوم طويلاً',
            desc: 'مواد أصلية متينة ومطابقة للمواصفات القياسية العالمية لتتحمل الاستخدام اليومي المستمر.',
          },
          {
            icon: <Truck className="w-6 h-6 text-[#5C6B4F]" />,
            title: 'خدمة عملاء قريبة وسريعة',
            desc: 'فريق محلي متواجد لمتابعة شحنتك، الإجابة على استفساراتك، وخدمتك طوال أيام الأسبوع.',
          },
        ].map((v, i) => (
          <div key={i} className="bg-white rounded-2xl border border-[#E8E0D5] p-5 shadow-sm space-y-3 hover:border-[#E8E0D5] transition-colors group">
            <div className="bg-[#F6F1EA] border border-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {v.icon}
            </div>
            <h3 className="font-black text-sm text-[#3B342C]">{v.title}</h3>
            <p className="text-[#8B8176] text-[11px] md:text-xs leading-relaxed font-medium">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* ======== معلومات المقر والتواصل ======== */}
      <div className="bg-white rounded-2xl border border-[#E8E0D5] shadow-sm p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 group hover:border-[#E8E0D5] transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F6F1EA] flex items-center justify-center border border-[#E8E0D5] group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5 text-[#5C6B4F] shrink-0" />
          </div>
          <div>
            <span className="font-black text-sm text-[#3B342C]">Vitalis Maroc™</span>
            <span className="block text-xs text-[#8B8176]">الدار البيضاء، المملكة المغربية • خدمة التوصيل السريع لجميع المدن</span>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Link
            href="/contact"
            className="flex-1 md:flex-none text-center text-xs font-bold text-[#3B342C] bg-[#F6F1EA] border border-[#E8E0D5] px-4 py-3 rounded-xl hover:bg-stone-100 transition-all cursor-pointer"
          >
            اتصل بنا
          </Link>
          <Link
            href="/collections"
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-black text-white bg-[#5C6B4F] hover:bg-[#4A5740] px-5 py-3 rounded-xl transition-all cursor-pointer active:scale-[0.98]"
          >
            <span>استكشف المنتجات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
