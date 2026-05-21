import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact | Luxury Barber Branding Studio | FADEZY",
  description:
    "Start your premium barber brand transformation. Contact Fadezy for cinematic websites, luxury branding, and digital identity for elite barbershops.",
  keywords: [
    "barber branding agency contact",
    "luxury barber website inquiry",
    "premium barbershop design",
    "barber shop marketing",
    "Fadezy contact",
  ],
  openGraph: {
    title: "Contact Fadezy | Premium Barber Digital Studio",
    description:
      "Inquire about cinematic branding and luxury digital experiences for your barbershop.",
    type: "website",
  },
};

const ContactLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return children;
};

export default ContactLayout;
