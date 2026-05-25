"use client";

import CinematicPageHero from "@/components/utilities/heroes/CinematicPageHero";
import { workContents } from "@/contents/workContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const WorkHero: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, subheadline, visualSrc, visualAlt } = workContents[lang].hero;

  return (
    <CinematicPageHero
      ariaLabelledBy="work-hero-heading"
      visualSrc={visualSrc}
      visualAlt={visualAlt}
    >
      <p className="font-blinker text-[11px] uppercase tracking-[0.24em] text-white/60">
        Fadezy Studio
      </p>
      <h1
        id="work-hero-heading"
        className="font-blinker font-light uppercase text-[clamp(40px,calc(((100vw-1024px)/896*28)+40px),88px)] leading-[0.95] tracking-[0.02em] text-white max-w-[16ch]"
      >
        {headline}
      </h1>
      <p className="font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.6] text-white/75 max-w-[min(520px,90vw)]">
        {subheadline}
      </p>
    </CinematicPageHero>
  );
};

export default WorkHero;
