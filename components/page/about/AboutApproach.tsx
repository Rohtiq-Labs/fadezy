"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { aboutContents } from "@/contents/AboutContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC, useRef } from "react";

const AboutApproach: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, items } = aboutContents[lang].approach;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="about-approach"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={sectionRef}
      aria-labelledby="about-approach-heading"
    >
      <div className="flex flex-col gap-[clamp(48px,calc(((100vw-1024px)/896*48)+48px),88px)]">
        <p className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted">
          {eyebrow}
        </p>

        <ul
          className="grid grid-cols-2 lg:grid-cols-1 gap-x-[clamp(40px,calc(((100vw-1024px)/896*48)+40px),80px)] gap-y-[clamp(48px,calc(((100vw-1024px)/896*32)+48px),72px)] w-full border-t border-brand-border pt-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)]"
          role="list"
        >
          {items.map((item, index) => (
            <li key={item.title} className="group flex flex-col gap-4">
              <FadeInScrollAnimation
                trigger={sectionRef}
                duration={0.9}
                className="flex flex-col gap-4"
              >
                <span
                  className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-acumin-semi-cond text-[clamp(22px,calc(((100vw-1024px)/896*8)+22px),32px)] uppercase tracking-[0.05em] text-brand-text leading-[1.1] transition-colors duration-500 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="font-acumin-wide-light text-sm text-brand-text-muted leading-[1.6] max-w-[320px]">
                  {item.description}
                </p>
                <span
                  className="block h-px w-8 bg-brand-text/20 transition-all duration-700 ease-out group-hover:w-16 group-hover:bg-primary/60"
                  aria-hidden
                />
              </FadeInScrollAnimation>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default AboutApproach;
