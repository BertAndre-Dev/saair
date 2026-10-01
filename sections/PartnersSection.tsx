import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/motion/ScrollReveal";
import { productsCopy } from "@/constants";

const DotField = ({ className }: { className: string }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute ${className}`}
    style={{
      width: "9.5rem",
      height: "9.5rem",
      backgroundImage:
        "radial-gradient(circle, #E4C04A 2.15px, transparent 2.25px)",
      backgroundSize: "18px 18px",
    }}
  />
);

const ProductsSection = () => {
  return (
    <ScrollReveal
      id={productsCopy.sectionId}
      className="relative scroll-mt-28 overflow-hidden bg-[#F3F6F2] py-16 md:py-24"
    >
      <DotField className="top-8 right-0 md:top-12 md:right-6" />
      <DotField className="-bottom-6 -left-8 md:bottom-8 md:left-0" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-[clamp(1.875rem,4vw,3rem)] font-bold uppercase leading-[1.05] tracking-wide text-[#00804D]">
          {productsCopy.title}
        </h2>
        <p className="mt-5 inline-flex rounded-md bg-[#001F3F] px-4 py-2 text-sm font-semibold tracking-[0.08em] text-white">
          {productsCopy.badgeLabel}
        </p>
        <h3 className="mt-6 text-[clamp(1.35rem,2.4vw,1.85rem)] font-bold leading-tight text-[#00804D]">
          {productsCopy.headline}
        </h3>
        <div className="mt-5 max-w-4xl space-y-4 text-base leading-7 text-[#4C4C4C] md:text-[17px] md:leading-8">
          {productsCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link
          href={productsCopy.ctaHref}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#008148] px-6 py-3 text-sm font-semibold text-white shadow-sm outline-none transition-colors hover:bg-[#008148]/90 focus-visible:ring-2 focus-visible:ring-[#00804D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F3F6F2] md:text-base"
        >
          {productsCopy.ctaLabel}
          <span aria-hidden="true">→</span>
        </Link>

        <ul className="mt-12 grid gap-5 md:mt-14 lg:grid-cols-2 lg:gap-6">
          {productsCopy.cards.map((card) => (
            <li key={card.category}>
              <article className="flex h-full items-center gap-4 rounded-[24px] bg-white p-4 sm:gap-6 sm:p-6">
                <div className="relative h-44 w-28 shrink-0 sm:h-52 sm:w-36">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
                <div className="min-w-0 py-2">
                  <p className="inline-flex rounded-full bg-[#E7F6EE] px-3 py-1 text-sm font-medium text-[#00804D]">
                    {card.category}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-black md:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5C5C5C] md:text-base md:leading-7">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00804D] outline-none focus-visible:ring-2 focus-visible:ring-[#00804D] focus-visible:ring-offset-4 md:text-base"
                  >
                    <span>Learn More</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
};

export default ProductsSection;
