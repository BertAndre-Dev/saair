import Image from "next/image";

import { energyManagementPage } from "@/constants/energyManagement";

const cardClass =
  "flex-1 rounded-[24px] bg-white px-6 py-7 sm:px-8 sm:py-8 md:px-9 md:py-9";

const headingClass =
  "text-[1.45rem] font-bold leading-tight text-[#3A3A3A] md:text-[1.7rem]";

const bodyClass =
  "mt-4 text-base leading-7 text-[#5C5C5C] md:text-[17px] md:leading-8";

const BulletList = ({ items }: { items: readonly string[] }) => (
  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[#5C5C5C] md:text-[17px] md:leading-8">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const FramedImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[22px] bg-[#E4E8E3]">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain object-center"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  </div>
);

const EnergyManagementSection = () => {
  const { hero, intro, offerings, notes } = energyManagementPage;

  return (
    <>
      <section>
        <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden md:min-h-[32rem]">
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            priority
            className="object-cover object-center"
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
            <article key={offering.title} className="flex h-full flex-col gap-4">
              <FramedImage src={offering.imageSrc} alt={offering.imageAlt} />
              <div className={cardClass}>
                <h2 className={headingClass}>{offering.title}</h2>
                <p className={bodyClass}>{offering.body}</p>
                {"points" in offering ? (
                  <BulletList items={offering.points} />
                ) : null}
                {"closing" in offering ? (
                  <p className={bodyClass}>{offering.closing}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 space-y-6 lg:mt-10">
          {notes.map((note) => (
            <div key={note.title} className={cardClass}>
              <h2 className={headingClass}>{note.title}</h2>
              <BulletList items={note.points} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EnergyManagementSection;
