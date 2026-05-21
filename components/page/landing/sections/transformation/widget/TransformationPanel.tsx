"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import Image from "next/image";
import { FC, RefObject } from "react";

interface Props {
  containerRef: RefObject<HTMLElement | null>;
}

const TransformationPanel: FC<Props> = ({ containerRef }) => {
  const lang = useCurrentLanguages();
  const { before, after } = landingContents[lang].transformation;

  return (
    <div
      className="
        grid
        grid-cols-[1fr_auto_1fr]
        gap-[clamp(8px,calc(((100vw-1024px)/896*24)+8px),48px)]
        items-center
        w-full
        min-w-0
      "
      role="group"
      aria-label={`${before.label} ${after.label}`}
    >
      <FadeInScrollAnimation trigger={containerRef} duration={1}>
        <figure className="flex flex-col gap-[clamp(6px,1.5vw,16px)] w-full min-w-0">
          <span className="font-blinker text-[clamp(9px,2vw,11px)] uppercase tracking-[0.18em] text-brand-text-muted">
            {before.label}
          </span>
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-bg-alt">
            <Image
              src={before.imageSrc}
              alt={before.caption}
              fill
              className="object-cover object-top opacity-70 grayscale"
              sizes="(max-width: 640px) 42vw, (max-width: 1024px) 45vw, 40vw"
            />
          </div>
          <figcaption className="font-acumin-wide-light text-[clamp(9px,1.8vw,14px)] text-brand-text-muted leading-snug">
            {before.caption}
          </figcaption>
        </figure>
      </FadeInScrollAnimation>

      <div
        className="
          flex
          shrink-0
          items-center
          justify-center
          font-blinker
          text-[clamp(18px,calc(((100vw-1024px)/896*12)+18px),40px)]
          text-brand-text
          px-[clamp(2px,0.5vw,8px)]
        "
        aria-hidden
      >
        →
      </div>

      <FadeInScrollAnimation trigger={containerRef} duration={1}>
        <figure className="flex flex-col gap-[clamp(6px,1.5vw,16px)] w-full min-w-0">
          <span className="font-blinker text-[clamp(9px,2vw,11px)] uppercase tracking-[0.18em] text-primary">
            {after.label}
          </span>
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-bg-alt luxury-hover-lift">
            <Image
              src={after.imageSrc}
              alt={after.caption}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 42vw, (max-width: 1024px) 45vw, 40vw"
            />
          </div>
          <figcaption className="font-acumin-semi-cond text-[clamp(9px,1.8vw,14px)] text-brand-text leading-snug">
            {after.caption}
          </figcaption>
        </figure>
      </FadeInScrollAnimation>
    </div>
  );
};

export default TransformationPanel;
