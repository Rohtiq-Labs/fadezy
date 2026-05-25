"use client";

import SpacingLgContainer from "@/components/utilities/containers/SpacingLgContainer";
import { cn } from "@/lib/tailwind/cn";
import { FC, ReactNode } from "react";

export const cinematicHeroSectionClass = cn(
  "w-full relative overflow-hidden",
  "min-h-[max(calc(var(--dvh)*100),640px)] h-[calc(var(--dvh)*100)]",
  "portrait:min-h-[85dvh] portrait:h-[85dvh]"
);

export const cinematicHeroContentClass = cn(
  "absolute inset-0 z-[2] flex flex-col text-white portrait:justify-center"
);

export const cinematicHeroInnerClass = cn(
  "h-full flex flex-col justify-center items-start gap-8",
  "portrait:h-auto portrait:min-h-0 overflow-visible luxury-fade-in"
);

type CinematicPageHeroProps = {
  ariaLabelledBy?: string;
  visualSrc: string;
  visualAlt: string;
  children: ReactNode;
  className?: string;
};

const CinematicPageHero: FC<CinematicPageHeroProps> = ({
  ariaLabelledBy,
  visualSrc,
  visualAlt,
  children,
  className,
}) => {
  return (
    <section
      className={cn(cinematicHeroSectionClass, className)}
      aria-labelledby={ariaLabelledBy}
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={visualSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 z-[1] luxury-cinematic-overlay" aria-hidden />

      <div className={cinematicHeroContentClass}>
        <SpacingLgContainer className={cinematicHeroInnerClass}>
          {children}
        </SpacingLgContainer>
      </div>

      <span className="sr-only">{visualAlt}</span>
    </section>
  );
};

export default CinematicPageHero;
