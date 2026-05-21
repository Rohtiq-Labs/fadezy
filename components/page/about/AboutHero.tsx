"use client";

import LuxuryCtaButton from "@/components/utilities/buttons/LuxuryCtaButton";
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
    <section
      className="relative w-full min-h-[max(calc(var(--dvh)*88),520px)] h-[calc(var(--dvh)*88)] overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={visualSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="relative z-[1] flex h-full flex-col justify-end px-[clamp(40px,calc(((100vw-1024px)/896*88)+40px),128px)] pb-[clamp(48px,calc(((100vw-1024px)/896*48)+48px),96px)] lg:px-[clamp(16px,calc(((100vw-360px)/664*24)+16px),40px)]">
        <p className="font-blinker text-[11px] uppercase tracking-[0.24em] text-white/60 mb-6 luxury-fade-in">
          {eyebrow}
        </p>
        <h1
          id="about-hero-heading"
          className="font-blinker font-light uppercase text-[clamp(40px,calc(((100vw-1024px)/896*28)+40px),88px)] leading-[0.95] tracking-[0.02em] text-white max-w-[16ch] luxury-fade-in"
        >
          {headline}
        </h1>
        <p className="mt-6 font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.6] text-white/75 max-w-[min(520px,90vw)] luxury-fade-in">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 luxury-fade-in">
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
        <span className="sr-only">{visualAlt}</span>
      </div>
    </section>
  );
};

export default AboutHero;
