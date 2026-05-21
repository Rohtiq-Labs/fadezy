"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { workContents } from "@/contents/workContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const WorkTestimonials: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, items } = workContents[lang].testimonials;

  return (
    <SectionContainer
      id="work-testimonials"
      className="!mt-[var(--section-spacing)] pb-[clamp(64px,10vw,100px)]"
      aria-labelledby="work-testimonials-heading"
    >
      <h2
        id="work-testimonials-heading"
        className="font-blinker font-light uppercase text-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)] tracking-[0.04em] text-brand-text mb-[clamp(40px,calc(((100vw-1024px)/896*32)+40px),64px)]"
      >
        {heading}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-[clamp(40px,calc(((100vw-1024px)/896*48)+40px),80px)]">
        {items.map((item, index) => (
          <figure
            key={`work-testimonial-${index}`}
            className="border-l-2 border-brand-text pl-[clamp(24px,calc(((100vw-1024px)/896*20)+24px),40px)]"
          >
            <blockquote className="font-acumin-wide-light text-[clamp(18px,calc(((100vw-1024px)/896*6)+18px),24px)] leading-[1.45] text-brand-text">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex flex-col gap-1">
              <cite className="not-italic font-acumin-semi-cond text-sm uppercase tracking-[0.12em] text-brand-text">
                {item.author}
              </cite>
              <span className="font-acumin-wide-light text-xs text-brand-text-muted uppercase tracking-[0.1em]">
                {item.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionContainer>
  );
};

export default WorkTestimonials;
