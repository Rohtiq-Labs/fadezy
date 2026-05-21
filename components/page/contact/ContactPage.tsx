"use client";

import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import ContactDetails from "./ContactDetails";
import ContactStatement from "./ContactStatement";
import ContactCta from "./ContactCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const ContactPage: FC = () => {
  return (
    <main
      role="main"
      aria-label="Contact Fadezy — luxury barber branding inquiry"
      className="flex flex-col w-full max-w-[100vw] overflow-x-clip bg-brand-bg"
    >
      <ContactHero />
      <ContactFormSection />
      <ContactDetails />
      <ContactStatement />
      <ContactCta />
      <Footer />
    </main>
  );
};

export default ContactPage;
