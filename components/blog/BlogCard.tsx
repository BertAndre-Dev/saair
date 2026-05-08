import Image from "next/image";
import Link from "next/link";

import { formatBlogDate } from "@/lib/format-blog-date";

type BlogCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
};

const BlogCard = ({
  slug,
  title,
  description,
  date,
  coverImage,
}: Readonly<BlogCardProps>) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/6">
      <Link
        href={`/blog/${slug}`}
        className="group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F6C]"
      >
        <div className="p-3 pb-0 md:p-4 md:pb-0">
          <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col px-6 py-7 md:px-8 md:py-8">
          <time
            className="text-sm text-gray-500"
            dateTime={date}
            suppressHydrationWarning
          >
            {formatBlogDate(date)}
          </time>
          <h2 className="mt-2 text-xl font-bold leading-snug text-black md:text-[22px]">
            {title}
          </h2>
          <p className="mt-4 flex-1 text-base leading-relaxed text-gray-600 md:text-[17px]">
            {description}
          </p>
          <span className="mt-8 inline-flex font-bold text-gray-900">
            Read more...
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
