"use client";

import WorkHero from "./WorkHero";
import FeaturedProjects from "./FeaturedProjects";
import BeforeAfter from "./BeforeAfter";
import ResultsImpact from "./ResultsImpact";
import WorkCta from "./WorkCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const Work: FC = () => {
  return (
    <main
      role="main"
      aria-label="Our work - salon website projects"
      className="flex flex-col w-full"
    >
      <WorkHero />
      <FeaturedProjects />
      <BeforeAfter />
      <ResultsImpact />
      <WorkCta />
      <Footer />
    </main>
  );
};

export default Work;
