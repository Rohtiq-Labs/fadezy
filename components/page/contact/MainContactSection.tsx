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
      tight
      className="flex flex-col gap-6"
      aria-labelledby="main-contact-heading"
    >
      <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto lg:mx-0">
        <ParagraphBaseRelax className="text-secondary/80 text-lg">
          {intro}
        </ParagraphBaseRelax>
        <ContactForm />
      </div>
    </SectionContainer>
  );
};

export default MainContactSection;
