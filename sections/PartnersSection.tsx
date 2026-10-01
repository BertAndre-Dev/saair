import Link from "next/link";

import ProductCollage from "@/components/products/ProductCollage";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { productsCopy } from "@/constants";

const DotField = ({ className }: { className: string }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute h-28 w-28 bg-[radial-gradient(circle,#FDCC0D_1.6px,transparent_1.7px)] bg-size-[11px_11px] ${className}`}
  />
);

const ProductsSection = () => {
  return (
    <ScrollReveal
      id={productsCopy.sectionId}
      className="relative scroll-mt-28 overflow-hidden bg-[#F3F6F2] py-16 md:py-24"
    >
      <DotField className="top-16 right-6 opacity-90 sm:right-16" />
      <DotField className="bottom-10 left-0 opacity-90" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-[clamp(1.875rem,4vw,3rem)] font-bold uppercase leading-[1.05] tracking-wide text-[#00804D]">
          {productsCopy.title}
        </h2>
        <p className="mt-5 inline-flex rounded-md bg-[#001F3F] px-4 py-2 text-sm font-semibold tracking-[0.08em] text-white">
          {productsCopy.badgeLabel}
        </p>
        <h3 className="mt-6 text-xl font-bold text-[#00804D] sm:text-2xl">
          {productsCopy.headline}
        </h3>
        <p className="mt-5 max-w-4xl text-base leading-7 text-[#4C4C4C] md:text-[17px] md:leading-8">
          {productsCopy.paragraphs[0]}
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00804D] px-6 py-3 text-sm font-semibold text-white outline-none transition-transform duration-100 ease-out active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#00804D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F3F6F2]"
        >
          {productsCopy.ctaLabel}
          <span aria-hidden="true">↗</span>
        </Link>

        <div className="mt-10">
          <ProductCollage />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ProductsSection;
