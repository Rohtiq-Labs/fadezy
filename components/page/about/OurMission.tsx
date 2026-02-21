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
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
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
