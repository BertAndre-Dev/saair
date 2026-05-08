import Image from "next/image";

type BlogHeroProps = {
  title?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
};

const BlogHero = ({
  title = "BLOG",
  backgroundSrc = "/hero.gif",
  backgroundAlt = "Energy landscape",
}: Readonly<BlogHeroProps>) => {
  return (
    <section className="relative isolate flex min-h-[min(70vh,680px)] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
      </div>
      <h1 className="relative z-10 px-4 text-center text-4xl font-bold uppercase tracking-wide text-white md:text-6xl lg:text-7xl">
        {title}
      </h1>
    </section>
  );
};

export default BlogHero;
