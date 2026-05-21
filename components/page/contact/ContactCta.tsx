"use client";

import LuxuryCtaButton from "@/components/utilities/buttons/LuxuryCtaButton";
import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { contactContents } from "@/contents/contactContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const ContactCta: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subtext, buttonText, link } = contactContents[lang].cta;

  return (
    <SectionContainer
      id="contact-cta"
      className="bg-brand-bg-dark text-footer-text !mt-0 py-[clamp(96px,14vw,160px)]"
      aria-labelledby="contact-cta-heading"
    >
      <div className="flex flex-col items-start gap-8 max-w-[min(800px,100%)]">
        <h2
          id="contact-cta-heading"
          className="font-blinker font-light uppercase text-[clamp(40px,calc(((100vw-1024px)/896*28)+40px),72px)] leading-[1] tracking-[0.03em] text-footer-text"
        >
          {headline}
        </h2>
        <p className="font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.6] text-footer-link max-w-md">
          {subtext}
        </p>
        <LuxuryCtaButton href={link} variant="light" ariaLabel={buttonText}>
          {buttonText}
        </LuxuryCtaButton>
      </div>
    </SectionContainer>
  );
};

export default ContactCta;
