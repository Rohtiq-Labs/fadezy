import { cn } from "@/lib/tailwind/cn";
import { FC } from "react";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => (
  <span
    className={cn(
      "font-shanoy text-2xl font-normal tracking-wide text-brand-text uppercase",
      className
    )}
  >
    FADEZY
  </span>
);

export default Logo;