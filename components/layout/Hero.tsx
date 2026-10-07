"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type AnimationPlaybackControls,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from "react";

import {
  buttonWhileTap,
  cardWhileHover,
  easeNatural,
  scaleIn,
} from "@/lib/animations";

const SLIDER_IMAGES = [
  "/sliders/view-male.jpg",
  "/sliders/turbine.jpg",
  "/sliders/electric-vehicle.svg",
  "/sliders/industrial.png",
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
  light:
    "border border-white/15 bg-black/25 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.7)] backdrop-blur-xl",
  medium:
    "border border-white/15 bg-black/25 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.7)] backdrop-blur-xl",
  dark:
    "border border-white/15 bg-black/25 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.7)] backdrop-blur-xl",
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

const heroHeight = "h-[38rem] xl:h-[48rem]";
const SLIDE_MS = 6500;

/** Apple's scroll-projection: where a flick would coast to. */
function project(initialVelocity: number, decelerationRate = 0.998) {
  return ((initialVelocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

function rubberband(overshoot: number, dimension: number, constant = 0.55) {
  return (
    (overshoot * dimension * constant) /
    (dimension + constant * Math.abs(overshoot))
  );
}

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  lastX: number;
  lastT: number;
  velocity: number;
  dragging: boolean;
};

function useHeroSlider({
  count,
  reduced,
  activeIndex,
  onIndexChange,
}: {
  count: number;
  reduced: boolean;
  activeIndex: number;
  onIndexChange: (index: number) => void;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const dragRef = useRef<DragState | null>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  const skipSyncRef = useRef(false);
  const indexRef = useRef(activeIndex);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    indexRef.current = activeIndex;
  }, [activeIndex]);

  const widthOf = () => viewportRef.current?.clientWidth ?? 0;

  const clampIndex = (index: number) =>
    Math.max(0, Math.min(count - 1, index));

  const animateTo = (index: number, velocity = 0) => {
    const width = widthOf();
    if (!width) return;
    const next = clampIndex(index);
    controlsRef.current?.stop();
    const flicked = Math.abs(velocity) > 400;
    controlsRef.current = animate(x, -next * width, {
      type: "spring",
      bounce: flicked ? 0.18 : 0,
      duration: flicked ? 0.45 : 0.5,
      velocity,
    });
    return next;
  };

  useEffect(() => {
    if (reduced) return;
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (dragRef.current?.dragging) return;
      const width = el.clientWidth;
      if (!width) return;
      controlsRef.current?.stop();
      x.set(-indexRef.current * width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [reduced, x]);

  useEffect(() => {
    if (reduced) return;
    if (skipSyncRef.current) {
      skipSyncRef.current = false;
      return;
    }
    const width = widthOf();
    if (!width) return;
    const target = -activeIndex * width;
    if (Math.abs(x.get() - target) < 0.5) {
      x.set(target);
      return;
    }
    animateTo(activeIndex);
  }, [activeIndex, reduced, count]);

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduced || count < 2 || event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button, a")) return;
    controlsRef.current?.stop();
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: x.get(),
      lastX: event.clientX,
      lastT: performance.now(),
      velocity: 0,
      dragging: false,
    };
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (!drag.dragging) {
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        dragRef.current = null;
        return;
      }
      drag.dragging = true;
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    const width = widthOf() || 1;
    const min = -(count - 1) * width;
    let next = drag.originX + dx;
    if (next > 0) next = rubberband(next, width);
    else if (next < min) next = min - rubberband(min - next, width);
    x.set(next);
    const now = performance.now();
    const dt = now - drag.lastT;
    if (dt > 0) drag.velocity = ((event.clientX - drag.lastX) / dt) * 1000;
    drag.lastX = event.clientX;
    drag.lastT = now;
  };

  const endDrag = (event: ReactPointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    if (!drag.dragging) return;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    const width = widthOf() || 1;
    const projectedX = x.get() + project(drag.velocity);
    const next = clampIndex(Math.round(-projectedX / width));
    if (next !== indexRef.current) skipSyncRef.current = true;
    animateTo(next, drag.velocity);
    if (next !== indexRef.current) onIndexChange(next);
  };

  return {
    viewportRef,
    x,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
  };
}

const HeroScrim = () => (
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/25" />
);

const HeroBackdrop = ({
  slides,
  activeIndex,
  reduced,
  alt,
  imageClassName,
  viewportRef,
  x,
}: {
  slides: readonly string[];
  activeIndex: number;
  reduced: boolean;
  alt: string;
  imageClassName: string;
  viewportRef: RefObject<HTMLDivElement | null>;
  x: MotionValue<number>;
}) => {
  if (reduced) {
    return (
      <div className="absolute inset-0">
        <HeroSlides
          slides={slides}
          activeIndex={activeIndex}
          reduced
          alt={alt}
          imageClassName={imageClassName}
        />
        <HeroScrim />
      </div>
    );
  }

  return (
    <div ref={viewportRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="flex h-full will-change-transform"
        style={{ x, width: `${slides.length * 100}%` }}
      >
        {slides.map((src, idx) => (
          <div
            key={src}
            className="relative h-full overflow-hidden"
            style={{ width: `${100 / slides.length}%` }}
            aria-hidden={idx !== activeIndex}
          >
            <Image
              src={src}
              alt={idx === activeIndex ? alt : ""}
              fill
              sizes="100vw"
              draggable={false}
              className={`pointer-events-none ${imageClassName}`}
              {...(idx === 0
                ? { priority: true }
                : { loading: "eager" as const })}
            />
          </div>
        ))}
      </motion.div>
      <HeroScrim />
    </div>
  );
};

const HeroDots = ({
  slides,
  activeIndex,
  onSelect,
}: {
  slides: readonly string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) => {
  if (slides.length < 2) return null;

  return (
    <div
      className="flex items-center justify-center"
      role="tablist"
      aria-label="Hero slides"
      onKeyDown={(event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        onSelect((activeIndex + direction + slides.length) % slides.length);
      }}
    >
      {slides.map((slideSrc, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={slideSrc}
            type="button"
            role="tab"
            aria-label={`Slide ${idx + 1}`}
            aria-selected={isActive}
            onPointerDown={(event) => {
              if (event.button !== 0) return;
              onSelect(idx);
            }}
            onClick={() => onSelect(idx)}
            className="inline-flex h-11 w-9 cursor-pointer items-center justify-center active:scale-95"
          >
            <motion.span
              aria-hidden="true"
              className={`pointer-events-none block h-2 rounded-full ${
                isActive ? "bg-white" : "bg-white/45"
              }`}
              initial={false}
              animate={{ width: isActive ? 22 : 8 }}
              transition={{ type: "spring", bounce: 0, duration: 0.32 }}
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
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progress = useMotionValue(0);
  const slider = useHeroSlider({
    count: slides.length,
    reduced: !!reduced,
    activeIndex,
    onIndexChange: setActiveIndex,
  });
  const isPaused = hovered || slider.isDragging || hidden;

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    progress.set(0);
  }, [activeIndex, progress]);

  useEffect(() => {
    if (!canAnimate) {
      progress.set(1);
      return;
    }
    if (isPaused) return;
    const remaining = Math.max(0.05, (1 - progress.get()) * (SLIDE_MS / 1000));
    const controls = animate(progress, 1, {
      duration: remaining,
      ease: "linear",
      onComplete: () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      },
    });
    return () => controls.stop();
  }, [activeIndex, canAnimate, isPaused, progress, slides.length]);

  if (variant === "pageTitle") {
    const words = title.split(/\s+/).filter(Boolean);
    return (
      <section
        className={`relative isolate flex ${heroHeight} items-center justify-center overflow-hidden px-4 touch-pan-y ${slider.isDragging ? "cursor-grabbing select-none" : ""} ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={slider.onPointerDown}
        onPointerMove={slider.onPointerMove}
        onPointerUp={slider.onPointerUp}
        onPointerCancel={slider.onPointerCancel}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: easeNatural }}
        >
          <HeroBackdrop
            slides={slides}
            activeIndex={activeIndex}
            reduced={!!reduced}
            alt={backgroundImageAlt}
            imageClassName="object-cover"
            viewportRef={slider.viewportRef}
            x={slider.x}
          />
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
            onSelect={setActiveIndex}
          />
        </div>
      </section>
    );
  }

  const titleWords = title.split(/\s+/).filter(Boolean);

  return (
    <section
      className={`relative isolate flex ${heroHeight} flex-col overflow-hidden touch-pan-y ${slider.isDragging ? "cursor-grabbing select-none" : ""} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={slider.onPointerDown}
      onPointerMove={slider.onPointerMove}
      onPointerUp={slider.onPointerUp}
      onPointerCancel={slider.onPointerCancel}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: easeNatural }}
      >
        <HeroBackdrop
          slides={slides}
          activeIndex={activeIndex}
          reduced={!!reduced}
          alt={backgroundImageAlt}
          imageClassName="object-cover"
          viewportRef={slider.viewportRef}
          x={slider.x}
        />
      </motion.div>

      <div className="relative z-10 mx-auto mt-auto flex w-full min-w-0 max-w-6xl flex-col px-4 pt-8 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-10 lg:px-8 xl:px-0">
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
                whileTap={reduced ? undefined : buttonWhileTap}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 ${toneClass[card.tone]}`}
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
            onSelect={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
