"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import HeadingFourthXl from "@/components/utilities/headings/HeadingFourthXl";
import HeadingSm from "@/components/utilities/headings/HeadingSm";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { howItWorksContents } from "@/contents/howItWorksContents";
import { FC } from "react";

const ProcessSteps: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, steps } = howItWorksContents[lang].process;

  return (
    <SectionContainer
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
      aria-labelledby="process-heading"
    >
      <ArticleContainer
        title={heading}
        description={description}
        scrollTriggerVars={{
          start: () => "top center",
          end: () => "top center"
        }}
      />
      <ol className="flex flex-col gap-16 sm:gap-12" aria-label={heading}>
        {steps.map(({ step, title, bullets }, i) => (
          <li key={`${step}-${i}`} className="flex flex-col gap-6 sm:gap-4">
            <CustomScrollAnimation
              className="block w-full flex flex-col gap-6 sm:gap-4"
              scrollTriggerVars={{
                start: () => "center bottom",
                end: () => "center bottom"
              }}
              duration={0.75}
              trigger="self"
              styleFrom={{ opacity: 0, transform: "translateY(24px)" }}
              styleTo={{ opacity: 1, transform: "translateY(0)" }}
            >
              <div className="flex items-baseline gap-6 sm:gap-4">
                <HeadingSm
                  className="text-accent w-[3ch] shrink-0"
                  aria-hidden
                >
                  {step}
                </HeadingSm>
                <HeadingFourthXl className="text-secondary">{title}</HeadingFourthXl>
              </div>
              <ul className="flex flex-col gap-3 pl-[calc(3ch+24px)] sm:pl-[calc(3ch+16px)]">
                {bullets.map((bullet, j) => (
                  <li key={`${bullet}-${j}`} className="flex gap-2">
                    <span
                      className="text-accent shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent"
                      aria-hidden
                    />
                    <ParagraphBaseRelax className="text-secondary/85">
                      {bullet}
                    </ParagraphBaseRelax>
                  </li>
                ))}
              </ul>
            </CustomScrollAnimation>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
};

export default ProcessSteps;
