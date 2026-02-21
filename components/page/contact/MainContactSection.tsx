"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import ContactForm from "./ContactForm";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { contactContents } from "@/contents/contactContents";
import { FC } from "react";

const MainContactSection: FC = () => {
  const lang = useCurrentLanguages();
  const { intro } = contactContents[lang].mainContact;

  return (
    <SectionContainer
      className="flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]"
      aria-labelledby="main-contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 w-full max-w-5xl">
        <article className="flex flex-col justify-center">
          <ParagraphBaseRelax className="text-secondary/80 max-w-md text-lg">
            {intro}
          </ParagraphBaseRelax>
        </article>
        <div className="flex flex-col lg:items-end">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};

export default MainContactSection;
