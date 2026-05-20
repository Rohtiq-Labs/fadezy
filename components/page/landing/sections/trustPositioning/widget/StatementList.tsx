"use client";

import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC } from "react";

const StatementList: FC = () => {
  const lang = useCurrentLanguages();
  const { ariaLabel, statements } = landingContents[lang]["trust-positioning"];

  return (
    <ul
      className="
        flex
        w-full
        flex-row
        divide-x
        divide-brand-border
        border-y
        border-brand-border
        sm:flex-col
        sm:divide-x-0
        sm:divide-y
      "
      role="list"
      aria-label={ariaLabel}
    >
      {statements.map((statement, index) => (
        <li
          key={`trust-statement-${index}`}
          className="
            flex
            flex-1
            items-center
            justify-center
            px-[clamp(20px,calc(((100vw-1024px)/896*24)+20px),32px)]
            py-[clamp(28px,calc(((100vw-1024px)/896*12)+28px),36px)]
            text-center
            sm:px-4
            sm:py-7
          "
        >
          <p
            className="
              font-acumin-semi-cond
              text-[clamp(15px,calc(((100vw-1024px)/896*3)+15px),18px)]
              leading-[1.35]
              tracking-[0.02em]
              text-brand-text
              sm:max-w-[280px]
              max-w-[220px]
            "
          >
            <span
              className="mb-3 block font-blinker text-[11px] font-normal uppercase tracking-[0.14em] text-primary"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {statement}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default StatementList;
