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
    <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <motion.article
          key={card.number}
          variants={itemVariants}
          whileHover={reduced ? undefined : cardWhileHover}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="overflow-hidden rounded-[24px] bg-white shadow-sm"
        >
          <div className="relative h-56 w-full md:h-60">
            <Image
              src={card.imageSrc}
              alt=""
              fill
              className="object-cover"
              priority={card.number === "01"}
            />
          </div>

          <div className="relative p-4">
            <div className="absolute right-6 top-1">
              <Image
                src={card.iconSrc}
                alt=""
                width={100}
                height={80}
                className="h-10 w-10"
              />
            </div>

            <div className="flex flex-col items-start gap-4 border border-[#FFFFFF14] pb-2">
              <div className="text-[28px] font-bold leading-none text-[#00804D] md:text-[32px] xl:text-[40px]">
                {card.number}
              </div>
              <h3 className="text-base font-bold text-black md:text-[18px]">
                {card.title}
              </h3>
            </div>

            <p className="text-[14px] leading-6 text-[#4C4C4C] md:text-base">
              {card.description}
            </p>
          </div>
        </motion.article>
      ))}
    </StaggerContainer>
  );
};

export default ServicesHomeCards;
