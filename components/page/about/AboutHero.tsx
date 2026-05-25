"use client";

import LuxuryCtaButton from "@/components/utilities/buttons/LuxuryCtaButton";
import CinematicPageHero from "@/components/utilities/heroes/CinematicPageHero";
import { aboutContents } from "@/contents/AboutContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import Link from "next/link";
import { FC } from "react";

const AboutHero: FC = () => {
  const lang = useCurrentLanguages();
  const {
    eyebrow,
    headline,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    visualSrc,
    visualAlt,
  } = aboutContents[lang].hero;

  return (
    <CinematicPageHero
      ariaLabelledBy="about-hero-heading"
      visualSrc={visualSrc}
      visualAlt={visualAlt}
    >
      <p className="font-blinker text-[11px] uppercase tracking-[0.24em] text-white/60">
        {eyebrow}
      </p>
      <h1
        id="about-hero-heading"
        className="font-blinker font-light uppercase text-[clamp(40px,calc(((100vw-1024px)/896*28)+40px),88px)] leading-[0.95] tracking-[0.02em] text-white max-w-[16ch]"
      >
        {headline}
      </h1>
      <p className="font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.6] text-white/75 max-w-[min(520px,90vw)]">
        {subheadline}
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <LuxuryCtaButton
          href={ctaPrimary.link}
          variant="light"
          ariaLabel={ctaPrimary.text}
        >
          {ctaPrimary.text}
        </LuxuryCtaButton>
        <Link
          href={ctaSecondary.link}
          className="font-acumin-wide-light text-[13px] uppercase tracking-[0.18em] text-white/75 hover:text-white transition-colors duration-500 ease-out border-b border-transparent hover:border-white/50 pb-0.5"
        >
          {ctaSecondary.text}
        </Link>
      </div>
    </CinematicPageHero>
  );
};

export default AboutHero;
