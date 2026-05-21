import { SupportedLanguages } from "./supportedLanguagesData";

export type AboutApproachItem = {
  title: string;
  description: string;
};

export type AboutShowcaseItem = {
  src: string;
  alt: string;
  layout: "wide" | "tall" | "standard";
};

export type AboutContents = Record<
  SupportedLanguages,
  {
    hero: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      ctaPrimary: { text: string; link: string };
      ctaSecondary: { text: string; link: string };
      visualSrc: string;
      visualAlt: string;
    };
    philosophy: {
      statement: string;
      support: string;
    };
    whoWeAre: {
      eyebrow: string;
      paragraphs: string[];
    };
    approach: {
      eyebrow: string;
      items: AboutApproachItem[];
    };
    showcase: {
      items: AboutShowcaseItem[];
    };
    whyFadezy: {
      heading: string;
      body: string;
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

const showcaseImages = {
  wide:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f6?auto=format&fit=crop&w=1600&q=85",
  tall:
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b9f?auto=format&fit=crop&w=1200&q=85",
  standard:
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=85",
  standard2:
    "https://images.unsplash.com/photo-1599351431202-1e0f013703b6?auto=format&fit=crop&w=1200&q=85",
};

export const aboutContents: AboutContents = {
  en: {
    hero: {
      eyebrow: "Fadezy Studio",
      headline: "Built for Modern Barber Brands",
      subheadline:
        "Fadezy creates cinematic digital experiences, modern branding, and premium online presence for elite grooming businesses.",
      ctaPrimary: { text: "View Our Work", link: "/work" },
      ctaSecondary: { text: "Start Your Transformation", link: "/contact" },
      visualSrc: "/assets/background.mp4",
      visualAlt:
        "Cinematic luxury barbershop interior — Fadezy about page hero",
    },
    philosophy: {
      statement:
        "Your shop already feels premium in real life. Your digital presence should feel the same.",
      support:
        "We build perception through restraint — cinematic imagery, editorial typography, and calm digital craft.",
    },
    whoWeAre: {
      eyebrow: "Who We Are",
      paragraphs: [
        "Fadezy was created to help modern barbershops elevate their image online through cinematic branding, luxury-focused design, and social-first digital presence.",
        "We are not a generic agency. We are a luxury creative studio built exclusively for elite grooming brands.",
      ],
    },
    approach: {
      eyebrow: "Our Approach",
      items: [
        {
          title: "Cinematic Content",
          description:
            "Editorial visuals and motion that position your shop like a premium fashion campaign.",
        },
        {
          title: "Luxury Positioning",
          description:
            "Every detail — type, tone, spacing — engineered to feel masculine, calm, and high-end.",
        },
        {
          title: "Social Identity",
          description:
            "A cohesive visual language across Instagram and digital touchpoints clients trust instantly.",
        },
        {
          title: "Premium Digital Experience",
          description:
            "Websites and booking flows that feel as refined as walking into your best chair.",
        },
      ],
    },
    showcase: {
      items: [
        {
          src: showcaseImages.wide,
          alt: "Cinematic barber portrait — premium grooming atmosphere for modern barbershop branding",
          layout: "wide",
        },
        {
          src: showcaseImages.tall,
          alt: "Luxury barbershop interior with warm lighting — editorial barber brand photography",
          layout: "tall",
        },
        {
          src: showcaseImages.standard,
          alt: "Modern barber at work — masculine premium barbershop visual identity",
          layout: "standard",
        },
        {
          src: showcaseImages.standard2,
          alt: "Elite grooming studio detail — luxury barber shop marketing imagery",
          layout: "standard",
        },
      ],
    },
    whyFadezy: {
      heading:
        "We focus on perception, positioning, and premium presentation",
      body: "Because modern clients choose brands visually before they ever book. Fadezy exists so your digital world matches the standard you set in the chair.",
    },
    cta: {
      headline: "Your Brand Deserves a Premium Presence",
      subtext:
        "Fadezy helps modern barbershops look as premium online as they do in person.",
      buttonText: "Let's Build Your Brand",
      link: "/contact",
    },
  },
  ar: {
    hero: {
      eyebrow: "استوديو Fadezy",
      headline: "صُمم لعلامات الحلاقة العصرية",
      subheadline:
        "يصنع Fadezy تجارب رقمية سينمائية، وهوية عصرية، وحضوراً راقياً أونلاين لأعمال التجميل الرجالي الفاخرة.",
      ctaPrimary: { text: "أعمالنا", link: "/work" },
      ctaSecondary: { text: "ابدأ تحولك", link: "/contact" },
      visualSrc: "/assets/background.mp4",
      visualAlt: "أجواء صالون حلاقة فاخر سينمائي — صفحة من نحن Fadezy",
    },
    philosophy: {
      statement:
        "محلك يبدو راقياً في الواقع. حضورك الرقمي يجب أن يعكس ذلك.",
      support:
        "نبني الإدراك بالبساطة — صور سينمائية، طباعة تحريرية، وحرفة رقمية هادئة.",
    },
    whoWeAre: {
      eyebrow: "من نحن",
      paragraphs: [
        "أُنشئ Fadezy لمساعدة صالونات الحلاقة العصرية على رفع صورتها أونلاين عبر هوية سينمائية وتصميم فاخر وحضور رقمي يركز على السوشيال.",
        "لسنا وكالة عامة. نحن استوديو إبداعي فاخر مخصص حصرياً لعلامات التجميل الرجالي الراقية.",
      ],
    },
    approach: {
      eyebrow: "منهجنا",
      items: [
        {
          title: "محتوى سينمائي",
          description:
            "مرئيات تحريرية وحركة تضع محلك كحملة أزياء راقية.",
        },
        {
          title: "تموضع فاخر",
          description:
            "كل تفصيلة — خط، نبرة، مسافات — مصممة لتبدو رجالية وهادئة وراقية.",
        },
        {
          title: "هوية سوشيال",
          description:
            "لغة بصرية متماسكة عبر إنستغرام ونقاط التواصل التي يثق بها العملاء فوراً.",
        },
        {
          title: "تجربة رقمية راقية",
          description:
            "مواقع وتدفقات حجز بنفس مستوى الرقي عند دخول أفضل كرسي لديك.",
        },
      ],
    },
    showcase: {
      items: [
        {
          src: showcaseImages.wide,
          alt: "صورة حلاق سينمائية — أجواء تجميل راقية لهوية صالون حلاقة عصرية",
          layout: "wide",
        },
        {
          src: showcaseImages.tall,
          alt: "داخل صالون حلاقة فاخر بإضاءة دافئة — تصوير تحريري لعلامة حلاقة",
          layout: "tall",
        },
        {
          src: showcaseImages.standard,
          alt: "حلاق عصري أثناء العمل — هوية بصرية راقية لصالون حلاقة",
          layout: "standard",
        },
        {
          src: showcaseImages.standard2,
          alt: "تفاصيل استوديو تجميل راقٍ — صور تسويق لصالون حلاقة فاخر",
          layout: "standard",
        },
      ],
    },
    whyFadezy: {
      heading: "نركز على الإدراك والتموضع والعرض الراقي",
      body: "لأن العملاء العصريين يختارون العلامات بصرياً قبل الحجز. Fadezy موجود ليصبح عالمك الرقمي بمستوى ما تقدمه على الكرسي.",
    },
    cta: {
      headline: "علامتك تستحق حضوراً راقياً",
      subtext:
        "يساعد Fadezy صالونات الحلاقة العصرية على الظهور أونلاين بفخامة تليق بها في الواقع.",
      buttonText: "لنبني علامتك",
      link: "/contact",
    },
  },
} as const;
