"use client";

import ContactPage from "@/components/page/contact/ContactPage";
import { UseClientSideLanguageRedirect } from "@/contents/languageSupportHooks";
import { FC } from "react";

const Page: FC = () => {
  UseClientSideLanguageRedirect();
  return <ContactPage />;
};

export default Page;
