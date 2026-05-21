"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { workContents } from "@/contents/workContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC, useRef } from "react";

const ResultsImpact: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, subheading, items } = workContents[lang].results;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="work-impact"
      className="bg-brand-bg-alt !mt-0 pt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)] border-y border-brand-border"
      ref={sectionRef}
      aria-labelledby="work-impact-heading"
    >
      <div className="flex flex-col gap-[clamp(40px,calc(((100vw-1024px)/896*40)+40px),72px)]">
        <header className="max-w-[min(560px,100%)]">
          <h2
            id="work-impact-heading"
            className="font-blinker font-light uppercase text-[clamp(36px,calc(((100vw-1024px)/896*20)+36px),56px)] leading-[1] tracking-[0.03em] text-brand-text"
          >
            {heading}
          </h2>
          <p className="mt-5 font-acumin-wide-light text-brand-text-muted text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)]">
            {subheading}
          </p>
        </header>

        <FadeInScrollAnimation trigger={sectionRef} duration={1}>
          <ul
            className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-[clamp(32px,calc(((100vw-1024px)/896*24)+32px),56px)] w-full border-t border-brand-border pt-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)]"
            role="list"
          >
            {items.map((item, index) => (
              <li key={`impact-${index}`} className="flex flex-col gap-3">
                <span className="font-blinker font-light text-[clamp(40px,calc(((100vw-1024px)/896*16)+40px),64px)] leading-none text-brand-text tracking-[0.02em]">
                  {item.stat}
                </span>
                <span className="font-acumin-wide-light text-[11px] uppercase tracking-[0.18em] text-brand-text-muted max-w-[200px]">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </FadeInScrollAnimation>
      </div>
    </SectionContainer>
  );
};

export default ResultsImpact;
