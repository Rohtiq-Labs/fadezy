import type { Metadata } from "next";
import {
  BRAND_KEYWORDS,
  CONTACT,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo/site-config";

const defaultTitle = "Fadezy — Luxury Barber Branding & Digital Studio";

export const metadataTags: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  keywords: [
    ...BRAND_KEYWORDS,
    "luxury barber branding",
    "premium barbershop website",
    "barber branding agency",
    "barbershop web design",
    "cinematic barber branding",
    "modern barbershop design",
    "barber shop marketing",
    "premium barber website",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/icon%20white%20blck%20logo.png",
    apple: "/assets/icon%20white%20blck%20logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: `${SITE_URL}?lang=en`,
      ar: `${SITE_URL}?lang=ar`,
    },
  },
  category: "Business",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_TAGLINE,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Fadezy — luxury barber branding and cinematic digital studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_TAGLINE,
    images: [DEFAULT_OG_IMAGE],
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export { CONTACT, SITE_NAME, SITE_TAGLINE, SITE_URL };
