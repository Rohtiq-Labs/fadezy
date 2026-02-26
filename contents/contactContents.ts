import { SupportedLanguages } from "./supportedLanguagesData";

export type ContactContents = Record<
  SupportedLanguages,
  {
    hero: {
      headline: string;
      subheadline: string;
    };
    mainContact: {
      intro: string;
      form: {
        salonNameLabel: string;
        salonNamePlaceholder: string;
        ownerNameLabel: string;
        ownerNamePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        whatsappLabel: string;
        whatsappPlaceholder: string;
        messageLabel: string;
        messagePlaceholder: string;
        submitButton: string;
      };
    };
    directContact: {
      heading: string;
      whatsappLabel: string;
      whatsappLink: string;
      emailLabel: string;
      emailAddress: string;
      instagramLabel: string;
      instagramLink: string;
    };
    trustStatement: {
      text: string;
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

export const contactContents: ContactContents = {
  en: {
    hero: {
      headline: "Get in Touch",
      subheadline:
        "Let's create a digital presence that matches your salon's standard."
    },
    mainContact: {
      intro:
        "Tell us about your salon and we'll prepare a custom preview for you.",
      form: {
        salonNameLabel: "Salon Name",
        salonNamePlaceholder: "Your salon name",
        ownerNameLabel: "Owner Name",
        ownerNamePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        whatsappLabel: "WhatsApp Number",
        whatsappPlaceholder: "+92 323 9675581",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your salon and what you're looking for...",
        submitButton: "Request Free Preview"
      }
    },
    directContact: {
      heading: "Or reach us directly",
      whatsappLabel: "WhatsApp",
      whatsappLink: "https://wa.me/923239675581",
      emailLabel: "Email",
      emailAddress: "",
      instagramLabel: "Instagram",
      instagramLink: "https://www.instagram.com/fadezy.rl/"
    },
    trustStatement: {
      text: "We respond within 24 hours. No obligation. No upfront commitment."
    },
    cta: {
      headline: "See Your Salon Website Before You Pay.",
      subtext: "Request your free preview and we'll show you what we can do.",
      buttonText: "Start Now",
      link: "/contact"
    }
  },
  ar: {
    hero: {
      headline: "تواصل معنا",
      subheadline:
        "لنخلق حضوراً رقمياً يليق بمستوى صالونك."
    },
    mainContact: {
      intro:
        "أخبرنا عن صالونك ونعد لك معاينة مخصصة.",
      form: {
        salonNameLabel: "اسم الصالون",
        salonNamePlaceholder: "اسم صالونك",
        ownerNameLabel: "اسم المالك",
        ownerNamePlaceholder: "اسمك",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "your@email.com",
        whatsappLabel: "رقم واتساب",
        whatsappPlaceholder: "+92 323 9675581",
        messageLabel: "الرسالة",
        messagePlaceholder: "أخبرنا عن صالونك وما تبحث عنه...",
        submitButton: "اطلب معاينة مجانية"
      }
    },
    directContact: {
      heading: "أو تواصل معنا مباشرة",
      whatsappLabel: "واتساب",
      whatsappLink: "https://wa.me/923239675581",
      emailLabel: "البريد",
      emailAddress: "",
      instagramLabel: "إنستغرام",
      instagramLink: "https://www.instagram.com/fadezy.rl/"
    },
    trustStatement: {
      text: "نرد خلال 24 ساعة. بدون التزام. بدون دفعة مقدمة."
    },
    cta: {
      headline: "شاهد موقع صالونك قبل أن تدفع.",
      subtext: "اطلب معاينتك المجانية ونوضح لك ما نستطيع تقديمه.",
      buttonText: "ابدأ الآن",
      link: "/contact"
    }
  }
} as const;
