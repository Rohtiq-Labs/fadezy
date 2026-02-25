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
      tight
      className="flex flex-col gap-6"
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
