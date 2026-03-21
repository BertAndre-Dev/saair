import MeterStaggeredGallery from "@/components/products/MeterStaggeredGallery";
import { productsCopy, productsTechnicalCopy } from "@/constants";

const ProductsTechnicalSection = () => {
  return (
    <section className="bg-[#F5F7F7] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-[#008148] md:text-4xl lg:text-5xl">
          {productsTechnicalCopy.title}
        </h2>
        <div className="mt-10 max-w-4xl space-y-6">
          {productsTechnicalCopy.items.map(({ term, description }) => (
            <p
              key={term}
              className="text-base leading-8 text-neutral-800 md:text-lg md:leading-9"
            >
              <span className="font-bold text-neutral-950">{term}:</span>{" "}
              {description}
            </p>
          ))}
        </div>
        <div className="mt-16 md:mt-20">
          <MeterStaggeredGallery images={productsCopy.images} />
        </div>
      </div>
    </section>
  );
};

export default ProductsTechnicalSection;
