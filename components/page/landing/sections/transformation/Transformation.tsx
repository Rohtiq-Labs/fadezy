"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC, useRef } from "react";
import TransformationPanel from "./widget/TransformationPanel";

const Transformation: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, subheading } = landingContents[lang].transformation;
  const containerRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="transformation"
      className="!mt-[var(--section-spacing)] pb-[clamp(64px,10vw,120px)]"
      ref={containerRef}
    >
      <div className="flex flex-col gap-[clamp(40px,calc(((100vw-1024px)/896*40)+40px),80px)]">
        <ArticleContainer
          title={heading}
          description={subheading}
          customTriggerRef={containerRef}
          className="luxury-section-intro"
        />
        <TransformationPanel containerRef={containerRef} />
      </div>
    </SectionContainer>
  );
};

export default Transformation;
