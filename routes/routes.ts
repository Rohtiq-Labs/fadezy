import type { NavItemKey } from "@/contents/navContents";

export type RouteConfig = {
  key: NavItemKey;
  path: string;
};

export const routes: RouteConfig[] = [
  { key: "home", path: "/" },
  { key: "work", path: "/work" },
  { key: "services", path: "/services" },
  { key: "about", path: "/about" },
  { key: "contact", path: "/contact" }
];
