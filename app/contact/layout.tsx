import { createPageMetadata } from "@/metadatas/page-metadata";
import { ReactNode } from "react";

export const metadata = createPageMetadata({
  title: "Contact — Start Your Brand",
  description:
    "Contact Fadezy for luxury barber branding, premium websites, and cinematic digital experiences. Start your barbershop brand transformation.",
  path: "/contact",
  keywords: ["Fadezy contact", "barber branding inquiry", "luxury barber website"],
});

const ContactLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return children;
};

export default ContactLayout;
