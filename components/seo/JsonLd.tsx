import { structuredDataGraph } from "@/lib/seo/structured-data";
import { FC } from "react";

const JsonLd: FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
    />
  );
};

export default JsonLd;
