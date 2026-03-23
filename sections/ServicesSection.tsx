import ScrollReveal from "@/components/motion/ScrollReveal";
import { servicesCopy } from "@/constants";

import ServicesHomeCards from "./ServicesHomeCards";

const ServicesSection = () => {
  return (
    <ScrollReveal
      id={servicesCopy.sectionId}
      className="bg-[#001F3F] py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-8 xl:px-0">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-[30px] font-bold tracking-wide text-white md:text-[40px] xl:text-[48px]">
              {servicesCopy.title}
            </h2>
          </div>
          <div className="text-[18px] font-semibold text-[#00804D] md:text-[20px] xl:text-[24px]">
            {servicesCopy.subtitle}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#F7F7F7] md:text-[18px]">
            {servicesCopy.description}
          </p>
        </div>

        <ServicesHomeCards cards={servicesCopy.cards} />
      </div>
    </ScrollReveal>
  );
};

export default ServicesSection;
