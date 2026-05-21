import { SupportedLanguages } from "./supportedLanguagesData";

export type ServiceOffering = {
  title: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
};

export type ProcessStep = {
  label: string;
  caption: string;
};

export type ServicesContents = Record<
  SupportedLanguages,
  {
    hero: {
      headline: string;
      subheadline: string;
      ctaText: string;
      visualSrc: string;
      visualAlt: string;
    };
    intro: {
      eyebrow: string;
      heading: string;
      paragraphs: string[];
    };
    showcase: {
      eyebrow: string;
      heading: string;
      description: string;
      offerings: ServiceOffering[];
    };
    featured: {
      eyebrow: string;
      heading: string;
      tagline: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
      mobileSrc: string;
      mobileAlt: string;
    };
    transformation: {
      heading: string;
      subheading: string;
      before: {
        label: string;
        title: string;
        caption: string;
        imageSrc: string;
        imageAlt: string;
      };
      after: {
        label: string;
        title: string;
        caption: string;
        imageSrc: string;
        imageAlt: string;
      };
    };
    process: {
      heading: string;
      subheading: string;
      steps: ProcessStep[];
    };
    impact: {
      heading: string;
      subheading: string;
      items: { stat: string; label: string }[];
    };
    testimonials: {
      heading: string;
      items: { quote: string; author: string; role: string }[];
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

const offeringImages = {
  website:
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b9f?auto=format&fit=crop&w=1400&q=85",
  cinematic:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f6?auto=format&fit=crop&w=1400&q=85",
  identity:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
  social:
    "https://images.unsplash.com/photo-1621605816191-f27e3d7f2280?auto=format&fit=crop&w=1400&q=85",
  booking:
    "https://images.unsplash.com/photo-1599351431202-1e0f013703b6?auto=format&fit=crop&w=1400&q=85",
  branding:
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=85",
};

export const servicesContents: ServicesContents = {
  en: {
    hero: {
      headline: "Services Built for Modern Barber Brands",
      subheadline:
        "Luxury digital identity systems — cinematic, editorial, crafted for elite barbershops.",
      ctaText: "Begin Your Brand",
      visualSrc: "/assets/background.mp4",
      visualAlt: "Cinematic luxury barbershop atmosphere for Fadezy services",
    },
    intro: {
      eyebrow: "Philosophy",
      heading: "Branding Through Emotion",
      paragraphs: [
        "Fadezy builds premium digital identity for barbershops that demand more than a website — a cinematic brand world clients feel before they walk in.",
        "We shape perception through restraint, imagery, and modern digital craft — so every touchpoint feels intentional, masculine, and refined.",
      ],
    },
    showcase: {
      eyebrow: "Offerings",
      heading: "Luxury Digital Experiences",
      description:
        "Curated services for elite grooming studios — each delivered with editorial precision.",
      offerings: [
        {
          title: "Premium Website Design",
          tagline: "Editorial web experiences built to convert with prestige.",
          imageSrc: offeringImages.website,
          imageAlt: "Premium barber website design and luxury barbershop web layout",
        },
        {
          title: "Cinematic Content",
          tagline: "Film-grade visuals that elevate your barber brand story.",
          imageSrc: offeringImages.cinematic,
          imageAlt: "Cinematic barber content creation for premium barber branding",
        },
        {
          title: "Barber Brand Identity",
          tagline: "Cohesive identity systems rooted in modern grooming culture.",
          imageSrc: offeringImages.identity,
          imageAlt: "Barber brand identity and luxury visual branding system",
        },
        {
          title: "Social Media Direction",
          tagline: "A refined social presence aligned with luxury positioning.",
          imageSrc: offeringImages.social,
          imageAlt: "Social media direction for modern barbershop design and marketing",
        },
        {
          title: "Booking Experience",
          tagline: "Seamless appointment flows designed for premium clientele.",
          imageSrc: offeringImages.booking,
          imageAlt: "Barbershop booking experience optimization on mobile and web",
        },
        {
          title: "Luxury Visual Branding",
          tagline: "Campaign assets, signage concepts, and cinematic brand worlds.",
          imageSrc: offeringImages.branding,
          imageAlt: "Luxury visual branding for elite barbershop marketing",
        },
      ],
    },
    featured: {
      eyebrow: "Featured Experience",
      heading: "Premium Website Experience",
      tagline: "A digital flagship worthy of your craft.",
      description:
        "Fullscreen editorial layouts, refined booking flows, and mobile-first luxury — built for modern barber brands.",
      imageSrc: "/assets/projectThumbnail/fade.png",
      imageAlt: "Premium barber website mockup — desktop luxury barber web design",
      mobileSrc: "/assets/projectThumbnail/trendz.jpeg",
      mobileAlt: "Mobile barbershop website experience and modern barbershop design",
    },
    transformation: {
      heading: "Brand Transformation",
      subheading:
        "From local shop presence to a luxury grooming brand — elevated across every touchpoint.",
      before: {
        label: "Before",
        title: "Generic Local Presence",
        caption: "Outdated branding. Limited digital perception.",
        imageSrc: "/assets/projectThumbnail/faderoom.png",
        imageAlt: "Before: generic barbershop website and outdated barber branding",
      },
      after: {
        label: "After",
        title: "Luxury Modern Brand",
        caption: "Cinematic identity. Premium digital experience.",
        imageSrc: "/assets/projectThumbnail/arbarber.png",
        imageAlt: "After: luxury barber website and premium barber branding transformation",
      },
    },
    process: {
      heading: "Process",
      subheading: "A calm, intentional path from vision to elevation.",
      steps: [
        { label: "Discover", caption: "Understand your brand, clientele, and ambition." },
        { label: "Create", caption: "Craft cinematic identity and digital experiences." },
        { label: "Refine", caption: "Polish every detail until the presence feels inevitable." },
        { label: "Elevate", caption: "Launch a brand clients remember and return to." },
      ],
    },
    impact: {
      heading: "Outcomes",
      subheading: "Premium results shaped through perception, presence, and craft.",
      items: [
        { stat: "Premium", label: "Clientele perception" },
        { stat: "Elevated", label: "Social identity" },
        { stat: "+38%", label: "Booking growth" },
        { stat: "Stronger", label: "Digital presence" },
      ],
    },
    testimonials: {
      heading: "Client Words",
      items: [
        {
          quote:
            "Fadezy gave us a digital presence that finally matches the quality of our chairs. It feels cinematic.",
          author: "Marcus Reid",
          role: "The Fade Room",
        },
        {
          quote:
            "Refined, minimal, confident — the exact luxury direction our brand needed.",
          author: "Daniel Cole",
          role: "Hair Master",
        },
      ],
    },
    cta: {
      headline: "Elevate Your Barbershop",
      subtext: "Build a brand worth remembering. Request your complimentary preview.",
      buttonText: "Begin Your Brand",
      link: "/contact",
    },
  },
  ar: {
    hero: {
      headline: "خدمات مصممة لعلامات الحلاقة الحديثة",
      subheadline:
        "أنظمة هوية رقمية فاخرة — سينمائية، تحريرية، لصالونات الحلاقة الراقية.",
      ctaText: "ابدأ علامتك",
      visualSrc: "/assets/background.mp4",
      visualAlt: "أجواء سينمائية فاخرة لخدمات فاديزي",
    },
    intro: {
      eyebrow: "الفلسفة",
      heading: "العلامة عبر الإحساس",
      paragraphs: [
        "تبني Fadezy هوية رقمية فاخرة لصالونات الحلاقة التي تتطلب أكثر من موقع — عالماً سينمائياً يشعر به العميل قبل دخوله.",
        "نشكّل التصور عبر البساطة والصورة والحرفة الرقمية الحديثة — ليشعر كل نقطة اتصال بالقصد والرقي.",
      ],
    },
    showcase: {
      eyebrow: "العروض",
      heading: "تجارب رقمية فاخرة",
      description: "خدمات منتقاة لاستوديوهات العناية الراقية — كل منها بدقة تحريرية.",
      offerings: [
        {
          title: "تصميم مواقع فاخرة",
          tagline: "تجارب ويب تحريرية مبنية للهيبة والتحويل.",
          imageSrc: offeringImages.website,
          imageAlt: "تصميم موقع حلاقة فاخر وتخطيط ويب راقي",
        },
        {
          title: "محتوى سينمائي",
          tagline: "مرئيات بجودة سينمائية ترفع قصة علامتك.",
          imageSrc: offeringImages.cinematic,
          imageAlt: "إنشاء محتوى سينمائي لعلامة حلاقة فاخرة",
        },
        {
          title: "هوية علامة الحلاقة",
          tagline: "أنظمة هوية متماسكة في ثقافة العناية الحديثة.",
          imageSrc: offeringImages.identity,
          imageAlt: "هوية علامة حلاقة ونظام بصري فاخر",
        },
        {
          title: "توجيه وسائل التواصل",
          tagline: "حضور اجتماعي مكرّس يتماشى مع التموضع الفاخر.",
          imageSrc: offeringImages.social,
          imageAlt: "توجيه وسائل التواصل لتصميم صالون حلاقة عصري",
        },
        {
          title: "تجربة الحجز",
          tagline: "مسارات مواعيد سلسة مصممة لعملاء راقيين.",
          imageSrc: offeringImages.booking,
          imageAlt: "تحسين تجربة حجز صالون الحلاقة على الويب والجوال",
        },
        {
          title: "علامة بصرية فاخرة",
          tagline: "أصول حملات ومفاهيم لافتات وعوالم علامة سينمائية.",
          imageSrc: offeringImages.branding,
          imageAlt: "علامة بصرية فاخرة لتسويق صالون حلاقة راقي",
        },
      ],
    },
    featured: {
      eyebrow: "تجربة مميزة",
      heading: "تجربة موقع فاخرة",
      tagline: "رائدة رقمية تليق بحرفتك.",
      description:
        "تخطيطات تحريرية بملء الشاشة، مسارات حجز مكرّسة، وفخامة للجوال أولاً — لعلامات الحلاقة الحديثة.",
      imageSrc: "/assets/projectThumbnail/fade.png",
      imageAlt: "نموذج موقع حلاقة فاخر — تصميم ويب سطح المكتب",
      mobileSrc: "/assets/projectThumbnail/trendz.jpeg",
      mobileAlt: "تجربة موقع حلاقة على الجوال",
    },
    transformation: {
      heading: "تحول العلامة",
      subheading: "من حضور محلي تقليدي إلى علامة عناية فاخرة — في كل نقطة اتصال.",
      before: {
        label: "قبل",
        title: "حضور محلي تقليدي",
        caption: "علامة قديمة. تصور رقمي محدود.",
        imageSrc: "/assets/projectThumbnail/faderoom.png",
        imageAlt: "قبل: موقع حلاقة تقليدي وعلامة قديمة",
      },
      after: {
        label: "بعد",
        title: "علامة عصرية فاخرة",
        caption: "هوية سينمائية. تجربة رقمية راقية.",
        imageSrc: "/assets/projectThumbnail/arbarber.png",
        imageAlt: "بعد: موقع حلاقة فاخر وتحول علامة راقية",
      },
    },
    process: {
      heading: "العملية",
      subheading: "مسار هادئ ومدروس من الرؤية إلى الارتقاء.",
      steps: [
        { label: "اكتشاف", caption: "فهم علامتك وعملائك وطموحك." },
        { label: "إبداع", caption: "صياغة هوية سينمائية وتجارب رقمية." },
        { label: "تنقيح", caption: "صقل كل التفاصيل حتى يبدو الحضور حتمياً." },
        { label: "ارتقاء", caption: "إطلاق علامة يتذكرها العملاء ويعودون إليها." },
      ],
    },
    impact: {
      heading: "النتائج",
      subheading: "نتائج راقية عبر التصور والحضور والحرفة.",
      items: [
        { stat: "فاخر", label: "تصور العملاء" },
        { stat: "مرتقى", label: "الهوية الاجتماعية" },
        { stat: "+38%", label: "نمو الحجوزات" },
        { stat: "أقوى", label: "الحضور الرقمي" },
      ],
    },
    testimonials: {
      heading: "كلمات العملاء",
      items: [
        {
          quote:
            "منحتنا Fadezy حضوراً رقمياً يليق بجودة مقاعدنا. يبدو سينمائياً.",
          author: "Marcus Reid",
          role: "The Fade Room",
        },
        {
          quote: "مكرّس، بسيط، واثق — التوجه الفاخر الذي احتجناه.",
          author: "Daniel Cole",
          role: "Hair Master",
        },
      ],
    },
    cta: {
      headline: "ارتقِ بصالونك",
      subtext: "ابنِ علامة يتذكرها الناس. اطلب معاينتك المجانية.",
      buttonText: "ابدأ علامتك",
      link: "/contact",
    },
  },
} as const;
