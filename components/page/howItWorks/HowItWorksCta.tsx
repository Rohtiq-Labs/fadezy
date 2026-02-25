"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { howItWorksContents } from "@/contents/howItWorksContents";
import Link from "next/link";
import { FC } from "react";

const HowItWorksCta: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subtext, buttonText, link } = howItWorksContents[lang].cta;

  return (
    <SectionContainer
      tight
      className="flex flex-col gap-12 pb-12"
      aria-labelledby="how-it-works-cta-heading"
    >
      <ArticleContainer
        title={headline}
        description={subtext}
        titleClassName="font-blinker [--heading-eighth-xl-font-size:clamp(34px,4.5vw,48px)] lg:[--heading-eighth-xl-font-size:clamp(30px,7vw,40px)]"
        lineClassName="h-[2px] lg:h-px"
        scrollTriggerVars={{
          start: () => "bottom bottom",
          end: () => "bottom bottom"
        }}
      />
      <div className="w-full flex justify-center">
        <Link
          href={link}
          aria-label={buttonText}
          className="inline-flex items-center justify-center font-acumin-wide-light font-semibold text-primary-dark px-8 py-3 rounded-sm bg-cta-gradient hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-brand-bg"
        >
          {buttonText}
        </Link>
      </div>
    </SectionContainer>
  );
};

export default HowItWorksCta;
