"use client";

import { contactContents } from "@/contents/contactContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const ContactHero: FC = () => {
  const lang = useCurrentLanguages();
  const { eyebrow, headline, subheadline, scrollCue, visualSrc, visualAlt } =
    contactContents[lang].hero;

  return (
    <section
      className="relative w-full min-h-[max(calc(var(--dvh)*88),520px)] h-[calc(var(--dvh)*88)] overflow-hidden"
      aria-labelledby="contact-hero-heading"
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
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="relative z-[1] flex h-full flex-col justify-end px-[clamp(40px,calc(((100vw-1024px)/896*88)+40px),128px)] pb-[clamp(48px,calc(((100vw-1024px)/896*48)+48px),96px)] lg:px-[clamp(16px,calc(((100vw-360px)/664*24)+16px),40px)]">
        <p className="font-blinker text-[11px] uppercase tracking-[0.24em] text-white/60 mb-6 luxury-fade-in">
          {eyebrow}
        </p>
        <h1
          id="contact-hero-heading"
          className="font-blinker font-light uppercase text-[clamp(36px,calc(((100vw-1024px)/896*24)+36px),80px)] leading-[0.95] tracking-[0.02em] text-white max-w-[18ch] luxury-fade-in"
        >
          {headline}
        </h1>
        <p className="mt-6 font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.6] text-white/75 max-w-[min(520px,90vw)] luxury-fade-in">
          {subheadline}
        </p>
        <a
          href="#contact-inquire"
          className="mt-12 font-blinker text-[11px] uppercase tracking-[0.22em] text-white/55 hover:text-white/90 transition-colors duration-500 ease-out luxury-fade-in"
        >
          {scrollCue}
          <span className="block mt-3 h-px w-8 bg-white/40" aria-hidden />
        </a>
        <span className="sr-only">{visualAlt}</span>
      </div>
    </section>
  );
};

export default ContactHero;
