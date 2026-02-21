"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { howItWorksContents } from "@/contents/howItWorksContents";
import { FC } from "react";

const HowItWorksHero: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subheadline } = howItWorksContents[lang].hero;

  return (
    <SectionContainer aria-label={headline}>
      <ArticleContainer title={headline} description={subheadline} />
    </SectionContainer>
  );
};

export default HowItWorksHero;
