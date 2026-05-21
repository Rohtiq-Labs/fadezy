"use client";

import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC, useCallback, useState } from "react";

const TestimonialList: FC = () => {
  const lang = useCurrentLanguages();
  const { items, prevLabel, nextLabel } = landingContents[lang].testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i <= 0 ? items.length - 1 : i - 1));
  }, [items.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i >= items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  if (items.length === 0) return null;

  const active = items[activeIndex];

  return (
    <div className="w-full mt-[clamp(40px,calc(((100vw-1024px)/896*40)+40px),72px)]">
      <figure className="max-w-[clamp(520px,55vw,880px)] border-l-2 border-brand-text pl-[clamp(24px,calc(((100vw-1024px)/896*24)+24px),40px)]">
        <blockquote className="font-acumin-wide-light text-[clamp(20px,calc(((100vw-1024px)/896*8)+20px),28px)] leading-[1.45] text-brand-text tracking-[0.01em]">
          &ldquo;{active.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-8 flex flex-col gap-1">
          <cite className="not-italic font-acumin-semi-cond text-sm uppercase tracking-[0.12em] text-brand-text">
            {active.author}
          </cite>
          <span className="font-acumin-wide-light text-xs text-brand-text-muted tracking-[0.08em] uppercase">
            {active.role}
          </span>
        </figcaption>
      </figure>

      <div className="flex items-center gap-6 mt-10">
        <button
          type="button"
          onClick={goPrev}
          aria-label={prevLabel}
          className="
            font-blinker
            text-[11px]
            uppercase
            tracking-[0.2em]
            text-brand-text-muted
            hover:text-brand-text
            transition-colors
            duration-500
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
          "
        >
          Prev
        </button>
        <span className="font-blinker text-[11px] tracking-[0.2em] text-brand-text-muted" aria-hidden>
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={goNext}
          aria-label={nextLabel}
          className="
            font-blinker
            text-[11px]
            uppercase
            tracking-[0.2em]
            text-brand-text-muted
            hover:text-brand-text
            transition-colors
            duration-500
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
          "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialList;
