import Image from "next/image";

export type MeterGalleryImages = {
  md: {
    leftBack: { src: string; alt: string };
    leftFront: { src: string; alt: string };
    rightBack: { src: string; alt: string };
    rightFront: { src: string; alt: string };
  };
  sm: readonly { src: string; alt: string }[];
};

const DotBlock = ({ variant }: { variant: "gold" | "gold2" }) => {
  const gradient =
    variant === "gold"
      ? "bg-[radial-gradient(circle,#FDCC0D,transparent_3px)]"
      : "bg-[radial-gradient(circle,#FDCC0D,transparent_3px)]";

  return (
    <div
      aria-hidden="true"
      className={`h-28 w-28 bg-size-[12px_12px] opacity-80 ${gradient}`}
    />
  );
};

type MeterStaggeredGalleryProps = {
  images: MeterGalleryImages;
};

const MeterStaggeredGallery = ({ images }: MeterStaggeredGalleryProps) => {
  return (
    <>
      <div className="relative hidden h-[520px] md:block">
        <div className="absolute left-0 top-70">
          <DotBlock variant="gold" />
        </div>
        <div className="absolute right-0 top-5">
          <DotBlock variant="gold2" />
        </div>

        <div className="absolute left-0 top-16 z-10 h-[260px] w-[240px] overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:z-30 hover:shadow-2xl cursor-pointer">
          <div className="relative h-full w-full">
            <Image
              src={images.md.leftBack.src}
              alt={images.md.leftBack.alt}
              fill
              className="object-cover"
              sizes="240px"
              priority
            />
          </div>
        </div>

        <div className="absolute left-24 top-36 z-20 h-[260px] w-[260px] overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:z-30 hover:shadow-2xl cursor-pointer">
          <div className="relative h-full w-full">
            <Image
              src={images.md.leftFront.src}
              alt={images.md.leftFront.alt}
              fill
              className="object-cover"
              sizes="260px"
              priority
            />
          </div>
        </div>

        <div className="absolute right-0 top-20 z-10 h-[260px] w-[240px] overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:z-30 hover:shadow-2xl cursor-pointer">
          <div className="relative h-full w-full">
            <Image
              src={images.md.rightBack.src}
              alt={images.md.rightBack.alt}
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
        </div>

        <div className="absolute right-16 top-32 z-20 h-[280px] w-[280px] overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:z-30 hover:shadow-2xl cursor-pointer">
          <div className="relative h-full w-full">
            <Image
              src={images.md.rightFront.src}
              alt={images.md.rightFront.alt}
              fill
              className="object-cover"
              sizes="280px"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:hidden">
        {images.sm.map((img, idx) => (
          <div
            key={img.alt}
            className="relative h-72 overflow-hidden rounded-2xl bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MeterStaggeredGallery;