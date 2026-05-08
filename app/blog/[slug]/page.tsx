import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { formatBlogDate } from "@/lib/format-blog-date";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";
import { appConfig } from "@/constants";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Not found" };
  }
  const { metadata } = post;
  return {
    title: `${metadata.title} | ${appConfig.siteName}`,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      publishedTime: metadata.date,
      images: metadata.coverImage
        ? [{ url: metadata.coverImage, width: 1200, height: 800, alt: metadata.title }]
        : undefined,
    },
  };
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const { Content, metadata, exports } = post;
  const powerpulse = (exports.powerpulse ?? null) as
    | null
    | {
        seriesTitle?: string;
        seriesSubtitle?: string;
        issueLine?: string;
        categoryLine?: string;
        deck?: string;
        byline?: string[];
      };
  const related = (await getAllPosts()).filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="flex min-h-screen flex-col bg-[#F4F7F5]">
      <Navbar />
      <article className="pb-20 pt-10 md:pb-28 md:pt-32">
        <div className="mx-auto w-full max-w-4xl px-4 lg:px-0 md:px-8">
          <header className="mb-10 md:mb-12">
            <div className="relative mb-8 aspect-3/2 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm ring-1 ring-black/6">
              <Image
                src={metadata.coverImage}
                alt={metadata.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 768px, 100vw"
              />
            </div>
            {powerpulse?.seriesTitle || powerpulse?.seriesSubtitle ? (
              <div className="text-center">
                {powerpulse?.seriesTitle ? (
                  <div className="text-sm font-semibold tracking-[0.14em] text-gray-500">
                    {powerpulse.seriesTitle}
                  </div>
                ) : null}
                {powerpulse?.seriesSubtitle ? (
                  <div className="mt-2 text-sm font-medium text-gray-500">
                    {powerpulse.seriesSubtitle}
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>WEEKLY POWERBRIEF</span>
              <span className="text-gray-300">|</span>
              <span suppressHydrationWarning>{formatBlogDate(metadata.date)}</span>
              <span className="text-gray-300">|</span>
              <span>Issue No. 001</span>
            </div>

            {powerpulse?.categoryLine ? (
              <div className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                {powerpulse.categoryLine}
              </div>
            ) : null}
            <h1 className="mt-3 text-3xl text-center font-bold leading-tight tracking-tight text-black md:text-[34px] md:leading-tight">
              {metadata.title}
            </h1>

            {powerpulse?.deck ? (
              <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-[17px] text-center">
                {powerpulse.deck}
              </p>
            ) : (
              <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-[17px] italic text-center">
                {metadata.description}
              </p>
            )}

            {powerpulse?.byline?.length ? (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-500">
                {powerpulse.byline.map((item, idx) => (
                  <span key={`${item}-${idx}`}>{item}</span>
                ))}
              </div>
            ) : null}
          </header>

          <div className="blog-mdx border-t border-gray-200/90 pt-10 md:pt-12 [&>*:first-child]:mt-0">
            <Content />
          </div>

          {related.length > 0 ? (
            <aside className="mt-16 border-t border-gray-200 pt-12 md:mt-20 md:pt-14">
              <h2 className="text-lg font-bold text-black md:text-xl">
                More from the blog
              </h2>
              <ul className="mt-6 space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="font-medium text-[#0B4F6C] underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default BlogPostPage;
