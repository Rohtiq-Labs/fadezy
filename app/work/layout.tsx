import { createPageMetadata } from "@/metadatas/page-metadata";
import { ReactNode } from "react";

export const metadata = createPageMetadata({
  title: "Work — Luxury Barber Portfolio",
  description:
    "Explore Fadezy's cinematic barbershop websites, premium barber branding, and luxury digital identity for elite modern barbershops.",
  path: "/work",
  keywords: [
    "luxury barbershop website",
    "premium barber branding",
    "barber portfolio",
    "Fadezy work",
  ],
});

const WorkLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return children;
};

export default WorkLayout;
