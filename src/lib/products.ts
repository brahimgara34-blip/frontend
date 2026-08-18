export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  icon: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  headline: string;
  subheadline: string;
  features: string[];
  scientificReason: string;
  sections: {
    title: string;
    description: string;
    highlight: string;
    imagePosition: 'left' | 'right';
    placeholderSvgText: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'shower',
    slug: 'hydropure-shower',
    name: 'رشاش الاستحمام عالي الضغط بالفلترة المزدوجة ومضاعفة التدفق HydroPure™',
    category: 'العناية بالبشرة والشعر',
    icon: '🚿',
    rating: 4.9,
    reviewsCount: 1420,
    badge: 'الحل النهائي لضعف صبيب المياه وتساقط الشعر',
    headline: 'دوش التوربو المزدوج المفلتر HydroPure™ — حماية شعرك وبشرتك من الكالكير',
    subheadline: 'صفيحة ليزرية تضاعف قوة تدفق الماء 200% مع نظام فلترة أيوني يزيل 98% من الكلور، الصدأ، والكالكير من أول استعمال.',
    features: [
      'مروحة توربينية داخلية لمضاعفة الضغط 200%',
      'فلتر قطن ميكروني + حبيبات السيراميك الأيونية',
      'زر إيقاف تدفق الماء الفوري بلمسة واحدة (Stop)',
      'تركيب قياسي وسهل في 60 ثانية بدون أدوات'
    ],
    scientificReason: 'المياه المنزلية في المدن المغربية تحتوي على نسب عالية من الكالكير والكلور التي تدمر بصيلات الشعر وتسحب الرطوبة الطبيعية من البشرة. الفلتر الأيوني يعادل الشحنات الكيميائية ويحتجز الشوائب المعدنية قبل ملامستها للجسم.',
    sections: [
      {
        title: 'الأساس العلمي لضرر الكالكير على الشعر والبشرة',
        description: 'تراكم الكلور والأملاح الكلسية يؤدي إلى تكسير روابط الكيراتين المسؤولة عن لمعان وقوة الشعر، مما يسبب التقصف المستمر والحكة الجلدية. فلتر HydroPure المزدوج يعيد للمياه نقاءها الطبيعي.',
        highlight: 'إزالة 98% من الكلور والشوائب العالقة',
        imagePosition: 'left',
        placeholderSvgText: 'HydroPure Filtration Technology'
      },
      {
        title: 'صفيحة الـ 300 ثقب ليزري ومروحة التوربين',
        description: 'بفضل نظام الدفع النفاث المبتكر، يتم ضغط المياه عبر 300 ثقب ميكرومتري لولبي، مما يضاعف سرعة الصبيب مرتين حتى في الطوابق العليا مع خفض استهلاك المياه بنسبة 35%.',
        highlight: 'صبيب قوي ومنعش مع توفير 35% من الماء',
        imagePosition: 'right',
        placeholderSvgText: 'Turbo Nozzle High Pressure'
      },
      {
        title: 'معاينة مجانية أمام الموزع وضمان سنة كاملة',
        description: 'نحن نثق في جودة منتجاتنا بنسبة 100%. طردك يصلك في علبة فاخرة مختومة، ويحق لك تفقد المنتج وفحصه بالكامل قبل دفع أي درهم للموزع.',
        highlight: 'ضمان استبدال ذهبي لمدة 12 شهراً',
        imagePosition: 'left',
        placeholderSvgText: '100% Quality Guarantee & Inspection'
      }
    ]
  },
  {
    id: 'flosser',
    slug: 'aurafloss-water-flosser',
    name: 'جهاز خيط الأسنان المائي اللاسلكي عالي النبضات AuraFloss™',
    category: 'صحة الفم واللثة',
    icon: '🦷',
    rating: 4.9,
    reviewsCount: 980,
    badge: 'تنظيف مجهري عميق بديل الخيط التقليدي وجلسات العيادة',
    headline: 'خيط الأسنان المائي اللاسلكي AuraFloss™ — ابتسامة ناصعة ولثة صحية بلا نزيف',
    subheadline: '1800 نبضة مائية فالدقيقة لتفتيت البلاك وتفريغ الجيوب اللثوية الصعبة في 60 ثانية بدون أي ألم أو جروح.',
    features: [
      '3 أوضاع ذكية (عادي، ناعم، نبضي مساجي)',
      'خزان مياه مضاد للبكتيريا سعة 300ml قابل للفك',
      'بطارية ليثيوم تدوم حتى 30 يوماً بشحنة واحدة',
      'مقاوم للماء بالكامل بمعيار IPX7 للاستخدام أثناء الاستحمام'
    ],
    scientificReason: 'الخيوط الحريرية التقليدية تسبب احتكاكاً ميكانيكياً يجرح اللثة ويدفع البكتيريا للداخل. النبضات المائية المجهرية تولد فقاعات هوائية تنفجر على سطح السن وتزيل 99.9% من طبقة البلاك العميقة دون أي احتكاك مؤلم.',
    sections: [
      {
        title: 'لماذا يجرح الخيط التقليدي لثتك؟',
        description: 'الخيط القماشي الحاد يسبب نزيفاً وتراجعاً تدريجياً في خط اللثة. تقنية النبضات المائية المجهرية لـ AuraFloss تنظف بلطف شديد وتنعش أنسجة الفم في 60 ثانية.',
        highlight: 'تنظيف أعمق 5 مرات من الفرشاة والخيط',
        imagePosition: 'left',
        placeholderSvgText: 'Micro-Pulse Water Jet'
      },
      {
        title: 'الحل الأمثل لأصحاب تقويم الأسنان (Les Bagues)',
        description: 'صعوبة الوصول لبقايا الطعام بين أقواس وسلوك التقويم تسبب تسوساً ورائحة كريهة. الفوهة الدوارة 360° لـ AuraFloss تصل للزوايا المستحيلة بمنتهى السهولة.',
        highlight: 'مثالي للتقويم، الجسور، والزراعات',
        imagePosition: 'right',
        placeholderSvgText: 'Braces & Dental Deep Clean'
      },
      {
        title: 'بطارية تدوم شهراً كاملاً وتصميم محمول',
        description: 'اشحنه مرة واحدة عبر كابل USB-C واستخدمه لمدة 30 يوماً متواصلة. خفيف الوزن ومقاوم للماء IPX7 ليرافقك في السفر والمنزل.',
        highlight: 'شحن سريع USB-C وبطارية فائقة التحمل',
        imagePosition: 'left',
        placeholderSvgText: 'Portable IPX7 Waterproof'
      }
    ]
  },
  {
    id: 'cushion',
    slug: 'ergocushion-seat',
    name: 'وسادة المقعد التقويمية المزدوجة لتخفيف ضغط العصعص وعرق النسا ErgoCushion™',
    category: 'الراحة والعمود الفقري',
    icon: '💺',
    rating: 4.8,
    reviewsCount: 1120,
    badge: 'راحة فورية لأسفل الظهر والفقرات القطنية',
    headline: 'وسادة الجل الطبي والميموري فوم ErgoCushion™ — جلوس مريح بدون آلام العصعص',
    subheadline: 'تقنية هجينة تدمج شبكة الجل السداسي المبرد مع ميموري فوم 50D عالي الكثافة لعزل وزن الجسم وتفريغ ضغط العمود الفقري.',
    features: [
      'مصفوفة جل سيليكون طبي سداسي لتبديد الحرارة ومنع التعرق',
      'رغوة ذاكرة عالية الكثافة 50D تتكيف مع شكل الجسم',
      'تصميم مفرغ على شكل U لعزل عظم العصعص في الهواء',
      'غطاء شبكي قابل للغسل مع قاعدة مانعة للانزلاق'
    ],
    scientificReason: 'الجلوس لفترات طويلة على مقاعد صلبة يضع وزناً مضاعفاً على الفقرات القطنية والعصب الوركي (عرق النسا). التصميم المفرغ لـ ErgoCushion يفرغ الضغط بنسبة 70% ويعيد توزيع ثقل الجسم بالتساوي.',
    sections: [
      {
        title: 'تشريح تخفيف الضغط (U-Cutout Anatomy)',
        description: 'تصميم هندسي متقدم يبقي عظم العصعص معلقاً دون ملامسة سطح المقعد، مما يمنع احتكاك الفقرات والتهاب الأعصاب أثناء القيادة الطويلة أو الجلوس المكتبي.',
        highlight: 'تفريغ 70% من الضغط عن أسفل الظهر',
        imagePosition: 'left',
        placeholderSvgText: 'Ergonomic U-Cutout Relief'
      },
      {
        title: 'جل التبريد السداسي المضاد للتعرق',
        description: 'شبكة الجل الأزرق ثلاثية الأبعاد تسمح بتدفق الهواء المستمر وتمنع تراكم الحرارة، لتبقى المقاعد باردة ومريحة حتى في أيام الصيف الحارة.',
        highlight: 'انتعاش وتهوية مستمرة طوال اليوم',
        imagePosition: 'right',
        placeholderSvgText: 'Cooling Honeycomb Medical Gel'
      },
      {
        title: 'متعددة الاستخدامات وثبات تام على المقاعد',
        description: 'تأتي بقاعدة مطاطية مقاومة للانزلاق وغطاء قماشي بسحاب سهل الغسل. مثالية لمقاعد السيارة، كراسي العمل، كراسي الألعاب، وكراسي المنزل.',
        highlight: 'تناسب جميع أنواع المقاعد والكراسي',
        imagePosition: 'left',
        placeholderSvgText: 'Universal Anti-Slip Seat Support'
      }
    ]
  }
];

// دالة حساب الأسعار التراكمية الرسمية للمتجر
export const calculateOfferPrice = (quantity: number): number => {
  if (quantity <= 1) return 249;
  if (quantity === 2) return 379;
  if (quantity === 3) return 499;
  return 499 + (quantity - 3) * 199;
};
