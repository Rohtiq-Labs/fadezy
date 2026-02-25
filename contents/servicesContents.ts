import { SupportedLanguages } from "./supportedLanguagesData";

export type ServiceItem = {
  title: string;
  description: string;
};

export type HowItWorksStep = {
  step: string;
  label: string;
};

export type WhyFadezyItem = {
  title: string;
  description: string;
};

export type ServicesContents = Record<
  SupportedLanguages,
  {
    hero: {
      headline: string;
      subheadline: string;
    };
    coreServices: {
      heading: string;
      description: string;
      services: ServiceItem[];
    };
    howItWorks: {
      heading: string;
      description: string;
      steps: HowItWorksStep[];
    };
    whyFadezy: {
      heading: string;
      description: string;
      items: WhyFadezyItem[];
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

export const servicesContents: ServicesContents = {
  en: {
    hero: {
      headline: "Our Services",
      subheadline:
        "Everything your salon needs to stand out online."
    },
    coreServices: {
      heading: "Core Services",
      description: "Built for high-end salons in UAE and the Middle East.",
      services: [
        {
          title: "Premium Website Design",
          description:
            "Custom-built modern website. Mobile-optimized. Luxury layout tailored for salons."
        },
        {
          title: "Online Booking Integration",
          description:
            "Appointment booking system setup. WhatsApp integration. Calendar sync."
        },
        {
          title: "Google & Local Presence Optimization",
          description:
            "Google Maps setup and optimization. SEO basics. Local search visibility."
        },
        {
          title: "Branding & Digital Identity",
          description:
            "Logo refinement when needed. Visual consistency. Social media alignment."
        },
        {
          title: "Ongoing Support & Maintenance",
          description:
            "Website updates. Security monitoring. Technical support."
        }
      ]
    },
    howItWorks: {
      heading: "How It Works",
      description: "From preview to launch in three simple steps.",
      steps: [
        { step: "01", label: "We create a free custom preview" },
        { step: "02", label: "You review & approve" },
        { step: "03", label: "We launch your premium website" }
      ]
    },
    whyFadezy: {
      heading: "Why FADEZY",
      description: "Built for salons that demand the best.",
      items: [
        {
          title: "Niche Focus",
          description: "Salons only. We know your industry inside out."
        },
        {
          title: "High-End Market",
          description: "Designed for premium brands and luxury positioning."
        },
        {
          title: "Conversion-Driven",
          description: "Modern, clean design that turns visitors into clients."
        }
      ]
    },
    cta: {
      headline: "Ready to Elevate Your Salon?",
      subtext: "Request your free website preview today.",
      buttonText: "Get Free Demo",
      link: "/contact"
    }
  },
  ar: {
    hero: {
      headline: "خدماتنا",
      subheadline:
        "كل ما يحتاجه صالونك للتميز أونلاين."
    },
    coreServices: {
      heading: "الخدمات الأساسية",
      description: "مصممة لصالونات راقية في الإمارات والشرق الأوسط.",
      services: [
        {
          title: "تصميم مواقع راقية",
          description:
            "موقع حديث مخصص. محسّن للموبايل. تخطيط فاخر مصمم للصالونات."
        },
        {
          title: "تكامل الحجز أونلاين",
          description:
            "إعداد نظام حجز المواعيد. تكامل واتساب. مزامنة التقويم."
        },
        {
          title: "تحسين الظهور في جوجل والمحلي",
          description:
            "إعداد وتحسين خرائط جوجل. أساسيات SEO. الظهور في البحث المحلي."
        },
        {
          title: "الهوية والعلامة التجارية",
          description:
            "تحسين الشعار عند الحاجة. اتساق بصري. توافق مع وسائل التواصل."
        },
        {
          title: "الدعم والصيانة المستمرة",
          description:
            "تحديثات الموقع. مراقبة الأمان. دعم فني."
        }
      ]
    },
    howItWorks: {
      heading: "كيف نعمل",
      description: "من المعاينة إلى الإطلاق في ثلاث خطوات بسيطة.",
      steps: [
        { step: "01", label: "ننشئ معاينة مخصصة مجانية" },
        { step: "02", label: "تراجع وتوافق" },
        { step: "03", label: "نطلق موقعك الراقي" }
      ]
    },
    whyFadezy: {
      heading: "لماذا FADEZY",
      description: "مصممة للصالونات التي تطلب الأفضل.",
      items: [
        {
          title: "تركيز متخصص",
          description: "الصالونات فقط. نعرف صناعتك من الداخل."
        },
        {
          title: "سوق راقي",
          description: "مصممة للعلامات الفاخرة والموقع الرفيع."
        },
        {
          title: "محرك للتحويل",
          description: "تصميم حديث ونظيف يحول الزوار إلى عملاء."
        }
      ]
    },
    cta: {
      headline: "هل أنت مستعد لرفع مستوى صالونك؟",
      subtext: "اطلب معاينة موقعك المجانية اليوم.",
      buttonText: "احصل على عرض مجاني",
      link: "/contact"
    }
  }
} as const;
