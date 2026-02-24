"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
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
      tight
      className="flex flex-col gap-[clamp(24px,4vw,40px)]"
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
      <ul
        className="flex flex-col w-full border-t border-t-brand-border/70"
        ref={containerRef}
        aria-label={heading}
      >
        {services.map(({ title, description: desc }, i) => (
          <li
            key={`${title}-${i}`}
            className="border-b border-b-brand-border/70 py-5 w-full"
          >
            <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:px-2">
                <span className="inline-flex gap-[4.375vw]">
                  <HeadingSm className="w-[3ch]">{`0${i + 1}.`}</HeadingSm>
                  <HeadingFourthXl className="max-w-[290px] text-secondary font-acumin-semi-cond">
                    {title}
                  </HeadingFourthXl>
                </span>
                <ParagraphBaseRelax className="max-w-[450px] md:opacity-75 text-secondary/90">
                  {desc}
                </ParagraphBaseRelax>
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default CoreServices;
