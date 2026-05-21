"use client";

import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { cn } from "@/lib/tailwind/cn";
import { FC } from "react";

type BrandVariant =
  | "sans-bold"
  | "serif"
  | "sans-wide"
  | "serif-display"
  | "geometric"
  | "serif-luxury";

const variantClasses: Record<BrandVariant, string> = {
  "sans-bold": "brand-wordmark brand-wordmark--sans-bold",
  serif: "brand-wordmark brand-wordmark--serif",
  "sans-wide": "brand-wordmark brand-wordmark--sans-wide",
  "serif-display": "brand-wordmark brand-wordmark--serif-display",
  geometric: "brand-wordmark brand-wordmark--geometric",
  "serif-luxury": "brand-wordmark brand-wordmark--serif-luxury",
};

const BrandMarquee: FC = () => {
  const lang = useCurrentLanguages();
  const { ariaLabel, brands } = landingContents[lang]["trust-positioning"];
  const marqueeBrands = [...brands, ...brands];

  return (
    <section
      className="w-full overflow-hidden border-y border-brand-text/15 bg-brand-bg py-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)]"
      aria-label={ariaLabel}
    >
      <div className="relative w-full">
        <ul
          className="brand-marquee-track flex w-max items-center gap-[clamp(56px,calc(((100vw-1024px)/896*48)+56px),96px)] px-[clamp(32px,calc(((100vw-1024px)/896*32)+32px),64px)]"
          role="list"
        >
          {marqueeBrands.map((brand, index) => (
            <li
              key={`brand-${index}-${brand.name}`}
              className="flex shrink-0 items-center justify-center"
              role="listitem"
              aria-hidden={index >= brands.length}
            >
              <div className="flex flex-col items-center justify-center text-center min-w-[clamp(100px,12vw,180px)]">
                <span className={cn(variantClasses[brand.variant])}>
                  {brand.name}
                </span>
                {brand.tagline ? (
                  <span className="brand-wordmark-tagline mt-1">
                    {brand.tagline}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandMarquee;
