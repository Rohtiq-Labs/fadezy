import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About | Luxury Barber Branding Studio | FADEZY",
  description:
    "Fadezy is a luxury digital studio for elite barbershops — cinematic branding, premium web design, and modern barber brand identity.",
  keywords: [
    "luxury barber branding",
    "barber branding agency",
    "premium barbershop design",
    "cinematic barber branding",
    "modern barbershop branding",
    "barber shop marketing",
    "Fadezy about",
  ],
  openGraph: {
    title: "About Fadezy | Luxury Digital Studio for Barbershops",
    description:
      "A luxury editorial creative studio crafted exclusively for premium barbershops.",
    type: "website",
  },
};

const AboutLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return children;
};

export default AboutLayout;
