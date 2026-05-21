"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC, useRef } from "react";
import InquiryForm from "./widget/InquiryForm";

const GetInTouch: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description } = landingContents[lang]["get-in-touch"];
  const containerRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="get-in-touch"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={containerRef}
    >
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-[clamp(40px,calc(((100vw-1024px)/896*64)+40px),120px)] items-start">
        <ArticleContainer
          title={heading}
          description={description}
          customTriggerRef={containerRef}
          className="luxury-section-intro"
        />
        <InquiryForm />
      </div>
    </SectionContainer>
  );
};

export default GetInTouch;
