"use client";

import ServicesHero from "./ServicesHero";
import ServicesIntro from "./ServicesIntro";
import ServicesShowcase from "./ServicesShowcase";
import ServicesFeatured from "./ServicesFeatured";
import ServicesTransformation from "./ServicesTransformation";
import ServicesProcess from "./ServicesProcess";
import ServicesCta from "./ServicesCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const Services: FC = () => {
  return (
    <main
      role="main"
      aria-label="Fadezy services — luxury barber branding and digital identity"
      className="flex flex-col w-full max-w-[100vw] overflow-x-clip bg-brand-bg"
    >
      <ServicesHero />
      <ServicesIntro />
      <ServicesShowcase />
      <ServicesFeatured />
      <ServicesTransformation />
      <ServicesProcess />
      <ServicesCta />
      <Footer />
    </main>
  );
};

export default Services;
