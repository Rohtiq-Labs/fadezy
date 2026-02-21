import { SupportedLanguages } from "./supportedLanguagesData";

export type WhySalonsItem = {
  title: string;
  description: string;
};

export type ApproachItem = {
  title: string;
  description: string;
};

export type AboutContents = Record<
  SupportedLanguages,
  {
    hero: {
      headline: string;
      subheadline: string;
      imgSrc: string;
    };
    mission: {
      heading: string;
      description: string;
    };
    whySalons: {
      heading: string;
      description: string;
      items: WhySalonsItem[];
    };
    rohtiqLabs: {
      heading: string;
      description: string;
      subtext: string;
    };
    approach: {
      heading: string;
      description: string;
      items: ApproachItem[];
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

export const aboutContents: AboutContents = {
  en: {
    hero: {
      headline: "About Fadezy",
      subheadline:
        "Digital presence crafted exclusively for modern salons.",
      imgSrc: "/assets/pexels-soheilkmp-27413969.jpg"
    },
    mission: {
      heading: "Our Mission",
      description:
        "Fadezy was created to help salons elevate their online presence. We focus on quality, simplicity, and premium positioning. We specialize in the salon industry — not as a generic web agency, but as niche-focused experts who understand what high-end salons need."
    },
    whySalons: {
      heading: "Why We Focus Only on Salons",
      description: "Specialization drives excellence.",
      items: [
        {
          title: "Deep Understanding",
          description:
            "We understand salon branding, client expectations, and the visual language of luxury beauty."
        },
        {
          title: "Designed for High-End Markets",
          description:
            "Built specifically for premium markets like UAE and the Middle East where presentation matters."
        },
        {
          title: "Niche Experts, Not Generic",
          description:
            "We are not a generic web agency. We are salon-focused experts who deliver tailored solutions."
        }
      ]
    },
    rohtiqLabs: {
      heading: "Under Rohtiq Labs",
      description:
        "Fadezy operates under Rohtiq Labs, a digital innovation company. This partnership reinforces our technical expertise and credibility.",
      subtext: "Backed by the same team that builds cutting-edge digital products."
    },
    approach: {
      heading: "Our Approach",
      description: "How we deliver premium results.",
      items: [
        {
          title: "Modern Design Standards",
          description: "Clean, contemporary aesthetics that reflect your brand."
        },
        {
          title: "Mobile-First",
          description: "Built for the way clients browse — on phones, first."
        },
        {
          title: "Conversion-Driven Layouts",
          description: "Every element is designed to turn visitors into bookings."
        },
        {
          title: "Fast, Seamless Execution",
          description: "From preview to launch, we move quickly without cutting corners."
        }
      ]
    },
    cta: {
      headline: "Ready to Elevate Your Salon?",
      subtext: "Get your free website preview — no obligation.",
      buttonText: "Request Your Free Preview",
      link: "/contact"
    }
  },
  ar: {
    hero: {
      headline: "عن Fadezy",
      subheadline:
        "حضور رقمي مصمم حصرياً لصالونات العصر الحديث.",
      imgSrc: "/assets/pexels-soheilkmp-27413969.jpg"
    },
    mission: {
      heading: "مهمتنا",
      description:
        "أُنشئت Fadezy لمساعدة الصالونات على رفع حضورها أونلاين. نركز على الجودة والبساطة والموقع الراقي. نختص في قطاع الصالونات — ليس كوكالة ويب عامة، بل كخبراء متخصصين يفهمون ما تحتاجه الصالونات الراقية."
    },
    whySalons: {
      heading: "لماذا نركز على الصالونات فقط",
      description: "التخصص يقود التميز.",
      items: [
        {
          title: "فهم عميق",
          description:
            "نفهم هوية الصالونات وتوقعات العملاء واللغة البصرية للجمال الراقي."
        },
        {
          title: "مصممة للأسواق الراقية",
          description:
            "مبنية خصيصاً لأسواق فاخرة مثل الإمارات والشرق الأوسط حيث المظهر مهم."
        },
        {
          title: "خبراء متخصصون",
          description:
            "لسنا وكالة ويب عامة. نحن خبراء متخصصون في الصالونات نقدم حلولاً مخصصة."
        }
      ]
    },
    rohtiqLabs: {
      heading: "تحت مظلة Rohtiq Labs",
      description:
        "تعمل Fadezy تحت مظلة Rohtiq Labs، شركة ابتكار رقمي. هذه الشراكة تعزز خبرتنا التقنية ومصداقيتنا.",
      subtext: "مدعومة بنفس الفريق الذي يبني منتجات رقمية متطورة."
    },
    approach: {
      heading: "منهجنا",
      description: "كيف نقدم نتائج راقية.",
      items: [
        {
          title: "معايير تصميم حديثة",
          description: "جماليات نظيفة ومعاصرة تعكس علامتك."
        },
        {
          title: "Mobile-First",
          description: "مبنية لكيفية تصفح العملاء — على الموبايل أولاً."
        },
        {
          title: "تصميم محرك للتحويل",
          description: "كل عنصر مصمم لتحويل الزوار إلى حجوزات."
        },
        {
          title: "تنفيذ سريع وسلس",
          description: "من المعاينة إلى الإطلاق، نتحرك بسرعة دون تقصير."
        }
      ]
    },
    cta: {
      headline: "هل أنت مستعد لرفع مستوى صالونك؟",
      subtext: "احصل على معاينة موقعك المجانية — بدون التزام.",
      buttonText: "اطلب معاينتك المجانية",
      link: "/contact"
    }
  }
} as const;
