"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import {
  aboutContents,
  AboutShowcaseItem,
} from "@/contents/AboutContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { cn } from "@/lib/tailwind/cn";
import Image from "next/image";
import { FC, useRef } from "react";

const layoutClasses: Record<AboutShowcaseItem["layout"], string> = {
  wide: "col-span-8 min-h-[clamp(320px,38vw,480px)] lg:col-span-12",
  tall: "col-span-4 min-h-[clamp(420px,48vw,600px)] lg:col-span-12",
  standard: "col-span-6 min-h-[clamp(280px,28vw,360px)] lg:col-span-6 sm:col-span-12",
};

const AboutShowcase: FC = () => {
  const lang = useCurrentLanguages();
  const { items } = aboutContents[lang].showcase;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="about-showcase"
      className="bg-brand-bg-alt !mt-0 pt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={sectionRef}
      aria-label="Cinematic barber brand visual showcase"
    >
      <ul
        className="grid grid-cols-12 gap-[clamp(12px,calc(((100vw-1024px)/896*8)+12px),16px)] lg:grid-cols-1 sm:gap-5 w-full"
        role="list"
      >
        {items.map((item, index) => (
          <li
            key={`about-showcase-${index}`}
            className={cn(
              "relative overflow-hidden bg-brand-bg-dark group",
              layoutClasses[item.layout]
            )}
          >
            <FadeInScrollAnimation
              trigger={sectionRef}
              duration={1}
              className="absolute inset-0 block h-full w-full"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </FadeInScrollAnimation>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default AboutShowcase;
