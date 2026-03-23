import MeterStaggeredGallery from "@/components/products/MeterStaggeredGallery";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { productsCopy, productsTechnicalCopy } from "@/constants";

const ProductsTechnicalSection = () => {
  return (
    <ScrollReveal className="bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-0">
        <h2 className="text-[30px] md:text-[40px] xl:text-[48px] font-bold uppercase tracking-wide text-[#008148]">
          {productsTechnicalCopy.title}
        </h2>
        <div className="mt-4 max-w-4xl space-y-6">
          {productsTechnicalCopy.items.map(({ term, description }) => (
            <p
              key={term}
              className="text-base md:text-[18px] xl:text-[20px] leading-8 font-normal text-[#4C4C4C]"
            >
              <span className="font-bold text-[#4C4C4C]">{term}:</span>{" "}
              {description}
            </p>
          ))}
        </div>
        <div className="mt-16 md:mt-20">
          <MeterStaggeredGallery images={productsCopy.images} />
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ProductsTechnicalSection;
