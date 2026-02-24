"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { servicesContents } from "@/contents/servicesContents";
import { FC } from "react";

const ServicesHero: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subheadline } = servicesContents[lang].hero;

  return (
    <SectionContainer aria-label={headline} className="pb-10">
      <ArticleContainer title={headline} description={subheadline} />
    </SectionContainer>
  );
};

export default ServicesHero;
