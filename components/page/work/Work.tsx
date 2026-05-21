"use client";

import WorkHero from "./WorkHero";
import FeaturedProjects from "./FeaturedProjects";
import WorkTransformation from "./WorkTransformation";
import WorkGallery from "./WorkGallery";
import ResultsImpact from "./ResultsImpact";
import WorkTestimonials from "./WorkTestimonials";
import WorkCta from "./WorkCta";
import Footer from "@/components/footer/Footer";
import { FC } from "react";

const Work: FC = () => {
  return (
    <main
      role="main"
      aria-label="Fadezy selected work — luxury barber branding and web design"
      className="flex flex-col w-full max-w-[100vw] overflow-x-clip bg-brand-bg"
    >
      <WorkHero />
      <FeaturedProjects />
      <WorkTransformation />
      <WorkGallery />
      <ResultsImpact />
      <WorkTestimonials />
      <WorkCta />
      <Footer />
    </main>
  );
};

export default Work;
