"use client";

import Services from "@/components/page/services/Services";
import { UseClientSideLanguageRedirect } from "@/contents/languageSupportHooks";
import { FC } from "react";

const Page: FC = () => {
  UseClientSideLanguageRedirect();
  return <Services />;
};

export default Page;
