"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import StaggerContainer, {
  instantVisible,
  staggerChildVariants,
} from "@/components/motion/StaggerContainer";
import { cardWhileHover } from "@/lib/animations";
import { servicesCopy } from "@/constants";

type Card = (typeof servicesCopy.cards)[number];

type ServicesHomeCardsProps = Readonly<{
  cards: readonly Card[];
}>;

const ServicesHomeCards = ({ cards }: ServicesHomeCardsProps) => {
  const reduced = useReducedMotion();
  const itemVariants = reduced ? instantVisible : staggerChildVariants;

  return (
    <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-6">
      {cards.map((card, index) => (
        <motion.article
          key={card.number}
          variants={itemVariants}
          whileHover={reduced ? undefined : cardWhileHover}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className={`flex h-full min-w-0 flex-col lg:col-span-2 ${
            cards.length === 5 && index === 3 ? "lg:col-start-2" : ""
          }`}
        >
          <div className="relative h-44 w-full overflow-hidden rounded-t-[24px] sm:h-52 lg:h-56">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority={card.number === "01"}
            />
          </div>

          <div className="relative z-10 -mt-8 flex flex-1 flex-col rounded-[24px] bg-white p-4 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.45)] md:-mt-10">
            <div className="pointer-events-none absolute right-3 top-1 -translate-y-1/4 sm:right-4">
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
          </div>
        </motion.article>
      ))}
    </StaggerContainer>
  );
};

export default ServicesHomeCards;
