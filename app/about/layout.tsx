import { createPageMetadata } from "@/metadatas/page-metadata";
import { ReactNode } from "react";

export const metadata = createPageMetadata({
  title: "About — Luxury Creative Studio",
  description:
    "About Fadezy: a luxury digital studio for elite barbershops. Cinematic branding, premium web design, and modern barber brand identity.",
  path: "/about",
  keywords: ["Fadezy about", "barber branding agency", "luxury barber studio"],
});

const AboutLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return children;
};

export default AboutLayout;
