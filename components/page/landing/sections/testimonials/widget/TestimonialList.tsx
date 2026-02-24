"use client";

import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import Image from "next/image";
import { FC, useCallback, useState } from "react";

const TestimonialCard: FC<{
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
}> = ({ quote, author, role, imageSrc }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <blockquote
      className="flex flex-col gap-4 p-4 lg:p-6 rounded-saas-lg bg-brand-bg border border-brand-border shadow-card min-w-0 w-full"
      role="listitem"
    >
      <p className="text-brand-text-muted text-sm leading-relaxed break-words">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/20 shrink-0 flex items-center justify-center">
          {!imageError ? (
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover"
              sizes="48px"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-lg font-semibold text-primary" aria-hidden>
              {author.charAt(0)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <cite className="not-italic font-medium text-primary">{author}</cite>
          <p className="text-xs text-brand-text-muted">{role}</p>
        </div>
      </div>
    </blockquote>
  );
};

const ChevronLeft: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

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

  return (
    <>
      <div
        className="hidden md:flex relative items-center gap-4 w-full mt-12 min-w-0 overflow-hidden"
        role="list"
        aria-label="Client testimonials"
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label={prevLabel}
          className="shrink-0 w-10 h-10 rounded-full border border-brand-border bg-brand-bg flex items-center justify-center text-brand-text hover:bg-primary-light hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-brand-bg-alt transition-colors"
        >
          <ChevronLeft />
        </button>
        <div className="flex-1 min-w-0">
          <TestimonialCard {...items[activeIndex]} />
        </div>
        <button
          type="button"
          onClick={goNext}
          aria-label={nextLabel}
          className="shrink-0 w-10 h-10 rounded-full border border-brand-border bg-brand-bg flex items-center justify-center text-brand-text hover:bg-primary-light hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-brand-bg-alt transition-colors"
        >
          <ChevronRight />
        </button>
      </div>

      <div
        className="grid grid-cols-3 lg:grid-cols-2 md:hidden gap-6 lg:gap-8 w-full mt-12 min-w-0 overflow-hidden"
        role="list"
        aria-label="Client testimonials"
      >
        {items.map((props, i) => (
          <TestimonialCard key={`testimonial-${i}`} {...props} />
        ))}
      </div>
    </>
  );
};

export default TestimonialList;
