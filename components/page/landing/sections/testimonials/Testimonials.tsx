import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { FC } from "react";
import Article from "./widget/Article";
import TestimonialList from "./widget/TestimonialList";

const Testimonials: FC = () => {
  return (
    <SectionContainer className="flex flex-col gap-8 min-w-0 overflow-x-hidden">
      <Article />
      <TestimonialList />
    </SectionContainer>
  );
};

export default Testimonials;
