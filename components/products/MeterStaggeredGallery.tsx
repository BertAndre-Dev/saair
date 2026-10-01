"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { viewportOnce } from "@/lib/animations";

export type MeterGalleryImages = {
  md: {
    leftBack: { src: string; alt: string };
    leftFront: { src: string; alt: string };
    rightBack: { src: string; alt: string };
    rightFront: { src: string; alt: string };
  };
  sm: readonly { src: string; alt: string }[];
};

type MeterFrame = { src: string; alt: string };

type MeterStaggeredGalleryProps = {
  images: MeterGalleryImages;
};

const tileSpring = { type: "spring" as const, stiffness: 420, damping: 34 };

function MeterFrameLink({
  frame,
  className,
  sizes,
  priority = false,
  reduced,
}: Readonly<{
  frame: MeterFrame;
  className: string;
  sizes: string;
  priority?: boolean;
  reduced: boolean | null;
}>) {
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      whileHover={reduced ? undefined : { y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={reduced ? { duration: 0.2 } : tileSpring}
    >
      <Link
        href="/products"
        className="relative block h-full w-full overflow-hidden rounded-[24px] bg-white shadow-[0_16px_40px_-28px_rgba(0,31,63,0.45)]"
      >
        <Image
          src={frame.src}
          alt={frame.alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </Link>
    </motion.div>
  );
}

const MeterStaggeredGallery = ({ images }: MeterStaggeredGalleryProps) => {
  const reduced = useReducedMotion();
  const frames: MeterFrame[] = [
    images.md.rightFront,
    images.md.leftFront,
    images.md.rightBack,
    images.md.leftBack,
  ];

  return (
    <div>
      <div className="hidden gap-4 lg:grid lg:min-h-[460px] lg:grid-cols-2 lg:grid-rows-2">
        <MeterFrameLink
          frame={frames[0]}
          reduced={reduced}
          priority
          sizes="(min-width: 1024px) 28vw, 80vw"
          className="row-span-2 h-full min-h-[460px]"
        />
        <MeterFrameLink
          frame={frames[1]}
          reduced={reduced}
          sizes="(min-width: 1024px) 22vw, 40vw"
          className="h-full"
        />
        <div className="grid h-full min-h-0 grid-cols-2 gap-4">
          <MeterFrameLink
            frame={frames[2]}
            reduced={reduced}
            sizes="(min-width: 1024px) 12vw, 40vw"
            className="h-full"
          />
          <MeterFrameLink
            frame={frames[3]}
            reduced={reduced}
            sizes="(min-width: 1024px) 12vw, 40vw"
            className="h-full"
          />
        </div>
      </div>

      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {frames.map((frame, index) => (
          <MeterFrameLink
            key={frame.src}
            frame={frame}
            reduced={reduced}
            priority={index === 0}
            sizes="78vw"
            className="aspect-[3/4] w-[78%] max-w-sm shrink-0 snap-start"
          />
        ))}
      </div>
    </div>
  );
};

export default MeterStaggeredGallery;
