"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import HeadingFourthXl from "@/components/utilities/headings/HeadingFourthXl";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { aboutContents } from "@/contents/AboutContents";
import { FC } from "react";

const WhySalons: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, items } = aboutContents[lang].whySalons;

  return (
    <SectionContainer
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
      aria-labelledby="why-salons-heading"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 w-full">
          {items.map(({ title, description: desc }, i) => (
            <article
              key={`${title}-${i}`}
              className="flex flex-col gap-4"
              aria-label={title}
            >
              <HeadingFourthXl className="text-accent">{title}</HeadingFourthXl>
              <ParagraphBaseRelax className="text-secondary/80 max-w-sm">
                {desc}
              </ParagraphBaseRelax>
            </article>
          ))}
        </div>
      </CustomScrollAnimation>
    </SectionContainer>
  );
};

export default WhySalons;
