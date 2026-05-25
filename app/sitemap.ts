import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site-config";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "/?lang=en", priority: 1, changeFrequency: "weekly" },
  { path: "/?lang=ar", priority: 1, changeFrequency: "weekly" },
  { path: "/work?lang=en", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work?lang=ar", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services?lang=en", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services?lang=ar", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about?lang=en", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about?lang=ar", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact?lang=en", priority: 0.85, changeFrequency: "monthly" },
  { path: "/contact?lang=ar", priority: 0.85, changeFrequency: "monthly" },
];

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
};

export default sitemap;
