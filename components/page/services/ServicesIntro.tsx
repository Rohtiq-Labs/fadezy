"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { servicesContents } from "@/contents/servicesContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const ServicesIntro: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, heading, paragraphs } = servicesContents[lang].intro;

  return (
    <SectionContainer
      id="services-intro"
      className="!mt-[var(--section-spacing)] pb-[clamp(64px,10vw,100px)]"
      aria-labelledby="services-intro-heading"
    >
      <div className="grid grid-cols-12 gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),48px)] lg:grid-cols-1">
        <div className="col-span-4 lg:col-span-12">
          <p className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted">
            {eyebrow}
          </p>
        </div>
        <div className="col-span-8 lg:col-span-12 flex flex-col gap-8">
          <h2
            id="services-intro-heading"
            className="font-blinker font-light uppercase text-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),52px)] leading-[1.05] tracking-[0.03em] text-brand-text max-w-[14ch]"
          >
            {heading}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={`intro-p-${index}`}
              className="font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] leading-[1.7] text-brand-text-muted max-w-[560px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServicesIntro;
