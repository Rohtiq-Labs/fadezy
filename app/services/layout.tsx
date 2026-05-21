import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services | Premium Barber Branding & Web Design | FADEZY",
  description:
    "Luxury barber branding, premium barber websites, cinematic content, and digital identity systems for elite modern barbershops by Fadezy.",
  keywords: [
    "premium barber branding",
    "luxury barber website",
    "barbershop web design",
    "barber branding agency",
    "barber shop marketing",
    "cinematic barber branding",
    "modern barbershop design",
    "Fadezy services",
  ],
  openGraph: {
    title: "Services | Luxury Barber Digital Studio | FADEZY",
    description:
      "Premium digital services for elite barbershops — websites, identity, cinematic content, and brand elevation.",
    type: "website",
  },
};

const ServicesLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return children;
};

export default ServicesLayout;
