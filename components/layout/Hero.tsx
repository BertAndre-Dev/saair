"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { cardWhileHover, easeNatural, scaleIn } from "@/lib/animations";

const SLIDER_IMAGES = [
  "/sliders/view-male.svg",
  "/sliders/electric-vehicle.svg",
  "/sliders/oil-platform.svg",
  "/sliders/turbine%201.svg",
] as const;

export type HeroCardTone = "light" | "medium" | "dark";

export type HeroCard = {
  label: string;
  icon: "renewable" | "nonRenewable" | "technical";
  tone: HeroCardTone;
};

export type HeroProps = {
  backgroundImageSrc: string;
  backgroundImageAlt?: string;
  title: string;
  subtitle?: string;
  bottomFeatureLabels?: string[];
  cards?: HeroCard[];
  variant?: "default" | "pageTitle";
  className?: string;
};

const CardIcon = ({ kind }: { kind: HeroCard["icon"] }) => {
  if (kind === "renewable") {
    return (
      <Image
        src="/renewable-energy.svg"
        alt="Renewable"
        width={20}
        height={20}
      />
    );
  }
  if (kind === "nonRenewable") {
    return (
      <Image src="/fuel-tank.svg" alt="Non-Renewable" width={20} height={20} />
    );
  }
  return (
    <Image src="/nano-technology.svg" alt="Technical" width={20} height={20} />
  );
};

const EnergyIntelIcon = () => (
  <Image src="/Group.svg" alt="Energy Intelligence" width={20} height={20} />
);

const toneClass: Record<HeroCardTone, string> = {
  light: "border border-[#00814E24] bg-[#00814E24] backdrop-blur-md",
  medium: "border border-[#00814E24] bg-[#00814E24] backdrop-blur-md",
  dark: "border border-[#00814E24] bg-[#00814E24] backdrop-blur-md",
};

const Hero = ({
  backgroundImageSrc,
  backgroundImageAlt = "",
  title,
  subtitle = "",
  bottomFeatureLabels = [],
  cards = [],
  variant = "default",
  className = "",
}: HeroProps) => {
  const reduced = useReducedMotion();

  const slides = useMemo(() => {
    // Slider images live in `/public/sliders/` in this repo.
    // If none are available, we fall back to the provided background image.
    return SLIDER_IMAGES.length > 0 ? [...SLIDER_IMAGES] : [backgroundImageSrc];
  }, [backgroundImageSrc]);

  const canAnimate = !reduced && slides.length > 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!canAnimate) return;
    if (isPaused) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [canAnimate, isPaused, slides.length]);

  if (variant === "pageTitle") {
    const words = title.split(/\s+/).filter(Boolean);
    return (
      <section
        className={`relative isolate flex h-[100vh] items-center justify-center overflow-hidden ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: easeNatural }}
        >
          {!canAnimate ? (
            <>
              <Image
                src={slides[0]}
                alt={backgroundImageAlt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent" />
            </>
          ) : (
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: easeNatural }}
              >
                <Image
                  src={slides[activeIndex]}
                  alt={backgroundImageAlt}
                  fill
                  className="object-cover"
                  priority={activeIndex === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent" />
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>

        <div className="relative z-10 px-4 py-28 text-center md:py-32">
          <h1 className="text-4xl font-bold uppercase tracking-wide text-white md:text-6xl lg:text-7xl">
            {reduced ? (
              title
            ) : (
              <>
                {words.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    className="inline-block pr-[0.3em]"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.45,
                      ease: easeNatural,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </>
            )}
          </h1>
        </div>

        {slides.length > 1 ? (
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((slideSrc, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slideSrc}
                  type="button"
                  onClick={() => canAnimate && setActiveIndex(idx)}
                  disabled={!canAnimate}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>
        ) : null}
      </section>
    );
  }

  const titleWords = title.split(/\s+/).filter(Boolean);

  return (
    <section
      className={`relative isolate flex min-h-[min(60vh,920px)] flex-col ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: easeNatural }}
      >
        {!canAnimate ? (
          <>
            <Image
              src={slides[0]}
              alt={backgroundImageAlt}
              fill
              className="scale-105 object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent" />
          </>
        ) : (
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: easeNatural }}
            >
              <Image
                src={slides[activeIndex]}
                alt={backgroundImageAlt}
                fill
                className="scale-105 object-cover"
                priority={activeIndex === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent" />
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      {slides.length > 1 ? (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((slideSrc, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slideSrc}
                type="button"
                onClick={() => canAnimate && setActiveIndex(idx)}
                disabled={!canAnimate}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  isActive
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>
      ) : null}

      {/* mt-auto pushes content to the bottom of the hero */}
      <div
        style={{ paddingBottom: "4rem" }}
        className="relative z-10 mx-auto mt-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-end md:justify-between md:px-8 xl:px-0"
      >
        <div className="max-w-xl md:w-[58%]">
          <h1 className="text-4xl font-bold uppercase leading-tight tracking-wide text-white md:text-5xl lg:text-[3.25rem]">
            {reduced ? (
              title
            ) : (
              <>
                {titleWords.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    className="inline-block pr-[0.3em]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.5,
                      ease: easeNatural,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </>
            )}
          </h1>
          {subtitle ? (
            <motion.p
              className="mt-6 text-sm font-light leading-7 text-white/95 md:text-xl lg:text-2xl"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduced ? 0 : 0.3,
                duration: 0.45,
                ease: easeNatural,
              }}
            >
              {subtitle}
            </motion.p>
          ) : null}
          {bottomFeatureLabels.length > 0 ? (
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              initial={reduced ? false : "hidden"}
              animate="visible"
              variants={
                reduced
                  ? { hidden: {}, visible: {} }
                  : {
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.45,
                        },
                      },
                    }
              }
            >
              {bottomFeatureLabels.map((label, index) => (
                <motion.div
                  key={`${label}-${index}`}
                  variants={
                    reduced
                      ? {}
                      : {
                          hidden: { opacity: 0, y: 12 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, ease: easeNatural },
                          },
                        }
                  }
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white"
                >
                  <EnergyIntelIcon />
                  <span>{label}</span>
                </motion.div>
              ))}
            </motion.div>
          ) : null}
        </div>

        {cards.length > 0 ? (
          <motion.div
            className="flex w-full flex-col gap-4 md:max-w-sm md:w-[38%]"
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={
              reduced
                ? { hidden: {}, visible: {} }
                : {
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5,
                      },
                    },
                  }
            }
          >
            {cards.map((card) => (
              <motion.div
                key={card.label}
                variants={reduced ? {} : scaleIn}
                whileHover={reduced ? undefined : cardWhileHover}
                className={`flex items-center gap-4 rounded-2xl border border-[#00814E24] bg-[#00814E24] px-5 py-4 ${toneClass[card.tone]}`}
              >
                <CardIcon kind={card.icon} />
                <span className="text-[14px] font-light text-white md:text-[20px]">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
