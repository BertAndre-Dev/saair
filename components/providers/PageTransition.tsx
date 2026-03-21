"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

import { easeNatural } from "@/lib/animations";

type PageTransitionProps = Readonly<{
  children: React.ReactNode;
}>;

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className="contents">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className="flex min-h-0 flex-1 flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: easeNatural },
        }}
        exit={{
          opacity: 0,
          y: 12,
          transition: { duration: 0.25, ease: easeNatural },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
