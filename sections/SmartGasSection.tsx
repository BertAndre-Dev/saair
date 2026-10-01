import Image from "next/image";
import Link from "next/link";

import { smartGasPage } from "@/constants/smartGas";

const bodyClass = "text-base leading-8 text-[#4C4C4C]";

const DotField = ({ className }: { className: string }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute h-28 w-24 bg-[radial-gradient(circle,#FDCC0D_1.6px,transparent_1.7px)] bg-size-[12px_12px] ${className}`}
  />
);

const BulletList = ({ items }: { items: readonly string[] }) => (
  <ul className={`mt-3 list-disc space-y-1.5 pl-6 ${bodyClass}`}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const SpecTable = ({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}) => (
  <div>
    <h3 className="text-base font-bold text-[#2B2B2B] md:text-lg">{title}</h3>
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[18rem] border-collapse bg-white text-sm text-[#333] md:text-[15px]">
        <thead>
          <tr className="bg-[#F3F4F2]">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="border border-[#D5D8D3] px-3 py-2.5 text-left font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  className="border border-[#D5D8D3] px-3 py-2.5 align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProductShot = ({
  labelled,
}: {
  labelled: boolean;
}) => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="relative mx-auto aspect-5/4 w-[86%]">
      <Image
        src="/meter/meter4.png"
        alt={
          labelled
            ? "SAAIR data collector unit and customer interface unit"
            : ""
        }
        fill
        className="object-contain"
        sizes="(max-width: 640px) 80vw, 340px"
      />
    </div>
    <div className="relative z-10 mx-auto -mt-6 aspect-3/4 w-[58%] sm:-mt-10">
      <Image
        src="/meter/meter3.png"
        alt={labelled ? "SAAIR prepaid gas meter" : ""}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 55vw, 240px"
      />
    </div>
  </div>
);

const SmartGasSection = () => {
  const copy = smartGasPage;
  const [mechanical, metering, communication, electrical, environmental] =
    copy.specifications;

  return (
    <section className="bg-[#F4F6F3] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-md bg-[#001F3F] px-4 py-2 text-sm font-semibold tracking-[0.08em] text-white">
          {copy.badge}
        </p>
        <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase leading-tight tracking-wide text-[#00804D]">
          {copy.title}
        </h2>
        <div className={`mt-6 space-y-4 ${bodyClass}`}>
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h3 className="mt-10 text-base font-bold text-[#2B2B2B] md:text-lg">
          {copy.descriptionTitle}
        </h3>
        <p className={`mt-4 ${bodyClass}`}>{copy.componentsLead}</p>
        <BulletList items={copy.primaryComponents} />
        <p className={`mt-4 ${bodyClass}`}>{copy.meterBody}</p>
        <p className={`mt-4 ${bodyClass}`}>{copy.ciuLead}</p>
        <BulletList items={copy.ciuPoints} />
        <p className={`mt-4 ${bodyClass}`}>{copy.communication}</p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-8">
          <SpecTable {...mechanical} />
          <SpecTable {...metering} />
        </div>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-8">
          <SpecTable {...communication} />
          <SpecTable {...electrical} />
        </div>
        <div className="mt-10 lg:max-w-[calc(50%-1rem)]">
          <SpecTable {...environmental} />
        </div>

        <h2 className="mt-16 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase leading-tight tracking-wide text-[#00804D]">
          {copy.componentsTitle}
        </h2>
        <h3 className="mt-8 text-base font-bold text-[#2B2B2B] md:text-lg">
          {copy.externalTitle}
        </h3>
        <BulletList items={copy.externalComponents} />
        <h3 className="mt-8 text-base font-bold text-[#2B2B2B] md:text-lg">
          {copy.internalTitle}
        </h3>
        <BulletList items={copy.internalComponents} />

        <div className="relative mt-16">
          <DotField className="top-24 left-0 hidden sm:block" />
          <DotField className="top-16 right-0 hidden sm:block" />
          <div className="relative grid gap-10 sm:grid-cols-2 sm:gap-6">
            <ProductShot labelled />
            <ProductShot labelled={false} />
          </div>
        </div>

        <Link
          href="/products"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[#008148] outline-none focus-visible:ring-2 focus-visible:ring-[#00804D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4F6F3] active:opacity-70 md:text-base"
        >
          <span aria-hidden="true">←</span>
          <span>All products</span>
        </Link>
      </div>
    </section>
  );
};

export default SmartGasSection;
