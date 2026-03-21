"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeUpItem,
  instantVisible,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type StaggerContainerProps = Readonly<{
  className?: string;
  children: ReactNode;
}>;

const StaggerContainer = ({ className, children }: StaggerContainerProps) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
};

export { fadeUpItem as staggerChildVariants, instantVisible };

export default StaggerContainer;
