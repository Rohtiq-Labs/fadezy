import { cn } from "@/lib/tailwind/cn";
import { FC } from "react";

interface Props {
  className?: string;
  size?: "sm" | "lg";
}

const sizeClasses = {
  sm: "text-2xl",
  lg: "text-[clamp(1.75rem,4vw,2.5rem)]",
};

const Logo: FC<Props> = ({ className, size = "sm" }) => (
  <span
    className={cn(
      "font-shanoy font-normal tracking-wide text-brand-text uppercase",
      sizeClasses[size],
      className
    )}
  >
    FADEZY
  </span>
);

export default Logo;