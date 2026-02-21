"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import UnderlineButton from "@/components/utilities/buttons/UnderlineButton";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { contactContents } from "@/contents/contactContents";
import Link from "next/link";
import { FC } from "react";

const ContactCta: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subtext, buttonText, link } = contactContents[lang].cta;

  return (
    <SectionContainer
      className="flex flex-col gap-20"
      aria-labelledby="contact-cta-heading"
    >
      <ArticleContainer
        title={headline}
        description={subtext}
        scrollTriggerVars={{
          start: () => "bottom bottom",
          end: () => "bottom bottom"
        }}
      />
      <div className="w-fit">
        <Link href={link} aria-label={buttonText}>
          <UnderlineButton>{buttonText}</UnderlineButton>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default ContactCta;
