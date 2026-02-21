import { cn } from "@/lib/tailwind/cn";
import { FC } from "react";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => (
  <span
    className={cn(
      "font-acumin-semi-cond text-2xl font-bold leading-0 tracking-[-0.03rem] text-brand-text",
      className
    )}
  >
    Fadezy
  </span>
);

export default Logo;