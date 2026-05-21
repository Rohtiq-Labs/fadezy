"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { workContents } from "@/contents/workContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import Image from "next/image";
import { FC, useRef } from "react";

const WorkTransformation: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, subheading, before, after } = workContents[lang].transformation;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="work-transformation"
      className="bg-brand-bg-alt !mt-0 pb-[clamp(80px,12vw,140px)] pt-[var(--section-spacing)]"
      ref={sectionRef}
      aria-labelledby="work-transformation-heading"
    >
      <div className="flex flex-col gap-[clamp(48px,calc(((100vw-1024px)/896*48)+48px),88px)]">
        <header className="max-w-[min(720px,100%)]">
          <h2
            id="work-transformation-heading"
            className="font-blinker font-light uppercase text-[clamp(40px,calc(((100vw-1024px)/896*24)+40px),64px)] leading-[1] tracking-[0.03em] text-brand-text"
          >
            {heading}
          </h2>
          <p className="mt-6 font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.65] text-brand-text-muted">
            {subheading}
          </p>
        </header>

        <div className="grid grid-cols-[1fr_auto_1fr] lg:grid-cols-1 gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),48px)] items-stretch w-full">
          <FadeInScrollAnimation trigger={sectionRef} duration={1} className="flex flex-col gap-5">
            <span className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted">
              {before.label}
            </span>
            <div className="relative flex-1 min-h-[clamp(360px,40vw,480px)] overflow-hidden bg-brand-bg-dark">
              <Image
                src={before.imageSrc}
                alt={before.imageAlt}
                fill
                className="object-cover grayscale opacity-80"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div>
              <h3 className="font-acumin-semi-cond text-xl uppercase tracking-[0.06em] text-brand-text">
                {before.title}
              </h3>
              <p className="mt-2 font-acumin-wide-light text-sm text-brand-text-muted">
                {before.caption}
              </p>
            </div>
          </FadeInScrollAnimation>

          <div
            className="flex items-center justify-center font-blinker text-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)] text-brand-text lg:py-6"
            aria-hidden
          >
            →
          </div>

          <FadeInScrollAnimation trigger={sectionRef} duration={1} className="flex flex-col gap-5">
            <span className="font-blinker text-[11px] uppercase tracking-[0.22em] text-primary">
              {after.label}
            </span>
            <div className="relative flex-1 min-h-[clamp(360px,40vw,480px)] overflow-hidden bg-brand-bg-dark luxury-hover-lift">
              <Image
                src={after.imageSrc}
                alt={after.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div>
              <h3 className="font-acumin-semi-cond text-xl uppercase tracking-[0.06em] text-brand-text">
                {after.title}
              </h3>
              <p className="mt-2 font-acumin-wide-light text-sm text-brand-text-muted">
                {after.caption}
              </p>
            </div>
          </FadeInScrollAnimation>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WorkTransformation;
