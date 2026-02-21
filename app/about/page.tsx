"use client";

import AboutPage from "@/components/page/about/AboutPage";
import { UseClientSideLanguageRedirect } from "@/contents/languageSupportHooks";
import { FC } from "react";

const Page: FC = () => {
  UseClientSideLanguageRedirect();
  return <AboutPage />;
};

export default Page;