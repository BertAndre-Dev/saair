"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { cardWhileHover, easeNatural, scaleIn } from "@/lib/animations";

const SLIDER_IMAGES = [
  "/sliders/view-male.jpg",
  "/sliders/electric-vehicle.jpg",
  "/sliders/oil-platform.jpg",
  "/sliders/turbine.jpg",
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

const HeroSlides = ({
  slides,
  activeIndex,
  reduced,
  alt,
  imageClassName,
}: {
  slides: readonly string[];
  activeIndex: number;
  reduced: boolean;
  alt: string;
  imageClassName: string;
}) => {
  return (
    <>
      {slides.map((src, idx) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: idx === activeIndex ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.45, ease: easeNatural }}
          style={{ zIndex: idx === activeIndex ? 1 : 0 }}
          aria-hidden={idx !== activeIndex}
        >
          <Image
            src={src}
            alt={idx === activeIndex ? alt : ""}
            fill
            sizes="100vw"
            className={imageClassName}
            {...(idx === 0 ? { priority: true } : { loading: "eager" as const })}
          />
        </motion.div>
      ))}
    </>
  );
};

const HeroDots = ({
  slides,
  activeIndex,
  canAnimate,
  onSelect,
}: {
  slides: readonly string[];
  activeIndex: number;
  canAnimate: boolean;
  onSelect: (index: number) => void;
}) => {
  if (slides.length < 2) return null;

  return (
    <div className="flex items-center justify-center gap-1">
      {slides.map((slideSrc, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={slideSrc}
            type="button"
            onClick={() => canAnimate && onSelect(idx)}
            disabled={!canAnimate}
            aria-label={`Slide ${idx + 1}`}
            aria-current={isActive ? "true" : undefined}
            className="inline-flex size-8 items-center justify-center"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition-transform duration-100 ease-out active:scale-90 ${
                isActive ? "bg-white" : "bg-white/40"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
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
    }, 3000);

    return () => window.clearInterval(id);
  }, [canAnimate, isPaused, slides.length]);

  if (variant === "pageTitle") {
    const words = title.split(/\s+/).filter(Boolean);
    return (
      <section
        className={`relative isolate flex min-h-[clamp(22rem,70svh,42rem)] items-center justify-center overflow-hidden px-4 ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: easeNatural }}
        >
          <HeroSlides
            slides={slides}
            activeIndex={activeIndex}
            reduced={!!reduced}
            alt={backgroundImageAlt}
            imageClassName="object-cover"
          />

          <div className="absolute inset-0" />
        </motion.div>

        <div className="relative z-10 w-full max-w-6xl px-2 py-24 text-center sm:py-28">
          <h1 className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 text-balance text-[clamp(2rem,8vw,4.5rem)] font-bold uppercase leading-[1.05] tracking-wide text-white">
            {reduced ? (
              title
            ) : (
              <>
                {words.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    className="inline-block"
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

        <div className="absolute inset-x-0 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-20">
          <HeroDots
            slides={slides}
            activeIndex={activeIndex}
            canAnimate={canAnimate}
            onSelect={setActiveIndex}
          />
        </div>
      </section>
    );
  }

  const titleWords = title.split(/\s+/).filter(Boolean);

  return (
    <section
      className={`relative isolate flex min-h-svh flex-col overflow-x-clip ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduced ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: easeNatural }}
      >
        <HeroSlides
          slides={slides}
          activeIndex={activeIndex}
          reduced={!!reduced}
          alt={backgroundImageAlt}
          imageClassName="scale-105 object-cover"
        />

        <div className="absolute inset-0" />
      </motion.div>

      <div className="relative z-10 mx-auto mt-auto flex w-full min-w-0 max-w-6xl flex-col px-4 pt-28 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-32 lg:px-8 xl:px-0">
        <div className="flex w-full min-w-0 flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="w-full min-w-0 max-w-xl lg:flex-1">
          <h1 className="flex max-w-[14ch] flex-wrap gap-x-[0.28em] gap-y-1 text-[clamp(1.75rem,4.6vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-wide text-white">
            {reduced ? (
              title
            ) : (
              <>
                {titleWords.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    className="inline-block"
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
              className="mt-4 w-full max-w-xl text-[clamp(0.95rem,1.7vw,1.5rem)] font-light leading-relaxed text-white/95 sm:mt-6"
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
              className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 sm:mt-8"
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
            className="flex w-full flex-col gap-3 sm:gap-4 lg:w-[min(100%,22rem)] lg:shrink-0"
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
                <span className="min-w-0 text-[clamp(0.875rem,1.5vw,1.25rem)] font-light leading-snug text-white">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
        </div>
        <div className="mt-6 sm:mt-8">
          <HeroDots
            slides={slides}
            activeIndex={activeIndex}
            canAnimate={canAnimate}
            onSelect={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
