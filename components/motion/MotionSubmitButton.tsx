"use client";

import { motion, useReducedMotion } from "framer-motion";

import { buttonWhileHover, buttonWhileTap } from "@/lib/animations";

type MotionSubmitButtonProps = Readonly<{
  className?: string;
  children: React.ReactNode;
}>;

const MotionSubmitButton = ({ className, children }: MotionSubmitButtonProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.button
      type="submit"
      className={className}
      whileHover={reduced ? undefined : buttonWhileHover}
      whileTap={reduced ? undefined : buttonWhileTap}
    >
      {children}
    </motion.button>
  );
};

export default MotionSubmitButton;
