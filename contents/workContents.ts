import { SupportedLanguages } from "./supportedLanguagesData";

export type WorkProject = {
  salonName: string;
  description: string;
  mockupSrc: string;
  demoLink: string;
};

export type WorkResult = {
  stat: string;
  label: string;
};

export type WorkContents = Record<
  SupportedLanguages,
  {
    hero: {
      headline: string;
      subheadline: string;
    };
    featuredProjects: {
      heading: string;
      description: string;
      viewDemoLabel: string;
      projects: WorkProject[];
    };
    beforeAfter: {
      heading: string;
      description: string;
      beforeLabel: string;
      afterLabel: string;
      beforeSrc: string;
      afterSrc: string;
    };
    results: {
      heading: string;
      description: string;
      items: WorkResult[];
    };
    cta: {
      headline: string;
      subtext: string;
      buttonText: string;
      link: string;
    };
  }
>;

export const workContents: WorkContents = {
  en: {
    hero: {
      headline: "Our Work",
      subheadline: "Premium digital experiences crafted for modern salons."
    },
    featuredProjects: {
      heading: "Featured Projects",
      description:
        "Premium salon websites we've crafted for clients across UAE and the Middle East.",
      viewDemoLabel: "View Live Demo",
      projects: [
        {
          salonName: "Luxe Hair Studio",
          description: "Elegant salon website with online booking and portfolio gallery.",
          mockupSrc: "/assets/projectThumbnail/hall.jpg",
          demoLink: "#"
        },
        {
          salonName: "Fade & Co Barbershop",
          description: "Modern barbershop site with services and WhatsApp contact.",
          mockupSrc: "/assets/projectThumbnail/moon.jpg",
          demoLink: "#"
        },
        {
          salonName: "The Gentleman's Salon",
          description: "Premium barbershop experience with appointment scheduling.",
          mockupSrc: "/assets/projectThumbnail/old_portfolio.jpg",
          demoLink: "#"
        },
        {
          salonName: "Serenity Beauty Lounge",
          description: "Luxury salon brand with stylist profiles and service menu.",
          mockupSrc: "/assets/projectThumbnail/todo.jpg",
          demoLink: "#"
        },
        {
          salonName: "Urban Cuts",
          description: "Contemporary barbershop with mobile-first booking.",
          mockupSrc: "/assets/projectThumbnail/tools.jpg",
          demoLink: "#"
        },
        {
          salonName: "Nova Hair Atelier",
          description: "High-end salon website with immersive visuals.",
          mockupSrc: "/assets/projectThumbnail/hall.jpg",
          demoLink: "#"
        }
      ]
    },
    beforeAfter: {
      heading: "Before & After",
      description:
        "See the transformation from outdated site to premium modern presence.",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeSrc: "/assets/pexels-cottonbro-8721339.jpg",
      afterSrc: "/assets/pexels-cottonbro-8721318.jpg"
    },
    results: {
      heading: "Results & Impact",
      description: "Measurable outcomes for salons we've partnered with.",
      items: [
        { stat: "+38%", label: "increase in online bookings" },
        { stat: "Improved", label: "Google visibility" },
        { stat: "Luxury", label: "brand positioning" }
      ]
    },
    cta: {
      headline: "Ready to Elevate Your Salon?",
      subtext: "Get your custom website preview — completely free.",
      buttonText: "Request Free Demo",
      link: "/contact"
    }
  },
  ar: {
    hero: {
      headline: "أعمالنا",
      subheadline: "تجارب رقمية راقية مصممة لصالونات العصر الحديث."
    },
    featuredProjects: {
      heading: "مشاريع مميزة",
      description:
        "مواقع صالونات راقية صممناها لعملائنا في الإمارات والشرق الأوسط.",
      viewDemoLabel: "عرض التجربة الحية",
      projects: [
        {
          salonName: "Luxe Hair Studio",
          description: "موقع صالون أنيق مع حجز أونلاين ومعرض أعمال.",
          mockupSrc: "/assets/projectThumbnail/hall.jpg",
          demoLink: "#"
        },
        {
          salonName: "Fade & Co Barbershop",
          description: "موقع حلاقة عصري مع خدمات واتساب للتواصل.",
          mockupSrc: "/assets/projectThumbnail/moon.jpg",
          demoLink: "#"
        },
        {
          salonName: "The Gentleman's Salon",
          description: "تجربة حلاقة راقية مع جدولة المواعيد.",
          mockupSrc: "/assets/projectThumbnail/old_portfolio.jpg",
          demoLink: "#"
        },
        {
          salonName: "Serenity Beauty Lounge",
          description: "علامة صالون فاخرة مع ملفات المصممين وقائمة الخدمات.",
          mockupSrc: "/assets/projectThumbnail/todo.jpg",
          demoLink: "#"
        },
        {
          salonName: "Urban Cuts",
          description: "صالون حلاقة معاصر مع حجز mobile-first.",
          mockupSrc: "/assets/projectThumbnail/tools.jpg",
          demoLink: "#"
        },
        {
          salonName: "Nova Hair Atelier",
          description: "موقع صالون راقي مع صور غامرة.",
          mockupSrc: "/assets/projectThumbnail/hall.jpg",
          demoLink: "#"
        }
      ]
    },
    beforeAfter: {
      heading: "قبل وبعد",
      description: "شاهد التحول من موقع قديم إلى حضور حديث وراقٍ.",
      beforeLabel: "قبل",
      afterLabel: "بعد",
      beforeSrc: "/assets/pexels-cottonbro-8721339.jpg",
      afterSrc: "/assets/pexels-cottonbro-8721318.jpg"
    },
    results: {
      heading: "النتائج والتأثير",
      description: "نتائج قابلة للقياس للصالونات التي تعاملنا معها.",
      items: [
        { stat: "+38%", label: "زيادة في الحجوزات أونلاين" },
        { stat: "تحسن", label: "الظهور في جوجل" },
        { stat: "علامة", label: "تجارية راقية" }
      ]
    },
    cta: {
      headline: "هل أنت مستعد لرفع مستوى صالونك؟",
      subtext: "احصل على معاينة موقعك المخصص — مجاناً تماماً.",
      buttonText: "اطلب عرض تجريبي مجاني",
      link: "/contact"
    }
  }
} as const;
