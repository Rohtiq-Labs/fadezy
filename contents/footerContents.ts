import { SupportedLanguages } from "./supportedLanguagesData";

export type FooterLink = { label: string; href: string };

export type FooterContents = Record<
  SupportedLanguages,
  {
    tagline: string;
    sections: {
      quickLinks: string;
      contact: string;
      followUs: string;
    };
    links: FooterLink[];
    contact: {
      email: string;
      phone: string;
      whatsapp: { label: string; url: string };
    };
    social: {
      instagram: { label: string; url: string };
      linkedin: { label: string; url: string };
      facebook: { label: string; url: string };
    };
    legal: {
      copyright: string;
      privacy?: string;
      terms?: string;
    };
  }
>;

const WHATSAPP_NUMBER = "971501234567";
const EMAIL = "contact@fadezy.com";
const PHONE = "+971 50 123 4567";

export const footerContents: FooterContents = {
  en: {
    tagline: "We help salons elevate their brand and attract more clients online.",
    sections: {
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us"
    },
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/#pricing" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    contact: {
      email: EMAIL,
      phone: PHONE,
      whatsapp: {
        label: "WhatsApp",
        url: `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, "")}`
      }
    },
    social: {
      instagram: {
        label: "Instagram",
        url: "https://www.instagram.com/fadezy"
      },
      linkedin: {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/fadezy"
      },
      facebook: {
        label: "Facebook",
        url: "https://www.facebook.com/fadezy"
      }
    },
    legal: {
      copyright: "© 2026 Fadezy. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    }
  },
  ar: {
    tagline: "نساعد الصالونات في تعزيز علامتها التجارية وجذب المزيد من العملاء أونلاين.",
    sections: {
      quickLinks: "روابط سريعة",
      contact: "تواصل",
      followUs: "تابعنا"
    },
    links: [
      { label: "الرئيسية", href: "/" },
      { label: "الخدمات", href: "/services" },
      { label: "أعمالنا", href: "/work" },
      { label: "الأسعار", href: "/#pricing" },
      { label: "من نحن", href: "/about" },
      { label: "تواصل", href: "/contact" }
    ],
    contact: {
      email: EMAIL,
      phone: PHONE,
      whatsapp: {
        label: "واتساب",
        url: `https://wa.me/${WHATSAPP_NUMBER.replace(/\s/g, "")}`
      }
    },
    social: {
      instagram: {
        label: "انستغرام",
        url: "https://www.instagram.com/fadezy"
      },
      linkedin: {
        label: "لينكدإن",
        url: "https://www.linkedin.com/company/fadezy"
      },
      facebook: {
        label: "فيسبوك",
        url: "https://www.facebook.com/fadezy"
      }
    },
    legal: {
      copyright: "© 2026 Fadezy. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام"
    }
  }
} as const;
