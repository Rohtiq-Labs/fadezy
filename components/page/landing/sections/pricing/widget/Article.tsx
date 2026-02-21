import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const Article: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, subtitle } = landingContents[lang].pricing;

  return (
    <ArticleContainer
      title={heading}
      description={subtitle}
      className="lg:max-w-none"
      titleClassName="lg:whitespace-normal"
    />
  );
};

export default Article;
