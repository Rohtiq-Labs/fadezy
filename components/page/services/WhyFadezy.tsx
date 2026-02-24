"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import HeadingFourthXl from "@/components/utilities/headings/HeadingFourthXl";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { servicesContents } from "@/contents/servicesContents";
import { FC } from "react";

const WhyFadezy: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, items } = servicesContents[lang].whyFadezy;

  return (
    <SectionContainer
      tight
      className="flex flex-col gap-[clamp(24px,4vw,40px)]"
      aria-labelledby="why-fadezy-heading"
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
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
          {items.map(({ title, description: desc }, i) => (
            <article
              key={`${title}-${i}`}
              className="flex flex-col gap-4 min-w-0"
              aria-label={title}
            >
              <HeadingFourthXl className="text-accent font-acumin-semi-cond">{title}</HeadingFourthXl>
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

export default WhyFadezy;
