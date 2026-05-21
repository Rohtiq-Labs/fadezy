import { FC } from "react";
import BackgroundVideo from "./widget/BackgroundVideo";
import Headline from "./widget/Headline";

const Hero: FC = () => {
  return (
    <section
      className="
        w-full
        min-h-[max(calc(var(--dvh)*100),640px)]
        h-[calc(var(--dvh)*100)]
        relative
        portrait:min-h-[85dvh]
        portrait:h-[85dvh]
      "
    >
      <BackgroundVideo />
      <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden />
      <div className="absolute inset-0 z-[2] flex flex-col text-white portrait:justify-center">
        <Headline />
      </div>
    </section>
  );
};

export default Hero;
