import { SupportedLanguages } from "./supportedLanguagesData";

export type ContactDetailItem = {
  label: string;
  value: string;
  href?: string;
};

export type ContactContents = Record<
  SupportedLanguages,
  {
    hero: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      scrollCue: string;
      visualSrc: string;
      visualAlt: string;
    };
    form: {
      eyebrow: string;
      heading: string;
      intro: string;
      nameLabel: string;
      namePlaceholder: string;
      shopLabel: string;
      shopPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      instagramLabel: string;
      instagramPlaceholder: string;
      inquiryLabel: string;
      inquiryPlaceholder: string;
      submitButton: string;
    };
    details: {
      eyebrow: string;
      items: ContactDetailItem[];
    };
    statement: {
      heading: string;
      support: string;
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

const WHATSAPP_URL = "https://wa.me/923239675581";
const INSTAGRAM_URL = "https://www.instagram.com/fadezy.rl/";

export const contactContents: ContactContents = {
  en: {
    hero: {
      eyebrow: "Fadezy Studio",
      headline: "Let's Build Your Brand Into a Premium Experience",
      subheadline:
        "Fadezy partners with premium barbershops to create cinematic digital presence, modern branding, and luxury online experiences.",
      scrollCue: "Scroll to inquire",
      visualSrc: "/assets/background.mp4",
      visualAlt:
        "Cinematic luxury barbershop atmosphere — Fadezy contact page hero",
    },
    form: {
      eyebrow: "Inquiry",
      heading: "Start Your Transformation",
      intro:
        "Share a few details. We respond personally — no automated sales funnel.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      shopLabel: "Barbershop Name",
      shopPlaceholder: "Your shop or brand",
      emailLabel: "Email",
      emailPlaceholder: "you@yourshop.com",
      instagramLabel: "Instagram",
      instagramPlaceholder: "@yourshop",
      inquiryLabel: "What are you looking for?",
      inquiryPlaceholder:
        "Website, branding, content, or full digital identity...",
      submitButton: "Send Inquiry",
    },
    details: {
      eyebrow: "Direct",
      items: [
        {
          label: "Email",
          value: "hello@fadezy.com",
          href: "mailto:hello@fadezy.com",
        },
        {
          label: "Instagram",
          value: "@fadezy.rl",
          href: INSTAGRAM_URL,
        },
        {
          label: "Location",
          value: "Remote — Worldwide",
        },
        {
          label: "Response",
          value: "Within 24 hours",
        },
      ],
    },
    statement: {
      heading: "Premium clients judge your brand before they ever book.",
      support:
        "Luxury barbershops deserve luxury digital presence. Fadezy exists to close that gap.",
    },
    cta: {
      headline: "Let's Create Something Premium",
      subtext:
        "Fadezy helps modern barbershops elevate their online image through cinematic branding and luxury-focused digital experiences.",
      buttonText: "Start Your Inquiry",
      link: "#contact-inquire",
    },
  },
  ar: {
    hero: {
      eyebrow: "استوديو Fadezy",
      headline: "لنبني علامتك كتجربة راقية",
      subheadline:
        "يشارك Fadezy صالونات الحلاقة الراقية لصنع حضور رقمي سينمائي وهوية عصرية وتجارب أونلاين فاخرة.",
      scrollCue: "مرّر للاستفسار",
      visualSrc: "/assets/background.mp4",
      visualAlt: "أجواء صالون حلاقة فاخر سينمائي — صفحة تواصل Fadezy",
    },
    form: {
      eyebrow: "استفسار",
      heading: "ابدأ تحولك",
      intro: "شاركنا التفاصيل. نرد شخصياً — بدون مسار مبيعات آلي.",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك",
      shopLabel: "اسم الصالون",
      shopPlaceholder: "محلك أو علامتك",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@yourshop.com",
      instagramLabel: "إنستغرام",
      instagramPlaceholder: "@yourshop",
      inquiryLabel: "ماذا تبحث عنه؟",
      inquiryPlaceholder: "موقع، هوية، محتوى، أو حضور رقمي كامل...",
      submitButton: "إرسال الاستفسار",
    },
    details: {
      eyebrow: "مباشر",
      items: [
        {
          label: "البريد",
          value: "hello@fadezy.com",
          href: "mailto:hello@fadezy.com",
        },
        {
          label: "إنستغرام",
          value: "@fadezy.rl",
          href: INSTAGRAM_URL,
        },
        {
          label: "الموقع",
          value: "عن بُعد — عالمياً",
        },
        {
          label: "الرد",
          value: "خلال 24 ساعة",
        },
      ],
    },
    statement: {
      heading: "العملاء الراقيون يحكمون على علامتك قبل الحجز.",
      support:
        "صالونات الحلاقة الفاخرة تستحق حضوراً رقمياً فاخراً. Fadezy موجود لسد هذه الفجوة.",
    },
    cta: {
      headline: "لنصنع شيئاً راقياً",
      subtext:
        "يساعد Fadezy صالونات الحلاقة العصرية على رفع صورتها أونلاين عبر هوية سينمائية وتجارب رقمية فاخرة.",
      buttonText: "ابدأ استفسارك",
      link: "#contact-inquire",
    },
  },
} as const;

export const contactWhatsAppUrl = WHATSAPP_URL;
