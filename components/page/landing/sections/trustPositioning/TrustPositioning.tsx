import SectionContainer from "@/components/utilities/containers/SectionContainer";
import { FC } from "react";
import StatementList from "./widget/StatementList";

const TrustPositioning: FC = () => {
  return (
    <SectionContainer
      id="trust-positioning"
      tight
      className="!mt-0 !px-0 lg:!px-0"
    >
      <StatementList />
    </SectionContainer>
  );
};

export default TrustPositioning;
