import MeterStaggeredGallery from "@/components/products/MeterStaggeredGallery";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { productsCopy } from "@/constants";

const ProductsSection = () => {
  return (
    <ScrollReveal
      id={productsCopy.sectionId}
      className="bg-[#F5F7F7] py-16 md:py-24 md:px-8 xl:px-0"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-0">
        <div className="grid gap-12 md:items-start">
          <div className="max-w-4xl">
            <h2 className="text-[30px] font-bold uppercase tracking-wide text-[#00804D] md:text-[40px] xl:text-[48px]">
              {productsCopy.title}
            </h2>
            <div className="inline-flex items-center rounded-md bg-[#001F3F] px-4 py-2 text-[18px] font-semibold tracking-wider text-white md:text-[20px]">
              {productsCopy.badgeLabel}
            </div>

            {productsCopy.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-[14px] font-normal leading-7 text-[#4C4C4C] md:text-[16px] xl:text-[18px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <MeterStaggeredGallery images={productsCopy.images} />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ProductsSection;
