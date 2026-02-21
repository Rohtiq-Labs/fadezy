"use client";

import HowItWorksHero from "./HowItWorksHero";
import ProcessSteps from "./ProcessSteps";
import Timeline from "./Timeline";
import WhyItWorks from "./WhyItWorks";
import HowItWorksCta from "./HowItWorksCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const HowItWorksPage: FC = () => {
  return (
    <main
      role="main"
      aria-label="How it works"
      className="flex flex-col w-full min-h-0"
    >
      <HowItWorksHero />
      <ProcessSteps />
      <Timeline />
      <WhyItWorks />
      <HowItWorksCta />
      <Footer />
    </main>
  );
};

export default HowItWorksPage;
