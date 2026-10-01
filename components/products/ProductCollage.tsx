"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { productsCopy } from "@/constants";

const settle = { type: "spring" as const, bounce: 0, duration: 0.4 };

const ProductCollage = () => {
  const reduced = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
      {productsCopy.cards.map((card) => (
        <motion.div
          key={card.src}
          initial={false}
          whileHover={reduced ? undefined : { y: -4 }}
          whileTap={reduced ? undefined : { scale: 0.985 }}
          transition={reduced ? { duration: 0.01 } : settle}
        >
          <Link
            href="/products"
            className="flex h-full items-center gap-4 rounded-[24px] bg-white p-4 outline-none shadow-[0_16px_40px_-28px_rgba(0,31,63,0.35)] focus-visible:ring-2 focus-visible:ring-[#00804D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F3F6F2] sm:gap-6 sm:p-6"
          >
            <span className="relative h-52 w-[40%] shrink-0 sm:h-60">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 40vw, 16vw"
                className="object-contain object-center"
              />
            </span>
            <span className="min-w-0">
              <span className="inline-flex rounded-full bg-[#E8F6EE] px-3 py-1 text-xs font-semibold text-[#00804D]">
                {card.category}
              </span>
              <span className="mt-3 block text-base font-bold leading-snug text-[#111] sm:text-lg">
                {card.title}
              </span>
              <span className="mt-2 block text-sm leading-6 text-[#5C5C5C]">
                {card.detail}
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#00804D]">
                Learn More
                <span aria-hidden="true">↗</span>
              </span>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCollage;
