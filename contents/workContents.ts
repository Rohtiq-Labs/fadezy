import { SupportedLanguages } from "./supportedLanguagesData";

export type WorkProject = {
  brandName: string;
  tagline: string;
  category: string;
  mockupSrc: string;
  demoLink: string;
  imageAlt: string;
};

export type WorkGalleryItem = {
  src: string;
  alt: string;
  layout: "wide" | "tall" | "standard";
};

export type WorkTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type WorkContents = Record<
  SupportedLanguages,
  {
    hero: {
      headline: string;
      subheadline: string;
      visualSrc: string;
      visualAlt: string;
    };
    featured: {
      eyebrow: string;
      heading: string;
      description: string;
      viewProjectLabel: string;
      projects: WorkProject[];
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
    gallery: {
      heading: string;
      subheading: string;
      items: WorkGalleryItem[];
    };
    results: {
      heading: string;
      subheading: string;
      items: { stat: string; label: string }[];
    };
    testimonials: {
      heading: string;
      items: WorkTestimonial[];
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

const galleryItemsEn: WorkGalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f013703b6?auto=format&fit=crop&w=1400&q=85",
    alt: "Luxury barbershop interior branding and cinematic atmosphere",
    layout: "wide",
  },
  {
    src: "/assets/projectThumbnail/fade.png",
    alt: "Premium barber website mockup preview on desktop",
    layout: "standard",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
    alt: "Barber grooming tools and luxury brand identity styling",
    layout: "tall",
  },
  {
    src: "/assets/projectThumbnail/hairmaster.jpg",
    alt: "Editorial barber brand website design showcase",
    layout: "standard",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=85",
    alt: "Modern barbershop web design and digital presence",
    layout: "wide",
  },
  {
    src: "/assets/projectThumbnail/trendz.jpeg",
    alt: "Mobile-first barbershop website UI preview",
    layout: "standard",
  },
];

export const workContents: WorkContents = {
  en: {
    hero: {
      headline: "Selected Work",
      subheadline:
        "Luxury digital identity for modern barber brands — cinematic, editorial, built for prestige.",
      visualSrc: "/assets/background.mp4",
      visualAlt: "Cinematic luxury barbershop brand film for Fadezy work showcase",
    },
    featured: {
      eyebrow: "Featured Projects",
      heading: "Built for Modern Barber Brands",
      description:
        "Curated campaigns elevating barbershops into premium modern brands through cinematic web design and refined identity.",
      viewProjectLabel: "View Project",
      projects: [
        {
          brandName: "The Fade Room",
          tagline: "Cinematic presence with refined booking.",
          category: "Premium Website",
          mockupSrc: "/assets/projectThumbnail/fade.png",
          demoLink: "https://thfaderoom.netlify.app/",
          imageAlt: "The Fade Room luxury barbershop website design by Fadezy",
        },
        {
          brandName: "Hair Master",
          tagline: "Editorial storytelling for a grooming institution.",
          category: "Brand Identity",
          mockupSrc: "/assets/projectThumbnail/hairmaster.jpg",
          demoLink: "https://hairmaste.netlify.app/",
          imageAlt: "Hair Master premium barber branding and website design",
        },
        {
          brandName: "Trendz Hair Salon",
          tagline: "Confident digital identity for modern clients.",
          category: "Web Experience",
          mockupSrc: "/assets/projectThumbnail/trendz.jpeg",
          demoLink: "https://trendzhairsalon.netlify.app/",
          imageAlt: "Trendz Hair Salon modern barbershop website design",
        },
        {
          brandName: "Nazih Gents Salon",
          tagline: "Gallery-led luxury for precision grooming.",
          category: "Digital Presence",
          mockupSrc: "/assets/projectThumbnail/nazih saloon.png",
          demoLink: "https://nazihsalon.netlify.app/",
          imageAlt: "Nazih Gents Salon luxury barber shop web design",
        },
      ],
    },
    transformation: {
      heading: "The Transformation",
      subheading:
        "From generic local barbershop to a luxury modern brand — positioned for premium appeal.",
      before: {
        label: "Before",
        title: "Generic Local Barber Shop",
        caption: "Outdated presence. Limited brand perception.",
        imageSrc: "/assets/projectThumbnail/faderoom.png",
        imageAlt: "Before: generic local barbershop website branding",
      },
      after: {
        label: "After",
        title: "Luxury Modern Barber Brand",
        caption: "Cinematic identity. Elevated digital experience.",
        imageSrc: "/assets/projectThumbnail/arbarber.png",
        imageAlt: "After: luxury modern barber brand website and identity",
      },
    },
    gallery: {
      heading: "Visual Gallery",
      subheading: "Campaign assets, interfaces, and brand worlds — curated with intention.",
      items: galleryItemsEn,
    },
    results: {
      heading: "Impact",
      subheading: "Measured outcomes across bookings, perception, and presence.",
      items: [
        { stat: "+38%", label: "Online bookings" },
        { stat: "2.4×", label: "Stronger brand perception" },
        { stat: "Premium", label: "Social presence elevation" },
        { stat: "Higher", label: "Customer appeal & retention" },
      ],
    },
    testimonials: {
      heading: "Client Words",
      items: [
        {
          quote:
            "Fadezy transformed our shop into a brand people remember. The presence feels cinematic and premium.",
          author: "Marcus Reid",
          role: "The Fade Room",
        },
        {
          quote:
            "Minimal, confident, editorial — exactly the luxury direction we envisioned.",
          author: "Daniel Cole",
          role: "Hair Master",
        },
      ],
    },
    cta: {
      headline: "Ready to Elevate Your Barbershop?",
      subtext: "Build a brand people remember. Request your complimentary preview.",
      buttonText: "Begin Your Brand",
      link: "/contact",
    },
  },
  ar: {
    hero: {
      headline: "أعمال مختارة",
      subheadline:
        "هوية رقمية فاخرة لعلامات الحلاقة الحديثة — سينمائية، تحريرية، مبنية للهيبة.",
      visualSrc: "/assets/background.mp4",
      visualAlt: "فيلم سينمائي لعلامة صالون حلاقة فاخرة في صفحة أعمال فاديزي",
    },
    featured: {
      eyebrow: "مشاريع مميزة",
      heading: "مصممة لعلامات الحلاقة الحديثة",
      description:
        "حملات منتقاة ترفع صالونات الحلاقة إلى علامات عصرية فاخرة عبر تصميم ويب سينمائي وهوية مكرّسة.",
      viewProjectLabel: "عرض المشروع",
      projects: [
        {
          brandName: "The Fade Room",
          tagline: "حضور سينمائي مع حجز مكرّس.",
          category: "موقع فاخر",
          mockupSrc: "/assets/projectThumbnail/fade.png",
          demoLink: "https://thfaderoom.netlify.app/",
          imageAlt: "تصميم موقع The Fade Room لصالون حلاقة فاخر",
        },
        {
          brandName: "Hair Master",
          tagline: "سرد تحريري لمؤسسة عناية راقية.",
          category: "هوية العلامة",
          mockupSrc: "/assets/projectThumbnail/hairmaster.jpg",
          demoLink: "https://hairmaste.netlify.app/",
          imageAlt: "هوية وموقع Hair Master لحلاقة فاخرة",
        },
        {
          brandName: "Trendz Hair Salon",
          tagline: "هوية رقمية واثقة للعميل العصري.",
          category: "تجربة ويب",
          mockupSrc: "/assets/projectThumbnail/trendz.jpeg",
          demoLink: "https://trendzhairsalon.netlify.app/",
          imageAlt: "تصميم موقع Trendz Hair Salon عصري",
        },
        {
          brandName: "Nazih Gents Salon",
          tagline: "فخامة بقيادة المعرض للعناية الدقيقة.",
          category: "حضور رقمي",
          mockupSrc: "/assets/projectThumbnail/nazih saloon.png",
          demoLink: "https://nazihsalon.netlify.app/",
          imageAlt: "تصميم موقع Nazih Gents Salon فاخر",
        },
      ],
    },
    transformation: {
      heading: "التحول",
      subheading:
        "من صالون حلاقة محلي تقليدي إلى علامة عصرية فاخرة — تموضع للجاذبية الراقية.",
      before: {
        label: "قبل",
        title: "صالون حلاقة محلي تقليدي",
        caption: "حضور قديم. تصور محدود للعلامة.",
        imageSrc: "/assets/projectThumbnail/faderoom.png",
        imageAlt: "قبل: هوية موقع صالون حلاقة تقليدي",
      },
      after: {
        label: "بعد",
        title: "علامة حلاقة عصرية فاخرة",
        caption: "هوية سينمائية. تجربة رقمية مرتقية.",
        imageSrc: "/assets/projectThumbnail/arbarber.png",
        imageAlt: "بعد: موقع وهوية علامة حلاقة فاخرة",
      },
    },
    gallery: {
      heading: "معرض بصري",
      subheading: "أصول الحملات والواجهات وعوالم العلامة — منتقاة بعناية.",
      items: galleryItemsEn,
    },
    results: {
      heading: "الأثر",
      subheading: "نتائج قابلة للقياس في الحجوزات والتصور والحضور.",
      items: [
        { stat: "+38%", label: "حجوزات أونلاين" },
        { stat: "2.4×", label: "تصور أقوى للعلامة" },
        { stat: "فاخر", label: "رفع الحضور الاجتماعي" },
        { stat: "أعلى", label: "جاذبية العملاء والولاء" },
      ],
    },
    testimonials: {
      heading: "كلمات العملاء",
      items: [
        {
          quote:
            "حوّلت Fadezy صالوننا إلى علامة يتذكرها الناس. الحضور يبدو سينمائياً وفاخراً.",
          author: "Marcus Reid",
          role: "The Fade Room",
        },
        {
          quote: "بسيط، واثق، تحريري — بالضبط التوجه الفاخر الذي تصورناه.",
          author: "Daniel Cole",
          role: "Hair Master",
        },
      ],
    },
    cta: {
      headline: "هل أنت مستعد لرفع صالونك؟",
      subtext: "ابنِ علامة يتذكرها الناس. اطلب معاينتك المجانية.",
      buttonText: "ابدأ علامتك",
      link: "/contact",
    },
  },
} as const;
