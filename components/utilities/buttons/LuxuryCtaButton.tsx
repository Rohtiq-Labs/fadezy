import { cn } from "@/lib/tailwind/cn";
import Link from "next/link";
import { CSSProperties, FC, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: "light" | "dark";
  ariaLabel?: string;
}

const LuxuryCtaButton: FC<Props> = ({
  href,
  children,
  className,
  style,
  variant = "light",
  ariaLabel,
}) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      style={style}
      className={cn(
        `
          inline-flex
          items-center
          justify-center
          min-h-[48px]
          px-8
          py-3
          font-acumin-wide-light
          text-[13px]
          uppercase
          tracking-[0.18em]
          border
          transition-all
          duration-500
          ease-out
        `,
        variant === "light"
          ? "border-white/80 text-white hover:bg-white hover:text-brand-text"
          : "border-brand-text/30 text-brand-text hover:bg-brand-text hover:text-brand-bg",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default LuxuryCtaButton;
