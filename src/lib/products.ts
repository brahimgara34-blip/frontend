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
  upsellPrice: number;
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
    upsellPrice: 379,
    slug: "armoire-3-portes",
    name: "خزانة الملابس القماشية بـ 3 أقسام - Armoire 3 Portes",
    shortName: "خزانة الملابس",
    category: "أثاث وتنظيم",
    icon: "🚪",
    image: "/products/armoire.webp",
    beforeAfterImage: "/products/armoire-usage-real.jpg",
    rating: 4.9,
    reviewsCount: 342,
    badge: "الأكثر مبيعاً في المغرب",
    headline: "ودّعي الحوايج المرميين فوق السرير… كلشي غيولي فبلاصتو",
    subheadline: "خزانة عملية بـ 3 أقسام: بلاصة للتعليق، رفوف للطي، وبلاصة للصناديق والصبابط. كتركب باليد فدقايق، وغطاء القماش كيحمي حوايجك من الغبرة.",
    stockLeft: 12,
    recentOrdersCount: 84,
    heroBullets: [
      "3 أقسام: جوج ديال التعليق ووسط فيه رفوف للحوايج المطويين",
      "هيكل معدني مع غطاء قماشي بسنسلة كيحمي من الغبرة",
      "كتركب باليد بلا حتى أداة، وساهلة فالتفكيك ملي تبدل الدار",
      "خفيفة وكتناسب الغرف الصغار والكبار"
    ],
    features: [
      "رفوف متعددة لترتيب الحوايج المطويين، الصناديق والصبابط",
      "عمودين لتعليق القمجات، الجلالب والكسوات",
      "غطاء قماشي كيتمسح بسهولة",
      "سنسلة كتحل وتسد بسهولة، وتقدر تلوي الغطاء للفوق"
    ],
    scientificReason: "ملي كيكون لكل حاجة بلاصتها، كتلقى حوايجك بسرعة فالصباح وكتبقى الغرفة مرتبة بلا مجهود يومي.",
    colors: [
      { hex: "#8B1C31", nameAr: "أحمر خمري", nameFr: "Bordeaux" },
      { hex: "#4A3B32", nameAr: "بني داكن", nameFr: "Marron Foncé" },
      { hex: "#1A2B4C", nameAr: "أزرق ليلي", nameFr: "Bleu Nuit" },
      { hex: "#E5E0D8", nameAr: "بيج فاتح", nameFr: "Beige Clair" }
    ],
    visualStory: [
      {
        type: "problem",
        title: "الحوايج فوق السرير، فوق الكرسي، وفالأرض؟",
        subtitle: "كل صباح كتقلبي على حاجة وما كتلقايهاش، والغرفة ديما مرونة.",
        badge: "المشكل",
        image: "/products/armoire-problem-real.jpg",
        callouts: ["ما كايناش بلاصة", "التقليب كل صباح", "غرفة مرونة"],
        accent: "rose"
      },
      {
        type: "usage",
        title: "كلشي معلق ومطوي فبلاصتو",
        subtitle: "علقي الجلالب والقمجات، طوي الباقي فالرفوف، وحطي الصناديق والصبابط لتحت.",
        badge: "الحل",
        image: "/products/armoire-usage-real.jpg",
        callouts: ["3 أقسام", "تعليق + رفوف", "تركيب باليد"],
        accent: "teal"
      },
      {
        type: "result",
        title: "غرفة نقية وحوايج محميين من الغبرة",
        subtitle: "سدي السنسلة وصافي: الغرفة مرتبة والحوايج نقيين.",
        badge: "النتيجة",
        image: "/products/armoire.webp",
        callouts: ["حماية من الغبرة", "ترتيب دائم", "راحة البال"],
        accent: "emerald"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "خزانة واحدة",
        subtitle: "مثالية لترتيب غرفتك",
        price: 449,
        originalPrice: 650,
        savingsText: "وفر 201 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 449,
        bullets: ["1× خزانة بـ 3 أقسام", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 خزانات ملابس",
        subtitle: "وحدة ليك وواحدة لوليداتك",
        price: 799,
        originalPrice: 1300,
        savingsText: "وفر 501 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 399.5,
        bullets: ["2× خزانة بـ 3 أقسام", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 خزانات ملابس",
        subtitle: "لغرف الدار كاملة",
        price: 1149,
        originalPrice: 1950,
        savingsText: "وفر 801 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 383,
        bullets: ["3× خزانة بـ 3 أقسام", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      { title: "فوضى الحوايج", description: "الحوايج المكدسين كيضيقو الغرفة وكيضيعو ليك الوقت كل صباح." }
    ],
    solutionProofs: [
      { title: "3 أقسام عملية", description: "تعليق فالجناب ورفوف فالوسط، باش كل نوع ديال الحوايج يلقى بلاصتو.", metric: "3", iconText: "أقسام" }
    ],
    comparison: [
      { feature: "الحماية", vitalis: "غطاء قماشي بسنسلة كيحمي من الغبرة", others: "رفوف مكشوفة كتجمع الغبرة" }
    ],
    faqs: [
      { question: "واش التركيب ديالها ساهل؟", answer: "ساهل بزاف، كتركب باليد بلا حتى أداة، وجاية معاها ورقة الشرح." },
      { question: "واش كاينين ألوان أخرين؟", answer: "إيه، اختاري اللون اللي بغيتي فالصفحة، وإلى ما كانش متوفر غادي نعيطو ليك قبل الإرسال." },
      { question: "واش التوصيل فابور؟", answer: "نعم، التوصيل مجاني لجميع المدن، وكتخلصي حتى كتوصلك وتشوفيها." }
    ],
    sections: [
      {
        title: "بلاصة لكل حاجة",
        description: "جوج أقسام للتعليق ووسط فيه رفوف للحوايج المطويين، والتحت للصناديق والصبابط.",
        highlight: "3 أقسام",
        imagePosition: "right",
        placeholderSvgText: "Armoire",
        image: "/products/armoire-usage-real.jpg"
      }
    ]
  },
  {
    id: "foot-massager",
    sku: "VM-FMS-02",
    upsellPrice: 199,
    slug: "foot-massager",
    name: "لوحة مساج القدمين بالكرات والمغناطيس - Foot Massager",
    shortName: "لوحة مساج القدمين",
    category: "صحة واسترخاء",
    icon: "🦶",
    image: "/products/footmassager.webp",
    beforeAfterImage: "/products/massager-usage-real.jpg",
    rating: 4.8,
    reviewsCount: 415,
    badge: "راحة لرجليك فالدار",
    headline: "رجليك عيّاو من النهار كامل؟ 10 دقايق فوق هاد اللوحة وغتحسي بالفرق",
    subheadline: "لوحة مساج يدوية فيها كرات بنتوءات وحبات مغناطيس. حطي رجليك وحركيهم القدام واللور، وهي تدلك ليك الكعب والوسط والصوابع. بلا تريسيتي، بلا بيلات.",
    stockLeft: 8,
    recentOrdersCount: 112,
    heroBullets: [
      "كرات بنتوءات كتدور تحت الرجل وكتدلك نقاط التعب",
      "حبات مغناطيس فالجناب لإحساس إضافي بالراحة",
      "يدوية 100%: بلا تريسيتي، بلا شارج، خدامة فأي بلاصة",
      "مثالية لليوقفو بزاف فالخدمة، للواليدين، ولي كيمشيو بزاف"
    ],
    features: [
      "كتستعملها وأنت جالس قدام التلفزة ولا فالبيرو",
      "خفيفة وصغيرة، كتدخل فالشانطة",
      "ساهلة فالتنظيف بشيفون",
      "كتناسب جميع القياسات ديال الرجلين"
    ],
    scientificReason: "التدليك الخفيف لباطن الرجل كيعاون على الاسترخاء بعد نهار طويل ديال الوقوف أو المشي.",
    colors: [
      { hex: "#B9A3D9", nameAr: "موف فاتح", nameFr: "Lilas" }
    ],
    visualStory: [
      {
        type: "problem",
        title: "رجليك كيضرّوك فاخر النهار؟",
        subtitle: "الوقوف فالخدمة ولا فالكوزينة كيخلي الرجلين عيانين ومنفوخين.",
        badge: "المشكل",
        image: "/products/massager-problem-real.jpg",
        callouts: ["عيا فالرجلين", "وقوف طويل", "صعوبة الراحة"],
        accent: "rose"
      },
      {
        type: "usage",
        title: "جلسي، حطي رجليك، وحركيهم",
        subtitle: "الكرات كدور تحت رجليك وكتدلك الكعب والوسط والصوابع، وأنت كتشربي أتايك.",
        badge: "الحل",
        image: "/products/massager-usage-real.jpg",
        callouts: ["يدوية", "كرات + مغناطيس", "فأي بلاصة"],
        accent: "teal"
      },
      {
        type: "result",
        title: "رجلين مرتاحين قبل النعاس",
        subtitle: "دقايق قليلة كل عشية وغتحسي بالخفة والراحة.",
        badge: "النتيجة",
        image: "/products/footmassager.webp",
        callouts: ["راحة", "استرخاء", "خفة"],
        accent: "emerald"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "لوحة مساج وحدة",
        subtitle: "راحة يومية ليك",
        price: 249,
        originalPrice: 350,
        savingsText: "وفر 101 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 249,
        bullets: ["1× لوحة مساج", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 لوحات مساج",
        subtitle: "وحدة ليك ووحدة للواليدين",
        price: 399,
        originalPrice: 700,
        savingsText: "وفر 301 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 199.5,
        bullets: ["2× لوحة مساج", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 لوحات مساج",
        subtitle: "للعائلة كاملة",
        price: 549,
        originalPrice: 1050,
        savingsText: "وفر 501 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 183,
        bullets: ["3× لوحة مساج", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      { title: "عيا الرجلين", description: "الوقوف الطويل كيخلي الرجلين تقال وعيانين فاخر النهار." }
    ],
    solutionProofs: [
      { title: "تدليك بالكرات", description: "كرات بنتوءات كتدور تحت الرجل وكتوصل لكل جهة فيها.", metric: "0", iconText: "تريسيتي" }
    ],
    comparison: [
      { feature: "الاستعمال", vitalis: "يدوية، بلا شارج، خدامة فأي بلاصة", others: "أجهزة كبيرة وغالية خاصها تريسيتي" }
    ],
    faqs: [
      { question: "واش خاصها تريسيتي؟", answer: "لا، اللوحة يدوية 100%. كتحط رجليك وكتحركهم والكرات كيدلكو." },
      { question: "واش كتصلح للواليدين؟", answer: "إيه، ساهلة فالاستعمال وكتعطي راحة بعد نهار طويل. إلا كان شي مشكل صحي فالرجلين، استشير الطبيب." },
      { question: "واش نخلص عاد نشوفها؟", answer: "إيه، الدفع حتى كتوصلك وتشوفها بعينيك." }
    ],
    sections: [
      {
        title: "كرات ومغناطيس لكل جهة فالرجل",
        description: "الكرات كدور تحت الكعب والوسط والصوابع، وحبات المغناطيس فالجناب.",
        highlight: "تدليك يدوي",
        imagePosition: "left",
        placeholderSvgText: "Massager",
        image: "/products/massager-usage-real.jpg"
      }
    ]
  },
  {
    id: "chaise-haute",
    sku: "VM-BBY-03",
    upsellPrice: 269,
    slug: "chaise-haute-bebe",
    name: "كرسي الماكلة المتنقل للأطفال قابل للطي - Chaise Bébé Pliable",
    shortName: "كرسي الماكلة للأطفال",
    category: "مستلزمات الأطفال",
    icon: "🪑",
    image: "/products/chaise-haute.webp",
    beforeAfterImage: "/products/chaise-usage-real.jpg",
    rating: 4.9,
    reviewsCount: 284,
    badge: "أمان وراحة لطفلك",
    headline: "ولدك ياكل جالس مزيان وبأمان… فالدار، عند العائلة، ولا فالبحر",
    subheadline: "كرسي واطي قابل للطي، فيه حزام أمان وطبلة بيضاء كتحيد وتغسل. كيتطوى فثواني وكيتهز معاك فين ما مشيتي.",
    stockLeft: 15,
    recentOrdersCount: 52,
    heroBullets: [
      "حزام أمان كيخلي الطفل جالس مزيان وما يطيحش",
      "طبلة بيضاء كتحيد وتغسل بسهولة",
      "كيتطوى فثواني ومعاه شكارة باش تهزو معاك",
      "رجلين بقواعد عريضين كيعطيو ثبات فوق الأرض"
    ],
    features: [
      "مناسب للطفل ملي يبدا يجلس بوحدو",
      "قماش رمادي كيتمسح بسهولة",
      "خفيف ومثالي للسفر، البحر، والزيارات العائلية",
      "كيتحط فالأرض نيشان، ما محتاجش كرسي آخر"
    ],
    scientificReason: "ملي كيكون الطفل جالس مزيان ومثبت، كياكل بهدوء والماكلة كتطيح أقل.",
    colors: [
      { hex: "#9CA3AF", nameAr: "رمادي", nameFr: "Gris" }
    ],
    visualStory: [
      {
        type: "problem",
        title: "الماكلة فالأرض والطفل ما بغاش يجلس؟",
        subtitle: "كتوكليه فحجرك، كيتحرك، والماكلة كتطيح على الزربية وعلى حوايجو.",
        badge: "المشكل",
        image: "/products/chaise-problem-real.jpg",
        callouts: ["كيتحرك بزاف", "الماكلة كتطيح", "تعب للأم"],
        accent: "rose"
      },
      {
        type: "usage",
        title: "جالس مزيان والطبلة قدامو",
        subtitle: "حزام الأمان كيثبتو، والطبلة كتجمع الماكلة. كتوكليه بالراحة وهو فرحان.",
        badge: "الحل",
        image: "/products/chaise-usage-real.jpg",
        callouts: ["حزام أمان", "طبلة كتغسل", "كيتطوى"],
        accent: "teal"
      },
      {
        type: "result",
        title: "وقت الماكلة ولا ساهل",
        subtitle: "طفل فرحان، أم مرتاحة، والكرسي كيتطوى ويتهز معاك فين ما مشيتي.",
        badge: "النتيجة",
        image: "/products/chaise-haute.webp",
        callouts: ["راحة البال", "نظافة", "متنقل"],
        accent: "emerald"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "كرسي واحد",
        subtitle: "الحل لوقت الماكلة",
        price: 329,
        originalPrice: 450,
        savingsText: "وفر 121 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 329,
        bullets: ["1× كرسي ماكلة قابل للطي", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 كراسي",
        subtitle: "للتوأم، ولا وحدة للدار ووحدة عند الجدة",
        price: 599,
        originalPrice: 900,
        savingsText: "وفر 301 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 299.5,
        bullets: ["2× كرسي ماكلة قابل للطي", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 كراسي",
        subtitle: "للدار، عند الجدة، وفالطوموبيل",
        price: 849,
        originalPrice: 1350,
        savingsText: "وفر 501 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 283,
        bullets: ["3× كرسي ماكلة قابل للطي", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      { title: "فوضى وقت الماكلة", description: "الطفل كيتحرك والماكلة كتطيح فكل بلاصة." }
    ],
    solutionProofs: [
      { title: "جلسة ثابتة", description: "حزام أمان وطبلة قدام الطفل باش ياكل بهدوء.", metric: "1", iconText: "ثانية للطي" }
    ],
    comparison: [
      { feature: "التنقل", vitalis: "كيتطوى ويتهز فشكارة", others: "كراسي كبار ما كيتحركوش من بلاصتهم" }
    ],
    faqs: [
      { question: "من أي عمر نقدر نستعملو؟", answer: "ملي يبدا الطفل يجلس بوحدو بلا مساعدة." },
      { question: "واش ساهل فالتنظيف؟", answer: "إيه، الطبلة كتحيد وتغسل، والقماش كيتمسح بشيفون." },
      { question: "واش نقدر نشوفو قبل ما نخلص؟", answer: "أكيد، كنوصلوه ليك وكتخلصي حتى تشوفيه." }
    ],
    sections: [
      {
        title: "كيتطوى ويتهز معاك",
        description: "فالدار، عند العائلة، ولا فالبحر. كيتطوى فثواني وكيدخل فالشكارة ديالو.",
        highlight: "متنقل",
        imagePosition: "right",
        placeholderSvgText: "Baby Chair",
        image: "/products/chaise-usage-real.jpg"
      }
    ]
  },
  {
    id: "makeup-box",
    sku: "VM-MKB-04",
    upsellPrice: 199,
    slug: "makeup-storage-box",
    name: "منظم المكياج الدوار 360° - Organisateur Maquillage Rotatif",
    shortName: "منظم المكياج الدوار",
    category: "تنظيم وعناية",
    icon: "💄",
    image: "/products/makeupbox.webp",
    beforeAfterImage: "/products/makeup-usage-real.jpg",
    rating: 4.8,
    reviewsCount: 420,
    badge: "تسريحة مرتبة وأنيقة",
    headline: "دوريه… وكلشي قدامك: الروج، الفون دو تان، الكريمات والفرشات",
    subheadline: "منظم شفاف دوار 360° بطبقات متعددة. كيهز بزاف ديال الحوايج فبلاصة صغيرة، وكيعطي للتسريحة ديالك شكل نقي وأنيق.",
    stockLeft: 20,
    recentOrdersCount: 89,
    heroBullets: [
      "كيدور 360° باش توصلي لأي حاجة بلا ما تقلبي",
      "طبقات متعددة: للروج، للفيرني، للكريمات والقراعي الطوال",
      "أكريليك شفاف بشكل كريستال كيبان أنيق",
      "كياخد بلاصة صغيرة فوق التسريحة ولا فالحمام"
    ],
    features: [
      "خانات صغار للروج والفيرني",
      "طبقة تحتانية عالية للقراعي والكريمات الطوال",
      "ساهل فالتنظيف بشيفون",
      "كيتحط فوق التسريحة، الكومودينو ولا فالحمام"
    ],
    scientificReason: "ملي كيكون المكياج مرتب وقدام عينيك، كتوجدي بسرعة وكتعرفي شنو عندك وشنو سالا.",
    colors: [
      { hex: "#FFFFFF", nameAr: "شفاف كريستالي", nameFr: "Transparent" }
    ],
    visualStory: [
      {
        type: "problem",
        title: "التسريحة مرونة وما كتلقايش الروج؟",
        subtitle: "المكياج مخلط، القراعي كيطيحو، وكل صباح كتقلبي على حاجة.",
        badge: "المشكل",
        image: "/products/makeup-problem-real.jpg",
        callouts: ["فوضى", "ضياع الوقت", "حوايج كيتكسرو"],
        accent: "rose"
      },
      {
        type: "usage",
        title: "دوريه وخدي اللي بغيتي",
        subtitle: "كل حاجة فخانتها: الروج الفوق، الكريمات فالوسط، والقراعي الطوال لتحت.",
        badge: "الحل",
        image: "/products/makeup-usage-real.jpg",
        callouts: ["دوار 360°", "طبقات متعددة", "شفاف"],
        accent: "teal"
      },
      {
        type: "result",
        title: "تسريحة نقية كتفرح",
        subtitle: "كلشي مرتب وقدام عينيك، وشكل أنيق فالغرفة.",
        badge: "النتيجة",
        image: "/products/makeupbox.webp",
        callouts: ["أناقة", "توفير الوقت", "ترتيب"],
        accent: "emerald"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "منظم مكياج واحد",
        subtitle: "لتسريحة مرتبة",
        price: 249,
        originalPrice: 350,
        savingsText: "وفر 101 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 249,
        bullets: ["1× منظم مكياج دوار", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 منظمات مكياج",
        subtitle: "واحد ليك وواحد لختك ولا صاحبتك",
        price: 399,
        originalPrice: 700,
        savingsText: "وفر 301 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 199.5,
        bullets: ["2× منظم مكياج دوار", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 منظمات مكياج",
        subtitle: "هدية لخواتاتك ولا صحاباتك",
        price: 549,
        originalPrice: 1050,
        savingsText: "وفر 501 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 183,
        bullets: ["3× منظم مكياج دوار", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      { title: "فوضى التسريحة", description: "المكياج المخلط كيضيع الوقت وكيخلي القراعي يطيحو ويتكسرو." }
    ],
    solutionProofs: [
      { title: "دوار 360°", description: "كتدوريه وكتوصلي لأي حاجة بلا ما تحركي الباقي.", metric: "360°", iconText: "دوران" }
    ],
    comparison: [
      { feature: "الوصول", vitalis: "دوار، كلشي قدامك", others: "علب عادية خاصك تقلبي فيها" }
    ],
    faqs: [
      { question: "واش كيهز القراعي الطوال؟", answer: "إيه، الطبقة التحتانية عالية وكتهز الكريمات والقراعي الطوال." },
      { question: "واش نقدر نحطو فالحمام؟", answer: "إيه، الأكريليك ما كيتأثرش بالرطوبة وكيتمسح بسهولة." },
      { question: "واش التوصيل فابور؟", answer: "نعم، التوصيل مجاني لجميع المدن، وكتخلصي حتى تشوفيه." }
    ],
    sections: [
      {
        title: "كلشي قدام عينيك",
        description: "دوريه وشوفي كل حاجة عندك، من الروج حتى للكريمات.",
        highlight: "دوار 360°",
        imagePosition: "left",
        placeholderSvgText: "Makeup",
        image: "/products/makeup-usage-real.jpg"
      }
    ]
  }
];
