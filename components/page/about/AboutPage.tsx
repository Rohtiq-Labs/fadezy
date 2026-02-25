"use client";

import AboutHero from "./AboutHero";
import OurMission from "./OurMission";
import WhySalons from "./WhySalons";
import RohtiqLabs from "./RohtiqLabs";
import OurApproach from "./OurApproach";
import AboutCta from "./AboutCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <main
      role="main"
      aria-label="About FADEZY"
      className="flex flex-col w-full min-h-0"
    >
      <AboutHero />
      <OurMission />
      <WhySalons />
      <RohtiqLabs />
      <OurApproach />
      <AboutCta />
      <Footer />
    </main>
  );
};

export default AboutPage;
