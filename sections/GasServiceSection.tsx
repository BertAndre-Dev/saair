import Image from "next/image";

import { gasServicePage } from "@/constants/gasService";

const cardClass =
  "rounded-[24px] bg-white px-6 py-7 sm:px-8 sm:py-8 md:px-9 md:py-9";

const headingClass =
  "text-[1.45rem] font-bold leading-tight text-[#3A3A3A] md:text-[1.7rem]";

const bodyClass = "mt-4 text-base leading-7 text-[#5C5C5C] md:text-[17px] md:leading-8";

const BulletList = ({ items }: { items: readonly string[] }) => (
  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[#5C5C5C] md:text-[17px] md:leading-8">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const FramedImage = ({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) => (
  <div
    className={`relative aspect-[16/10] overflow-hidden rounded-[22px] bg-[#E4E8E3] ${className}`}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      priority={priority}
    />
  </div>
);

const GasServiceSection = () => {
  const { hero, intro, offerings, consultation, audience } = gasServicePage;

  return (
    <>
      <section className="pt-3 sm:pt-4">
        <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden md:min-h-[38rem]">
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            priority
            className="object-cover object-[center_42%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 px-6 text-center text-[clamp(1.85rem,4.6vw,3.6rem)] font-bold uppercase leading-[1.1] tracking-wide text-white">
            {hero.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 xl:px-0">
        <div className="max-w-5xl space-y-5 text-base leading-7 text-[#4A4A4A] md:text-[17px] md:leading-8">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-10">
          {offerings.map((offering) => (
            <article key={offering.title} className="flex flex-col gap-4">
              <FramedImage src={offering.imageSrc} alt={offering.imageAlt} />
              <div className={cardClass}>
                <h2 className={headingClass}>{offering.title}</h2>
                <p className={bodyClass}>{offering.body}</p>
                {"points" in offering ? (
                  <BulletList items={offering.points} />
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 lg:mt-10">
          <FramedImage
            src={consultation.imageSrc}
            alt={consultation.imageAlt}
            className="lg:w-[calc(50%-0.75rem)]"
          />
          <div className={`${cardClass} mt-4`}>
            <h2 className={headingClass}>{consultation.title}</h2>
            <p className={bodyClass}>{consultation.body}</p>
          </div>
          <div className={`${cardClass} mt-6`}>
            <h2 className={headingClass}>{audience.title}</h2>
            <p className={bodyClass}>{audience.body}</p>
            <BulletList items={audience.points} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GasServiceSection;
