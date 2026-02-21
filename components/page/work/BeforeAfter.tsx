"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { workContents } from "@/contents/workContents";
import Image from "next/image";
import { FC } from "react";

const BeforeAfter: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, beforeLabel, afterLabel, beforeSrc, afterSrc } =
    workContents[lang].beforeAfter;

  return (
    <SectionContainer
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
      aria-labelledby="before-after-heading"
    >
      <ArticleContainer
        title={heading}
        description={description}
        scrollTriggerVars={{
          start: () => "top center",
          end: () => "top center"
        }}
      />
      <CustomScrollAnimation
        className="block w-full"
        scrollTriggerVars={{
          start: () => "center bottom",
          end: () => "center bottom"
        }}
        duration={0.75}
        trigger="self"
        styleFrom={{ opacity: 0, transform: "translateY(24px)" }}
        styleTo={{ opacity: 1, transform: "translateY(0)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          <div className="flex flex-col gap-4">
            <span className="font-acumin text-sm text-secondary/70 uppercase tracking-wider">
              {beforeLabel}
            </span>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-primary-dark">
              <Image
                src={beforeSrc}
                alt="Before: outdated salon website"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-acumin text-sm text-secondary/70 uppercase tracking-wider">
              {afterLabel}
            </span>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-primary-dark">
              <Image
                src={afterSrc}
                alt="After: premium modern salon website"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </CustomScrollAnimation>
    </SectionContainer>
  );
};

export default BeforeAfter;
