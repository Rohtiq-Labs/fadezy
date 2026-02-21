import { SupportedLanguages } from "./supportedLanguagesData";

export type PageSectionKey = "work" | "services" | "howItWorks" | "contact";

export type PageSectionContents = Record<
  SupportedLanguages,
  Record<PageSectionKey, { heading: string; description: string }>
>;

export const pageSectionContents: PageSectionContents = {
  en: {
    work: {
      heading: "Our Work",
      description: "Explore our portfolio of salon and barbershop websites and digital projects."
    },
    services: {
      heading: "Services",
      description: "What we offer for salons and barbershops: websites, booking, and brand presence."
    },
    howItWorks: {
      heading: "How It Works",
      description: "From discovery to launch—see how we work with you step by step."
    },
    contact: {
      heading: "Contact",
      description: "Get in touch for a free demo or to start your project."
    }
  },
  ar: {
    work: {
      heading: "أعمالنا",
      description: "استعرض معرض أعمالنا من مواقع الصالونات ومحلات الحلاقة والمشاريع الرقمية."
    },
    services: {
      heading: "الخدمات",
      description: "ما نقدمه للصالونات ومحلات الحلاقة: مواقع، حجز، ووجود العلامة التجارية."
    },
    howItWorks: {
      heading: "كيف نعمل",
      description: "من التعارف إلى الإطلاق—اكتشف كيف نعمل معك خطوة بخطوة."
    },
    contact: {
      heading: "تواصل معنا",
      description: "تواصل للحصول على عرض تجريبي مجاني أو لبدء مشروعك."
    }
  }
} as const;
