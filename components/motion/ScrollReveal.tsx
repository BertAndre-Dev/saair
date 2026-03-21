"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, instantVisible, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export type ScrollRevealProps = Readonly<{
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}>;

const ScrollReveal = ({
  id,
  className,
  children,
  delay = 0,
}: ScrollRevealProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
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
    </motion.section>
  );
};

export default ScrollReveal;
