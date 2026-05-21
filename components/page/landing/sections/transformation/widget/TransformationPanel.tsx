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
        lg:grid-cols-1
        gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),48px)]
        items-center
        w-full
      "
      role="group"
      aria-label={`${before.label} ${after.label}`}
    >
      <FadeInScrollAnimation trigger={containerRef} duration={1}>
        <figure className="flex flex-col gap-4 w-full">
          <span className="font-blinker text-[11px] uppercase tracking-[0.2em] text-brand-text-muted">
            {before.label}
          </span>
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-brand-bg-alt">
            <Image
              src={before.imageSrc}
              alt={before.caption}
              fill
              className="object-cover opacity-70 grayscale"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <figcaption className="font-acumin-wide-light text-sm text-brand-text-muted">
            {before.caption}
          </figcaption>
        </figure>
      </FadeInScrollAnimation>

      <div
        className="
          flex
          items-center
          justify-center
          font-blinker
          text-[clamp(28px,calc(((100vw-1024px)/896*12)+28px),40px)]
          text-brand-text
          lg:py-4
        "
        aria-hidden
      >
        →
      </div>

      <FadeInScrollAnimation trigger={containerRef} duration={1}>
        <figure className="flex flex-col gap-4 w-full">
          <span className="font-blinker text-[11px] uppercase tracking-[0.2em] text-primary">
            {after.label}
          </span>
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-brand-bg-alt luxury-hover-lift">
            <Image
              src={after.imageSrc}
              alt={after.caption}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <figcaption className="font-acumin-semi-cond text-sm text-brand-text">
            {after.caption}
          </figcaption>
        </figure>
      </FadeInScrollAnimation>
    </div>
  );
};

export default TransformationPanel;
