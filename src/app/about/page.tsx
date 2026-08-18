import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, HeartHandshake, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-12 shadow-xl">
      <div className="text-center space-y-3 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>هويتنا ورؤيتنا بالمملكة المغربية</span>
        </div>
        <h1 className="text-3xl font-black text-white">من نحن — Vitalis Maroc™</h1>
        <p className="text-slate-400 text-xs md:text-sm">
          العلامة المغربية المتخصصة في إعادة هندسة أدوات الراحة والعناية اليومية.
        </p>
      </div>

      <div className="space-y-6 text-xs md:text-sm text-slate-300 leading-relaxed">
        <p>
          تأسست **Vitalis Maroc** بهدف واضح ومحدد: حل المشاكل اليومية التي يعاني منها المستهلك المغربي بصمت، سواء كان ذلك ضعف صبيب المياه ومشاكل الكالكير التي تتلف الشعر، أو جروح اللثة ونزيفها الناتج عن خيوط الأسنان التقليدية، أو آلام أسفل الظهر وعرق النسا الناجم عن ساعات القيادة والعمل المكتبي الطويل.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-2">
            <Award className="w-6 h-6 text-teal-400 mx-auto" />
            <h3 className="font-bold text-white text-xs">جودة هندسية معتمدة</h3>
            <p className="text-[11px] text-slate-400">نختار مكونات طبية وآمنة تدوم لسنوات طويلة.</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-teal-400 mx-auto" />
            <h3 className="font-bold text-white text-xs">الشفافية المطلقة</h3>
            <p className="text-[11px] text-slate-400">حق المعاينة والفحص الكامل قبل دفع أي درهم.</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-2">
            <HeartHandshake className="w-6 h-6 text-teal-400 mx-auto" />
            <h3 className="font-bold text-white text-xs">مرافقة ما بعد البيع</h3>
            <p className="text-[11px] text-slate-400">ضمان استبدال ذهبي ومتابعة مستمرة لرضاكم.</p>
          </div>
        </div>

        <p>
          نحن لا نبيع مجرد منتجات، بل نقدم حلولاً فيزيائية وتقويمية مثبتة علمياً، مغلفة بعناية في علب فاخرة ومختومة تصلك أينما كنت في المغرب مع خدمة التوصيل المجاني والدفع عند الاستلام.
        </p>
      </div>

      <div className="text-center pt-6 border-t border-slate-800">
        <Link
          href="/collections"
          className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs px-6 py-3 rounded-xl transition-all cursor-pointer shadow-lg"
        >
          استكشف منتجاتنا الآن ❯
        </Link>
      </div>
    </div>
  );
}
