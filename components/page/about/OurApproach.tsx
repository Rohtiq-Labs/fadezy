"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import HeadingFourthXl from "@/components/utilities/headings/HeadingFourthXl";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { aboutContents } from "@/contents/AboutContents";
import { FC, useRef } from "react";

const OurApproach: FC = () => {
  const lang = useCurrentLanguages();
  const containerRef = useRef<HTMLUListElement>(null);
  const { heading, description, items } = aboutContents[lang].approach;

  return (
    <SectionContainer
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
      aria-labelledby="approach-heading"
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
        trigger={containerRef}
        styleFrom={{
          transform: "scaleX(0)",
          transformOrigin: "left"
        }}
        styleTo={{
          transform: "scaleX(1)"
        }}
        duration={0.75}
        scrollTriggerVars={{
          start: () => "center bottom",
          end: () => "center bottom"
        }}
      >
        <ul
          className="flex flex-col w-full border-t-2 border-t-white/50"
          ref={containerRef}
          aria-label={heading}
        >
          {items.map(({ title, description: desc }, i) => (
            <li
              key={`${title}-${i}`}
              className="border-b-2 border-b-white/50 py-6 w-full"
            >
              <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:px-2">
                <HeadingFourthXl className="text-secondary max-w-[290px]">
                  {title}
                </HeadingFourthXl>
                <ParagraphBaseRelax className="max-w-[450px] md:opacity-75 text-secondary/90">
                  {desc}
                </ParagraphBaseRelax>
              </div>
            </li>
          ))}
        </ul>
      </CustomScrollAnimation>
    </SectionContainer>
  );
};

export default OurApproach;
