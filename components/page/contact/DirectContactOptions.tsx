"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { contactContents } from "@/contents/contactContents";
import Link from "next/link";
import { FC } from "react";

const DirectContactOptions: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, whatsappLabel, whatsappLink, emailLabel, emailAddress, instagramLabel, instagramLink } =
    contactContents[lang].directContact;

  return (
    <SectionContainer
      className="flex flex-col gap-8"
      aria-labelledby="direct-contact-heading"
    >
      <h2
        id="direct-contact-heading"
        className="font-blinker font-normal text-[clamp(24px,3vw,32px)] text-secondary"
      >
        {heading}
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 flex-wrap">
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-acumin-wide-light font-semibold text-primary-dark px-8 py-3 rounded-sm bg-cta-gradient hover:opacity-95 transition-opacity w-fit"
          aria-label={`${whatsappLabel} - ${whatsappLink}`}
        >
          {whatsappLabel}
        </Link>
        <a
          href={`mailto:${emailAddress}`}
          className="font-acumin-wide-light text-accent hover:opacity-90 transition-opacity w-fit"
          aria-label={`${emailLabel}: ${emailAddress}`}
        >
          {emailAddress}
        </a>
        <Link
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-acumin-wide-light text-secondary/80 hover:text-accent transition-colors w-fit"
          aria-label={instagramLabel}
        >
          {instagramLabel}
        </Link>
      </div>
    </SectionContainer>
  );
};

export default DirectContactOptions;
