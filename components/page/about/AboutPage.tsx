"use client";

import AboutHero from "./AboutHero";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutWhoWeAre from "./AboutWhoWeAre";
import AboutApproach from "./AboutApproach";
import AboutShowcase from "./AboutShowcase";
import AboutWhyFadezy from "./AboutWhyFadezy";
import AboutCta from "./AboutCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <main
      role="main"
      aria-label="About Fadezy — luxury barber branding and digital studio"
      className="flex flex-col w-full max-w-[100vw] overflow-x-clip bg-brand-bg"
    >
      <AboutHero />
      <AboutPhilosophy />
      <AboutWhoWeAre />
      <AboutApproach />
      <AboutShowcase />
      <AboutWhyFadezy />
      <AboutCta />
      <Footer />
    </main>
  );
};

export default AboutPage;
