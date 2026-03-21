import Image from "next/image";

import { aboutVisionCopy } from "@/constants";

const AboutVisionSection = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1E6B52] md:text-4xl">
          <span className="border-b-2 border-[#1E6B52] pb-2">
            {aboutVisionCopy.title}
          </span>
        </h2>
        <p className="mx-auto mt-10 max-w-4xl text-left text-base leading-7 text-[#1a1a1a] md:text-lg">
          {aboutVisionCopy.description}
        </p>
        <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-2xl md:aspect-[2.4/1]">
          <Image
            src={aboutVisionCopy.imageSrc}
            alt={aboutVisionCopy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutVisionSection;
