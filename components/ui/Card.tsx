"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cardWhileHover } from "@/lib/animations";
import { cn } from "@/lib/utils";

export type CardProps = Readonly<{
  className?: string;
  children: ReactNode;
  id?: string;
}>;

const Card = ({ className, children, id }: CardProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={cn(
        "rounded-2xl border border-black/10 bg-white p-6 shadow-sm",
        "dark:border-white/15 dark:bg-zinc-950",
        className,
      )}
      whileHover={reduced ? undefined : cardWhileHover}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
