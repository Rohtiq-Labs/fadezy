"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { aboutContents } from "@/contents/AboutContents";
import { FC } from "react";

const RohtiqLabs: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, subtext } = aboutContents[lang].rohtiqLabs;

  return (
    <SectionContainer
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
      aria-labelledby="rohtiq-labs-heading"
    >
      <ArticleContainer
        title={heading}
        description={description}
        scrollTriggerVars={{
          start: () => "top center",
          end: () => "top center"
        }}
      />
      <ParagraphBaseRelax className="text-secondary/80 max-w-2xl">
        {subtext}
      </ParagraphBaseRelax>
    </SectionContainer>
  );
};

export default RohtiqLabs;
