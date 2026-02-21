"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import UnderlineButton from "@/components/utilities/buttons/UnderlineButton";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { howItWorksContents } from "@/contents/howItWorksContents";
import Link from "next/link";
import { FC } from "react";

const HowItWorksCta: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subtext, buttonText, link } = howItWorksContents[lang].cta;

  return (
    <SectionContainer
      className="flex flex-col gap-20"
      aria-labelledby="how-it-works-cta-heading"
    >
      <ArticleContainer
        title={headline}
        description={subtext}
        scrollTriggerVars={{
          start: () => "bottom bottom",
          end: () => "bottom bottom"
        }}
      />
      <div className="w-fit">
        <Link href={link} aria-label={buttonText}>
          <UnderlineButton>{buttonText}</UnderlineButton>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default HowItWorksCta;
