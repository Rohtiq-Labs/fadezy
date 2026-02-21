"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { contactContents } from "@/contents/contactContents";
import { FC } from "react";

const TrustStatement: FC = () => {
  const lang = useCurrentLanguages();
  const { text } = contactContents[lang].trustStatement;

  return (
    <SectionContainer
      className="flex flex-col items-center text-center"
      aria-label="Trust statement"
    >
      <ParagraphBaseRelax className="text-secondary/70 max-w-2xl">
        {text}
      </ParagraphBaseRelax>
    </SectionContainer>
  );
};

export default TrustStatement;
