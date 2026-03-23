"use client";

import { motion, useReducedMotion } from "framer-motion";

import { buttonWhileHover, buttonWhileTap } from "@/lib/animations";

type MotionSubmitButtonProps = Readonly<{
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}>;

const MotionSubmitButton = ({
  className,
  children,
  disabled,
}: MotionSubmitButtonProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.button
      type="submit"
      className={className}
      disabled={disabled}
      aria-busy={disabled ? true : undefined}
      whileHover={reduced || disabled ? undefined : buttonWhileHover}
      whileTap={reduced || disabled ? undefined : buttonWhileTap}
    >
      {children}
    </motion.button>
  );
};

export default MotionSubmitButton;
