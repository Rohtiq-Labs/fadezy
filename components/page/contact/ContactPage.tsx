"use client";

import ContactHero from "./ContactHero";
import MainContactSection from "./MainContactSection";
import DirectContactOptions from "./DirectContactOptions";
import TrustStatement from "./TrustStatement";
import ContactCta from "./ContactCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const ContactPage: FC = () => {
  return (
    <main
      role="main"
      aria-label="Contact Fadezy"
      className="flex flex-col w-full min-h-0"
    >
      <ContactHero />
      <MainContactSection />
      <DirectContactOptions />
      <TrustStatement />
      <ContactCta />
      <Footer />
    </main>
  );
};

export default ContactPage;
