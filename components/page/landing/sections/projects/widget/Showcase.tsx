"use client";

import FadeInScrollAnimation from "@/components/utilities/animations/scroll/FadeInScrollAnimation";
import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { cn } from "@/lib/tailwind/cn";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Showcase: FC = () => {
  const lang = useCurrentLanguages();
  const projects = landingContents[lang].projects.projects;

  return (
    <div
      className="
        grid
        grid-cols-2
        lg:grid-cols-1
        w-full
        gap-x-[clamp(32px,calc(((100vw-1024px)/896*48)+32px),80px)]
        gap-y-[clamp(48px,calc(((100vw-1024px)/896*48)+48px),96px)]
      "
    >
      {projects.map(({ description, videoSrc, caption, projectLink }, i) => {
        const isLarge = i === 0;

        return (
          <article
            key={`project-${i}`}
            className={cn(
              "w-full flex flex-col gap-5 luxury-hover-lift",
              isLarge ? "col-span-2 lg:col-span-1" : "",
              i % 2 === 1 ? "lg:mt-16" : ""
            )}
          >
            <FadeInScrollAnimation trigger="self" duration={1}>
              <Link
                href={projectLink}
                className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={caption}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-brand-bg-alt transition-opacity duration-700 group-hover:opacity-90",
                    isLarge ? "aspect-[16/9]" : "aspect-[4/5]"
                  )}
                >
                  <Image
                    src={videoSrc}
                    alt={caption}
                    fill
                    className="object-cover"
                    sizes={
                      isLarge
                        ? "(max-width: 1024px) 100vw, 90vw"
                        : "(max-width: 1024px) 100vw, 45vw"
                    }
                  />
                </div>
              </Link>
            </FadeInScrollAnimation>

            <div className="flex flex-col gap-2 border-t border-brand-border pt-4">
              <span className="font-blinker text-[11px] uppercase tracking-[0.18em] text-brand-text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-acumin-semi-cond text-[clamp(22px,calc(((100vw-1024px)/896*8)+22px),28px)] uppercase tracking-[0.04em]">
                {caption}
              </h3>
              <p className="font-acumin-wide-light text-sm text-brand-text-muted leading-[1.5] max-w-md">
                {description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Showcase;
