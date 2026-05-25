import { cinematicHeroContentClass, cinematicHeroSectionClass } from "@/components/utilities/heroes/CinematicPageHero";
import { cn } from "@/lib/tailwind/cn";
import { FC } from "react";
import BackgroundVideo from "./widget/BackgroundVideo";
import Headline from "./widget/Headline";

const Hero: FC = () => {
  return (
    <section className={cn(cinematicHeroSectionClass, "relative")}>
      <BackgroundVideo />
      <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden />
      <div className={cinematicHeroContentClass}>
        <Headline />
      </div>
    </section>
  );
};

export default Hero;
