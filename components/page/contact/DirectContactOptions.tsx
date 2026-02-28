"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { contactContents } from "@/contents/contactContents";
import Link from "next/link";
import { FC } from "react";

const DirectContactOptions: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, whatsappLabel, whatsappLink, instagramLabel, instagramLink } =
    contactContents[lang].directContact;

  return (
    <SectionContainer
      tight
      className="flex flex-col gap-4"
      aria-labelledby="direct-contact-heading"
    >
      <div className="flex flex-row flex-wrap items-center justify-between gap-4 lg:flex-col lg:items-start lg:justify-start lg:gap-4 w-full max-w-2xl">
        <h2
          id="direct-contact-heading"
          className="font-blinker font-normal text-[clamp(24px,3vw,32px)] text-secondary shrink-0"
        >
          {heading}
        </h2>
        <div className="flex flex-row flex-wrap gap-4 lg:gap-6 items-center">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-[44px] font-acumin-wide-light font-semibold text-primary-dark px-6 py-3 rounded-sm bg-cta-gradient hover:opacity-95 transition-opacity w-fit"
            aria-label={`${whatsappLabel} - ${whatsappLink}`}
          >
            {whatsappLabel}
          </Link>
          <Link
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-[44px] font-acumin-wide-light text-secondary/80 hover:text-accent transition-colors w-fit"
            aria-label={instagramLabel}
          >
            {instagramLabel}
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default DirectContactOptions;
