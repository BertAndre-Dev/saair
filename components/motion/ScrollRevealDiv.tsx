"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, instantVisible, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export type ScrollRevealDivProps = Readonly<{
  className?: string;
  children: ReactNode;
  delay?: number;
}>;

/** Same as `ScrollReveal` but renders a `div` (e.g. inside an existing `section`). */
const ScrollRevealDiv = ({
  className,
  children,
  delay = 0,
}: ScrollRevealDivProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={reduced ? instantVisible : fadeUp}
      transition={{
        duration: reduced ? 0.01 : 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealDiv;
