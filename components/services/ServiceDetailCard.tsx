"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { cardWhileHover, fadeUp, instantVisible, viewportOnce } from "@/lib/animations";

export type ServiceDetailCardProps = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  iconSrc: string;
};

const ServiceDetailCard = ({
  number,
  title,
  description,
  imageSrc,
  iconSrc,
}: ServiceDetailCardProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="overflow-hidden rounded-[24px] border border-zinc-100 bg-white shadow-sm"
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={reduced ? instantVisible : fadeUp}
      whileHover={reduced ? undefined : cardWhileHover}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      <motion.div
        className="relative aspect-[16/10] md:aspect-[16/7] w-full rounded-[24px] overflow-hidden"
        initial={reduced ? false : { opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <div className="relative rounded-[24px] bg-white px-6 pb-8 pt-4 md:px-8 md:pb-10 ">
        <div className="absolute right-6 top-4 -translate-y-1/2 md:right-8 ">
          <Image
            src={iconSrc}
            alt=""
            width={66}
            height={66}
            className="h-12 w-12 object-contain opacity-90 md:h-14 md:w-14"
          />
        </div>
        <div className="text-3xl font-bold leading-none text-[#006838] md:text-4xl">
          {number}
        </div>
        <h2 className="mt-3 text-lg font-bold text-black md:text-xl">{title}</h2>
        <p className="mt-3 text-[14px] font-normal leading-7 text-[#4c4c4c] md:text-[18px] xl:text-[20px]">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default ServiceDetailCard;
