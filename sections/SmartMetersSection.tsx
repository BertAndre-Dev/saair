import Image from "next/image";
import Link from "next/link";

import { smartMetersPage } from "@/constants/smartMeters";

const DotField = ({ className }: { className: string }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute h-28 w-24 bg-[radial-gradient(circle,#FDCC0D_1.6px,transparent_1.7px)] bg-size-[12px_12px] ${className}`}
  />
);

const MeterPair = ({
  align,
}: {
  align: "left" | "right";
}) => (
  <div className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[32rem]">
    <div
      className={`absolute top-0 w-[48%] ${align === "left" ? "left-0" : "right-0"}`}
    >
      <div className="relative aspect-[3/4]">
        <Image
          src="/meter/meter2.svg"
          alt=""
          fill
          className="object-contain"
          sizes="20vw"
        />
      </div>
    </div>
    <div
      className={`absolute bottom-0 z-10 w-[68%] ${align === "left" ? "right-0" : "left-0"}`}
    >
      <div className="relative aspect-[3/4]">
        <Image
          src="/meter/meter1.png"
          alt="SAAIR three phase energy meter"
          fill
          className="object-contain"
          sizes="28vw"
        />
      </div>
    </div>
  </div>
);

const SmartMetersSection = () => {
  const copy = smartMetersPage;

  return (
    <section className="bg-[#F4F6F3] py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-md bg-[#001F3F] px-4 py-2 text-sm font-semibold tracking-[0.08em] text-white">
          {copy.badge}
        </p>
        <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase leading-tight tracking-wide text-[#00804D]">
          {copy.title}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-8 text-[#4C4C4C]">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h3 className="mt-10 text-base font-bold text-[#4C4C4C] md:text-lg">
          {copy.whyTitle}
        </h3>
        <p className="mt-4 text-base leading-8 text-[#4C4C4C]">{copy.whyLead}</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-[#4C4C4C]">
          {copy.whyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="mt-4 text-base leading-8 text-[#4C4C4C]">
          {copy.whyClosing}
        </p>

        <h2 className="mt-16 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase leading-tight tracking-wide text-[#00804D]">
          {copy.specTitle}
        </h2>
        <div className="mt-6 space-y-6">
          {copy.specs.map((spec) => (
            <p key={spec.term} className="text-base leading-8 text-[#4C4C4C]">
              <span className="font-bold text-[#333]">{spec.term}:</span>{" "}
              {spec.description}
            </p>
          ))}
        </div>

        <div className="relative mt-16">
          <DotField className="top-8 left-0" />
          <DotField className="top-4 right-4 sm:right-10" />
          <div className="relative grid gap-6 sm:grid-cols-2 sm:gap-4">
            <MeterPair align="left" />
            <MeterPair align="right" />
          </div>
        </div>

        <Link
          href="/products"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[#008148] active:opacity-70 md:text-base"
        >
          <span aria-hidden="true">←</span>
          All products
        </Link>
      </div>
    </section>
  );
};

export default SmartMetersSection;
