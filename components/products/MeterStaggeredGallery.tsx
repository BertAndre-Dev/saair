"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

import { scaleIn, viewportOnce } from "@/lib/animations";

export type MeterGalleryImages = {
  md: {
    leftBack: { src: string; alt: string };
    leftFront: { src: string; alt: string };
    rightBack: { src: string; alt: string };
    rightFront: { src: string; alt: string };
  };
  sm: readonly { src: string; alt: string }[];
};

const DotBlock = ({ variant }: { variant: "gold" | "gold2" }) => {
  const gradient =
    variant === "gold"
      ? "bg-[radial-gradient(circle,#FDCC0D,transparent_3px)]"
      : "bg-[radial-gradient(circle,#FDCC0D,transparent_3px)]";

  return (
    <div
      aria-hidden="true"
      className={`h-28 w-28 bg-size-[12px_12px] opacity-80 ${gradient}`}
    />
  );
};

type MeterStaggeredGalleryProps = {
  images: MeterGalleryImages;
};

const tileHover = { y: -6, scale: 1.03, transition: { duration: 0.3 } };

function MeterGalleryTile({
  className,
  children,
  reduced,
}: Readonly<{
  className: string;
  children: ReactNode;
  reduced: boolean | null;
}>) {
  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={reduced ? { hidden: {}, visible: {} } : scaleIn}
      whileHover={reduced ? undefined : tileHover}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}

const MeterStaggeredGallery = ({ images }: MeterStaggeredGalleryProps) => {
  const reduced = useReducedMotion();

  return (
    <>
      <div className="relative hidden h-[520px] md:block">
        <div className="absolute left-0 top-70">
          <DotBlock variant="gold" />
        </div>
        <div className="absolute right-0 top-5">
          <DotBlock variant="gold2" />
        </div>

        <MeterGalleryTile
          reduced={reduced}
          className="absolute left-0 top-16 z-10 h-[260px] w-[240px] cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative h-full w-full">
            <Image
              src={images.md.leftBack.src}
              alt={images.md.leftBack.alt}
              fill
              className="object-cover"
              sizes="240px"
              priority
            />
          </div>
        </MeterGalleryTile>

        <MeterGalleryTile
          reduced={reduced}
          className="absolute left-24 top-36 z-20 h-[260px] w-[260px] cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative h-full w-full">
            <Image
              src={images.md.leftFront.src}
              alt={images.md.leftFront.alt}
              fill
              className="object-cover"
              sizes="260px"
              priority
            />
          </div>
        </MeterGalleryTile>

        <MeterGalleryTile
          reduced={reduced}
          className="absolute right-0 top-20 z-10 h-[260px] w-[240px] cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative h-full w-full">
            <Image
              src={images.md.rightBack.src}
              alt={images.md.rightBack.alt}
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
        </MeterGalleryTile>

        <MeterGalleryTile
          reduced={reduced}
          className="absolute right-16 top-32 z-20 h-[280px] w-[280px] cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="relative h-full w-full">
            <Image
              src={images.md.rightFront.src}
              alt={images.md.rightFront.alt}
              fill
              className="object-cover"
              sizes="280px"
              priority
            />
          </div>
        </MeterGalleryTile>
      </div>

      <div className="grid gap-6 md:hidden">
        {images.sm.map((img, idx) => (
          <motion.div
            key={img.alt}
            className="relative h-72 cursor-pointer overflow-hidden rounded-2xl bg-white"
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            variants={reduced ? { hidden: {}, visible: {} } : scaleIn}
            whileHover={reduced ? undefined : tileHover}
            transition={{ delay: idx * 0.05 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={idx === 0}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MeterStaggeredGallery;
