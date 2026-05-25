import {
  CONTACT,
  SITE_LEGAL_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "./site-config";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_LEGAL_NAME,
  alternateName: ["FADEZY", "Fadezy Studio", "Fadezy Barber Branding"],
  url: SITE_URL,
  logo: `${SITE_URL}/assets/projectThumbnail/faderoom.png`,
  description: SITE_TAGLINE,
  sameAs: [CONTACT.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: CONTACT.phone,
    url: CONTACT.whatsapp,
    availableLanguage: ["English", "Arabic"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_LEGAL_NAME,
  alternateName: "FADEZY",
  url: SITE_URL,
  description: SITE_TAGLINE,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en", "ar"],
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${SITE_LEGAL_NAME} — Luxury Barber Branding`,
  alternateName: "Fadezy Digital Studio",
  url: SITE_URL,
  image: `${SITE_URL}/assets/projectThumbnail/faderoom.png`,
  description: SITE_TAGLINE,
  serviceType: [
    "Premium barber website design",
    "Luxury barber branding",
    "Cinematic barber content",
    "Barbershop social media identity",
  ],
  areaServed: "Worldwide",
  brand: { "@type": "Brand", name: SITE_LEGAL_NAME },
  provider: { "@id": `${SITE_URL}/#organization` },
};

export const structuredDataGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd, professionalServiceJsonLd],
};
