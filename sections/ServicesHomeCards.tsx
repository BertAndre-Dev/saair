"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import StaggerContainer, {
  instantVisible,
  staggerChildVariants,
} from "@/components/motion/StaggerContainer";
import { servicesCopy } from "@/constants";

type Card = (typeof servicesCopy.cards)[number];

type ServicesHomeCardsProps = Readonly<{
  cards: readonly Card[];
}>;

const coverSpring = { type: "spring" as const, stiffness: 340, damping: 32 };

const ServiceHomeCard = ({ card }: { card: Card }) => {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const cover = hovered && !reduced;
  const showLink = cover || Boolean(reduced);

  return (
    <Link
      href={`/services/${card.slug}`}
      className="relative flex h-full flex-col overflow-hidden rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-[#00804D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001F3F]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="relative h-60 w-full shrink-0">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-center"
          priority={card.number === "01"}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-1 flex-col rounded-[24px] bg-white p-4 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.45)]"
        initial={false}
        animate={{ marginTop: cover ? "-15rem" : "-2rem" }}
        transition={reduced ? { duration: 0.01 } : coverSpring}
      >
        <div className="pointer-events-none absolute top-1 right-3 sm:right-4">
          <Image
            src={card.iconSrc}
            alt=""
            width={120}
            height={96}
            className="h-14 w-16 object-contain sm:h-16 sm:w-20"
          />
        </div>

        <div className="flex flex-col items-start gap-3 pr-16 pb-2 md:gap-4 md:pr-20">
          <div className="text-[28px] font-bold leading-none tracking-[-0.02em] text-[#00804D] md:text-[32px] xl:text-[40px]">
            {card.number}
          </div>
          <h3 className="text-base font-bold leading-snug text-black md:text-[18px]">
            {card.title}
          </h3>
        </div>

        {card.note ? (
          <p className="text-[14px] leading-6 text-[#4C4C4C] md:text-base">
            {card.note}
          </p>
        ) : null}
        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[14px] leading-6 text-[#4C4C4C] md:text-base">
          {card.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <span
          className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#008148] md:text-base ${
            showLink
              ? "h-auto opacity-100"
              : "h-0 overflow-hidden opacity-0 max-lg:h-auto max-lg:overflow-visible max-lg:opacity-100"
          }`}
        >
          Learn More
          <span aria-hidden="true">→</span>
        </span>

        <motion.span
          aria-hidden="true"
          className="mt-4 h-1 w-16 origin-left rounded-full bg-[#00804D]"
          initial={false}
          animate={{ scaleX: cover ? 1 : 0 }}
          transition={reduced ? { duration: 0.01 } : coverSpring}
        />
      </motion.div>
    </Link>
  );
};

const ServicesHomeCards = ({ cards }: ServicesHomeCardsProps) => {
  const reduced = useReducedMotion();
  const itemVariants = reduced ? instantVisible : staggerChildVariants;

  return (
    <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.slug}
          variants={itemVariants}
          className={`h-full min-w-0 lg:col-span-2 ${
            cards.length === 5 && index === 3 ? "lg:col-start-2" : ""
          }`}
        >
          <ServiceHomeCard card={card} />
        </motion.div>
      ))}
    </StaggerContainer>
  );
};

export default ServicesHomeCards;
