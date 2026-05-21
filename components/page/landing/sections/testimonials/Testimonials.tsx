import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { FC } from "react";
import Article from "./widget/Article";
import TestimonialList from "./widget/TestimonialList";

const Testimonials: FC = () => {
  return (
    <SectionContainer className="flex flex-col min-w-0 overflow-x-hidden !mt-[var(--section-spacing)] pb-[clamp(64px,10vw,120px)]">
      <Article />
      <TestimonialList />
    </SectionContainer>
  );
};

export default Testimonials;
