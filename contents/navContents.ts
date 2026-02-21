import { SupportedLanguages } from "./supportedLanguagesData";

export type NavItemKey = "home" | "work" | "services" | "howItWorks" | "about" | "contact";

export type NavContents = Record<SupportedLanguages, Record<NavItemKey, string>>;

export const navContents: NavContents = {
  en: {
    home: "Home",
    work: "Work",
    services: "Services",
    howItWorks: "How It Works",
    about: "About",
    contact: "Contact"
  },
  ar: {
    home: "الرئيسية",
    work: "أعمالنا",
    services: "الخدمات",
    howItWorks: "كيف نعمل",
    about: "من نحن",
    contact: "تواصل"
  }
} as const;
