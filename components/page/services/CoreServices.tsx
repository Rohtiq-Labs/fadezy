"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import HeadingFourthXl from "@/components/utilities/headings/HeadingFourthXl";
import HeadingSm from "@/components/utilities/headings/HeadingSm";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { servicesContents } from "@/contents/servicesContents";
import { FC, useRef } from "react";

const CoreServices: FC = () => {
  const lang = useCurrentLanguages();
  const containerRef = useRef<HTMLUListElement>(null);
  const { heading, description, services } = servicesContents[lang].coreServices;

  return (
    <SectionContainer
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
      aria-labelledby="core-services-heading"
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
          {services.map(({ title, description: desc }, i) => (
            <li
              key={`${title}-${i}`}
              className="border-b-2 border-b-white/50 py-6 w-full"
            >
              <CustomScrollAnimation
                trigger={containerRef}
                className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:px-2"
                styleFrom={{
                  opacity: 0,
                  filter: "blur(8px)"
                }}
                styleTo={{
                  opacity: 1,
                  filter: "blur(0px)"
                }}
                duration={0.3}
                delay={0.65}
                scrollTriggerVars={{
                  start: () => "center bottom",
                  end: () => "center bottom"
                }}
              >
                <span className="inline-flex gap-[4.375vw]">
                  <HeadingSm className="w-[3ch]">{`0${i + 1}.`}</HeadingSm>
                  <HeadingFourthXl className="max-w-[290px] text-secondary">
                    {title}
                  </HeadingFourthXl>
                </span>
                <ParagraphBaseRelax className="max-w-[450px] md:opacity-75 text-secondary/90">
                  {desc}
                </ParagraphBaseRelax>
              </CustomScrollAnimation>
            </li>
          ))}
        </ul>
      </CustomScrollAnimation>
    </SectionContainer>
  );
};

export default CoreServices;
