import { ReactNode } from 'react';

export interface ProductColor {
  hex: string;
  nameAr: string;
  nameFr: string;
}

export interface OfferTier {
  tier: number;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  savingsText: string;
  badge?: string;
  popular?: boolean;
  accent: 'teal' | 'emerald' | 'amber' | 'rose';
  perUnitPrice: number;
  bullets: string[];
}

export interface VisualStoryScene {
  type: 'problem' | 'usage' | 'result' | 'trust';
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  callouts: string[];
  accent: 'teal' | 'emerald' | 'amber' | 'rose';
}

export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  icon: string;
  image: string;
  beforeAfterImage?: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  headline: string;
  subheadline: string;
  stockLeft: number;
  recentOrdersCount: number;
  heroBullets: string[];
  features: string[];
  scientificReason: string;
  colors: ProductColor[];
  visualStory: VisualStoryScene[];
  offerTiers: OfferTier[];
  painPoints: { title: string; description: string }[];
  solutionProofs: { title: string; description: string; metric: string; iconText: string }[];
  comparison: { feature: string; vitalis: string; others: string }[];
  faqs: { question: string; answer: string }[];
  sections: {
    title: string;
    description: string;
    highlight: string;
    imagePosition: 'left' | 'right';
    placeholderSvgText: string;
    image?: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "armoire-3-portes",
    sku: "VM-ARM-01",
    slug: "armoire-3-portes",
    name: "خزانة الملابس العصرية بـ 3 أبواب - Armoire Moderne",
    shortName: "خزانة الملابس",
    category: "أثاث وتنظيم",
    icon: "🚪",
    image: "/products/armoire.webp",
    beforeAfterImage: "/products/armoire.webp",
    rating: 4.9,
    reviewsCount: 342,
    badge: "الأكثر مبيعاً في المغرب",
    headline: "نظمي غرفتك بأناقة وتخلصي من فوضى الملابس نهائياً",
    subheadline: "خزانة عصرية، قوية، وسهلة التركيب. توفر لك مساحة شاسعة لترتيب ملابسك وأغراضك بشكل يريح النفس ويضفي لمسة راقية على غرفتك.",
    stockLeft: 12,
    recentOrdersCount: 84,
    heroBullets: [
      "مساحة تخزين ضخمة تلبي كل احتياجاتك (ملابس، أغطية، أحذية)",
      "هيكل معدني صلب مع غطاء قماشي مقاوم للغبار والرطوبة",
      "تصميم عصري وأنيق يتناسب مع جميع ديكورات الغرف",
      "تركيب سهل وسريع في دقائق بدون الحاجة لأي أدوات معقدة"
    ],
    features: [
      "أبعاد مثالية: 130 سم عرض × 45 سم عمق × 170 سم ارتفاع",
      "رفوف متعددة ومساحة مخصصة لتعليق الملابس الطويلة",
      "قماش قابل للغسل وسهل التنظيف بمسحة خفيفة",
      "سحابات (سناسل) قوية وعملية تدوم طويلاً"
    ],
    scientificReason: "أثبتت الدراسات أن الغرفة المنظمة تقلل من التوتر بنسبة 40% وتوفر لك 15 دقيقة يومياً من وقت البحث عن الملابس.",
    colors: [
      { hex: "#4A3B32", nameAr: "بني داكن", nameFr: "Marron Foncé" },
      { hex: "#8B1C31", nameAr: "أحمر خمري", nameFr: "Bordeaux" },
      { hex: "#1A2B4C", nameAr: "أزرق ليلي", nameFr: "Bleu Nuit" },
      { hex: "#E5E0D8", nameAr: "بيج فاتح", nameFr: "Beige Clair" }
    ],
    visualStory: [
      {
        type: "problem",
        title: "واش عييتي من الروينة والملابس المشتتة؟",
        subtitle: "الغرفة مرونة، الحوايج مطويين فكل بلاصة، والمنظر كيجيب الأعصاب كل صباح.",
        badge: "المشكل",
        image: "/products/armoire.webp",
        callouts: ["ضيق المساحة", "صعوبة إيجاد الملابس", "منظر فوضوي"],
        accent: "rose"
      },
      {
        type: "usage",
        title: "الحل السحري لغرفة كتشرح القلب",
        subtitle: "خزانة واسعة كتهز كلشي، ساهلة فالتركيب، وكتعطي منظر زوين ونقي لبيتك.",
        badge: "الحل",
        image: "/products/armoire.webp",
        callouts: ["تركيب ساهل", "مساحة كبيرة", "شكل عصري"],
        accent: "teal"
      },
      {
        type: "result",
        title: "راحة بال ونظام كيدوم",
        subtitle: "كل حاجة فبلاصتها، حوايجك نقيين ومحفوظين من الغبرة، وغرفتك ديما مرتبة.",
        badge: "النتيجة",
        image: "/products/armoire.webp",
        callouts: ["حماية من الغبار", "ترتيب مثالي", "راحة نفسية"],
        accent: "emerald"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "خزانة واحدة",
        subtitle: "مثالية لترتيب غرفتك",
        price: 349,
        originalPrice: 500,
        savingsText: "وفر 151 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 349,
        bullets: ["1× خزانة بـ 3 أبواب", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 خزانات ملابس",
        subtitle: "وحدة ليك وواحدة لوليداتك",
        price: 599,
        originalPrice: 1000,
        savingsText: "وفر 401 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 299.5,
        bullets: ["2× خزانة بـ 3 أبواب", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "باقة الترتيب: خزانة + منظم مكياج",
        subtitle: "غرفة نوم مثالية ومنظمة 100%",
        price: 499,
        originalPrice: 799,
        savingsText: "وفر 300 درهم",
        badge: "أفضل عرض",
        popular: false,
        accent: "amber",
        perUnitPrice: 249.5,
        bullets: ["1× خزانة ملابس", "1× منظم مكياج فاخر", "توصيل مجاني"]
      }
    ],
    painPoints: [
      { title: "فوضى الملابس", description: "الملابس المتراكمة تسبب التوتر وتجعل غرفتك تبدو صغيرة وغير مريحة." }
    ],
    solutionProofs: [
      { title: "سعة استيعاب هائلة", description: "تصميم ذكي يستغل المساحة العمودية لترتيب كمية مضاعفة من الملابس.", metric: "100%", iconText: "ترتيب" }
    ],
    comparison: [
      { feature: "المتانة", vitalis: "هيكل معدني صلب يتحمل الأوزان", others: "بلاستيك ضعيف ينكسر بسرعة" }
    ],
    faqs: [
      { question: "واش التركيب ديالها ساهل؟", answer: "ساهل بزاف! ما غتحتاج لا بلاكار لا طرنوفيس، كتركب غير باليد فـ 15 دقيقة، ومرفقة بكتيب الشرح." },
      { question: "واش صحيحة وكتهز الثقل؟", answer: "أكيد، الهيكل ديالها مصاوب من معدن صلب، كتهز الحوايج والمانطات بلا ما تعواج." },
      { question: "واش التوصيل فابور؟", answer: "نعم، التوصيل مجاني لجميع المدن، وكتخلص حتى كتوصلك وتقلبها." }
    ],
    sections: [
      {
        title: "تصميم ذكي يجمع بين الأناقة والعملية",
        description: "مقسمة بذكاء لرفوف وأماكن تعليق لتناسب جميع أنواع ملابسك وأغراضك.",
        highlight: "مساحة شاسعة",
        imagePosition: "right",
        placeholderSvgText: "Armoire",
        image: "/products/armoire-premium.jpg"
      }
    ]
  },
  {
    id: "foot-massager",
    sku: "VM-FMS-02",
    slug: "foot-massager",
    name: "جهاز تدليك القدمين الاحترافي - Foot Massager",
    shortName: "جهاز مساج القدمين",
    category: "صحة واسترخاء",
    icon: "🦶",
    image: "/products/footmassager.webp",
    beforeAfterImage: "/products/footmassager.webp",
    rating: 4.8,
    reviewsCount: 415,
    badge: "راحة فورية ومضمونة",
    headline: "قولي وداعاً لآلام القدمين والعيى ديال النهار كامل",
    subheadline: "جلسة مساج احترافية فدارك! جهاز بتقنية الشياتسو والحرارة اللطيفة، كينشط الدورة الدموية وكيريح الأعصاب بعد نهار طويل ديال الوقوف أو الخدمة.",
    stockLeft: 8,
    recentOrdersCount: 112,
    heroBullets: [
      "تقنية الشياتسو اليابانية لتدليك عميق يزيل التوتر والألم",
      "خاصية التدفئة اللطيفة لاسترخاء العضلات وتنشيط الدورة الدموية",
      "تصميم مريح وسهل الاستخدام بضغطة زر واحدة",
      "مثالي لكبار السن، الموظفين، ولكل من يعاني من آلام المفاصل"
    ],
    features: [
      "رؤوس تدليك دوارة تستهدف نقاط الضغط بدقة",
      "غطاء قماشي ناعم قابل للإزالة والغسل بسهولة",
      "إيقاف تلقائي بعد 15 دقيقة لضمان السلامة",
      "خفيف الوزن ومحمول، استعمله في الصالون أو غرفة النوم"
    ],
    scientificReason: "تدليك القدمين لمدة 15 دقيقة يومياً يخفض هرمون الكورتيزول (هرمون التوتر) ويحسن جودة النوم بشكل ملحوظ.",
    colors: [
      { hex: "#8B1C31", nameAr: "أحمر داكن", nameFr: "Bordeaux" }
    ],
    visualStory: [
      {
        type: "problem",
        title: "عييتي من الحريق والوقوف نهار كامل؟",
        subtitle: "رجلين منفوخين، ألم فالمفاصل، وعيى كيخليك ما قادش حتى تنعس مرتاح.",
        badge: "المشكل",
        image: "/products/footmassager.webp",
        callouts: ["ألم مستمر", "تورم القدمين", "توتر وإرهاق"],
        accent: "rose"
      },
      {
        type: "usage",
        title: "مساج احترافي وأنت جالس فدارك",
        subtitle: "حط رجليك، ورك على البوطونة، واستمتع بتدليك عميق كينسيك فكاع العيى.",
        badge: "الحل",
        image: "/products/footmassager.webp",
        callouts: ["سهل الاستعمال", "حرارة مريحة", "تدليك شياتسو"],
        accent: "teal"
      },
      {
        type: "result",
        title: "راحة، نشاط، ونوم عميق",
        subtitle: "دورة دموية نشيطة، ألم مختفي، وراحة نفسية وجسدية لا توصف.",
        badge: "النتيجة",
        image: "/products/footmassager.webp",
        callouts: ["نوم مريح", "تنشيط الدورة الدموية", "راحة تامة"],
        accent: "emerald"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "جهاز مساج واحد",
        subtitle: "راحة يومية لك",
        price: 199,
        originalPrice: 350,
        savingsText: "وفر 151 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 199,
        bullets: ["1× جهاز مساج", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 أجهزة مساج",
        subtitle: "هدية رائعة للوالدين",
        price: 349,
        originalPrice: 700,
        savingsText: "وفر 351 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 174.5,
        bullets: ["2× جهاز مساج", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "باقة الدلال: جهاز مساج + منظم مكياج",
        subtitle: "راحة لك وهدية أنيقة لزوجتك",
        price: 349,
        originalPrice: 649,
        savingsText: "وفر 300 درهم",
        badge: "أفضل عرض",
        popular: false,
        accent: "amber",
        perUnitPrice: 174.5,
        bullets: ["1× جهاز مساج", "1× منظم مكياج", "توصيل مجاني"]
      }
    ],
    painPoints: [
      { title: "آلام القدمين", description: "الوقوف الطويل يسبب تورماً وآلاماً تمنعك من الاستمتاع بوقتك مع عائلتك." }
    ],
    solutionProofs: [
      { title: "تدليك شياتسو", description: "يحاكي حركة أصابع المدلك المحترف لفك العقد العضلية.", metric: "100%", iconText: "استرخاء" }
    ],
    comparison: [
      { feature: "التكلفة", vitalis: "تدفع مرة واحدة لجهاز يدوم طويلاً", others: "جلسات سبا مكلفة جداً ومضيعة للوقت" }
    ],
    faqs: [
      { question: "واش كيصلح للناس الكبار فالعمر؟", answer: "أكيد! ممتاز جداً للوالدين، كيعاونهم على تنشيط الدورة الدموية وتخفيف آلام المفاصل." },
      { question: "واش كيسخن؟", answer: "نعم، فيه خاصية التدفئة اللطيفة اللي كترخي العضلات وكتزيد من فعالية المساج." },
      { question: "واش نخلص عاد نشوفو؟", answer: "لا، الدفع كيكون حتى كيوصلك المنتج ليديك وتشوفو وتأكد منو عاد كتخلص." }
    ],
    sections: [
      {
        title: "تقنية متطورة لراحتك",
        description: "رؤوس تدليك مصممة بعناية لتستهدف كل نقطة تعب في قدميك.",
        highlight: "تدليك عميق",
        imagePosition: "left",
        placeholderSvgText: "Massager",
        image: "/products/massager-premium.jpg"
      }
    ]
  },
  {
    id: "chaise-haute",
    sku: "VM-BBY-03",
    slug: "chaise-haute-bebe",
    name: "كرسي طعام الأطفال الآمن والمريح - Chaise Haute Bébé",
    shortName: "كرسي طعام الأطفال",
    category: "مستلزمات الأطفال",
    icon: "🪑",
    image: "/products/chaise-haute.webp",
    beforeAfterImage: "/products/chaise-haute.webp",
    rating: 4.9,
    reviewsCount: 284,
    badge: "أمان وراحة لطفلك",
    headline: "اجعلي وقت طعام طفلك آمناً، ممتعاً، وخالياً من الفوضى",
    subheadline: "كرسي مصمم خصيصاً لراحة طفلك وسلامته، مع صينية مزدوجة سهلة التنظيف وحزام أمان خماسي النقاط لجلوس آمن مع العائلة.",
    stockLeft: 15,
    recentOrdersCount: 52,
    heroBullets: [
      "حزام أمان خماسي النقاط يضمن ثبات طفلك ويمنع السقوط",
      "صينية طعام مزدوجة قابلة للإزالة والغسل في غسالة الأطباق",
      "وسادة مقعد ناعمة، مريحة، ومقاومة للماء وسهلة المسح",
      "أرجل معدنية متينة بقاعدة هرمية تمنع الانقلاب تماماً"
    ],
    features: [
      "مناسب للأطفال من 6 أشهر إلى 3 سنوات (حتى 15 كجم)",
      "تصميم عصري يناسب ديكور غرفة الطعام",
      "خفيف الوزن وسهل النقل من مكان لآخر",
      "مواد آمنة 100% وخالية من المواد الكيميائية الضارة (BPA Free)"
    ],
    scientificReason: "جلوس الطفل مع العائلة على نفس مستوى الطاولة يعزز تطوره الاجتماعي ويشجعه على تجربة أطعمة جديدة بثقة.",
    colors: [
      { hex: "#F5F5F5", nameAr: "أبيض ناصع", nameFr: "Blanc" },
      { hex: "#FFB6C1", nameAr: "وردي فاتح", nameFr: "Rose" },
      { hex: "#ADD8E6", nameAr: "أزرق سماوي", nameFr: "Bleu" }
    ],
    visualStory: [
      {
        type: "problem",
        title: "الروينة وقت الماكلة والخوف على طفلك؟",
        subtitle: "الطفل كيتحرك بزاف، الماكلة كطيح فالأرض، والكراسي العادية ما فيهاش الأمان الكافي.",
        badge: "المشكل",
        image: "/products/chaise-haute.webp",
        callouts: ["خطر السقوط", "صعوبة التنظيف", "فوضى الطعام"],
        accent: "rose"
      },
      {
        type: "usage",
        title: "أمان تام ونظافة ساهلة",
        subtitle: "حزام أمان قوي، وصينية كتحيد وتغسل بسهولة. وقت الماكلة غيولي متعة ليك ولولدك.",
        badge: "الحل",
        image: "/products/chaise-haute.webp",
        callouts: ["صينية قابلة للغسل", "حزام أمان", "ثبات عالي"],
        accent: "teal"
      },
      {
        type: "result",
        title: "طفل سعيد وأم مرتاحة",
        subtitle: "ولدك كياكل معاك فابلة وحدة بأمان، والروينة ديال الماكلة كتمسح فثواني.",
        badge: "النتيجة",
        image: "/products/chaise-haute.webp",
        callouts: ["تطور اجتماعي", "راحة بال", "نظافة سريعة"],
        accent: "emerald"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "كرسي طعام واحد",
        subtitle: "الخيار الأفضل لسلامة طفلك",
        price: 249,
        originalPrice: 399,
        savingsText: "وفر 150 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 249,
        bullets: ["1× كرسي طعام", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 كراسي طعام",
        subtitle: "مثالي للتوأم أو كهدية",
        price: 449,
        originalPrice: 798,
        savingsText: "وفر 349 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 224.5,
        bullets: ["2× كرسي طعام", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "باقة الأم والطفل: كرسي + جهاز مساج",
        subtitle: "أمان لطفلك وراحة لك بعد يوم متعب",
        price: 399,
        originalPrice: 749,
        savingsText: "وفر 350 درهم",
        badge: "أفضل عرض",
        popular: false,
        accent: "amber",
        perUnitPrice: 199.5,
        bullets: ["1× كرسي طعام", "1× جهاز مساج القدمين", "توصيل مجاني"]
      }
    ],
    painPoints: [
      { title: "صعوبة التنظيف", description: "الكراسي العادية تتسخ بسرعة ويصعب تنظيفها من بقايا الطعام." }
    ],
    solutionProofs: [
      { title: "تصميم مضاد للفوضى", description: "مواد مقاومة للماء وصينية مزدوجة تجعل التنظيف مسألة ثوانٍ.", metric: "100%", iconText: "نظافة" }
    ],
    comparison: [
      { feature: "الأمان", vitalis: "حزام خماسي وأرجل هرمية ثابتة", others: "غير مستقر وسهل الانقلاب" }
    ],
    faqs: [
      { question: "من أيا عمر نقدر نستعملو لولدي؟", answer: "تقدري تستعمليه ملي يبدأ الطفل يجلس بوحدو (تقريباً من 6 أشهر) وكيبقى معاه تال 3 سنين." },
      { question: "واش ساهل فالتنظيف؟", answer: "ساهل بزاف! الصينية الفوقانية كتحيد وتغسل، والكرسي مغلف بمادة كتمسح غير بزيف فازك." },
      { question: "واش نقدر نشوفو قبل ما نخلص؟", answer: "أكيد، كنوصلوه ليك تال الدار، تأكدي من الجودة والصح ديالو عاد خلصي." }
    ],
    sections: [
      {
        title: "هندسة تضع سلامة طفلك أولاً",
        description: "قاعدة عريضة تمنع أي اهتزاز، وحواف ناعمة لحماية طفلك من أي خدوش.",
        highlight: "أمان تام",
        imagePosition: "right",
        placeholderSvgText: "Baby Chair",
        image: "/products/chaise-premium.jpg"
      }
    ]
  },
  {
    id: "makeup-box",
    sku: "VM-MKB-04",
    slug: "makeup-storage-box",
    name: "منظم المكياج ومستحضرات التجميل الفاخر - Makeup Organizer",
    shortName: "منظم المكياج",
    category: "تنظيم وعناية",
    icon: "💄",
    image: "/products/makeupbox.webp",
    beforeAfterImage: "/products/makeupbox.webp",
    rating: 4.8,
    reviewsCount: 420,
    badge: "تسريحة مرتبة وأنيقة",
    headline: "رتبي أدوات تجميلك بأناقة واحصلي على تسريحة خالية من الفوضى",
    subheadline: "منظم عصري بسعة كبيرة، يحمي مكياجك وعطورك من الغبار والماء، ويضفي لمسة ساحرة وراقية على غرفتك أو حمامك.",
    stockLeft: 20,
    recentOrdersCount: 89,
    heroBullets: [
      "سعة تخزين كبيرة جداً تناسب العطور الطويلة، الكريمات، وفرش المكياج",
      "غطاء علوي شفاف ومرتفع يحمي مستحضراتك من الغبار والرطوبة",
      "أدراج سفلية سلسة لتنظيم الإكسسوارات، المجوهرات، والأشياء الصغيرة",
      "تصميم أنيق وفاخر يضيف لمسة جمالية راقية لمساحتك الخاصة"
    ],
    features: [
      "مصنوع من بلاستيك أكريليك عالي الجودة، متين ومقاوم للكسر",
      "مقبض علوي متين لسهولة الحمل والنقل",
      "مقاوم للماء تماماً مما يجعله مثالياً للاستخدام في الحمام",
      "أدراج تفتح وتغلق بسلاسة تامة"
    ],
    scientificReason: "حماية مستحضرات التجميل من الغبار والرطوبة يطيل من عمرها الافتراضي ويحمي بشرتك من البكتيريا المسببة لحب الشباب.",
    colors: [
      { hex: "#FFFFFF", nameAr: "شفاف كريستالي", nameFr: "Transparent" }
    ],
    visualStory: [
      {
        type: "problem",
        title: "تسريحة مرونة والغبرة على الماكياج؟",
        subtitle: "الماكياج مشتت، العكورة كيتوضرو، والغبرة كتخسر ليك البرودويات الغاليين ديالك.",
        badge: "المشكل",
        image: "/products/makeupbox.webp",
        callouts: ["تراكم الغبار", "فوضى التسريحة", "ضياع الوقت"],
        accent: "rose"
      },
      {
        type: "usage",
        title: "كلشي مجموع ومحمي بأناقة",
        subtitle: "منظم كبير كيهز القراعي طوال، أدراج للمجوهرات، وغطاء كيحمي من الغبرة والماء.",
        badge: "الحل",
        image: "/products/makeupbox.webp",
        callouts: ["سعة كبيرة", "حماية من الماء", "أدراج عملية"],
        accent: "teal"
      },
      {
        type: "result",
        title: "لمسة فاخرة وراحة يومية",
        subtitle: "تسريحة نقية كتشعل، ماكياجك ديما واجد ونظيف، ومنظر كيحمق فغرفتك.",
        badge: "النتيجة",
        image: "/products/makeupbox.webp",
        callouts: ["شكل راقي", "توفير الوقت", "حماية تامة"],
        accent: "emerald"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "منظم مكياج واحد",
        subtitle: "لتسريحة مرتبة وجذابة",
        price: 199,
        originalPrice: 299,
        savingsText: "وفر 100 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 199,
        bullets: ["1× منظم مكياج", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 منظمات مكياج",
        subtitle: "واحد ليك وواحد لصاحبتك",
        price: 349,
        originalPrice: 598,
        savingsText: "وفر 249 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 174.5,
        bullets: ["2× منظم مكياج", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "باقة الجمال: منظم مكياج + جهاز مساج",
        subtitle: "عناية بجمالك وراحتك فنفس الوقت",
        price: 349,
        originalPrice: 649,
        savingsText: "وفر 300 درهم",
        badge: "أفضل عرض",
        popular: false,
        accent: "amber",
        perUnitPrice: 174.5,
        bullets: ["1× منظم مكياج", "1× جهاز مساج القدمين", "توصيل مجاني"]
      }
    ],
    painPoints: [
      { title: "تلف المستحضرات", description: "الرطوبة والغبار يفسدان جودة مكياجك ويسببان مشاكل لبشرتك." }
    ],
    solutionProofs: [
      { title: "عزل تام", description: "تصميم محكم الإغلاق يحافظ على نظافة أدواتك بنسبة 100%.", metric: "100%", iconText: "حماية" }
    ],
    comparison: [
      { feature: "السعة والتصميم", vitalis: "يستوعب الزجاجات الطويلة وشكله فاخر", others: "صغير جداً وشكله رخيص" }
    ],
    faqs: [
      { question: "واش كيهز القراعي طوال ديال الريحة؟", answer: "نعم، الطبقة الفوقانية مصممة باش تكون عالية وتهز العطور والكريمات الطويلة بكل سهولة." },
      { question: "واش نقدر نحطو فالحمام؟", answer: "أكيد، المنظم مقاوم للماء ومغاديش يتأثر بالرطوبة ديال الحمام، وغيحمي الماكياج ديالك." },
      { question: "واش التوصيل فابور؟", answer: "نعم، التوصيل مجاني لجميع المدن، وكتخلصي حتى كتشوفي المنظم ديالك وتأكدي منو." }
    ],
    sections: [
      {
        title: "قطعة فنية تزين غرفتك",
        description: "ليس مجرد صندوق تخزين، بل إضافة أنيقة ترفع من مستوى ديكور غرفتك أو حمامك.",
        highlight: "أناقة فائقة",
        imagePosition: "left",
        placeholderSvgText: "Makeup",
        image: "/products/makeup-premium.jpg"
      }
    ]
  }
];
