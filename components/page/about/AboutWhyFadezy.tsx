"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { aboutContents } from "@/contents/AboutContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const AboutWhyFadezy: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, body } = aboutContents[lang].whyFadezy;

  return (
    <SectionContainer
      id="about-why-fadezy"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      aria-labelledby="about-why-heading"
    >
      <div className="grid grid-cols-12 gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),48px)] lg:grid-cols-1">
        <h2
          id="about-why-heading"
          className="col-span-7 lg:col-span-12 font-blinker font-light uppercase text-[clamp(32px,calc(((100vw-1024px)/896*20)+32px),56px)] leading-[1.05] tracking-[0.03em] text-brand-text"
        >
          {heading}
        </h2>
        <p className="col-span-5 lg:col-span-12 font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] leading-[1.7] text-brand-text-muted self-end max-w-[400px]">
          {body}
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutWhyFadezy;
