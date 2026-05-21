"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { aboutContents } from "@/contents/AboutContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const AboutWhoWeAre: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, paragraphs } = aboutContents[lang].whoWeAre;

  return (
    <SectionContainer
      id="about-who-we-are"
      className="bg-brand-bg-alt !mt-0 pt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)] border-y border-brand-border"
      aria-labelledby="about-who-heading"
    >
      <div className="grid grid-cols-12 gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),48px)] lg:grid-cols-1">
        <div className="col-span-4 lg:col-span-12">
          <p
            id="about-who-heading"
            className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted"
          >
            {eyebrow}
          </p>
        </div>
        <div className="col-span-8 lg:col-span-12 flex flex-col gap-8">
          {paragraphs.map((paragraph, index) => (
            <p
              key={`about-who-p-${index}`}
              className="font-acumin-wide-light text-[clamp(16px,calc(((100vw-1024px)/896*4)+16px),20px)] leading-[1.65] text-brand-text max-w-[560px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutWhoWeAre;
