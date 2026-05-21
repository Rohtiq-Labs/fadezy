"use client";

import { FC } from "react";
import Link from "next/link";
import SpacingLgContainer from "@/components/utilities/containers/SpacingLgContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { footerContents } from "@/contents/footerContents";
import { navContents } from "@/contents/navContents";
import { routes } from "@/routes/routes";
import Logo from "@/components/header/widget/Logo";
import { cn } from "@/lib/tailwind/cn";

const linkBase =
  "text-footer-link hover:text-footer-text focus:text-footer-text focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg transition-colors duration-500";

const Footer: FC = () => {
  const lang = useCurrentLanguages();
  const { tagline, sections, contact, social, legal } = footerContents[lang];
  const labels = navContents[lang];

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-footer-bg text-footer-text border-t border-white/10"
    >
      <SpacingLgContainer className="pt-[clamp(48px,8vw,80px)] pb-[clamp(40px,6vw,64px)]">
        <div className="grid grid-cols-12 lg:grid-cols-1 gap-12 lg:gap-10">
          <div className="col-span-5 lg:col-span-1 flex flex-col gap-6 max-w-md">
            <Link
              href="/"
              aria-label="FADEZY home"
              className={cn(linkBase, "w-fit text-footer-text")}
            >
              <Logo className="text-inherit" />
            </Link>
            <p className="font-acumin-wide-light text-sm leading-[1.7] text-footer-link tracking-[0.02em]">
              {tagline}
            </p>
          </div>

          <nav
            aria-label="Quick links"
            className="col-span-3 lg:col-span-1 flex flex-col gap-5"
          >
            <h3 className="font-blinker text-[10px] uppercase tracking-[0.22em] text-footer-text/80">
              {sections.quickLinks}
            </h3>
            <ul className="flex flex-col gap-3">
              {routes.map(({ key, path }) => (
                <li key={path}>
                  <Link href={path} className={cn(linkBase, "text-sm font-acumin-wide-light")}>
                    {labels[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-4 lg:col-span-1 flex flex-col gap-5">
            <h3 className="font-blinker text-[10px] uppercase tracking-[0.22em] text-footer-text/80">
              {sections.contact}
            </h3>
            <ul className="flex flex-col gap-3 text-sm font-acumin-wide-light text-footer-link">
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={linkBase}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                >
                  {contact.whatsapp.label}
                </a>
              </li>
              <li>
                <a
                  href={social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                >
                  {social.instagram.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,72px)] pt-8 border-t border-white/10 flex flex-col sm:items-start items-center text-left gap-3">
          <span className="font-acumin-wide-light text-xs text-footer-link tracking-[0.04em]">
            {legal.copyrightPrefix}
            <a
              href={legal.rohtiqLabsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-footer-text transition-colors duration-500"
              aria-label="Rohtiq Labs"
            >
              {legal.rohtiqLabsLabel}
            </a>
            {legal.copyrightSuffix}
          </span>
        </div>
      </SpacingLgContainer>
    </footer>
  );
};

export default Footer;
