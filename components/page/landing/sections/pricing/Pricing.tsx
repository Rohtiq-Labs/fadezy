import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { FC } from "react";
import Article from "./widget/Article";
import PricingCards from "./widget/PricingCards";

const Pricing: FC = () => {
  return (
    <SectionContainer
      id="pricing"
      tight
      className="flex flex-col gap-8 md:gap-10 min-w-0 overflow-x-hidden pb-12"
    >
      <Article />
      <PricingCards />
    </SectionContainer>
  );
};

export default Pricing;
