"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { contactContents } from "@/contents/contactContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";
import ContactForm from "./ContactForm";

const ContactFormSection: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, heading, intro } = contactContents[lang].form;

  return (
    <SectionContainer
      id="contact-inquire"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)] scroll-mt-8"
      aria-labelledby="contact-form-heading"
    >
      <div className="grid grid-cols-12 gap-[clamp(32px,calc(((100vw-1024px)/896*40)+32px),64px)] lg:grid-cols-1">
        <header className="col-span-4 lg:col-span-12">
          <p className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted mb-4">
            {eyebrow}
          </p>
          <h2
            id="contact-form-heading"
            className="font-blinker font-light uppercase text-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),52px)] leading-[1.05] tracking-[0.03em] text-brand-text max-w-[12ch]"
          >
            {heading}
          </h2>
          <p className="mt-6 font-acumin-wide-light text-sm text-brand-text-muted leading-[1.65] max-w-[280px]">
            {intro}
          </p>
        </header>
        <div className="col-span-8 lg:col-span-12">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactFormSection;
