import type { Transition, Variants } from "framer-motion";

/** Primary easing — natural deceleration */
export const easeNatural: [number, number, number, number] = [
  0.25, 0.1, 0.25, 1,
];

/** Default scroll-triggered viewport (animate once, trigger slightly early) */
export const viewportOnce = {
  once: true,
  margin: "-100px" as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeNatural },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: easeNatural },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeNatural },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeNatural },
  },
};

/** No motion — for `useReducedMotion()` */
export const instantVisible: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function prefersReducedMotionTransition(
  reduced: boolean | null,
  normal: Transition,
): Transition {
  if (reduced) return { duration: 0.01 };
  return normal;
}

/** Button micro-interactions — scale only (GPU-friendly) */
export const buttonWhileHover = { scale: 1.03 };
export const buttonWhileTap = { scale: 0.97 };

export const cardWhileHover = {
  y: -4,
  boxShadow:
    "0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.08)",
};
