import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "accent";

export type BadgeProps = {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
};

const Badge = ({ variant = "default", className, children }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        "dark:border-white/15",
        variant === "default" &&
          "border-black/10 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50",
        variant === "accent" &&
          "border-black/10 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;

