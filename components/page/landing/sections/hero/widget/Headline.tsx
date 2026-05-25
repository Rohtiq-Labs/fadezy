"use client";

import CustomLandingAnimation from "@/components/utilities/animations/landing/CustomLandingAnimation";
import MaskAndMoveLandingAnimation from "@/components/utilities/animations/landing/MaskAndMoveLandingAnimation";
import LuxuryCtaButton from "@/components/utilities/buttons/LuxuryCtaButton";
import { cinematicHeroInnerClass } from "@/components/utilities/heroes/CinematicPageHero";
import SpacingLgContainer from "@/components/utilities/containers/SpacingLgContainer";
import HeadlineHero from "@/components/utilities/headings/HeadlineHero";
import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const Headline: FC = () => {
  const lang = useCurrentLanguages();
  const { headline, description, ctaText } = landingContents[lang].hero;

  return (
    <SpacingLgContainer className={cinematicHeroInnerClass}>
      <HeadlineHero className="flex flex-col uppercase h-fit max-w-full tracking-[0.02em]">
        <MaskAndMoveLandingAnimation duration={1} delay={0.4}>
          <span className="font-light block">{headline[0]}</span>
        </MaskAndMoveLandingAnimation>
        <MaskAndMoveLandingAnimation duration={1} delay={0.55}>
          <span className="font-semibold block">{headline[1]}</span>
        </MaskAndMoveLandingAnimation>
        <MaskAndMoveLandingAnimation duration={1} delay={0.7}>
          <span className="font-light block opacity-90">{headline[2]}</span>
        </MaskAndMoveLandingAnimation>
      </HeadlineHero>

      <CustomLandingAnimation
        splitText={description}
        splitTextMode="words"
        stagger={0.04}
        styleFrom={{ opacity: 0, transform: "translateY(8px)" }}
        styleTo={{ opacity: 1, transform: "translateY(0)" }}
        duration={1}
        delay={0.9}
      >
        <p className="font-acumin-wide-light text-[clamp(15px,calc(((100vw-1024px)/896*4)+15px),18px)] leading-[1.6] tracking-[0.02em] text-white/75 max-w-[min(420px,90vw)]">
          {description}
        </p>
      </CustomLandingAnimation>

      <MaskAndMoveLandingAnimation duration={0.9} delay={1.1}>
        <LuxuryCtaButton
          href={landingContents[lang]["lets-talk-button"].link}
          variant="light"
          ariaLabel={ctaText}
        >
          {ctaText}
        </LuxuryCtaButton>
      </MaskAndMoveLandingAnimation>
    </SpacingLgContainer>
  );
};

export default Headline;
