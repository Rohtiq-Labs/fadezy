"use client";

import { workContents } from "@/contents/workContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const WorkHero: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subheadline, visualSrc, visualAlt } = workContents[lang].hero;

  return (
    <section
      className="relative w-full min-h-[max(calc(var(--dvh)*88),520px)] h-[calc(var(--dvh)*88)] overflow-hidden"
      aria-labelledby="work-hero-heading"
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
          Fadezy Studio
        </p>
        <h1
          id="work-hero-heading"
          className="font-blinker font-light uppercase text-[clamp(48px,calc(((100vw-1024px)/896*32)+48px),96px)] leading-[0.95] tracking-[0.02em] text-white max-w-[14ch] luxury-fade-in"
        >
          {headline}
        </h1>
        <p className="mt-6 font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.6] text-white/75 max-w-[min(480px,90vw)] luxury-fade-in">
          {subheadline}
        </p>
        <span className="sr-only">{visualAlt}</span>
      </div>
    </section>
  );
};

export default WorkHero;
