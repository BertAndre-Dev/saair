// import Image from "next/image";
// import { commitmentCopy } from "@/constants";

// const ImageTile = ({
//   src,
//   className = "",
// }: {
//   src: string;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 ${className}`}
//     >
//       <Image src={src} alt="" fill className="object-cover" priority />
//     </div>
//   );
// };

// const StatTile = ({
//   icon,
//   value,
//   label,
//   className = "",
// }: {
//   icon: "lightning" | "satisfaction";
//   value: string;
//   label: string;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={`flex h-full flex-col justify-end gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-8 ${className}`}
//     >
//       <div className="mb-1">
//         {icon === "lightning" ? (
//           <Image src="/lighting.svg" alt="lightning" width={32} height={32} />
//         ) : (
//           <Image src="/handshake.svg" alt="handshake" width={32} height={32} />
//         )}
//       </div>
//       <div className="text-[48px] md:text-[56px] font-bold leading-none text-white">
//         {value}
//       </div>
//       <div className="text-base font-medium leading-6 text-white/80">
//         {label}
//       </div>
//     </div>
//   );
// };

// const CommitmentSection = () => {
//   const statLightning = commitmentCopy.stats[0];
//   const statSatisfaction = commitmentCopy.stats[1];

//   return (
//     <section id="commitment" className="bg-[#001F3F] py-16 md:py-24">
//       <div className="mx-auto w-full max-w-6xl px-4 md:px-0">
//         {/* Header */}
//         <div className="max-w-3xl">
//           <h2 className="text-emerald-500 text-[28px] md:text-[36px] font-bold uppercase tracking-wide">
//             {commitmentCopy.title}
//           </h2>
//           <p className="mt-6 text-base md:text-lg leading-7 md:leading-8 text-white/80">
//             {commitmentCopy.description}
//           </p>
//         </div>

//         {/* md+ : Figma-like 3-col grid */}
//         <div className="mt-10 hidden md:grid md:grid-cols-3 gap-4">
//           {/* Row 1 */}
//           <ImageTile src="/commitment/front.svg" className="h-56" />
//           <ImageTile src="/commitment/front (1).svg" className="h-56" />
//           <StatTile
//             icon="lightning"
//             value={statLightning.value}
//             label={statLightning.label}
//             className="h-56"
//           />

//           {/* Row 2 (right cell intentionally empty) */}
//           <ImageTile src="/commitment/front (2).svg" className="h-56" />
//           <ImageTile src="/commitment/front (3).svg" className="h-56" />
//           <div
//             className="h-56 rounded-2xl border border-white/10 bg-white/0"
//             aria-hidden="true"
//           />

//           {/* Row 3 */}
//           <div className="col-span-3 grid grid-cols-4 gap-4">
//             <StatTile
//               icon="satisfaction"
//               value={statSatisfaction.value}
//               label={statSatisfaction.label}
//               className="h-56 col-span-1"
//             />
//             <ImageTile src="/commitment/front (4).svg" className="h-56 col-span-1" />
//             <ImageTile
//               src="/commitment/front (5).svg"
//               className="h-56 col-span-2"
//             />
//           </div>
//         </div>

//         {/* Mobile: single col */}
//         <div className="mt-10 flex flex-col gap-4 md:hidden">
//           <StatTile
//             icon="lightning"
//             value={statLightning.value}
//             label={statLightning.label}
//             className="h-48"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             <ImageTile src="/commitment/front.svg" className="h-44" />
//             <ImageTile src="/commitment/front (1).svg" className="h-44" />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <ImageTile src="/commitment/front (2).svg" className="h-44" />
//             <ImageTile src="/commitment/front (3).svg" className="h-44" />
//           </div>
//           <StatTile
//             icon="satisfaction"
//             value={statSatisfaction.value}
//             label={statSatisfaction.label}
//             className="h-48"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             <ImageTile src="/commitment/front (4).svg" className="h-44" />
//             <ImageTile src="/commitment/front (5).svg" className="h-44" />
//           </div>
//           <ImageTile src="/commitment/front (6).svg" className="h-44" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommitmentSection;

import Image from "next/image";
import { commitmentCopy } from "@/constants";

const ImageTile = ({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 ${className}`}
    >
      <Image src={src} alt="" fill className="object-cover" priority />
    </div>
  );
};

const StatTile = ({
  icon,
  value,
  label,
  className = "",
}: {
  icon: "lightning" | "satisfaction";
  value: string;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex h-full flex-col justify-end gap-3 rounded-2xl border border-[#FFFFFF] lg:px-8 lg:py-8 px-4 py-4 ${className}`}
    >
      <div className="mb-1">
        {icon === "lightning" ? (
          <Image src="/lighting.svg" alt="lightning" width={32} height={32} />
        ) : (
          <Image src="/handshake.svg" alt="handshake" width={32} height={32} />
        )}
      </div>
      <div className="text-[48px] lg:text-[56px] font-bold leading-none text-white">
        {value}
      </div>
      <div className="text-base font-medium leading-6 text-white/80">
        {label}
      </div>
    </div>
  );
};

const CommitmentSection = () => {
  const statLightning = commitmentCopy.stats[0];
  const statSatisfaction = commitmentCopy.stats[1];

  return (
    <section id="commitment" className="bg-[#001F3F] py-16 md:py-24 md:px-8 xl:px-0">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-0">
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="text-[#00804D] text-[30px] md:text-[40px] xl:text-[48px] font-bold uppercase tracking-wide">
            {commitmentCopy.title}
          </h2>
          <p className="mt-6 text-[14px] md:text-[16px] xl:text-[18px] font-normal leading-7 md:leading-8 text-[#FFFFFF]">
            {commitmentCopy.description}
          </p>
        </div>

        {/* Desktop grid */}
        <div className="mt-10 hidden md:flex md:flex-col gap-4">

          {/* Rows 1 & 2 — narrower, 3 equal cols */}
          <div className="grid grid-cols-3 gap-4 w-[75%]">
            {/* Row 1 */}
            <ImageTile src="/commitment/front.svg" className="h-52" />
            <ImageTile src="/commitment/front (1).svg" className="h-52" />
            <StatTile
              icon="lightning"
              value={statLightning.value}
              label={statLightning.label}
              className="h-52"
            />

            {/* Row 2 */}
            <ImageTile src="/commitment/front (2).svg" className="h-52" />
            <ImageTile src="/commitment/front (3).svg" className="h-52" />
            <ImageTile src="/commitment/front (4).svg" className="h-52" />
          </div>

          {/* Row 3 — full width, 4 cols with last image spanning 2 */}
          <div className="grid grid-cols-4 gap-4 w-full">
            <StatTile
              icon="satisfaction"
              value={statSatisfaction.value}
              label={statSatisfaction.label}
              className="h-56 col-span-1"
            />
            <ImageTile
              src="/commitment/front (5).svg"
              className="h-56 col-span-1"
            />
            <ImageTile
              src="/commitment/front (6).svg"
              className="h-56 col-span-2"
            />
          </div>
        </div>

        {/* Mobile: single col */}
        <div className="mt-10 flex flex-col gap-4 md:hidden">
          <StatTile
            icon="lightning"
            value={statLightning.value}
            label={statLightning.label}
            className="h-48"
          />
          <div className="grid grid-cols-2 gap-4">
            <ImageTile src="/commitment/front.svg" className="h-44" />
            <ImageTile src="/commitment/front (1).svg" className="h-44" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageTile src="/commitment/front (2).svg" className="h-44" />
            <ImageTile src="/commitment/front (3).svg" className="h-44" />
          </div>
          <StatTile
            icon="satisfaction"
            value={statSatisfaction.value}
            label={statSatisfaction.label}
            className="h-48"
          />
          <div className="grid grid-cols-2 gap-4">
            <ImageTile src="/commitment/front (4).svg" className="h-44" />
            <ImageTile src="/commitment/front (5).svg" className="h-44" />
          </div>
          <ImageTile src="/commitment/front (6).svg" className="h-44" />
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;