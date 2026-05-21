"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { servicesContents } from "@/contents/servicesContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import Image from "next/image";
import { FC, useRef } from "react";

const ServicesFeatured: FC = () => {
  const lang = useCurrentLanguages();
  const {
    eyebrow,
    heading,
    tagline,
    description,
    imageSrc,
    imageAlt,
    mobileSrc,
    mobileAlt,
  } = servicesContents[lang].featured;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="services-featured"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={sectionRef}
      aria-labelledby="services-featured-heading"
    >
      <div className="flex flex-col gap-[clamp(40px,calc(((100vw-1024px)/896*40)+40px),72px)]">
        <header className="max-w-[min(640px,100%)]">
          <p className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted mb-4">
            {eyebrow}
          </p>
          <h2
            id="services-featured-heading"
            className="font-blinker font-light uppercase text-[clamp(40px,calc(((100vw-1024px)/896*24)+40px),64px)] leading-[1] tracking-[0.03em] text-brand-text"
          >
            {heading}
          </h2>
          <p className="mt-4 font-acumin-semi-cond text-lg uppercase tracking-[0.08em] text-brand-text">
            {tagline}
          </p>
          <p className="mt-5 font-acumin-wide-light text-brand-text-muted text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] leading-[1.65] max-w-lg">
            {description}
          </p>
        </header>

        <FadeInScrollAnimation trigger={sectionRef} duration={1}>
          <div className="grid grid-cols-12 gap-[clamp(16px,calc(((100vw-1024px)/896*12)+16px),24px)] items-end lg:grid-cols-1">
            <div className="col-span-8 relative min-h-[clamp(360px,45vw,560px)] overflow-hidden bg-brand-bg-dark lg:col-span-12">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" aria-hidden />
            </div>
            <div className="col-span-4 relative min-h-[clamp(420px,50vw,620px)] overflow-hidden bg-brand-bg-dark lg:col-span-12 lg:min-h-[400px]">
              <Image
                src={mobileSrc}
                alt={mobileAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
            </div>
          </div>
        </FadeInScrollAnimation>
      </div>
    </SectionContainer>
  );
};

export default ServicesFeatured;
