"use client";

import CinematicPageHero from "@/components/utilities/heroes/CinematicPageHero";
import { contactContents } from "@/contents/contactContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const ContactHero: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, headline, subheadline, scrollCue, visualSrc, visualAlt } =
    contactContents[lang].hero;

  return (
    <CinematicPageHero
      ariaLabelledBy="contact-hero-heading"
      visualSrc={visualSrc}
      visualAlt={visualAlt}
    >
      <p className="font-blinker text-[11px] uppercase tracking-[0.24em] text-white/60">
        {eyebrow}
      </p>
      <h1
        id="contact-hero-heading"
        className="font-blinker font-light uppercase text-[clamp(40px,calc(((100vw-1024px)/896*28)+40px),88px)] leading-[0.95] tracking-[0.02em] text-white max-w-[18ch]"
      >
        {headline}
      </h1>
      <p className="font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.6] text-white/75 max-w-[min(520px,90vw)]">
        {subheadline}
      </p>
      <a
        href="#contact-inquire"
        className="font-blinker text-[11px] uppercase tracking-[0.22em] text-white/55 hover:text-white/90 transition-colors duration-500 ease-out"
      >
        {scrollCue}
        <span className="block mt-3 h-px w-8 bg-white/40" aria-hidden />
      </a>
    </CinematicPageHero>
  );
};

export default ContactHero;
