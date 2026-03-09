"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { workContents } from "@/contents/workContents";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BeforeAfter: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, beforeLabel, afterLabel, beforeSrc, afterSrc, beforeLink, afterLink } =
    workContents[lang].beforeAfter;

  return (
    <SectionContainer
      tight
      className="flex flex-col gap-10 bg-secondary/[0.03] py-10 rounded-2xl"
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
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 w-full">
          <div className="flex flex-col gap-2">
            <span className="font-acumin-wide-light text-sm font-medium text-secondary/80 uppercase tracking-wider border-b border-secondary/20 pb-1 w-fit">
              {beforeLabel}
            </span>
            <Link
              href={beforeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-primary-dark border border-black/5 shadow-md hover:shadow-lg transition-shadow duration-300"
              aria-label="View THE FADE ROOM project"
            >
              <Image
                src={beforeSrc}
                alt="Before: THE FADE ROOM project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-acumin-wide-light text-sm font-medium text-secondary/80 uppercase tracking-wider border-b border-secondary/20 pb-1 w-fit">
              {afterLabel}
            </span>
            <Link
              href={afterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-primary-dark border border-black/5 shadow-md hover:shadow-lg transition-shadow duration-300"
              aria-label="View AR Barber Shop project"
            >
              <Image
                src={afterSrc}
                alt="After: AR Barber Shop project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </CustomScrollAnimation>
    </SectionContainer>
  );
};

export default BeforeAfter;
