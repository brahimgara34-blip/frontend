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
    id: "hair-brush",
    sku: "VM-BRH-11",
    upsellPrice: 175,
    slug: "brosse-cheveux",
    name: "فرشاة السيشوار 2 في 1 - Brosse Soufflante",
    shortName: "فرشاة السيشوار",
    category: "العناية بالشعر",
    icon: "💇",
    image: "/products/brush-product.jpg",
    beforeAfterImage: "/products/brush-home.jpg",
    rating: 4.8,
    reviewsCount: 112,
    badge: "تنشيف وتصفيف",
    headline: "تنشيف وتصفيف فنفس الوقت، بلا ما تبدل بين السيشوار والفرشاة",
    subheadline: "فرشاة سيشوار 2 في 1 للدار: كتنشف وكتصاوب الشعر فحركة وحدة. الشعيرات كتعاون على التشابك، وخفيفة فاليد.",
    stockLeft: 16,
    recentOrdersCount: 21,
    heroBullets: [
      "تنشيف وتصفيف فنفس الوقت",
      "شعيرات كتعاون تنقص التشابك",
      "خفيفة وسهلة فاليد",
      "تصفيف فالدار بلا ما تمشي للصالون كل مرة"
    ],
    features: [
      "فرشاة وسيشوار فآلة وحدة",
      "فيها سلك، كتخدم مباشرة",
      "مناسبة للتصفيف اليومي فالدار",
      "النتيجة كتبان من التصفيف، وماشي علاج للشعر"
    ],
    scientificReason: "ملي الهواء والفرشاة كيخدموا مع بعض، الشعر كيتساوب وهو كيتنشف، بلا ما تبدل الأداة فوسط التصفيف.",
    colors: [
      { hex: "#BE185D", nameAr: "أسود ووردي", nameFr: "Noir rose" }
    ],
    visualStory: [
      {
        type: "usage",
        title: "شعر ناعم فالدار",
        subtitle: "التصفيف كيدار فالحمام ولا قدام المراية، بلا موعد فالصالون.",
        badge: "فالدار",
        image: "/products/brush-home.jpg",
        callouts: ["فالدار", "تصفيف", "سهل"],
        accent: "teal"
      },
      {
        type: "trust",
        title: "فرشاة متكاملة",
        subtitle: "تنشيف وتصفيف فنفس الوقت، شعيرات للتشابك، وخفيفة فالاستعمال.",
        badge: "المميزات",
        image: "/products/brush-features.jpg",
        callouts: ["2 في 1", "شعيرات", "خفيفة"],
        accent: "amber"
      },
      {
        type: "result",
        title: "من التشابك للتصفيف",
        subtitle: "الفكرة: الشعر المتشابك كيتساوب ويولي أنعم بعد التصفيف.",
        badge: "قبل وبعد",
        image: "/products/brush-before.jpg",
        callouts: ["قبل", "بعد", "تصفيف"],
        accent: "emerald"
      },
      {
        type: "usage",
        title: "2 في 1",
        subtitle: "فرشاة السيشوار كتنشف وكتمشط فحركة وحدة.",
        badge: "الاستعمال",
        image: "/products/brush-product.jpg",
        callouts: ["سيشوار", "فرشاة", "وحدة"],
        accent: "teal"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "فرشاة وحدة",
        subtitle: "للتصفيف اليومي",
        price: 199,
        originalPrice: 349,
        savingsText: "وفر 150 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 199,
        bullets: ["1× فرشاة السيشوار", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 فراشي",
        subtitle: "وحدة ليك ووحدة هدية",
        price: 349,
        originalPrice: 698,
        savingsText: "وفر 349 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 174.5,
        bullets: ["2× فرشاة السيشوار", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 فراشي",
        subtitle: "للدار ولا للبيع",
        price: 499,
        originalPrice: 1047,
        savingsText: "وفر 548 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 166.3,
        bullets: ["3× فرشاة السيشوار", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      { title: "السيشوار والفرشاة بزوج", description: "كتبدل بين جوج أدوات، واليد كتعيا قبل ما الشعر يتصاوب." },
      { title: "التشابك", description: "الشعر المبلل ولا الطويل كيتشابك ملي كتنشفيه بلا فرشاة مناسبة." },
      { title: "الصالون كل مرة", description: "تصفيفة بسيطة ما تستاهلش تمشي للصالون فكل خروج." }
    ],
    solutionProofs: [
      { title: "2 في 1", description: "الهواء والفرشاة فآلة وحدة. كتنشف وكتصاوب فنفس الوقت.", metric: "2", iconText: "في 1" },
      { title: "شعيرات", description: "الشعيرات كتعاون تفك التشابك وأنت كتصاوب.", metric: "1", iconText: "فرشاة" },
      { title: "فالدار", description: "كتستعملها قدام المراية. فيها سلك وكتخدم نيشان.", metric: "دار", iconText: "سهل" }
    ],
    comparison: [
      { feature: "الأدوات", vitalis: "فرشاة وسيشوار فآلة وحدة", others: "سيشوار بوحدو وفرشاة بوحدها" },
      { feature: "الوقت", vitalis: "تنشيف وتصفيف فنفس الحركة", others: "كتبدل بين جوج أدوات" },
      { feature: "الاستعمال", vitalis: "خفيفة للتصفيف اليومي فالدار", others: "موعد فالصالون لكل تصفيفة" }
    ],
    faqs: [
      { question: "شنو هي هاد الفرشاة؟", answer: "فرشاة سيشوار 2 في 1: كتنشف الشعر وكتصاوبو فنفس الوقت. ماشي غير فرشاة عادية، وماشي سيشوار بوحدو." },
      { question: "واش لاسلكية؟", answer: "لا. فيها سلك، وكتخدم ملي تركبيها." },
      { question: "واش كتعالج الشعر؟", answer: "لا. هادي أداة تصفيف. كتعاون على الشكل والنعومة من الاستعمال، وما كتعالجش الشعر." },
      { question: "لمن مناسبة؟", answer: "للتصفيف اليومي فالدار. النتيجة كتبدل حسب نوع الشعر وطريقة الاستعمال." },
      { question: "واش نخلص قبل ما نشوفها؟", answer: "لا. التوصيل فابور، وكتخلص حتى توصلك وتشوفها." }
    ],
    sections: [
      {
        title: "تصفيف فالدار",
        description: "قدّام المراية، الفرشاة كتنشف وكتصاوب. ما محتاجاش تبدل بين السيشوار والفرشاة.",
        highlight: "فالدار",
        imagePosition: "right",
        placeholderSvgText: "تصفيف فالدار",
        image: "/products/brush-home.jpg"
      },
      {
        title: "تنشيف وتصفيف معاً",
        description: "الهواء كيجي مع الشعيرات. الشعر كيتساوب وهو كيتنشف، والشعيرات كتعاون على التشابك.",
        highlight: "2 في 1",
        imagePosition: "left",
        placeholderSvgText: "فرشاة 2 في 1",
        image: "/products/brush-features.jpg"
      },
      {
        title: "قبل التصفيف وبعدو",
        description: "الفكرة ديال الفرشاة: الشعر المتشابك كيتساوب ويولي أنعم. النتيجة كتبقى على حسب شعرك.",
        highlight: "تصفيف",
        imagePosition: "right",
        placeholderSvgText: "قبل وبعد",
        image: "/products/brush-before.jpg"
      }
    ]
  },
  {
    id: "screwdriver-set",
    sku: "VM-SCR-10",
    upsellPrice: 175,
    slug: "tournevis-electrique",
    name: "طقم مفك كهربائي لاسلكي - Tournevis Sans Fil",
    shortName: "طقم المفك الكهربائي",
    category: "خدمة الدار",
    icon: "🔧",
    image: "/products/screw-case.jpg",
    beforeAfterImage: "/products/screw-home.jpg",
    rating: 4.8,
    reviewsCount: 96,
    badge: "خدمة الدار بسهولة",
    headline: "رف، براغي، وأثاث… الطقم كامل فالعلبة بلا ما تشري كل رأس بوحدو",
    subheadline: "مفك كهربائي لاسلكي كيتشارجا بالUSB، مع ضوء، دوران يمين ويسار، رؤوس متعددة، وصلة مرنة، وعلبة كتجمع كلشي. للخدمة الخفيفة فالدار.",
    stockLeft: 18,
    recentOrdersCount: 19,
    heroBullets: [
      "مفك لاسلكي كيتشارجا بالكابل USB",
      "ضوء قدام الرأس، ودوران يمين ويسار",
      "رؤوس، مآخذ، ووصلة مرنة برتقالية داخل العلبة",
      "كيتجمع فالعلبة وما كيبقاش مفرق فالدروج"
    ],
    features: [
      "مقبض مطاطي ومفتاح التشغيل",
      "مفك كبير ومفك صغير فنفس الطقم",
      "مناسب للرفوف، الأثاث، والبراغي فالدار",
      "ما محتاجش طوموبيل ولا بنزين: كيتشارجا وتخدم"
    ],
    scientificReason: "ملي كتكون الرؤوس والوصلة مع المفك فعلبة وحدة، خدمة الدار كتبدا نيشان بلا ما تقلب على المفك المناسب.",
    colors: [
      { hex: "#DC2626", nameAr: "أسود وأحمر", nameFr: "Noir rouge" }
    ],
    visualStory: [
      {
        type: "usage",
        title: "خدمة الدار بسهولة",
        subtitle: "تركيب رف ولا أثاث فالدار، والعلبة حداك فيها الرؤوس.",
        badge: "فالدار",
        image: "/products/screw-home.jpg",
        callouts: ["رفوف", "أثاث", "براغي"],
        accent: "teal"
      },
      {
        type: "trust",
        title: "طقم كامل، ماشي مفك بوحدو",
        subtitle: "رؤوس متعددة، وصلة مرنة، كابل USB، وعلبة التخزين.",
        badge: "الطقم",
        image: "/products/screw-contents.jpg",
        callouts: ["رؤوس", "وصلة", "USB"],
        accent: "amber"
      },
      {
        type: "result",
        title: "كلشي مرتب فالعلبة",
        subtitle: "المفك الكبير والصغير، الرؤوس، والمآخذ كيرجعو لبلاصتهم.",
        badge: "العلبة",
        image: "/products/screw-case.jpg",
        callouts: ["علبة", "مرتب", "جاهز"],
        accent: "emerald"
      },
      {
        type: "usage",
        title: "قبضة مريحة وضوء",
        subtitle: "المقبض مطاطي، والزر كيشغل، والضوء كيبان قدام الخدمة.",
        badge: "الاستعمال",
        image: "/products/screw-grip.jpg",
        callouts: ["قبضة", "زر", "ضوء"],
        accent: "teal"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "طقم واحد",
        subtitle: "لخدمة الدار",
        price: 199,
        originalPrice: 349,
        savingsText: "وفر 150 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 199,
        bullets: ["1× طقم مفك كهربائي لاسلكي", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 أطقم",
        subtitle: "واحد للدار وواحد للطوموبيل ولا الواليد",
        price: 349,
        originalPrice: 698,
        savingsText: "وفر 349 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 174.5,
        bullets: ["2× طقم مفك كهربائي لاسلكي", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 أطقم",
        subtitle: "للدار والخدمة ولا هدية",
        price: 499,
        originalPrice: 1047,
        savingsText: "وفر 548 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 166.3,
        bullets: ["3× طقم مفك كهربائي لاسلكي", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      { title: "المفك اليدوي كيعيا", description: "البراغي الكثيرة فالرف ولا فالأتات كياخدوا الوقت وكتعيا اليد." },
      { title: "الرأس ما كيكونش موجود", description: "كتقلب على الرأس المناسب وهو فدرج آخر، ولا ما عندكش الوصلة للبلايص الضيقة." },
      { title: "الأداة الكبيرة ثقيلة للدار", description: "ما محتاجش مثقاب ديال الورش لكل رف صغير." }
    ],
    solutionProofs: [
      { title: "لاسلكي وبالUSB", description: "كيتشارجا بالكابل، وكتخدم بيه فالدار بلا سلك معقد.", metric: "USB", iconText: "شحن" },
      { title: "رؤوس ووصلة", description: "رؤوس متعددة ومآخذ، والوصلة المرنة كتوصلك للزاوية الضيقة.", metric: "47", iconText: "قطعة" },
      { title: "علبة وحدة", description: "كلشي كيرجع للعلبة. ما كيبقاوش الرؤوس مفرقين.", metric: "1", iconText: "علبة" }
    ],
    comparison: [
      { feature: "الخدمة", vitalis: "مفك كهربائي لاسلكي للدار", others: "مفك يدوي كيعيا" },
      { feature: "الرؤوس", vitalis: "رؤوس، مآخذ، ووصلة مرنة فالطقم", others: "كتشري كل رأس بوحدو" },
      { feature: "التخزين", vitalis: "علبة كتجمع الطقم", others: "أدوات مفرقة فالدروج" }
    ],
    faqs: [
      { question: "شنو داخل فالطقم؟", answer: "مفك كهربائي لاسلكي كبير وآخر صغير، رؤوس متعددة، مآخذ، وصلة مرنة، كابل USB، وعلبة التخزين." },
      { question: "واش كيتشارجا؟", answer: "إيه، بالكابل USB اللي جاي معاه." },
      { question: "فين نقدر نستعملو؟", answer: "فالخدمة الخفيفة فالدار: رفوف، أثاث، براغي، وتجميع. ماشي للخرسانة ولا للورش الثقيل." },
      { question: "واش فيه ضوء؟", answer: "إيه، فيه إضاءة قدام الرأس، وكيقدر يدور يمين ويسار." },
      { question: "واش نخلص قبل ما نشوفو؟", answer: "لا. التوصيل فابور، وكتخلص حتى يوصلك وتشوف العلبة." }
    ],
    sections: [
      {
        title: "خدمة الدار بلا تعب",
        description: "تركيب رف ولا تجميع أثاث كيكون أسرع بمفك لاسلكي. الرؤوس فالعلبة حداك، والضوء كيبان على البراغي.",
        highlight: "فالدار",
        imagePosition: "right",
        placeholderSvgText: "تركيب رف",
        image: "/products/screw-home.jpg"
      },
      {
        title: "طقم كامل ماشي قطعة وحدة",
        description: "رؤوس متعددة، مآخذ، وصلة مرنة للبلايص الضيقة، وكابل الشحن. كلشي باين ومرتب.",
        highlight: "47 قطعة",
        imagePosition: "left",
        placeholderSvgText: "محتوى الطقم",
        image: "/products/screw-contents.jpg"
      },
      {
        title: "كيتجمع فالعلبة",
        description: "ملي تسالي الخدمة، المفك والرؤوس كيرجعو للعلبة. ما كيبقاوش مفرقين فوق الطبلة.",
        highlight: "تخزين ساهل",
        imagePosition: "right",
        placeholderSvgText: "علبة التخزين",
        image: "/products/screw-case.jpg"
      }
    ]
  },
  {
    id: "clothes-dryer",
    sku: "VM-DRY-09",
    upsellPrice: 300,
    slug: "sechoir-portable",
    name: "مجفف الثياب المحمول - Séchoir Portable",
    shortName: "مجفف الثياب المحمول",
    category: "بيت وغسيل",
    icon: "👕",
    image: "/products/dryer-product.png",
    beforeAfterImage: "/products/dryer-home.jpg",
    rating: 4.9,
    reviewsCount: 118,
    badge: "الثياب ناشفة فالدار",
    headline: "الشتا ما بقاتش مشكل… الثياب كتنشف فالدار",
    subheadline: "مجفف محمول: آلة بيضاء كتخرج الهواء السخون عبر أنبوب لخزانة قماش كتعلق فيها الثياب. فيه ريموت ومؤقت، وكتطوى وتتخزن ملي تسالي.",
    stockLeft: 10,
    recentOrdersCount: 22,
    heroBullets: [
      "الهواء السخون كيدور داخل الخزانة والثياب كتنشف فالدار",
      "مزيان فالشتا ملي الحبل برا ما كينشفش",
      "ريموت ومؤقت، ما خاصكش تبقى واقف حداها",
      "الخزانة القماشية كتطوى وتتخزن بسهولة"
    ],
    features: [
      "آلة مستقلة وكتتحط حدا الخزانة",
      "أنبوب كيوصّل الهواء السخون للثياب المعلقة",
      "شاشة وأزرار على الآلة، وريموت بيديك",
      "ما كياخدش بلاصة ملي تطويه"
    ],
    scientificReason: "الهواء السخون اللي كيدور على الثياب المعلقة كيعاونها تنشف فالداخل، بلا ما تسناها برا فالشتا.",
    colors: [
      { hex: "#D6C6B0", nameAr: "بيج", nameFr: "Beige" }
    ],
    visualStory: [
      {
        type: "usage",
        title: "كتعلق الثياب وتنشف فالدار",
        subtitle: "كتدخل الحوايج للخزانة، والآلة كتخرج الهواء السخون. كتخرجهم ناشفين.",
        badge: "فالدار",
        image: "/products/dryer-home.jpg",
        callouts: ["هواء سخون", "فالدار", "شتا"],
        accent: "teal"
      },
      {
        type: "result",
        title: "مجفف محمول، ماشي ماكينة كبيرة",
        subtitle: "الآلة على الطبلة، والخزانة حداها. كتستعملو غير ملي تحتاجو.",
        badge: "محمول",
        image: "/products/dryer-product.png",
        callouts: ["أنبوب", "ريموت", "شاشة"],
        accent: "emerald"
      },
      {
        type: "trust",
        title: "مؤقت، ريموت، وتجفيف سريع",
        subtitle: "كتضبط المؤقت وكتتحكم من الريموت. الهواء السخون كيدور داخل الخزانة.",
        badge: "التحكم",
        image: "/products/dryer-features.jpg",
        callouts: ["مؤقت", "ريموت", "هواء سخون"],
        accent: "amber"
      },
      {
        type: "result",
        title: "كيتطوى ويتخزن",
        subtitle: "ملي تسالي، الخزانة كتطوى وما كتبقىش واخدة البلاصة.",
        badge: "التخزين",
        image: "/products/dryer-fold.jpg",
        callouts: ["كيتطوى", "خفيف", "سهل"],
        accent: "teal"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "مجفف واحد",
        subtitle: "لثياب الدار فالشتا",
        price: 349,
        originalPrice: 549,
        savingsText: "وفر 200 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 349,
        bullets: ["1× مجفف ثياب محمول", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 مجففات",
        subtitle: "واحد للدار وواحد عند الوالدين",
        price: 599,
        originalPrice: 1098,
        savingsText: "وفر 499 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 299.5,
        bullets: ["2× مجفف ثياب محمول", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 مجففات",
        subtitle: "للدار والكراء ولا هدية",
        price: 799,
        originalPrice: 1647,
        savingsText: "وفر 848 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 266.3,
        bullets: ["3× مجفف ثياب محمول", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      { title: "الشتا والثياب ما كتنشفش", description: "الحبل برا كيبقا مبلل، والدار كتبقى فيها الرطوبة والريحة." },
      { title: "الماكينة الكبيرة غالية", description: "مجفف الثياب الكبير كياخد بلاصة وكيسحب بزاف، وما كاينش فكل دار." },
      { title: "الستنّى كيطوّل", description: "كتسنى يومين باش تلبس حاجة، وخصوصاً القمصان والجلابب." }
    ],
    solutionProofs: [
      { title: "هواء سخون داخل الخزانة", description: "الأنبوب كيوصّل الهواء للثياب المعلقة، والتنشيف كيتم فالدار.", metric: "1", iconText: "أنبوب" },
      { title: "ريموت ومؤقت", description: "كتضبط الوقت وكتبعد. ما خاصكش تبقى واقف حدا الآلة.", metric: "▶", iconText: "ريموت" },
      { title: "كيتطوى", description: "ملي تسالي كتجمع الخزانة وتخزنها. ما كتبقىش منصوبة طول الوقت.", metric: "0", iconText: "بلاصة زايدة" }
    ],
    comparison: [
      { feature: "الشتا", vitalis: "التنشيف فالدار بالهواء السخون", others: "الحبل برا والثياب كتبقى مبللة" },
      { feature: "البلاصة", vitalis: "محمول وكيتطوى", others: "مجفف كبير ثابت" },
      { feature: "التحكم", vitalis: "شاشة، أزرار، وريموت", others: "كتسنى بلا تحكم" }
    ],
    faqs: [
      { question: "شنو كيدير هاد المجفف؟", answer: "كتعلق الثياب فالخزانة القماشية، والآلة البيضاء كتخرج الهواء السخون عبر الأنبوب باش يتنشفو فالدار." },
      { question: "واش كيعوض ماكينة التصبين؟", answer: "لا. هاد مجفف. الثياب خاصها تكون متصبنة، وهو كينشفها." },
      { question: "واش فيه ريموت؟", answer: "إيه، الريموت جاي معاه، وفيه مؤقت على الشاشة." },
      { question: "واش كياخد بلاصة؟", answer: "كتستعملو ملي تحتاجو، ومن بعد الخزانة كتطوى وتتخزن." },
      { question: "واش نخلص قبل ما نشوفو؟", answer: "لا. التوصيل فابور، وكتخلص حتى يوصلك وتشوفو." }
    ],
    sections: [
      {
        title: "الشتا ما بقاتش مشكل",
        description: "بدل ما تسنى الثياب على الحبل، كتعلقها فالدار والآلة كتنشفها بالهواء السخون. مزيان للقمصان، الجلابب، وحوايج الولاد.",
        highlight: "تنشيف فالدار",
        imagePosition: "right",
        placeholderSvgText: "فالشتا",
        image: "/products/dryer-home.jpg"
      },
      {
        title: "ريموت ومؤقت",
        description: "كتضبط المؤقت من الآلة ولا من الريموت، وكتمشي لشغلك. الهواء السخون كيدور داخل الخزانة.",
        highlight: "تحكم عن بعد",
        imagePosition: "left",
        placeholderSvgText: "ريموت",
        image: "/products/dryer-features.jpg"
      },
      {
        title: "كيتطوى ويتخزن",
        description: "الخزانة قماش. ملي تسالي كتطويها وتخزنها مع الآلة، والدار ما كتزحمش.",
        highlight: "محمول",
        imagePosition: "right",
        placeholderSvgText: "كيتطوى",
        image: "/products/dryer-fold.jpg"
      }
    ]
  },
  {
    id: "gift-set",
    sku: "VM-SET-08",
    upsellPrice: 275,
    slug: "coffret-montre-bijoux",
    name: "طقم ساعة ذكية ومجوهرات هدية - Coffret H69 Plus",
    shortName: "طقم الساعة والمجوهرات",
    category: "هدية وأناقة",
    icon: "🎁",
    image: "/products/set-box.jpg",
    beforeAfterImage: "/products/set-look.png",
    rating: 4.9,
    reviewsCount: 121,
    badge: "هدية جاهزة",
    headline: "علبة وحدة فيها الساعة والمجوهرات… هدية راقية بلا ما تجمعي القطع بوحدك",
    subheadline: "طقم فيه ساعة ذكية بشاشة 2.02، ساعة حلي خضراء، قلادة قلب، سوار، خاتم وحلق، مع سوار وردي زايد وكابل الشحن. كلشي مجموع فعلبة وردية، جاهز تهديه.",
    stockLeft: 16,
    recentOrdersCount: 24,
    heroBullets: [
      "ساعة ذكية H69 Plus بشاشة كبيرة 2.02، وسوار وردي زايد",
      "ساعة حلي خضراء، قلادة قلب، سوار، خاتم وحلق",
      "كابل الشحن وسلسلة زايدة داخلين فالعلبة",
      "علبة هدية وردية، ما محتاجاش تغلّفيها"
    ],
    features: [
      "لون ذهبي مع حجر أخضر، إطلالة وحدة متناسقة",
      "السوار الوردي ديال الساعة كيتبدل",
      "مناسبة لعيد الميلاد، العيد، ولا مفاجأة بلا مناسبة",
      "كتشوفي كل القطع قبل ما تخلصي"
    ],
    scientificReason: "الطقم مجموع بلون واحد، باش الهدية تبان كاملة وما تضطريش تشري كل قطعة بوحدها.",
    colors: [
      { hex: "#059669", nameAr: "ذهبي وأخضر", nameFr: "Doré vert" }
    ],
    visualStory: [
      {
        type: "result",
        title: "طقم كامل بإطلالة راقية",
        subtitle: "الساعة، القلادة، السوار، الخاتم والحلق كيمشيو مع بعضياتهم.",
        badge: "الإطلالة",
        image: "/products/set-look.png",
        callouts: ["ساعة", "قلادة", "خاتم وحلق"],
        accent: "emerald"
      },
      {
        type: "usage",
        title: "كلشي داخل العلبة",
        subtitle: "الساعة الذكية، ساعة الحلي، المجوهرات، السوار الزايد وكابل الشحن.",
        badge: "المحتوى",
        image: "/products/set-box.jpg",
        callouts: ["علبة وحدة", "سوار زايد", "كابل"],
        accent: "teal"
      },
      {
        type: "trust",
        title: "القطع اللي داخلين",
        subtitle: "ساعة متصلة، ساعة حلي، قلادة قلب، سوار، خاتم وحلق، سلسلة، وسوار وردي زايد.",
        badge: "التفاصيل",
        image: "/products/set-contents.jpg",
        callouts: ["10 قطع", "هدية", "متناسق"],
        accent: "amber"
      },
      {
        type: "result",
        title: "هدية مثالية لمن تحب",
        subtitle: "العلبة وردية ومزوقة. كتعطيها نيشان بلا تغليف زايد.",
        badge: "الهدية",
        image: "/products/set-gift.jpg",
        callouts: ["علبة هدية", "جاهزة", "راقية"],
        accent: "rose"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "طقم واحد",
        subtitle: "هدية كاملة لشخص واحد",
        price: 299,
        originalPrice: 499,
        savingsText: "وفر 200 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 299,
        bullets: ["1× طقم ساعة ومجوهرات", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 أطقم",
        subtitle: "جوج هدايا، ولا وحدة ليك ووحدة تهديها",
        price: 549,
        originalPrice: 998,
        savingsText: "وفر 449 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 274.5,
        bullets: ["2× طقم ساعة ومجوهرات", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 أطقم",
        subtitle: "للعائلة ولا هدايا العيد",
        price: 749,
        originalPrice: 1497,
        savingsText: "وفر 748 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 249.7,
        bullets: ["3× طقم ساعة ومجوهرات", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      { title: "الهدية كتبقى ناقصة", description: "كتشري ساعة بوحدها ولا سلسلة بوحدها، وما كيبانش طقم." },
      { title: "الجمع كيضيع الوقت", description: "كتقلبي على قطع كيمشيو مع بعضياتهم، والألوان ما كيتناسقوش." },
      { title: "التغليف زايد", description: "كتخلص على العلبة والشريط. هنا العلبة جاية هدية." }
    ],
    solutionProofs: [
      { title: "ساعة ذكية + ساعة حلي", description: "شاشة 2.02، سوار وردي زايد، وكابل الشحن. ومعاها ساعة خضراء مزوقة.", metric: "2", iconText: "ساعات" },
      { title: "مجوهرات متناسقة", description: "قلادة قلب، سوار، خاتم وحلق، بلون ذهبي وحجر أخضر.", metric: "1", iconText: "طقم" },
      { title: "علبة تهديها نيشان", description: "ما تحتاجي لا تغليف لا تجمع. كتفتحي العلبة وكتشوفي القطع.", metric: "0", iconText: "تغليف زايد" }
    ],
    comparison: [
      { feature: "المحتوى", vitalis: "ساعة ذكية، ساعة حلي، ومجوهرات فعلبة وحدة", others: "قطعة وحدة بوحدها" },
      { feature: "الهدية", vitalis: "علبة وردية جاهزة", others: "كتغلفها بوحدك" },
      { feature: "اللون", vitalis: "ذهبي وأخضر متناسقين", others: "قطع مخلطة ما كيمشيوش" }
    ],
    faqs: [
      { question: "شنو داخل فالعلبة؟", answer: "ساعة ذكية H69 Plus بشاشة 2.02 وسوار وردي زايد وكابل الشحن، ساعة حلي خضراء، قلادة قلب، سوار، خاتم وحلق، سلسلة زايدة، وإكسسوار صغير." },
      { question: "واش الذهب والزمرّد حقيقيين؟", answer: "لا. هاد طقم أناقة بلون ذهبي وحجر أخضر. ماشي ذهب عيار وماشي حجر كريم طبيعي." },
      { question: "واش الساعة كتتشارجا؟", answer: "إيه، كابل الشحن داخل مع الطقم." },
      { question: "واش مزيانة هدية؟", answer: "إيه. العلبة وردية وجاهزة تعطيها فالعيد، عيد الميلاد، ولا مفاجأة." },
      { question: "واش نخلص قبل ما نشوفها؟", answer: "لا. التوصيل فابور، وكتخلص حتى توصلك وتشوفي العلبة." }
    ],
    sections: [
      {
        title: "إطلالة كاملة",
        description: "الساعة الخضراء، قلادة القلب، السوار، الخاتم والحلق كيلبسو مع بعض. الطقم باين راقي بلا ما تجمعي القطع من بلايص مختلفة.",
        highlight: "طقم متناسق",
        imagePosition: "right",
        placeholderSvgText: "إطلالة راقية",
        image: "/products/set-look.png"
      },
      {
        title: "ساعة ذكية داخل الهدية",
        description: "H69 Plus بشاشة 2.02 كما مكتوب على العلبة. السوار الوردي كيتبدل، وكابل الشحن جاي معاها.",
        highlight: "شاشة 2.02",
        imagePosition: "left",
        placeholderSvgText: "ساعة ذكية",
        image: "/products/set-gift.jpg"
      },
      {
        title: "علبة تهديها نيشان",
        description: "كل القطع مرتبين فالعلبة الوردية: الساعات، المجوهرات، السوار الزايد والكابل. كتشوفيهم قبل الخلاص.",
        highlight: "هدية جاهزة",
        imagePosition: "right",
        placeholderSvgText: "محتوى العلبة",
        image: "/products/set-contents.jpg"
      }
    ]
  },
  {
    id: "faucet-filter",
    sku: "VM-TAP-07",
    upsellPrice: 249,
    slug: "robinet-filtre-eau",
    name: "صنبور الماء المصفي والساخن - Robinet Filtre",
    shortName: "صنبور الماء المصفي",
    category: "مطبخ وماء",
    icon: "🚰",
    image: "/products/faucet-splash.jpg",
    beforeAfterImage: "/products/faucet-home.jpg",
    rating: 4.9,
    reviewsCount: 136,
    badge: "ماء مصفى فالكوزينة",
    headline: "من روبيني واحد: ماء مصفى للشرب، وماء ساخن بلا ما تسنا السخان",
    subheadline: "كيتركب على روبيني الكوزينة. جهة كتعطي ماء مصفى للكاس والطبخ، وجهة فيها ماء ساخن والشاشة كاتبين الحرارة. الفلتر كيتبدل، والتركيب ساهل.",
    stockLeft: 13,
    recentOrdersCount: 29,
    heroBullets: [
      "ماء مصفى للكاس، للطبخ، وغسيل الخضر",
      "ماء ساخن من نفس الصنبور، والشاشة كاتبين الحرارة",
      "كيتركب على روبيني الكوزينة اللي عندك",
      "الفلتر كيتبدل، ما محتاجش سخان كبير للكوزينة"
    ],
    features: [
      "زر كتحول بين الماء المصفي والماء الساخن",
      "خراطيش بيضاء كتتركب وتتحل بسهولة",
      "مناسب للكوزينة اليومية",
      "كتوفر الوقت: الكاس حاضر، والماء السخون ما كيسناش"
    ],
    scientificReason: "الفلتر كينقص الشوائب اللي كتبان فالماء، والماء الساخن الجاهز كيسهل الغسيل والطبخ بلا ما تشعل السخان الكبير لكل حاجة صغيرة.",
    colors: [
      { hex: "#38BDF8", nameAr: "أبيض وكروم", nameFr: "Blanc chromé" }
    ],
    visualStory: [
      {
        type: "usage",
        title: "كاس ديال الماء من الروبينية",
        subtitle: "كتفتح الماء المصفي وتعمر الكاس نيشان فالكوزينة.",
        badge: "الشرب",
        image: "/products/faucet-kitchen.jpg",
        callouts: ["ماء مصفى", "فالكوزينة", "تركيب ساهل"],
        accent: "teal"
      },
      {
        type: "result",
        title: "ماء صافي فأي وقت",
        subtitle: "للشرب والطبخ، بلا ما تمشي تشري قراعي كل مرة.",
        badge: "فأي وقت",
        image: "/products/faucet-home.jpg",
        callouts: ["الشرب", "الطبخ", "كل نهار"],
        accent: "emerald"
      },
      {
        type: "trust",
        title: "ماء ساخن وماء مصفى",
        subtitle: "جهة سخونة للمطبخ، وجهة مصفية للكاس. بلا سخان كبير.",
        badge: "جوج جهات",
        image: "/products/faucet-features.jpg",
        callouts: ["ساخن", "مصفى", "يوفر الوقت"],
        accent: "amber"
      },
      {
        type: "usage",
        title: "الشاشة كاتبين الحرارة",
        subtitle: "كتشوف الحرارة على الشاشة، وكتبدل الجهة بالزر.",
        badge: "الحرارة",
        image: "/products/faucet-splash.jpg",
        callouts: ["شاشة", "زر", "صنبور واحد"],
        accent: "teal"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "صنبور واحد",
        subtitle: "لكوزينة الدار",
        price: 279,
        originalPrice: 459,
        savingsText: "وفر 180 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 279,
        bullets: ["1× صنبور مصفي مع الماء الساخن", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 صنابير",
        subtitle: "كوزينة ووحدة عند الوالدين",
        price: 499,
        originalPrice: 918,
        savingsText: "وفر 419 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 249.5,
        bullets: ["2× صنبور مصفي مع الماء الساخن", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 صنابير",
        subtitle: "للدار والكراء ولا هدية",
        price: 699,
        originalPrice: 1377,
        savingsText: "وفر 678 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 233,
        bullets: ["3× صنبور مصفي مع الماء الساخن", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      {
        title: "الماء ديال الروبينية ما كيبغيوش يشربوه",
        description: "الكلس والطعم كيخليهم يشرو القراعي، والقراعي كتخلص وكتجمع."
      },
      {
        title: "الماء السخون كيسنا",
        description: "باش تغسل ولا تعمر طنجرة، كتسنى السخان الكبير يسخن."
      },
      {
        title: "الأجهزة الكبار كياخدوا بلاصة",
        description: "سخان ولا جهاز تصفية كبير ما كيدخلش فالكوزينة الصغيرة."
      }
    ],
    solutionProofs: [
      {
        title: "ماء مصفى للكاس",
        description: "الفلتر على الروبينية كيعطي ماء أصفى للشرب والطبخ، والخرطوشة كتبدل.",
        metric: "1",
        iconText: "فلتر"
      },
      {
        title: "ماء ساخن جاهز",
        description: "الشاشة كاتبين الحرارة. كتستعمل الماء الساخن فالمطبخ بلا ما تشعل السخان الكبير.",
        metric: "°C",
        iconText: "شاشة"
      },
      {
        title: "كيتركب على الروبيني",
        description: "ما كيبنيش شبكة جديدة. كيتركب على روبيني الكوزينة اللي عندك.",
        metric: "0",
        iconText: "سخان كبير"
      }
    ],
    comparison: [
      { feature: "الماء", vitalis: "مصفى للشرب، وسخون للمطبخ", others: "ماء الروبينية كيف ما جا" },
      { feature: "البلاصة", vitalis: "على الروبيني، بلا جهاز كبير", others: "سخان ولا وحدة تصفية كتاخد بلاصة" },
      { feature: "الوقت", vitalis: "الكاس والماء السخون حاضرين", others: "قراعي كل سيمانة، وستنّى السخان" }
    ],
    faqs: [
      { question: "شنو كيدير هاد الصنبور؟", answer: "كيتركب على روبيني الكوزينة. كيعطي ماء مصفى للشرب والطبخ، وماء ساخن للمطبخ، والشاشة كاتبين الحرارة." },
      { question: "واش كيعوض السخان ديال الدار كامل؟", answer: "لا. هادشي لكوزينة: غسل، طبخ، وماء سخن فبلاصتو. السخان الكبير ديال الحمام كيبقا خدمتو." },
      { question: "واش الفلتر كيتبدل؟", answer: "إيه، الخرطوشة كتبدل ملي تسالي." },
      { question: "واش الماء المصفي كيعني ماء طبي؟", answer: "لا. الفلتر كيعطي ماء أصفى للاستعمال اليومي. إلا كان عندك مشكل فالماء ولا نصيحة من الطبيب، تبعها." },
      { question: "واش نخلص قبل ما نشوفو؟", answer: "لا. التوصيل فابور، وكتخلص حتى يوصلك وتشوفو." }
    ],
    sections: [
      {
        title: "ماء مصفى للكاس والطبخ",
        description: "بدل ما تشري قراعي كل مرة، كتعمر الكاس من الروبينية. الفلتر كينقص الشوائب اللي كتبان فالماء، والخرطوشة كتبدل.",
        highlight: "ماء مصفى",
        imagePosition: "right",
        placeholderSvgText: "كاس من الروبينية",
        image: "/products/faucet-home.jpg"
      },
      {
        title: "ماء ساخن بلا سخان كبير",
        description: "جهة سخونة للمطبخ، والشاشة كاتبين الحرارة. كتغسل وتعمر الطنجرة بلا ما تسنا السخان ديال الدار.",
        highlight: "ماء ساخن",
        imagePosition: "left",
        placeholderSvgText: "شاشة الحرارة",
        image: "/products/faucet-splash.jpg"
      },
      {
        title: "كيتركب على روبيني الكوزينة",
        description: "ما كتحتاجش تهد الحيط ولا تجيب جهاز كبير. كيتركب على الروبيني، وكتبدل بين المصفي والساخن بالزر.",
        highlight: "تركيب ساهل",
        imagePosition: "right",
        placeholderSvgText: "تركيب ساهل",
        image: "/products/faucet-kitchen.jpg"
      }
    ]
  },
  {
    id: "neck-massager",
    sku: "VM-NCK-06",
    upsellPrice: 275,
    slug: "masseur-nuque",
    name: "مدلك الرقبة والكتف متعدد الاستعمال - Masseur Nuque",
    shortName: "مدلك الرقبة والكتف",
    category: "صحة واسترخاء",
    icon: "💆",
    image: "/products/neck-home.jpg",
    beforeAfterImage: "/products/neck-multi.jpg",
    rating: 4.9,
    reviewsCount: 154,
    badge: "راحة فالدار",
    headline: "ريّح رقبتك وكتافك فالدار… وجهاز واحد كيكفي لبلايص أخرين",
    subheadline: "مدلك كتلبسو على الرقبة والكتف، وتقدر ديرو حتى على الخصر، الذراع والرجل. عقد التدليك كتخدم وأنت جالس فالدار، بعد الخدمة ولا قدام التلفزة.",
    stockLeft: 11,
    recentOrdersCount: 33,
    heroBullets: [
      "كتلبسو بسهولة على الرقبة والكتف بلا ما تحتاج شي واحد يدلكك",
      "نفس الجهاز كيمشي للخصر، الذراع والرجل",
      "عقد كتعطي إحساس ديال التدليك باليدين وأنت مرتاح فالدار",
      "استعمال يومي، وهدية مزيانة للوالدين ولا للي كيخدم بزاف"
    ],
    features: [
      "حزام بني مريح وكيتلبس بوحدك",
      "أزرار بسيطة على الجنب",
      "ما كيحتاجش تخرج للمركز: الجلسة فالدار",
      "خفيف باش تهزو معاك ولا تخبيه فالدروج"
    ],
    scientificReason: "دقائق ديال التدليك بعد نهار طويل كتعاون الجسم يرتاح، وكتنقص الإحساس بالشد فالرقبة والكتف من الجلوس والخدمة.",
    colors: [
      { hex: "#6B8F71", nameAr: "أخضر زيتي", nameFr: "Vert olive" }
    ],
    visualStory: [
      {
        type: "usage",
        title: "جلسي وريّحي رقبتك",
        subtitle: "كتلبس الجهاز وأنت فالصالة. الرقبة والكتف كياخدو التدليك ونتا مرتاح.",
        badge: "فالدار",
        image: "/products/neck-home.jpg",
        callouts: ["رقبة", "كتف", "فالدار"],
        accent: "teal"
      },
      {
        type: "usage",
        title: "جهاز واحد، بزاف ديال البلايص",
        subtitle: "الرقبة والكتف، الخصر والبطن، الذراع والرجل. كتبدل البلاصة على حساب فين حاس بالشد.",
        badge: "متعدد",
        image: "/products/neck-multi.jpg",
        callouts: ["خصر", "ذراع", "رجل"],
        accent: "emerald"
      },
      {
        type: "trust",
        title: "كتلبس بسهولة وكيتستعمل كل نهار",
        subtitle: "ما فيهش تعقيد. كتلبسو، كتشعلو، وكتخلي العقد تخدم شوية وأنت جالس.",
        badge: "ساهل",
        image: "/products/neck-features.jpg",
        callouts: ["ساهل", "يومي", "هدية"],
        accent: "amber"
      },
      {
        type: "result",
        title: "الرقبة، الكتف، الخصر والرجل",
        subtitle: "ما تشريش جهاز لكل بلاصة. هاد المدلك كيتقلب معاك فين بغيتي.",
        badge: "النتيجة",
        image: "/products/neck-zones.jpg",
        callouts: ["4 بلايص", "جهاز واحد", "راحة"],
        accent: "teal"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "مدلك واحد",
        subtitle: "راحة يومية ليك فالدار",
        price: 299,
        originalPrice: 499,
        savingsText: "وفر 200 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 299,
        bullets: ["1× مدلك الرقبة والكتف", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 مدلكات",
        subtitle: "واحد ليك وواحد للوالدين",
        price: 549,
        originalPrice: 998,
        savingsText: "وفر 449 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 274.5,
        bullets: ["2× مدلك الرقبة والكتف", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 مدلكات",
        subtitle: "للدار، ولا هدايا للعائلة",
        price: 749,
        originalPrice: 1497,
        savingsText: "وفر 748 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 249.7,
        bullets: ["3× مدلك الرقبة والكتف", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      {
        title: "الرقبة والكتف عيانين من الخدمة",
        description: "الجلوس قدام التليفون ولا فال خدمة كيخلي الرقبة تقيلة والكتف مشدود."
      },
      {
        title: "ما كاينش الوقت تخرج تتدلك",
        description: "المركز غالي وكيحتاج موعد. فالدار كتلبس الجهاز ودقايق وكترتاح."
      },
      {
        title: "الشد ما كيبقاش غير فالرقبة",
        description: "الخصر، الذراع والرجل حتى هما كيعييو. جهاز واحد كيكفي لهاد البلايص."
      }
    ],
    solutionProofs: [
      {
        title: "تدليك على الرقبة والكتف",
        description: "كتلبسو وهما العقد كتخدم على الجناب. جلسة قصيرة بعد النهار وكتحس بالخفة.",
        metric: "1",
        iconText: "جهاز"
      },
      {
        title: "كيتقلب على بلايص أخرين",
        description: "الخصر، الذراع والرجل. ما محتاجش تشري آلة لكل جهة.",
        metric: "4",
        iconText: "بلايص"
      },
      {
        title: "كتلبسو بوحدك",
        description: "الحزام ساهل، والأزرار على الجنب. كتستعملو كل نهار فالدار.",
        metric: "0",
        iconText: "موعد"
      }
    ],
    comparison: [
      { feature: "البلايص", vitalis: "رقبة، كتف، خصر، ذراع ورجل", others: "جهاز كيهز غير بلاصة وحدة" },
      { feature: "الاستعمال", vitalis: "كتلبسو فالدار وأنت جالس", others: "خاصك تخرج لمركز وتخلص الجلسة" },
      { feature: "الهدية", vitalis: "عملي للوالدين ولي كيخدم بزاف", others: "هدية كتبقى فالدروج" }
    ],
    faqs: [
      { question: "فين نقدر نستعملو؟", answer: "على الرقبة والكتف بالدرجة الأولى، وتقدر ديرو حتى على الخصر، الذراع والرجل." },
      { question: "واش ساهل نلبسو بوحدي؟", answer: "إيه. كتلبسو على الرقبة ولا على البلاصة اللي بغيتي، والأزرار على الجنب." },
      { question: "واش كيعالج المرض؟", answer: "لا. هاد جهاز ديال الراحة والتدليك فالدار. إلا كان عندك مشكل صحي فالرقبة ولا الظهر، استشير الطبيب قبل الاستعمال." },
      { question: "واش مزيان هدية؟", answer: "إيه، خصوصاً للوالدين ولي كيخدم ويقعد بزاف." },
      { question: "واش نخلص قبل ما نشوفو؟", answer: "لا. التوصيل فابور، وكتخلص حتى يوصلك وتشوفو." }
    ],
    sections: [
      {
        title: "راحة الرقبة من الدار",
        description: "بعد الخدمة ولا بعد نهار قدام التليفون، تلبس المدلك وتجلس. العقد كتخدم على الرقبة والكتف وأنت مرتاح فالصالة.",
        highlight: "رقبة وكتف",
        imagePosition: "right",
        placeholderSvgText: "راحة فالدار",
        image: "/products/neck-home.jpg"
      },
      {
        title: "جهاز واحد لبزاف ديال البلايص",
        description: "ما كيبقاش غير على العنق. كتقدر ديرو على الكتف، الخصر، الذراع والرجل، على حساب فين حاس بالشد.",
        highlight: "متعدد الاستعمال",
        imagePosition: "left",
        placeholderSvgText: "4 بلايص",
        image: "/products/neck-zones.jpg"
      },
      {
        title: "كتلبس بسهولة كل نهار",
        description: "ما فيهش تركيب معقد. كتلبسو، كتشعلو من الأزرار، وكتخليه يخدم شوية. هدية عملية لي بغيتي تريّحهم.",
        highlight: "استعمال يومي",
        imagePosition: "right",
        placeholderSvgText: "ساهل وهدية",
        image: "/products/neck-multi.jpg"
      }
    ]
  },
  {
    id: "boxing-machine",
    sku: "VM-BOX-05",
    upsellPrice: 249,
    slug: "machine-boxe-enfants",
    name: "آلة الملاكمة الموسيقية للأطفال - Machine de Boxe",
    shortName: "آلة الملاكمة للأطفال",
    category: "لعب وحركة للأطفال",
    icon: "🥊",
    image: "/products/boxing-punch.jpg",
    beforeAfterImage: "/products/boxing-family.jpg",
    rating: 4.9,
    reviewsCount: 168,
    badge: "هواية مفيدة فالدار",
    headline: "ولدك يفرغ الطاقة فالدار… بالموسيقى، بالنقاط، وباللعب معاك",
    subheadline: "آلة ملاكمة كتثبت فالحيط: 4 أهداف، شاشة كتحسب النقاط، موسيقى وأضواء، وقفازات داخلين. الولد كيلعب، كيركز، وكيخرج الطاقة فحاجة مفيدة بدل ما يبقى قدام الشاشة.",
    stockLeft: 14,
    recentOrdersCount: 41,
    heroBullets: [
      "4 أهداف دائرية كيضربهم بالقفازات، والشاشة كتحسب النقاط",
      "موسيقى وأضواء كتزيد الحماس وتخلي اللعب ما يساليش بسرعة",
      "كتثبت فالحيط بالبراغي، ما كتاخدش بلاصة فالأرض",
      "القفازات داخلين، والولد يلعب بوحدو ولا مع باباه وماماه"
    ],
    features: [
      "بلوتوث باش تربط موسيقى الولد وهو كيلعب",
      "كتقوي التركيز وتنسيق العين مع اليد",
      "كتفرغ الطاقة فالدار فوقت المطر ولا ملي ما قدرش يخرج",
      "مناسبة لغرفة النعاس ولا غرفة اللعب، واللعب تحت عين الوالدين"
    ],
    scientificReason: "اللعب بالحركة كيعاون الطفل يفرغ الطاقة ويقوي التركيز وتنسيق العين واليد، وكيولي عندو هواية كيرجع ليها كل نهار فالدار.",
    colors: [
      { hex: "#7DD3FC", nameAr: "أزرق سماوي", nameFr: "Bleu ciel" }
    ],
    visualStory: [
      {
        type: "usage",
        title: "كيضرب، النقاط كتطلع، وهو فرحان",
        subtitle: "كل ضربة صحيحة كاتزيد فالنقاط. الولد كيبغي يربح، وكيعاود حتى يحسن النتيجة.",
        badge: "اللعب",
        image: "/products/boxing-punch.jpg",
        callouts: ["4 أهداف", "شاشة النقاط", "قفازات"],
        accent: "teal"
      },
      {
        type: "result",
        title: "لعب مع باباه فالدار",
        subtitle: "ما بقاش غير التليفون. كاين وقت كيلعبو بجوج، وكيتضحكو، والدار فيها حركة مفيدة.",
        badge: "مع العائلة",
        image: "/products/boxing-family.jpg",
        callouts: ["لعب عائلي", "فرحة", "طاقة مفيدة"],
        accent: "emerald"
      },
      {
        type: "trust",
        title: "موسيقى، بلوتوث، أضواء، وتثبيت فالحيط",
        subtitle: "الآلة كتعلق فالحيط، فيها صوت وموسيقى، والأضواء كتبان ملي يضرب مزيان.",
        badge: "المزايا",
        image: "/products/boxing-features.jpg",
        callouts: ["موسيقى", "بلوتوث", "تثبيت فالحيط"],
        accent: "amber"
      },
      {
        type: "usage",
        title: "هواية فغرفة اللعب",
        subtitle: "كتعلقها فالغرفة، والولد كيلقا بلاصة يلعب فيها حتى إلا كان الجو بارد ولا ما قدرش يخرج.",
        badge: "فالغرفة",
        image: "/products/boxing-playroom.jpg",
        callouts: ["فالغرفة", "كل نهار", "تحت المراقبة"],
        accent: "teal"
      }
    ],
    offerTiers: [
      {
        tier: 1,
        name: "آلة واحدة",
        subtitle: "هواية مفيدة لولدك فالدار",
        price: 279,
        originalPrice: 459,
        savingsText: "وفر 180 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 279,
        bullets: ["1× آلة ملاكمة مع القفازات", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 آلات ملاكمة",
        subtitle: "وحدة للدار ووحدة عند الجدة، ولا لخوك واختك",
        price: 499,
        originalPrice: 918,
        savingsText: "وفر 419 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 249.5,
        bullets: ["2× آلة ملاكمة مع القفازات", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 آلات ملاكمة",
        subtitle: "للولاد كاملين، ولا هدية للعائلة",
        price: 699,
        originalPrice: 1377,
        savingsText: "وفر 678 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 233,
        bullets: ["3× آلة ملاكمة مع القفازات", "توصيل مجاني", "المعاينة قبل الدفع"]
      }
    ],
    painPoints: [
      {
        title: "النهار كامل قدام الشاشة",
        description: "الولد كيقعد جالس، الطاقة محبوسة، وملي تطلب منو يلعب كيقول ما كاين فين."
      },
      {
        title: "الطاقة كتخرج فالصراخ والجري فالدار",
        description: "إلا ما لقاش لعبة فيها حركة، كيضرب فالحيوط ولا كيتعارك مع خوتو بلا هدف."
      },
      {
        title: "ما عندوش هواية كيرجع ليها",
        description: "اللعب العادي كيسالي فدقايق. هنا النقاط والموسيقى كيخليه يعاود ويحسن النتيجة."
      }
    ],
    solutionProofs: [
      {
        title: "نقاط كتحفزو",
        description: "الشاشة كتحسب كل ضربة مزيانة. الولد كيبغي يطلع الرقم، وكيبقى يلعب بلا ما تطلب منو.",
        metric: "4",
        iconText: "أهداف"
      },
      {
        title: "موسيقى وأضواء",
        description: "الموسيقى كتدخلو فاللعب، والأضواء كتبان ملي يضرب فالهدف الصحيح. تقدر تربط البلوتوث.",
        metric: "♪",
        iconText: "موسيقى"
      },
      {
        title: "كتعلق فالحيط",
        description: "ما كتحتاجش بلاصة كبيرة فالأرض. كتثبتها فالحيط، والقفازات جاية معاها.",
        metric: "0",
        iconText: "بلاصة فالأرض"
      }
    ],
    comparison: [
      { feature: "الهواية", vitalis: "لعب يومي فيه نقاط وهدف", others: "لعبة كتمل بعد شوية وكتبقى مرمية" },
      { feature: "الموسيقى", vitalis: "موسيقى وأضواء وبلوتوث", others: "صامتة ولا بلا تفاعل" },
      { feature: "البلاصة", vitalis: "كتثبت فالحيط وما كتزحمش الغرفة", others: "ألعاب كتاخد الأرض كاملة" },
      { feature: "اللعب العائلي", vitalis: "الولد يلعب بوحدو ولا مع الوالدين", others: "كل واحد فالتليفون ديالو" }
    ],
    faqs: [
      { question: "شنو كتدير هاد الآلة؟", answer: "كتعلق فالحيط، والولد كيضرب الأهداف بالقفازات. الشاشة كتحسب النقاط، وفيها موسيقى وأضواء باش اللعب يبقى ممتع. هواية فيها حركة وتركيز فالدار." },
      { question: "واش القفازات داخلين؟", answer: "إيه، القفازات كيجيو مع الآلة." },
      { question: "واش فيها موسيقى؟", answer: "إيه، فيها موسيقى وصوت، وتقدر تربط البلوتوث." },
      { question: "فين كتتركب؟", answer: "كتثبت فالحيط بالبراغي. ما كتاخدش بلاصة فالأرض، ومزيانة لغرفة النعاس ولا غرفة اللعب." },
      { question: "من أي عمر؟", answer: "للأطفال اللي كيبغيو الحركة وكيعرفو يلعبو بالقفازات. اللعب كيكون تحت عين الوالدين." },
      { question: "واش نخلص قبل ما نشوفها؟", answer: "لا. التوصيل فابور، وكتخلص حتى توصلك وتشوفها." }
    ],
    sections: [
      {
        title: "هواية مفيدة بدل الشاشة",
        description: "الولد كيخرج الطاقة، كيركز على الهدف، وكيحسن النتيجة ديالو كل مرة. هادشي كيبني عادة ديال اللعب والحركة فالدار، ماشي غير جلسة قدام التليفون.",
        highlight: "حركة وتركيز",
        imagePosition: "right",
        placeholderSvgText: "لعب ونقاط",
        image: "/products/boxing-punch.jpg"
      },
      {
        title: "موسيقى، أضواء، وقفازات",
        description: "الموسيقى كتدخل الولد فاللعب، والأضواء كتبين الهدف اللي ضربو. القفازات داخلين، والآلة كتعلق فالحيط باش الغرفة تبقى مرتبة.",
        highlight: "موسيقى + تثبيت",
        imagePosition: "left",
        placeholderSvgText: "مزايا الآلة",
        image: "/products/boxing-features.jpg"
      },
      {
        title: "وقت لعب مع العائلة",
        description: "باباه ولا ماماه يلعبو معاه دور دور، ولا يخليو كل واحد يجرب النقاط ديالو. لعبة كتلم العائلة فالغرفة، وما محتاجاش تخرجو من الدار.",
        highlight: "لعب عائلي",
        imagePosition: "right",
        placeholderSvgText: "مع باباه",
        image: "/products/boxing-family.jpg"
      }
    ]
  },
  {
    id: "armoire-3-portes",
    sku: "VM-ARM-01",
    upsellPrice: 339,
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
        price: 369,
        originalPrice: 599,
        savingsText: "وفر 230 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 369,
        bullets: ["1× خزانة بـ 3 أقسام", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 خزانات ملابس",
        subtitle: "وحدة ليك وواحدة لوليداتك",
        price: 679,
        originalPrice: 1198,
        savingsText: "وفر 519 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 339.5,
        bullets: ["2× خزانة بـ 3 أقسام", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 خزانات ملابس",
        subtitle: "لغرف الدار كاملة",
        price: 979,
        originalPrice: 1797,
        savingsText: "وفر 818 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 326.3,
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
      },
      {
        title: "تركيب ساهل وبدون أدوات",
        description: "ما تحتاجي لا تورنوفيس لا مطرقة. الهيكل كيركب باليد بسهولة تامة، ومثالي حتى لألعاب الأطفال.",
        highlight: "عملية جداً",
        imagePosition: "left",
        placeholderSvgText: "Armoire Details",
        image: "/images/products/armoire-details.jpg"
      }
    ]
  },
  {
    id: "foot-massager",
    sku: "VM-FMS-02",
    upsellPrice: 169,
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
        price: 199,
        originalPrice: 350,
        savingsText: "وفر 151 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 199,
        bullets: ["1× لوحة مساج", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 لوحات مساج",
        subtitle: "وحدة ليك ووحدة للواليدين",
        price: 359,
        originalPrice: 700,
        savingsText: "وفر 341 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 179.5,
        bullets: ["2× لوحة مساج", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 لوحات مساج",
        subtitle: "للعائلة كاملة",
        price: 499,
        originalPrice: 1050,
        savingsText: "وفر 551 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 166.3,
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
      },
      {
        title: "تصميم مريح وفعال",
        description: "مصمم خصيصاً باش يريح القدمين من التعب. كرات المساج كتعمل على تنشيط الدورة الدموية، والمغناطيس كيزيد من فعالية الاسترخاء بعد نهار طويل.",
        highlight: "راحة تامة",
        imagePosition: "right",
        placeholderSvgText: "Massager Details",
        image: "/images/products/massager-details.png"
      }
    ]
  },
  {
    id: "chaise-haute",
    sku: "VM-BBY-03",
    upsellPrice: 239,
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
        price: 269,
        originalPrice: 450,
        savingsText: "وفر 181 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 269,
        bullets: ["1× كرسي ماكلة قابل للطي", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 كراسي",
        subtitle: "للتوأم، ولا وحدة للدار ووحدة عند الجدة",
        price: 479,
        originalPrice: 900,
        savingsText: "وفر 421 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 239.5,
        bullets: ["2× كرسي ماكلة قابل للطي", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 كراسي",
        subtitle: "للدار، عند الجدة، وفالطوموبيل",
        price: 679,
        originalPrice: 1350,
        savingsText: "وفر 671 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 226.3,
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
      },
      {
        title: "أمان وراحة فكل بلاصة",
        description: "كرسي مجهز بحزام أمان خماسي النقاط (5-Point Harness) وطبلة ساهلة فالتنظيف. كيتطوى بسهولة (Compact Fold) باش تديه معاك لأي بلاصة.",
        highlight: "جودة ممتازة",
        imagePosition: "left",
        placeholderSvgText: "Baby Chair Details",
        image: "/images/products/chaise-details.jpg"
      }
    ]
  },
  {
    id: "makeup-box",
    sku: "VM-MKB-04",
    upsellPrice: 169,
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
        price: 199,
        originalPrice: 350,
        savingsText: "وفر 151 درهم",
        badge: "الأساسي",
        popular: false,
        accent: "teal",
        perUnitPrice: 199,
        bullets: ["1× منظم مكياج دوار", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 2,
        name: "2 منظمات مكياج",
        subtitle: "واحد ليك وواحد لختك ولا صاحبتك",
        price: 339,
        originalPrice: 700,
        savingsText: "وفر 361 درهم",
        badge: "الأكثر طلباً",
        popular: true,
        accent: "emerald",
        perUnitPrice: 169.5,
        bullets: ["2× منظم مكياج دوار", "توصيل مجاني", "المعاينة قبل الدفع"]
      },
      {
        tier: 3,
        name: "3 منظمات مكياج",
        subtitle: "هدية لخواتاتك ولا صحاباتك",
        price: 469,
        originalPrice: 1050,
        savingsText: "وفر 581 درهم",
        badge: "أفضل قيمة",
        popular: false,
        accent: "amber",
        perUnitPrice: 156.3,
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
      },
      {
        title: "سعة كبيرة وتصميم أنيق",
        description: "كيهز بزاف ديال المنتجات بمختلف الأحجام، من القراعي الطوال حتى للفرشات. تصميم أكريليك شفاف كيزيد لمسة ديال الأناقة للتسريحة ديالك.",
        highlight: "جودة عالية",
        imagePosition: "right",
        placeholderSvgText: "Makeup Details",
        image: "/images/products/makeup-details.jpg"
      }
    ]
  }
];
