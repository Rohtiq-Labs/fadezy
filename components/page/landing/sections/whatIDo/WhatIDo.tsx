import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { FC, useRef } from "react";
import ServiceGrid from "./widget/ServiceGrid";

const WhatIDo: FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <SectionContainer
      id="what-we-do"
      className="!mt-[var(--section-spacing)] pb-[clamp(80px,12vw,140px)]"
      ref={containerRef}
    >
      <ServiceGrid containerRef={containerRef} />
    </SectionContainer>
  );
};

export default WhatIDo;
