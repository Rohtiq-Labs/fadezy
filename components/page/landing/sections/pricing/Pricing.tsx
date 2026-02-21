import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { FC } from "react";
import Article from "./widget/Article";
import PricingCards from "./widget/PricingCards";

const Pricing: FC = () => {
  return (
    <SectionContainer
      id="pricing"
      className="flex flex-col gap-10 md:gap-12 min-w-0 overflow-x-hidden"
    >
      <Article />
      <PricingCards />
    </SectionContainer>
  );
};

export default Pricing;
