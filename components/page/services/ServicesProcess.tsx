"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { servicesContents } from "@/contents/servicesContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC, useRef } from "react";

const ServicesProcess: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, subheading, steps } = servicesContents[lang].process;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="services-process"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={sectionRef}
      aria-labelledby="services-process-heading"
    >
      <div className="flex flex-col gap-[clamp(40px,calc(((100vw-1024px)/896*40)+40px),72px)]">
        <header className="max-w-[min(560px,100%)]">
          <h2
            id="services-process-heading"
            className="font-blinker font-light uppercase text-[clamp(36px,calc(((100vw-1024px)/896*20)+36px),56px)] leading-[1] tracking-[0.03em] text-brand-text"
          >
            {heading}
          </h2>
          <p className="mt-5 font-acumin-wide-light text-brand-text-muted text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)]">
            {subheading}
          </p>
        </header>

        <FadeInScrollAnimation trigger={sectionRef} duration={1}>
          <ol
            className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-[clamp(24px,calc(((100vw-1024px)/896*24)+24px),40px)] w-full border-t border-brand-border pt-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)]"
            role="list"
          >
            {steps.map((step, index) => (
              <li key={step.label} className="flex flex-col gap-4">
                <span
                  className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-acumin-semi-cond text-[clamp(22px,calc(((100vw-1024px)/896*6)+22px),28px)] uppercase tracking-[0.05em] text-brand-text leading-[1.1]">
                  {step.label}
                </h3>
                <p className="font-acumin-wide-light text-sm text-brand-text-muted leading-[1.55] max-w-[220px]">
                  {step.caption}
                </p>
              </li>
            ))}
          </ol>
        </FadeInScrollAnimation>
      </div>
    </SectionContainer>
  );
};

export default ServicesProcess;
