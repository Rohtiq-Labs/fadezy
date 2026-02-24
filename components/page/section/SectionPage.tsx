"use client";

import SpacingLgContainer from "@/components/utilities/containers/SpacingLgContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import {
  pageSectionContents,
  type PageSectionKey
} from "@/contents/pageSectionContents";
import { FC } from "react";

interface Props {
  sectionKey: PageSectionKey;
}

const SectionPage: FC<Props> = ({ sectionKey }) => {
  const lang = useCurrentLanguages();
  const { heading, description } = pageSectionContents[lang][sectionKey];

  return (
    <SpacingLgContainer
      className="pt-24 pb-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)] min-h-[calc(var(--dvh)*100)] flex flex-col justify-center"
      aria-label={heading}
    >
      <h1 className="font-blinker font-normal text-[clamp(28px,4vw,48px)] leading-tight text-brand-text mb-4">
        {heading}
      </h1>
      <p className="text-brand-text-muted max-w-xl">{description}</p>
    </SpacingLgContainer>
  );
};

export default SectionPage;
