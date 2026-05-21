import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Selected Work | Luxury Barber Branding & Web Design | FADEZY",
  description:
    "Explore Fadezy's luxury barbershop websites, premium barber branding, and cinematic digital identity work for elite modern barbershops.",
  keywords: [
    "luxury barbershop website",
    "premium barber branding",
    "barber shop web design",
    "barbershop marketing",
    "cinematic barber branding",
    "barber brand identity",
    "modern barbershop website",
    "Fadezy portfolio",
  ],
  openGraph: {
    title: "Selected Work | Luxury Barber Branding | FADEZY",
    description:
      "Cinematic barber brand campaigns — premium websites and digital identity for modern barbershops.",
    type: "website",
  },
};

const WorkLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return children;
};

export default WorkLayout;
