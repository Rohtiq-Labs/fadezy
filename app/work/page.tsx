"use client";

import Work from "@/components/page/work/Work";
import { UseClientSideLanguageRedirect } from "@/contents/languageSupportHooks";
import { FC } from "react";

const Page: FC = () => {
  UseClientSideLanguageRedirect();
  return <Work />;
};

export default Page;
