"use client";

import HowItWorksPage from "@/components/page/howItWorks/HowItWorksPage";
import { UseClientSideLanguageRedirect } from "@/contents/languageSupportHooks";
import { FC } from "react";

const Page: FC = () => {
  UseClientSideLanguageRedirect();
  return <HowItWorksPage />;
};

export default Page;
