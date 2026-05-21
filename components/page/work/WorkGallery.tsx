"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { workContents, WorkGalleryItem } from "@/contents/workContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { cn } from "@/lib/tailwind/cn";
import Image from "next/image";
import { FC, useRef } from "react";

const layoutClasses: Record<WorkGalleryItem["layout"], string> = {
  wide: "col-span-8 min-h-[clamp(280px,32vw,400px)] lg:col-span-12",
  tall: "col-span-4 min-h-[clamp(400px,48vw,560px)] lg:col-span-12",
  standard: "col-span-4 min-h-[clamp(280px,28vw,360px)] lg:col-span-6 sm:col-span-12",
};

const WorkGallery: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, subheading, items } = workContents[lang].gallery;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="work-gallery"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={sectionRef}
      aria-labelledby="work-gallery-heading"
    >
      <div className="flex flex-col gap-[clamp(40px,calc(((100vw-1024px)/896*40)+40px),72px)]">
        <header className="max-w-[min(640px,100%)]">
          <h2
            id="work-gallery-heading"
            className="font-blinker font-light uppercase text-[clamp(36px,calc(((100vw-1024px)/896*20)+36px),56px)] leading-[1] tracking-[0.03em] text-brand-text"
          >
            {heading}
          </h2>
          <p className="mt-5 font-acumin-wide-light text-brand-text-muted text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] leading-[1.6]">
            {subheading}
          </p>
        </header>

        <ul
          className="grid grid-cols-12 gap-[clamp(12px,calc(((100vw-1024px)/896*8)+12px),16px)] lg:grid-cols-1 sm:gap-5 w-full"
          role="list"
        >
          {items.map((item, index) => (
            <li
              key={`gallery-${index}-${item.alt}`}
              className={cn(
                "relative overflow-hidden bg-brand-bg-dark group",
                layoutClasses[item.layout]
              )}
            >
              <FadeInScrollAnimation
                trigger={sectionRef}
                duration={0.9}
                className="absolute inset-0 block h-full w-full"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </FadeInScrollAnimation>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default WorkGallery;
