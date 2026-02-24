"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { workContents } from "@/contents/workContents";
import { FC } from "react";

const WorkHero: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subheadline } = workContents[lang].hero;

  return (
    <SectionContainer aria-label={headline} className="pb-10 border-b border-brand-border/60">
      <ArticleContainer title={headline} description={subheadline} />
    </SectionContainer>
  );
};

export default WorkHero;
