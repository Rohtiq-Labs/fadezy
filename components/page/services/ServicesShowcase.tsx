"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { servicesContents } from "@/contents/servicesContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { cn } from "@/lib/tailwind/cn";
import Image from "next/image";
import { FC, useRef } from "react";

const layoutByIndex = [
  "col-span-7 min-h-[clamp(360px,42vw,480px)] lg:col-span-12",
  "col-span-5 min-h-[clamp(300px,34vw,400px)] lg:col-span-6 sm:col-span-12",
  "col-span-5 min-h-[clamp(300px,34vw,400px)] lg:col-span-6 sm:col-span-12",
  "col-span-7 min-h-[clamp(360px,42vw,480px)] lg:col-span-12",
] as const;

const ServicesShowcase: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, heading, description, offerings } =
    servicesContents[lang].showcase;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="services-showcase"
      className="bg-brand-bg-alt !mt-0 pt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={sectionRef}
      aria-labelledby="services-showcase-heading"
    >
      <div className="flex flex-col gap-[clamp(48px,calc(((100vw-1024px)/896*48)+48px),88px)]">
        <header className="max-w-[min(720px,100%)]">
          <p className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted mb-4">
            {eyebrow}
          </p>
          <h2
            id="services-showcase-heading"
            className="font-blinker font-light uppercase text-[clamp(36px,calc(((100vw-1024px)/896*20)+36px),56px)] leading-[1] tracking-[0.03em] text-brand-text"
          >
            {heading}
          </h2>
          <p className="mt-5 font-acumin-wide-light text-brand-text-muted text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] leading-[1.6]">
            {description}
          </p>
        </header>

        <ul
          className="grid grid-cols-12 gap-[clamp(12px,calc(((100vw-1024px)/896*8)+12px),16px)] lg:grid-cols-1 sm:gap-5 w-full"
          role="list"
        >
          {offerings.map((offering, index) => (
            <li
              key={offering.title}
              className={cn(
                "group relative overflow-hidden bg-brand-bg-dark",
                layoutByIndex[index] ?? layoutByIndex[0]
              )}
            >
              <FadeInScrollAnimation
                trigger={sectionRef}
                duration={1}
                className="absolute inset-0 block h-full w-full"
              >
                <div className="relative h-full w-full min-h-[inherit]">
                  <Image
                    src={offering.imageSrc}
                    alt={offering.imageAlt}
                    fill
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </FadeInScrollAnimation>
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-[clamp(20px,calc(((100vw-1024px)/896*16)+20px),32px)]">
                <span className="font-blinker text-[10px] uppercase tracking-[0.22em] text-white/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-acumin-semi-cond text-[clamp(20px,calc(((100vw-1024px)/896*6)+20px),28px)] uppercase tracking-[0.04em] text-white leading-[1.15]">
                  {offering.title}
                </h3>
                <p className="mt-2 font-acumin-wide-light text-sm text-white/70 max-w-md leading-[1.5]">
                  {offering.tagline}
                </p>
                <span
                  className="mt-4 block h-px w-0 bg-white/70 transition-all duration-700 ease-out group-hover:w-12"
                  aria-hidden
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default ServicesShowcase;
