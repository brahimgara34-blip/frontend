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
  badge?: string | null;
  popular?: boolean;
  accent: 'teal' | 'emerald' | 'amber';
  perUnitPrice: number;
  bullets: string[];
}

export interface ProductVisualScene {
  type: 'problem' | 'usage' | 'result' | 'trust';
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  beforeLabel?: string;
  afterLabel?: string;
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
  beforeAfterImage: string;
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
  visualStory: ProductVisualScene[];
  offerTiers: OfferTier[];
  painPoints: {
    title: string;
    description: string;
  }[];
  solutionProofs: {
    title: string;
    description: string;
    metric: string;
    iconText: string;
  }[];
  comparison: {
    feature: string;
    vitalis: string;
    others: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  sections: {
    title: string;
    description: string;
    highlight: string;
    imagePosition: 'left' | 'right';
    placeholderSvgText: string;
    image: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    "id": "armoire",
    "sku": "VM-ARM-01",
    "slug": "armoire-3-portes",
    "name": "خزانة الملابس العصرية بـ 3 أبواب - Armoire Pliable",
    "shortName": "خزانة الملابس 3 أبواب",
    "category": "أثاث وتخزين",
    "icon": "🗄️",
    "image": "/products/armoire.webp",
    "beforeAfterImage": "/products/armoire.webp",
    "rating": 4.8,
    "reviewsCount": 342,
    "badge": "الحل العملي لتنظيم الغرفة",
    "headline": "تخلصي من فوضى الملابس واستمتعي بغرفة مرتبة وأنيقة في دقائق",
    "subheadline": "خزانة عملية، متينة، وسهلة التركيب. توفر لك مساحة تخزين هائلة وتحمي ملابسك من الغبار والرطوبة، مع إمكانية نقلها بكل سهولة.",
    "stockLeft": 12,
    "recentOrdersCount": 45,
    "heroBullets": [
      "مساحة تخزين ضخمة مقسمة بذكاء (رفوف + مساحة واسعة للتعليق)",
      "هيكل معدني صلب ومقاوم للصدأ يتحمل الأوزان الثقيلة بكل ثبات",
      "غطاء قماشي ممتاز يحمي ملابسك من الغبار، الرطوبة، وقابل للغسل",
      "تركيب سهل وسريع في دقائق بدون الحاجة لأي أدوات أو نجار"
    ],
    "features": [
      "أبعاد مثالية توفر مساحة تخزين عمودية دون تضييق الغرفة",
      "جيوب جانبية إضافية لتخزين الأغراض الصغيرة والإكسسوارات",
      "سحابات (Sush) قوية وعملية لسهولة الفتح والإغلاق اليومي",
      "تصميم أنيق وعصري يتماشى مع ديكور جميع الغرف"
    ],
    "scientificReason": "الفوضى في الغرفة تزيد من التوتر وتضيع الوقت يومياً. هذه الخزانة مصممة هندسياً لاستغلال المساحة العمودية، مما يمنحك بيئة مرتبة، مريحة نفسياً، ويوفر وقتك في البحث عن ملابسك.",
    "colors": [
      {
        "hex": "#4A4A4A",
        "nameAr": "رمادي أنيق",
        "nameFr": "Gris"
      },
      {
        "hex": "#8B4513",
        "nameAr": "بني خشبي",
        "nameFr": "Marron"
      }
    ],
    "visualStory": [
      {
        "type": "problem",
        "title": "الملابس المبعثرة وضيق المساحة في الغرفة",
        "subtitle": "الخزانات الخشبية التقليدية باهظة الثمن، تأخذ مساحة كبيرة، ويصعب نقلها من مكان لآخر.",
        "badge": "مشكلة التخزين",
        "image": "/products/armoire-problem.jpg",
        "callouts": [
          "فوضى عارمة",
          "ضيق المساحة",
          "صعوبة النقل"
        ],
        "accent": "rose"
      },
      {
        "type": "usage",
        "title": "سهولة التركيب والمتانة العالية",
        "subtitle": "هيكل معدني صلب مع غطاء قماشي متين وسحابات قوية، يمكنك تركيبه بنفسك في دقائق.",
        "badge": "جودة ومتانة",
        "image": "/products/armoire-usage.jpg",
        "callouts": [
          "هيكل معدني",
          "غطاء متين",
          "تركيب سريع"
        ],
        "accent": "teal"
      },
      {
        "type": "result",
        "title": "غرفة مرتبة، أنيقة، وكل شيء في مكانه",
        "subtitle": "نظمي ملابسك بكل سهولة مع مساحات مخصصة للتعليق والطي. راحة نفسية وتنظيم مثالي.",
        "badge": "النتيجة الفورية",
        "image": "/products/armoire.webp",
        "callouts": [
          "تنظيم مثالي",
          "مساحة واسعة",
          "أناقة وراحة"
        ],
        "accent": "emerald"
      }
    ],
    "offerTiers": [
      {
        "tier": 1,
        "name": "خزانة الملابس (3 أبواب)",
        "subtitle": "تنظيم مثالي لغرفتك",
        "price": 349,
        "originalPrice": 499,
        "savingsText": "وفر 150 درهم",
        "badge": "الأكثر مبيعاً",
        "popular": true,
        "accent": "teal",
        "perUnitPrice": 349,
        "bullets": [
          "1× خزانة 3 أبواب",
          "توصيل مجاني لباب الدار",
          "الدفع بعد الاستلام والمقاسمة"
        ]
      }
    ],
    "painPoints": [
      {
        "title": "ضيق المساحة",
        "description": "غرفتك صغيرة ولا تتسع لخزانة خشبية كبيرة ومكلفة."
      },
      {
        "title": "صعوبة النقل",
        "description": "الخزانات الخشبية ثقيلة جداً وصعبة الفك والتركيب عند الانتقال أو تغيير الديكور."
      }
    ],
    "solutionProofs": [
      {
        "title": "خفيفة وعملية",
        "description": "يمكنك نقلها وتركيبها بنفسك في دقائق معدودة.",
        "metric": "100%",
        "iconText": "سهولة"
      }
    ],
    "comparison": [
      {
        "feature": "التكلفة",
        "vitalis": "اقتصادية وعملية جداً",
        "others": "باهظة الثمن (الخشب)"
      },
      {
        "feature": "التركيب",
        "vitalis": "سهل وسريع بنفسك",
        "others": "يحتاج لمعلم نجار"
      }
    ],
    "faqs": [
      {
        "question": "واش التركيب ديالها صعيب؟",
        "answer": "لا نهائياً! التركيب ساهل بزاف وكيجي معاها دليل كيوضح الخطوات، مغتحتاج لا بلاكارات لا مسامر."
      },
      {
        "question": "واش كتهز الثقل؟",
        "answer": "نعم، الهيكل ديالها مصاوب من أنابيب معدنية صلبة مصممة باش تهز كمية كبيرة ديال الحوايج بلا ما تعواج."
      },
      {
        "question": "واش نقدر نشوفها قبل ما نخلص؟",
        "answer": "أكيد! كنوصلوها ليك تال الدار، كتقلب السلعة ديالك وتأكد من الجودة عاد كتخلص الموزع."
      }
    ],
    "sections": [
      {
        "title": "تنظيم مثالي يجمع بين الأناقة والعملية",
        "description": "يحتوي على مساحة واسعة للتعليق ورفوف متينة للطي لتناسب كل احتياجاتك اليومية.",
        "highlight": "مساحة واسعة",
        "imagePosition": "left",
        "placeholderSvgText": "Storage",
        "image": "/products/armoire.webp"
      }
    ]
  },
  {
    "id": "foot-massager",
    "sku": "VM-FMS-02",
    "slug": "foot-massager",
    "name": "جهاز تدليك القدمين الاحترافي بتقنية الشياتسو - Foot Massager",
    "shortName": "جهاز مساج القدمين",
    "category": "صحة واسترخاء",
    "icon": "👣",
    "image": "/products/footmassager.webp",
    "beforeAfterImage": "/products/footmassager.webp",
    "rating": 4.9,
    "reviewsCount": 512,
    "badge": "راحة فورية بعد يوم متعب",
    "headline": "قولي وداعاً لآلام وتورم القدمين بعد يوم عمل متعب وشاق",
    "subheadline": "جلسة مساج احترافية في منزلك! ينشط الدورة الدموية، يخفف التوتر، ويمنحك راحة فورية وعميقة لقدميك.",
    "stockLeft": 8,
    "recentOrdersCount": 67,
    "heroBullets": [
      "تقنية الشياتسو اليابانية لتدليك عميق ومريح يحاكي أيدي المدلك المحترف",
      "وظيفة التدفئة المدمجة لاسترخاء العضلات المتشنجة وتنشيط الدورة الدموية",
      "يخفف بشكل فعال آلام المفاصل، التورم، والتهاب اللفافة الأخمصية (Plantar Fasciitis)",
      "سهل الاستخدام والتنظيف مع غطاء قماشي قابل للإزالة والغسل"
    ],
    "features": [
      "عقد تدليك دوارة متعددة تستهدف جميع نقاط الضغط في القدم",
      "مستويات سرعة قابلة للتعديل لتناسب مستوى راحتك الشخصية",
      "تصميم مدمج وخفيف الوزن، يمكنك استخدامه أثناء مشاهدة التلفاز أو العمل",
      "نظام أمان ذكي يوقف الجهاز تلقائياً بعد 15 دقيقة"
    ],
    "scientificReason": "القدمان تحملان وزن الجسم طوال اليوم وتتراكم فيهما الضغوطات. التدليك يحفز نقاط الانعكاس (Reflexology) مما يقلل من هرمون التوتر (الكورتيزول) ويزيد من إفراز الإندورفين، مما يحسن جودة النوم ويريح الجسم كاملاً.",
    "colors": [
      {
        "hex": "#1A1A1A",
        "nameAr": "أسود ملكي",
        "nameFr": "Noir"
      }
    ],
    "visualStory": [
      {
        "type": "problem",
        "title": "آلام القدمين والتورم بعد يوم عمل طويل",
        "subtitle": "الوقوف والمشي لفترات طويلة يسبب تورماً، ألماً شديداً، ويؤثر على جودة نومك وراحتك.",
        "badge": "ألم وتعب",
        "image": "/products/massager-problem.jpg",
        "callouts": [
          "ألم مفاصل",
          "تورم القدمين",
          "تعب وإرهاق"
        ],
        "accent": "rose"
      },
      {
        "type": "usage",
        "title": "تقنية الشياتسو مع التدفئة المريحة",
        "subtitle": "عقد تدليك دوارة تستهدف نقاط الضغط مع حرارة لطيفة لاسترخاء العضلات المتشنجة.",
        "badge": "تدليك احترافي",
        "image": "/products/massager-usage.jpg",
        "callouts": [
          "تدليك شياتسو",
          "تدفئة مريحة",
          "استهداف دقيق"
        ],
        "accent": "teal"
      },
      {
        "type": "result",
        "title": "استرخاء تام وتجديد للنشاط في 15 دقيقة",
        "subtitle": "جلسة تدليك يومية تعيد لك حيويتك، تخلصك من التوتر، وتمنحك نوماً عميقاً ومريحاً.",
        "badge": "راحة فورية",
        "image": "/products/footmassager.webp",
        "callouts": [
          "استرخاء عميق",
          "تنشيط الدورة الدموية",
          "نوم أفضل"
        ],
        "accent": "emerald"
      }
    ],
    "offerTiers": [
      {
        "tier": 1,
        "name": "جهاز تدليك القدمين",
        "subtitle": "راحة يومية في منزلك",
        "price": 199,
        "originalPrice": 350,
        "savingsText": "وفر 151 درهم",
        "badge": "عرض محدود",
        "popular": true,
        "accent": "teal",
        "perUnitPrice": 199,
        "bullets": [
          "1× جهاز التدليك",
          "توصيل مجاني لباب الدار",
          "المعاينة قبل الدفع"
        ]
      }
    ],
    "painPoints": [
      {
        "title": "ألم مستمر وتورم",
        "description": "تعاني من آلام القدمين والتورم الذي يمنعك من الراحة والنوم بهدوء."
      }
    ],
    "solutionProofs": [
      {
        "title": "تدليك احترافي",
        "description": "يحاكي أيدي المدلك المحترف بتقنية الشياتسو.",
        "metric": "100%",
        "iconText": "راحة"
      }
    ],
    "comparison": [
      {
        "feature": "التكلفة",
        "vitalis": "تدفع مرة واحدة لجهاز يدوم",
        "others": "جلسات سبا مكلفة جداً"
      }
    ],
    "faqs": [
      {
        "question": "واش نقدر نستعملو كل نهار؟",
        "answer": "نعم، كنصحو تستعملو لمدة 15 دقيقة كل نهار فالعشية باش ترتاح وتنشط الدورة الدموية."
      },
      {
        "question": "واش كيصلح للناس الكبار فالعمر؟",
        "answer": "أكيد! ممتاز جداً للناس الكبار حيت كيعاونهم على تنشيط الدورة الدموية وتخفيف آلام المفاصل."
      },
      {
        "question": "واش نخلص عاد نشوفو؟",
        "answer": "لا، الدفع كيكون حتى كيوصلك المنتج ليديك وتشوفو وتأكد منو عاد كتخلص الموزع ديالنا."
      }
    ],
    "sections": [
      {
        "title": "تقنية الشياتسو المتقدمة مع التدفئة",
        "description": "رؤوس تدليك دوارة تستهدف كل نقطة تعب في قدميك مع حرارة لطيفة لاسترخاء العضلات.",
        "highlight": "تدليك عميق",
        "imagePosition": "right",
        "placeholderSvgText": "Massage",
        "image": "/products/footmassager.webp"
      }
    ]
  },
  {
    "id": "chaise-haute",
    "sku": "VM-BBY-03",
    "slug": "chaise-haute-bebe",
    "name": "كرسي طعام الأطفال الآمن والمريح - Chaise Haute Bébé",
    "shortName": "كرسي طعام الأطفال",
    "category": "مستلزمات الأطفال",
    "icon": "🪑",
    "image": "/products/chaise-haute.webp",
    "beforeAfterImage": "/products/chaise-haute.webp",
    "rating": 4.9,
    "reviewsCount": 284,
    "badge": "أمان وراحة لطفلك",
    "headline": "اجعلي وقت طعام طفلك آمناً، ممتعاً، وخالياً من الفوضى",
    "subheadline": "كرسي مصمم خصيصاً لراحة طفلك وسلامته، مع صينية مزدوجة سهلة التنظيف وحزام أمان خماسي النقاط لجلوس آمن مع العائلة.",
    "stockLeft": 15,
    "recentOrdersCount": 52,
    "heroBullets": [
      "حزام أمان خماسي النقاط لضمان حماية طفلك من السقوط أو الانزلاق",
      "صينية طعام مزدوجة قابلة للإزالة والغسل بكل سهولة للحفاظ على النظافة",
      "مقعد مبطن ومريح، مقاوم للماء وسهل المسح بعد كل وجبة",
      "أرجل ثابتة مانعة للانزلاق بتصميم هندسي هرمي يمنع انقلاب الكرسي"
    ],
    "features": [
      "قابل للطي بسهولة لتوفير المساحة عند عدم الاستخدام",
      "ارتفاع مثالي يناسب طاولة الطعام العائلية لمشاركة الطفل معكم",
      "مصنوع من مواد آمنة 100% وخالية من المواد السامة (BPA Free)",
      "يتحمل وزن الطفل وينمو معه حتى عمر 3 سنوات"
    ],
    "scientificReason": "جلوس الطفل مع العائلة على نفس مستوى الطاولة يعزز من تطوره الاجتماعي والنفسي، يشجعه على تقليد الكبار في الأكل، ويجعله يجرب أطعمة جديدة باستقلالية وثقة.",
    "colors": [
      {
        "hex": "#D3D3D3",
        "nameAr": "رمادي فاتح",
        "nameFr": "Gris Clair"
      }
    ],
    "visualStory": [
      {
        "type": "problem",
        "title": "صعوبة إطعام الطفل وهو يتحرك باستمرار",
        "subtitle": "إطعام الطفل بدون كرسي مخصص يسبب فوضى عارمة، بقع على الأثاث، وخطر السقوط.",
        "badge": "خطر وفوضى",
        "image": "/products/chaise-problem.jpg",
        "callouts": [
          "بقع طعام",
          "عدم استقرار",
          "تعب وإرهاق للأم"
        ],
        "accent": "rose"
      },
      {
        "type": "usage",
        "title": "أمان تام وسهولة في التنظيف",
        "subtitle": "حزام أمان خماسي النقاط يحمي طفلك، وصينية مزدوجة قابلة للإزالة لتنظيف سريع.",
        "badge": "حماية ونظافة",
        "image": "/products/chaise-usage.jpg",
        "callouts": [
          "حزام خماسي",
          "صينية مزدوجة",
          "مواد آمنة"
        ],
        "accent": "teal"
      },
      {
        "type": "result",
        "title": "وقت طعام ممتع، آمن، ونظيف",
        "subtitle": "طفلك يجلس بأمان، يستمتع بوجبته بكل راحة، وأنتِ مرتاحة البال.",
        "badge": "أمان وراحة",
        "image": "/products/chaise-haute.webp",
        "callouts": [
          "حزام أمان",
          "تنظيف في ثواني",
          "مشاركة عائلية"
        ],
        "accent": "emerald"
      }
    ],
    "offerTiers": [
      {
        "tier": 1,
        "name": "كرسي طعام الأطفال",
        "subtitle": "الخيار الأفضل لسلامة طفلك",
        "price": 249,
        "originalPrice": 399,
        "savingsText": "وفر 150 درهم",
        "badge": "ينصح به الآباء",
        "popular": true,
        "accent": "teal",
        "perUnitPrice": 249,
        "bullets": [
          "1× كرسي طعام",
          "توصيل مجاني لباب الدار",
          "المعاينة قبل الدفع"
        ]
      }
    ],
    "painPoints": [
      {
        "title": "تنظيف صعب وفوضى",
        "description": "الكراسي العادية تتسخ بسرعة، يصعب تنظيفها، والطفل يتحرك كثيراً أثناء الأكل."
      }
    ],
    "solutionProofs": [
      {
        "title": "سهل التنظيف وآمن",
        "description": "صينية قابلة للغسل ووسادة مقاومة للماء مع حزام أمان.",
        "metric": "100%",
        "iconText": "نظافة وأمان"
      }
    ],
    "comparison": [
      {
        "feature": "الأمان",
        "vitalis": "حزام خماسي وأرجل ثابتة جداً",
        "others": "غير مستقر وسهل الانقلاب"
      }
    ],
    "faqs": [
      {
        "question": "من أيا عمر نقدر نستعملو لولدي؟",
        "answer": "تقدري تستعمليه ملي يبدأ الطفل يجلس بوحدو (تقريباً من 6 أشهر) وكيبقى معاه تال 3 سنين."
      },
      {
        "question": "واش ساهل فالتنظيف؟",
        "answer": "ساهل بزاف! الصينية الفوقانية كتحيد وتغسل، والكرسي مغلف بمادة كتمسح غير بزيف فازك."
      },
      {
        "question": "واش نقدر نشوفو قبل ما نخلص؟",
        "answer": "أكيد، كنوصلوه ليك تال الدار، تأكدي من الجودة والصح ديالو عاد خلصي الموزع."
      }
    ],
    "sections": [
      {
        "title": "تصميم هندسي يراعي سلامة طفلك أولاً",
        "description": "كل زاوية مصممة لتكون ناعمة وآمنة، مع قاعدة هرمية تضمن ثباتاً تاماً على الأرض لمنع أي حوادث.",
        "highlight": "أمان تام",
        "imagePosition": "left",
        "placeholderSvgText": "Baby Chair",
        "image": "/products/chaise-haute.webp"
      }
    ]
  },
  {
    "id": "makeup-box",
    "sku": "VM-MKB-04",
    "slug": "makeup-storage-box",
    "name": "منظم المكياج ومستحضرات التجميل الفاخر - Makeup Organizer",
    "shortName": "منظم المكياج",
    "category": "تنظيم وعناية",
    "icon": "💄",
    "image": "/products/makeupbox.webp",
    "beforeAfterImage": "/products/makeupbox.webp",
    "rating": 4.8,
    "reviewsCount": 420,
    "badge": "تسريحة مرتبة وأنيقة دائماً",
    "headline": "رتبي أدوات تجميلك بأناقة واحصلي على تسريحة خالية من الفوضى",
    "subheadline": "منظم عصري بسعة كبيرة، يحمي مكياجك وعطورك من الغبار والماء، ويضفي لمسة ساحرة وراقية على غرفتك.",
    "stockLeft": 20,
    "recentOrdersCount": 89,
    "heroBullets": [
      "سعة تخزين كبيرة جداً تناسب العطور الطويلة، الكريمات، وفرش المكياج",
      "غطاء علوي شفاف ومرتفع يحمي مستحضراتك من الغبار، الرطوبة، والماء",
      "أدراج سفلية سلسة لتنظيم الإكسسوارات، المجوهرات، والأشياء الصغيرة",
      "تصميم أنيق وفاخر يضيف لمسة جمالية لغرفتك أو حمامك"
    ],
    "features": [
      "مصنوع من بلاستيك أكريليك عالي الجودة، متين ومقاوم للكسر",
      "مقبض علوي متين لسهولة الحمل والنقل من مكان لآخر",
      "مقاوم للماء تماماً مما يجعله مثالياً للاستخدام في الحمام",
      "أدراج تفتح وتغلق بسلاسة تامة بدون أي إزعاج"
    ],
    "scientificReason": "البيئة المنظمة توفر الوقت في الصباح وتقلل من التوتر. حماية المستحضرات من الغبار يطيل من عمرها الافتراضي ويحمي بشرتك من البكتيريا التي قد تتراكم على فرش المكياج المكشوفة.",
    "colors": [
      {
        "hex": "#FFFFFF",
        "nameAr": "شفاف كريستالي",
        "nameFr": "Transparent"
      }
    ],
    "visualStory": [
      {
        "type": "problem",
        "title": "تسريحة فوضوية وضياع الوقت كل صباح",
        "subtitle": "البحث عن أحمر الشفاه أو الفرشاة وسط الفوضى يضيع وقتك، والمستحضرات المكشوفة تتلف بسبب الغبار.",
        "badge": "فوضى وتلف",
        "image": "/products/makeup-problem.jpg",
        "callouts": [
          "ضياع الوقت",
          "تراكم الغبار",
          "مظهر مزعج"
        ],
        "accent": "rose"
      },
      {
        "type": "usage",
        "title": "أدراج سلسة وسعة تخزين كبيرة",
        "subtitle": "مساحات مقسمة بذكاء تناسب العطور، الفرش، والمجوهرات مع أدراج تفتح وتغلق بكل سهولة.",
        "badge": "تصميم ذكي",
        "image": "/products/makeup-usage.jpg",
        "callouts": [
          "أدراج سلسة",
          "سعة كبيرة",
          "مقاوم للماء"
        ],
        "accent": "teal"
      },
      {
        "type": "result",
        "title": "كل شيء مرتب، نظيف، وفي متناول يدك",
        "subtitle": "مستحضراتك مرتبة بأناقة، محمية تماماً، وجاهزة للاستخدام فوراً لتبدئي يومك براحة.",
        "badge": "ترتيب وأناقة",
        "image": "/products/makeupbox.webp",
        "callouts": [
          "حماية من الغبار",
          "توفير الوقت",
          "شكل راقي"
        ],
        "accent": "emerald"
      }
    ],
    "offerTiers": [
      {
        "tier": 1,
        "name": "منظم المكياج الفاخر",
        "subtitle": "لتسريحة مرتبة وجذابة",
        "price": 199,
        "originalPrice": 299,
        "savingsText": "وفر 100 درهم",
        "badge": "الأكثر طلباً",
        "popular": true,
        "accent": "teal",
        "perUnitPrice": 199,
        "bullets": [
          "1× منظم مكياج",
          "توصيل مجاني لباب الدار",
          "المعاينة قبل الدفع"
        ]
      }
    ],
    "painPoints": [
      {
        "title": "تراكم الغبار والفوضى",
        "description": "المستحضرات المكشوفة تتراكم عليها الأتربة وتضر بالبشرة، والتسريحة تبدو دائماً فوضوية."
      }
    ],
    "solutionProofs": [
      {
        "title": "حماية كاملة وتنظيم",
        "description": "غطاء شفاف يعزل الغبار والرطوبة مع مساحات مقسمة بذكاء.",
        "metric": "100%",
        "iconText": "حماية"
      }
    ],
    "comparison": [
      {
        "feature": "السعة والتصميم",
        "vitalis": "يستوعب الزجاجات الطويلة وشكله فاخر",
        "others": "صغير جداً وشكله رخيص"
      }
    ],
    "faqs": [
      {
        "question": "واش كيهز القراعي طوال ديال الريحة؟",
        "answer": "نعم، الطبقة الفوقانية مصممة باش تكون عالية وتهز العطور والكريمات الطويلة بكل سهولة."
      },
      {
        "question": "واش نقدر نحطو فالحمام؟",
        "answer": "أكيد، المنظم مقاوم للماء ومغاديش يتأثر بالرطوبة ديال الحمام، وغيحمي الماكياج ديالك."
      },
      {
        "question": "واش التوصيل فابور؟",
        "answer": "نعم، التوصيل مجاني لجميع المدن، وكتخلصي حتى كتشوفي المنظم ديالك وتأكدي منو."
      }
    ],
    "sections": [
      {
        "title": "تصميم عملي وذكي يجمع كل أدواتك",
        "description": "أدراج سفلية للإكسسوارات ومساحة علوية واسعة ومحمية للعطور والكريمات، كل شيء منظم في مكان واحد.",
        "highlight": "سعة كبيرة",
        "imagePosition": "right",
        "placeholderSvgText": "Makeup",
        "image": "/products/makeupbox.webp"
      }
    ]
  }
];
