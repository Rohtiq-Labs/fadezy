import { SupportedLanguages } from "./supportedLanguagesData";

export type ProcessStep = {
  step: string;
  title: string;
  bullets: string[];
};

export type WhyItWorksItem = {
  title: string;
  description: string;
};

export type HowItWorksContents = Record<
  SupportedLanguages,
  {
    hero: {
      headline: string;
      subheadline: string;
    };
    process: {
      heading: string;
      description: string;
      steps: ProcessStep[];
    };
    timeline: {
      heading: string;
      description: string;
    };
    whyItWorks: {
      heading: string;
      description: string;
      items: WhyItWorksItem[];
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

export const howItWorksContents: HowItWorksContents = {
  en: {
    hero: {
      headline: "How It Works",
      subheadline: "A simple, seamless process designed for modern salons."
    },
    process: {
      heading: "The Process",
      description: "From preview to launch, we keep it clear and easy.",
      steps: [
        {
          step: "01",
          title: "Free Custom Preview",
          bullets: [
            "We design a custom homepage preview for your salon.",
            "No commitment required.",
            "Tailored to your brand and style."
          ]
        },
        {
          step: "02",
          title: "Review & Refine",
          bullets: [
            "You review the preview.",
            "We refine it based on your feedback.",
            "Finalize design and features."
          ]
        },
        {
          step: "03",
          title: "Launch & Go Live",
          bullets: [
            "Full website development.",
            "Mobile optimization.",
            "Booking & WhatsApp integration.",
            "Website goes live."
          ]
        }
      ]
    },
    timeline: {
      heading: "Fast Turnaround",
      description: "From concept to launch in 7–14 days."
    },
    whyItWorks: {
      heading: "Why This Works",
      description: "Designed for salons that value ease and confidence.",
      items: [
        {
          title: "No Upfront Risk",
          description: "See your site before you commit. Free preview, zero obligation."
        },
        {
          title: "No Complicated Process",
          description: "Simple steps. Clear communication. No technical jargon."
        },
        {
          title: "Built for Salons",
          description: "Designed specifically for high-end and mid-tier salons."
        }
      ]
    },
    cta: {
      headline: "See Your Salon's Website Before You Pay.",
      subtext: "Request your free preview today.",
      buttonText: "Get My Free Preview",
      link: "/contact"
    }
  },
  ar: {
    hero: {
      headline: "كيف نعمل",
      subheadline: "عملية بسيطة وسلسة مصممة لصالونات العصر الحديث."
    },
    process: {
      heading: "العملية",
      description: "من المعاينة إلى الإطلاق، نبقى واضحين وسهلين.",
      steps: [
        {
          step: "01",
          title: "معاينة مخصصة مجانية",
          bullets: [
            "نصمم معاينة صفحة رئيسية مخصصة لصالونك.",
            "بدون التزام مسبق.",
            "مصممة لعلامتك وأسلوبك."
          ]
        },
        {
          step: "02",
          title: "مراجعة وتحسين",
          bullets: [
            "تراجع على المعاينة.",
            "نحسنها بناءً على ملاحظاتك.",
            "ننهي التصميم والميزات."
          ]
        },
        {
          step: "03",
          title: "الإطلاق والتشغيل",
          bullets: [
            "تطوير الموقع بالكامل.",
            "تحسين للموبايل.",
            "الحجز وتكامل واتساب.",
            "الموقع يبث أونلاين."
          ]
        }
      ]
    },
    timeline: {
      heading: "تنفيذ سريع",
      description: "من الفكرة إلى الإطلاق في 7–14 يوماً."
    },
    whyItWorks: {
      heading: "لماذا تنجح هذه الطريقة",
      description: "مصممة لصالونات تثمن السهولة والثقة.",
      items: [
        {
          title: "بدون مخاطرة مسبقة",
          description: "شاهد موقعك قبل أن تلتزم. معاينة مجانية، بدون التزام."
        },
        {
          title: "عملية غير معقدة",
          description: "خطوات بسيطة. تواصل واضح. بدون مصطلحات تقنية."
        },
        {
          title: "مصممة للصالونات",
          description: "مصممة خصيصاً للصالونات الراقية والمتوسطة."
        }
      ]
    },
    cta: {
      headline: "شاهد موقع صالونك قبل أن تدفع.",
      subtext: "اطلب معاينتك المجانية اليوم.",
      buttonText: "احصل على معاينتي المجانية",
      link: "/contact"
    }
  }
} as const;
