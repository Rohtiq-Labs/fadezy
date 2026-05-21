"use client";

import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { cn } from "@/lib/tailwind/cn";
import Image from "next/image";
import { FC, RefObject } from "react";

interface Props {
  containerRef: RefObject<HTMLElement | null>;
}

const cardLayouts = [
  "col-span-7 min-h-[clamp(420px,52vh,560px)] lg:col-span-12 lg:min-h-[360px]",
  "col-span-5 min-h-[clamp(280px,34vh,360px)] lg:col-span-6 sm:col-span-12",
  "col-span-5 min-h-[clamp(280px,34vh,360px)] lg:col-span-6 sm:col-span-12",
  "col-span-7 min-h-[clamp(360px,42vh,480px)] lg:col-span-12 lg:min-h-[320px]",
] as const;

const ServiceCard: FC<{
  index: number;
  title: string;
  tagline: string;
  imageSrc: string;
  layoutClass: string;
}> = ({ index, title, tagline, imageSrc, layoutClass }) => {
  return (
    <li
      className={cn(
        "group relative overflow-hidden bg-brand-bg-dark",
        layoutClass
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={index < 2}
        />
      </div>

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/25 to-black/5 transition-opacity duration-700 group-hover:from-black/90 pointer-events-none"
        aria-hidden
      />

      <div className="absolute inset-0 z-[2] flex flex-col justify-end p-[clamp(24px,calc(((100vw-1024px)/896*20)+24px),40px)]">
        <span
          className="font-blinker text-[11px] uppercase tracking-[0.22em] text-white/60 mb-3"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-acumin-semi-cond text-[clamp(24px,calc(((100vw-1024px)/896*10)+24px),36px)] leading-[1.1] text-white uppercase tracking-[0.03em]">
          {title}
        </h3>
        <p className="mt-3 font-acumin-wide-light text-[clamp(14px,calc(((100vw-1024px)/896*2)+14px),16px)] leading-[1.5] text-white/75 max-w-[420px]">
          {tagline}
        </p>
        <span
          className="mt-6 block h-px w-0 bg-white/80 transition-all duration-700 ease-out group-hover:w-[clamp(48px,8vw,80px)]"
          aria-hidden
        />
      </div>
    </li>
  );
};

const ServiceGrid: FC<Props> = ({ containerRef }) => {
  const lang = useCurrentLanguages();
  const { heading, description, services } = landingContents[lang]["what-i-do"];

  return (
    <div className="w-full @container/what-i-do flex flex-col gap-[clamp(48px,calc(((100vw-1024px)/896*48)+48px),88px)]">
      <ArticleContainer
        title={heading}
        description={description}
        customTriggerRef={containerRef}
        className="luxury-section-intro max-w-[min(100%,720px)]"
        titleClassName="tracking-[0.04em]"
      />

      <ul
        className="grid grid-cols-12 gap-[clamp(12px,calc(((100vw-1024px)/896*8)+12px),20px)] lg:grid-cols-1 sm:gap-5 w-full"
        role="list"
        aria-label={heading}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={`service-${index}-${service.title}`}
            index={index}
            title={service.title}
            tagline={service.tagline}
            imageSrc={service.imageSrc}
            layoutClass={cardLayouts[index] ?? cardLayouts[0]}
          />
        ))}
      </ul>
    </div>
  );
};

export default ServiceGrid;
