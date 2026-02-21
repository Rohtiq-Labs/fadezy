"use client";

import ServicesHero from "./ServicesHero";
import CoreServices from "./CoreServices";
import HowItWorks from "./HowItWorks";
import WhyFadezy from "./WhyFadezy";
import ServicesCta from "./ServicesCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const Services: FC = () => {
  return (
    <main
      role="main"
      aria-label="Our services"
      className="flex flex-col w-full min-h-0"
    >
      <ServicesHero />
      <CoreServices />
      <HowItWorks />
      <WhyFadezy />
      <ServicesCta />
      <Footer />
    </main>
  );
};

export default Services;
