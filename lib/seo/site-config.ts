/** Canonical production URL — used for metadata, sitemap, and structured data */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fadezy.rohtiqlabs.com";

export const SITE_NAME = "Fadezy";

export const SITE_LEGAL_NAME = "Fadezy";

export const SITE_TAGLINE =
  "Luxury digital studio for premium barbershops — cinematic branding, websites, and brand identity.";

export const DEFAULT_OG_IMAGE = "/assets/projectThumbnail/faderoom.png";

export const CONTACT = {
  instagram: "https://www.instagram.com/fadezy.rl/",
  whatsapp: "https://wa.me/923239675581",
  phone: "+923239675581",
} as const;

export const BRAND_KEYWORDS = [
  "Fadezy",
  "FADEZY",
  "Fadezy studio",
  "Fadezy barber",
  "Fadezy barbershop",
  "Fadezy branding",
  "Fadezy agency",
  "Rohtiq Labs Fadezy",
] as const;
