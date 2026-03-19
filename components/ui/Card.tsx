import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type CardProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/10 bg-white p-6 shadow-sm",
        "dark:border-white/15 dark:bg-zinc-950",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

