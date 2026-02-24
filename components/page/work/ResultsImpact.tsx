"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { workContents } from "@/contents/workContents";
import { FC } from "react";

const ResultsImpact: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, items } = workContents[lang].results;

  return (
    <SectionContainer
      tight
      className="flex flex-col gap-6"
      aria-labelledby="results-heading"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 w-full">
          {items.map((item, i) => (
            <div
              key={`${item.stat}-${i}`}
              className="text-center sm:text-left"
            >
              <p className="font-blinker font-normal text-[clamp(36px,5vw,56px)] text-accent leading-none mb-2">
                {item.stat}
              </p>
              <p className="font-acumin-wide-light text-secondary/70 text-sm uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </CustomScrollAnimation>
    </SectionContainer>
  );
};

export default ResultsImpact;
