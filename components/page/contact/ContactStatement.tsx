"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { contactContents } from "@/contents/contactContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const ContactStatement: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, support } = contactContents[lang].statement;

  return (
    <SectionContainer
      id="contact-statement"
      className="!mt-[var(--section-spacing)] py-[clamp(96px,14vw,180px)] text-center"
      aria-labelledby="contact-statement-heading"
    >
      <blockquote className="mx-auto max-w-[min(720px,100%)]">
        <h2
          id="contact-statement-heading"
          className="font-blinker font-light uppercase text-[clamp(28px,calc(((100vw-1024px)/896*20)+28px),56px)] leading-[1.1] tracking-[0.03em] text-brand-text"
        >
          {heading}
        </h2>
        <p className="mt-8 font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] leading-[1.7] text-brand-text-muted mx-auto max-w-[420px]">
          {support}
        </p>
      </blockquote>
    </SectionContainer>
  );
};

export default ContactStatement;
