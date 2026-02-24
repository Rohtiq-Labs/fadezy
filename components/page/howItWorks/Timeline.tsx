"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { howItWorksContents } from "@/contents/howItWorksContents";
import { FC } from "react";

const Timeline: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description } = howItWorksContents[lang].timeline;

  return (
    <SectionContainer
      tight
      className="flex flex-col gap-6"
      aria-labelledby="timeline-heading"
    >
      <ArticleContainer
        title={heading}
        description={description}
        scrollTriggerVars={{
          start: () => "top center",
          end: () => "top center"
        }}
      />
    </SectionContainer>
  );
};

export default Timeline;
