import Image from "next/image";

type BlogImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

const BlogImage = ({
  src,
  alt,
  width = 1200,
  height = 675,
  priority = false,
}: Readonly<BlogImageProps>) => {
  return (
    <figure className="my-10">
      <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 896px, 100vw"
          priority={priority}
        />
      </div>
      {alt ? (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
};

export default BlogImage;
