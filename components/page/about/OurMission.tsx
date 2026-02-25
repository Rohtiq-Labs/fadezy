"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { aboutContents } from "@/contents/AboutContents";
import { FC } from "react";

const OurMission: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description } = aboutContents[lang].mission;

  return (
    <SectionContainer
      tight
      className="flex flex-col gap-6"
      aria-labelledby="mission-heading"
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

export default OurMission;
