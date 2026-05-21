"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import LuxuryCtaButton from "@/components/utilities/buttons/LuxuryCtaButton";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { workContents } from "@/contents/workContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { cn } from "@/lib/tailwind/cn";
import Image from "next/image";
import { FC, useRef } from "react";

const FeaturedProjects: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, heading, description, viewProjectLabel, projects } =
    workContents[lang].featured;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="featured-work"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={sectionRef}
      aria-labelledby="featured-work-heading"
    >
      <div className="flex flex-col gap-[clamp(56px,calc(((100vw-1024px)/896*56)+56px),100px)]">
        <header className="max-w-[min(720px,100%)]">
          <p className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted mb-4">
            {eyebrow}
          </p>
          <h2
            id="featured-work-heading"
            className="font-blinker font-light uppercase text-[clamp(40px,calc(((100vw-1024px)/896*24)+40px),64px)] leading-[1] tracking-[0.03em] text-brand-text"
          >
            {heading}
          </h2>
          <p className="mt-6 font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.65] text-brand-text-muted">
            {description}
          </p>
        </header>

        <div className="flex flex-col gap-[clamp(64px,calc(((100vw-1024px)/896*64)+64px),120px)]">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.brandName}
                className="grid grid-cols-12 gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),48px)] items-center lg:grid-cols-1"
              >
                <FadeInScrollAnimation
                  trigger={sectionRef}
                  duration={1}
                  scrollTriggerVars={{
                    start: () => "top 82%",
                    end: () => "top 82%",
                  }}
                  className={cn(
                    "block col-span-7 min-h-[clamp(320px,42vw,520px)] overflow-hidden bg-brand-bg-dark lg:col-span-12",
                    isReversed ? "col-start-6 lg:col-start-auto" : "col-start-1",
                    isReversed && "lg:order-2"
                  )}
                >
                  <div className="relative h-full min-h-[inherit] w-full">
                  <Image
                    src={project.mockupSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
                    aria-hidden
                  />
                  </div>
                </FadeInScrollAnimation>

                <FadeInScrollAnimation
                  trigger={sectionRef}
                  duration={1}
                  scrollTriggerVars={{
                    start: () => "top 82%",
                    end: () => "top 82%",
                  }}
                  className={cn(
                    "col-span-5 flex flex-col gap-6 lg:col-span-12",
                    isReversed ? "col-start-1 row-start-1" : "col-start-8",
                    isReversed && "lg:order-1"
                  )}
                >
                  <span className="font-blinker text-[11px] uppercase tracking-[0.2em] text-brand-text-muted">
                    {String(index + 1).padStart(2, "0")} — {project.category}
                  </span>
                  <h3 className="font-acumin-semi-cond text-[clamp(28px,calc(((100vw-1024px)/896*12)+28px),40px)] uppercase tracking-[0.04em] text-brand-text leading-[1.1]">
                    {project.brandName}
                  </h3>
                  <p className="font-acumin-wide-light text-brand-text-muted text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] leading-[1.55] max-w-md">
                    {project.tagline}
                  </p>
                  <LuxuryCtaButton
                    href={project.demoLink}
                    variant="dark"
                    ariaLabel={`${viewProjectLabel}: ${project.brandName}`}
                    className="w-fit mt-2"
                  >
                    {viewProjectLabel}
                  </LuxuryCtaButton>
                </FadeInScrollAnimation>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeaturedProjects;
