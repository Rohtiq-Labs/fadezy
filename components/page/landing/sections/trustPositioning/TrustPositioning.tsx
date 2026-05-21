import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { FC } from "react";
import BrandMarquee from "./widget/BrandMarquee";

const TrustPositioning: FC = () => {
  return (
    <SectionContainer
      id="client-brands"
      tight
      className="!mt-0 !px-0 lg:!px-0"
    >
      <BrandMarquee />
    </SectionContainer>
  );
};

export default TrustPositioning;
