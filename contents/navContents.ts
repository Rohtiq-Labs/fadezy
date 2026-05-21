import { SupportedLanguages } from "./supportedLanguagesData";

export type NavItemKey = "home" | "work" | "services" | "about" | "contact";

export type NavContents = Record<SupportedLanguages, Record<NavItemKey, string>>;

export const navContents: NavContents = {
  en: {
    home: "Home",
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact"
  },
  ar: {
    home: "الرئيسية",
    work: "أعمالنا",
    services: "الخدمات",
    about: "من نحن",
    contact: "تواصل"
  }
} as const;
