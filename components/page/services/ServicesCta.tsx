"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import UnderlineButton from "@/components/utilities/buttons/UnderlineButton";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { servicesContents } from "@/contents/servicesContents";
import Link from "next/link";
import { FC } from "react";

const ServicesCta: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subtext, buttonText, link } = servicesContents[lang].cta;

  return (
    <SectionContainer
      className="flex flex-col gap-20"
      aria-labelledby="services-cta-heading"
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

export default ServicesCta;
