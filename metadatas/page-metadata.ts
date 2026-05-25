import type { Metadata } from "next";
import { BRAND_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata => {
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [...BRAND_KEYWORDS, ...keywords],
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — luxury barber branding studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
};
