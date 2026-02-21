"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import HeadingFourthXl from "@/components/utilities/headings/HeadingFourthXl";
import HeadingSm from "@/components/utilities/headings/HeadingSm";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { servicesContents } from "@/contents/servicesContents";
import { FC } from "react";

const HowItWorks: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, steps } = servicesContents[lang].howItWorks;

  return (
    <SectionContainer
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
      aria-labelledby="how-it-works-heading"
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
        <ol
          className="flex flex-col gap-12 sm:gap-8"
          aria-label={heading}
        >
          {steps.map(({ step, label }, i) => (
            <li
              key={`${step}-${i}`}
              className="flex items-start gap-8 sm:gap-6"
            >
              <HeadingSm className="text-accent w-[3ch] shrink-0" aria-hidden>
                {step}
              </HeadingSm>
              <HeadingFourthXl className="text-secondary pt-0.5">
                {label}
              </HeadingFourthXl>
            </li>
          ))}
        </ol>
      </CustomScrollAnimation>
    </SectionContainer>
  );
};

export default HowItWorks;
