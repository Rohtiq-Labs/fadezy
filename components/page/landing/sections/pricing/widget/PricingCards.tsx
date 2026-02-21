"use client";

import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import Link from "next/link";
import { FC } from "react";
import { cn } from "@/lib/tailwind/cn";
import ParagraphBaseRelax from "@/components/utilities/paragraphs/ParagraphBaseRelax";
import HeadingFourthXl from "@/components/utilities/headings/HeadingFourthXl";

const PricingCard: FC<{
  pkg: {
    name: string;
    description: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
    badge?: string;
  };
}> = ({ pkg }) => {
  const isHighlighted = !!pkg.badge;

  return (
    <article
      role="listitem"
      className={cn(
        "relative flex flex-col p-6 lg:p-8 rounded-saas-lg border transition-all duration-300 min-w-0 w-full",
        "bg-brand-bg shadow-card hover:shadow-card-hover",
        isHighlighted
          ? "border-primary ring-1 ring-primary"
          : "border-brand-border hover:border-brand-text-muted/40"
      )}
    >
      {pkg.badge && (
        <span
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2",
            "px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase",
            pkg.badge.toLowerCase().includes("popular")
              ? "bg-primary text-white"
              : "bg-accent text-brand-text"
          )}
        >
          {pkg.badge}
        </span>
      )}
      <div className="flex flex-col gap-6">
        <HeadingFourthXl className="text-brand-text font-elza">
          {pkg.name}
        </HeadingFourthXl>
        <ParagraphBaseRelax className="text-brand-text-muted text-base break-words">
          {pkg.description}
        </ParagraphBaseRelax>
        <ul className="flex flex-col gap-3" role="list">
          {pkg.features.map((feature, j) => (
            <li
              key={`${pkg.name}-feature-${j}`}
              className="flex items-start gap-2 text-brand-text-muted text-sm break-words min-w-0"
            >
              <span
                className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary"
                aria-hidden
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-8">
        <Link
          href={pkg.ctaLink}
          className={cn(
            "inline-flex items-center justify-center w-full py-3 px-6 rounded-saas font-acumin text-sm font-medium tracking-wide transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-brand-bg",
            isHighlighted
              ? "bg-primary text-white hover:bg-primary-hover"
              : "border-2 border-brand-border text-primary hover:border-primary hover:bg-primary-light"
          )}
        >
          {pkg.ctaText}
        </Link>
      </div>
    </article>
  );
};

const PricingCards: FC = () => {
  const lang = useCurrentLanguages();
  const { packages: pricingPackages, reassurance } =
    landingContents[lang].pricing;

  return (
    <div className="flex flex-col gap-10 md:gap-16 mt-12 md:mt-16 min-w-0">
      <div
        className={cn(
          "[--showcase-container-gap:clamp(32px,calc(((100vw-1024px)/896*32)+32px),64px)]",
          "grid grid-cols-2 lg:grid-cols-1 w-full gap-[var(--showcase-container-gap)] min-w-0 overflow-hidden"
        )}
        role="list"
        aria-label="Pricing packages"
      >
        {pricingPackages.map((pkg, i) => (
          <div
            key={`pricing-${i}-${pkg.name}`}
            className={cn(
              "w-full max-w-[720px] flex flex-col overflow-auto",
              i % 2 === 0
                ? "justify-self-start lg:justify-self-center"
                : "justify-self-end lg:justify-self-center"
            )}
          >
            <PricingCard pkg={pkg} />
          </div>
        ))}
      </div>

      <p className="text-center text-brand-text-muted text-sm break-words px-2">
        {reassurance}
      </p>
    </div>
  );
};

export default PricingCards;
