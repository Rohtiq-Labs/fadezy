"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { contactContents } from "@/contents/contactContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import Link from "next/link";
import { FC } from "react";

const ContactDetails: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, items } = contactContents[lang].details;

  return (
    <SectionContainer
      id="contact-details"
      className="bg-brand-bg-alt !mt-0 pt-[var(--section-spacing)] pb-[clamp(64px,10vw,100px)] border-y border-brand-border"
      aria-labelledby="contact-details-heading"
    >
      <p className="font-blinker text-[11px] uppercase tracking-[0.22em] text-brand-text-muted mb-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)]">
        {eyebrow}
      </p>
      <ul
        className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-[clamp(32px,calc(((100vw-1024px)/896*24)+32px),56px)] w-full"
        role="list"
        aria-labelledby="contact-details-heading"
      >
        <span id="contact-details-heading" className="sr-only">
          Contact details
        </span>
        {items.map((item) => (
          <li key={item.label} className="flex flex-col gap-2">
            <span className="font-blinker text-[10px] uppercase tracking-[0.2em] text-brand-text-muted">
              {item.label}
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className="font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] text-brand-text hover:text-primary transition-colors duration-500"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {item.value}
              </Link>
            ) : (
              <span className="font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*2)+15px),17px)] text-brand-text">
                {item.value}
              </span>
            )}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default ContactDetails;
