import { createPageMetadata } from "@/metadatas/page-metadata";
import { ReactNode } from "react";

export const metadata = createPageMetadata({
  title: "Services — Premium Barber Branding",
  description:
    "Fadezy services: cinematic content, premium websites, social identity, and luxury brand positioning for elite barbershops.",
  path: "/services",
  keywords: [
    "premium barber branding",
    "luxury barber website",
    "barber branding agency",
    "Fadezy services",
  ],
});

const ServicesLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return children;
};

export default ServicesLayout;
