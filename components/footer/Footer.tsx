"use client";

import { FC } from "react";
import Link from "next/link";
import SpacingLgContainer from "@/components/utilities/containers/SpacingLgContainer";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { footerContents } from "@/contents/footerContents";
import Logo from "@/components/header/widget/Logo";
import { cn } from "@/lib/tailwind/cn";

const linkBase =
  "text-footer-link hover:text-primary-hover focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-footer-bg rounded transition-colors duration-200";

const InstagramIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer: FC = () => {
  const lang = useCurrentLanguages();
  const { tagline, sections, links, contact, social, legal } = footerContents[lang];

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-footer-bg text-footer-text border-t border-white/10"
    >
      <SpacingLgContainer className="py-16 lg:py-20">
        <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-12 lg:gap-16">
          <div className="lg:col-span-1 flex flex-col gap-4 max-w-sm">
            <Link
              href="/"
              aria-label="Fadezy home"
              className={cn(linkBase, "w-fit text-footer-text hover:text-footer-link")}
            >
              <Logo className="text-inherit" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {tagline}
            </p>
          </div>

          <nav
            aria-label="Quick links"
            className="flex flex-col gap-4"
          >
            <h3 className="text-white/90 text-xs font-medium tracking-wider uppercase">
              {sections.quickLinks}
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(linkBase, "text-sm")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h3 className="text-white/90 text-xs font-medium tracking-wider uppercase">
              {sections.contact}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className={linkBase}
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className={linkBase}
                >
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
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white/90 text-xs font-medium tracking-wider uppercase">
              {sections.followUs}
            </h3>
            <div className="flex gap-4">
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.instagram.label}
                className={cn(
                  linkBase,
                  "p-2 -m-2 text-white/70 hover:text-footer-link"
                )}
              >
                <InstagramIcon />
              </a>
              <a
                href={social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.linkedin.label}
                className={cn(
                  linkBase,
                  "p-2 -m-2 text-white/70 hover:text-footer-link"
                )}
              >
                <LinkedInIcon />
              </a>
              <a
                href={social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.facebook.label}
                className={cn(
                  linkBase,
                  "p-2 -m-2 text-white/70 hover:text-footer-link"
                )}
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span className="text-white/50 text-sm">{legal.copyright}</span>
          {(legal.privacy || legal.terms) && (
            <div className="flex gap-6">
              {legal.privacy && (
                <Link
                  href="/privacy"
                  className={cn(linkBase, "text-sm text-white/50")}
                >
                  {legal.privacy}
                </Link>
              )}
              {legal.terms && (
                <Link
                  href="/terms"
                  className={cn(linkBase, "text-sm text-white/50")}
                >
                  {legal.terms}
                </Link>
              )}
            </div>
          )}
        </div>
      </SpacingLgContainer>
    </footer>
  );
};

export default Footer;
