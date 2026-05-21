"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { aboutContents } from "@/contents/AboutContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const AboutPhilosophy: FC = () => {
  const lang = useCurrentLanguages();
  const { statement, support } = aboutContents[lang].philosophy;

  return (
    <SectionContainer
      id="about-philosophy"
      className="!mt-[var(--section-spacing)] py-[clamp(80px,14vw,160px)]"
      aria-labelledby="about-philosophy-heading"
    >
      <blockquote className="max-w-[min(900px,100%)]">
        <h2
          id="about-philosophy-heading"
          className="font-blinker font-light uppercase text-[clamp(32px,calc(((100vw-1024px)/896*24)+32px),64px)] leading-[1.08] tracking-[0.03em] text-brand-text"
        >
          {statement}
        </h2>
        <p className="mt-10 font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] leading-[1.7] text-brand-text-muted max-w-[480px]">
          {support}
        </p>
      </blockquote>
    </SectionContainer>
  );
};

export default AboutPhilosophy;
