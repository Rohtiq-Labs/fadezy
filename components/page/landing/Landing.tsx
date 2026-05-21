"use client";

import { FC } from "react";
import Hero from "./sections/hero/Hero";
import WhatIDo from "./sections/whatIDo/WhatIDo";
import TrustPositioning from "./sections/trustPositioning/TrustPositioning";
import Projects from "./sections/projects/Projects";
import Transformation from "./sections/transformation/Transformation";
import Testimonials from "./sections/testimonials/Testimonials";
import GetInTouch from "./sections/getInTouch/GetInTouch";
import Footer from "@/components/footer/Footer";

const Landing: FC = () => {
  return (
    <main className="flex flex-col w-full max-w-[100vw] overflow-x-clip">
      <div className="bg-brand-bg">
        <Hero />
      </div>
      <TrustPositioning />
      <div className="bg-brand-bg-alt">
        <WhatIDo />
      </div>
      <div className="bg-brand-bg">
        <Projects />
      </div>
      <div className="bg-brand-bg-alt">
        <Transformation />
      </div>
      <div className="bg-brand-bg">
        <Testimonials />
      </div>
      <div className="bg-brand-bg-alt">
        <GetInTouch />
      </div>
      <Footer />
    </main>
  );
};

export default Landing;
