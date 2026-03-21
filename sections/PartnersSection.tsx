// import Image from "next/image";

// import { productsCopy } from "@/constants";

// const DotBlock = ({ variant }: { variant: "gold" | "gold2" }) => {
//   const gradient =
//     variant === "gold"
//       ? "bg-[radial-gradient(circle,#E6C14A_2px,transparent_2px)]"
//       : "bg-[radial-gradient(circle,#FDCC0D_3px,transparent_3px)]";

//   return (
//     <div
//       aria-hidden="true"
//       className={`h-28 w-28 bg-size-[12px_12px] opacity-80 ${gradient}`}
//     />
//   );
// };

// const ProductsSection = () => {
//   return (
//     <section
//       id={productsCopy.sectionId}
//       className="bg-[#F5F7F7] py-16 md:py-24 md:px-8 xl:px-0"
//     >
//       <div className="mx-auto w-full max-w-6xl px-4">
//         <div className="grid gap-12 md:items-start">
//           <div className="max-w-4xl">
//           <h2 className="text-[#00804D] text-[30px] md:text-[40px] xl:text-[48px] font-bold uppercase tracking-wide">
//             {productsCopy.title}
//           </h2>
//             <div className="mt-4 inline-flex items-center rounded-md bg-[#001F3F] px-4 py-2 text-[18px] md:text-[20px] xl:text-[24px] font-semibold tracking-wider text-white">
//               {productsCopy.badgeLabel}
//             </div>

//             {productsCopy.paragraphs.map((paragraph) => (
//               <p
//                 key={paragraph}
//                 className="mt-6 text-[14px] md:text-[16px] xl:text-[18px] font-normal text-[#4C4C4C] leading-7"
//               >
//                 {paragraph}
//               </p>
//             ))}
//           </div>

//           {/* md and above: overlapped composition */}
//           <div className="relative hidden h-[520px] md:block">
//             <div className="absolute left-0 top-8">
//               <DotBlock variant="gold" />
//             </div>
//             <div className="absolute right-0 top-0">
//               <DotBlock variant="gold2" />
//             </div>

//             {/* Left back tile */}
//             <div className="absolute left-0 top-16 z-10 h-[240px] w-[240px] overflow-hidden rounded-lg">
//               <div className="relative h-full w-full">
//                 <Image
//                   src={productsCopy.images.md.leftBack.src}
//                   alt={productsCopy.images.md.leftBack.alt}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Left front tile */}
//             <div className="absolute left-24 top-36 z-20 h-[280px] w-[260px] overflow-hidden rounded-lg">
//               <div className="relative h-full w-full">
//                 <Image
//                   src={productsCopy.images.md.leftFront.src}
//                   alt={productsCopy.images.md.leftFront.alt}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Right back tile */}
//             <div className="absolute right-0 top-20 z-10 h-[240px] w-[240px] overflow-hidden rounded-lg">
//               <div className="relative h-full w-full">
//                 <Image
//                   src={productsCopy.images.md.rightBack.src}
//                   alt={productsCopy.images.md.rightBack.alt}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* Right front tile */}
//             <div className="absolute right-16 top-32 z-20 h-[320px] w-[280px] overflow-hidden rounded-lg">
//               <div className="relative h-full w-full">
//                 <Image
//                   src={productsCopy.images.md.rightFront.src}
//                   alt={productsCopy.images.md.rightFront.alt}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>

//           {/* sm: stacked tiles */}
//           <div className="grid gap-6 md:hidden">
//             {productsCopy.images.sm.map((img, idx) => (
//               <div
//                 key={img.alt}
//                 className="relative h-72 overflow-hidden rounded-lg bg-white"
//               >
//                 <Image
//                   src={img.src}
//                   alt={img.alt}
//                   fill
//                   className="object-cover"
//                   priority={idx === 0}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;

import Image from "next/image";
import { productsCopy } from "@/constants";

const DotBlock = ({ variant }: { variant: "gold" | "gold2" }) => {
  const gradient =
    variant === "gold"
      ? "bg-[radial-gradient(circle,#E6C14A_2px,transparent_2px)]"
      : "bg-[radial-gradient(circle,#FDCC0D_3px,transparent_3px)]";

  return (
    <div
      aria-hidden="true"
      className={`h-28 w-28 bg-size-[12px_12px] opacity-80 ${gradient}`}
    />
  );
};

const ProductsSection = () => {
  return (
    <section
      id={productsCopy.sectionId}
      className="bg-[#F5F7F7] py-16 md:py-24 md:px-8 xl:px-0"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-0">
        <div className="grid gap-12 md:items-start">
          <div className="max-w-4xl">
            <h2 className="text-[#00804D] text-[30px] md:text-[40px] xl:text-[48px] font-bold uppercase tracking-wide">
              {productsCopy.title}
            </h2>
            <div className="mt-4 inline-flex items-center rounded-md bg-[#4C4C4C] px-4 py-2 text-[18px] md:text-[20px] xl:text-[24px] font-semibold tracking-wider text-white">
              {productsCopy.badgeLabel}
            </div>

            {productsCopy.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-[14px] md:text-[16px] xl:text-[18px] font-normal text-[#4C4C4C] leading-7"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* md and above: overlapped composition */}
          <div className="relative hidden h-[520px] md:block">
            <div className="absolute left-0 top-8">
              <DotBlock variant="gold" />
            </div>
            <div className="absolute right-0 top-0">
              <DotBlock variant="gold2" />
            </div>

            {/* Left back tile */}
            <div className="absolute left-0 top-16 z-10 h-[260px] w-[240px] overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src={productsCopy.images.md.leftBack.src}
                  alt={productsCopy.images.md.leftBack.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Left front tile */}
            <div className="absolute left-24 top-36 z-20 h-[260px] w-[260px] overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src={productsCopy.images.md.leftFront.src}
                  alt={productsCopy.images.md.leftFront.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right back tile */}
            <div className="absolute right-0 top-20 z-10 h-[260px] w-[240px] overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src={productsCopy.images.md.rightBack.src}
                  alt={productsCopy.images.md.rightBack.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right front tile */}
            <div className="absolute right-16 top-32 z-20 h-[280px] w-[280px] overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src={productsCopy.images.md.rightFront.src}
                  alt={productsCopy.images.md.rightFront.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* sm: stacked tiles */}
          <div className="grid gap-6 md:hidden">
            {productsCopy.images.sm.map((img, idx) => (
              <div
                key={img.alt}
                className="relative h-72 overflow-hidden rounded-lg bg-white"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;