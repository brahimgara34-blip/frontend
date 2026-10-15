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
