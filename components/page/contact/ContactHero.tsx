"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { contactContents } from "@/contents/contactContents";
import { FC } from "react";

const ContactHero: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subheadline } = contactContents[lang].hero;

  return (
    <SectionContainer aria-label={headline} className="pb-10 border-b border-brand-border/60">
      <ArticleContainer title={headline} description={subheadline} />
    </SectionContainer>
  );
};

export default ContactHero;
