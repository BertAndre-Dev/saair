import Image from "next/image";

export type ServiceDetailCardProps = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  iconSrc: string;
};

const ServiceDetailCard = ({
  number,
  title,
  description,
  imageSrc,
  iconSrc,
}: ServiceDetailCardProps) => {
  return (
    <article className="overflow-hidden rounded-[24px] border border-zinc-100 bg-white shadow-sm">
      <div className="relative aspect-[16/10] rounded-[24px] w-full">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="relative rounded-[24px] bg-white px-6 pb-8 pt-4 md:px-8 md:pb-10 ">
        <div className="absolute right-6 top-4 -translate-y-1/2 md:right-8 ">
          <Image
            src={iconSrc}
            alt=""
            width={66}
            height={66}
            className="h-12 w-12 object-contain opacity-90 md:h-14 md:w-14"
          />
        </div>
        <div className="text-3xl font-bold leading-none text-[#006838] md:text-4xl">
          {number}
        </div>
        <h2 className="mt-3 text-lg font-bold text-black md:text-xl">{title}</h2>
        <p className="mt-3 text-[14px] md:text-[18px] xl:text-[20px] leading-7 text-[#4c4c4c] font-normal">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceDetailCard;
