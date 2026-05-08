import type { Metadata } from "next";

import BlogCard from "@/components/blog/BlogCard";
import BlogHero from "@/components/blog/BlogHero";
import CTASection from "@/sections/CTASection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | SAAIR Energy",
  description:
    "Insights on energy markets, policy, and delivery — from the SAAIR Energy team.",
};

const BlogIndexPage = async () => {
  const posts = await getAllPosts();

  return (
    <main className="flex min-h-screen flex-col bg-[#F4F7F5]">
      <Navbar />
      <BlogHero />
      <section className="pb-24 pt-20 md:pb-28 md:pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          {posts.length === 0 ? (
            <div className="rounded-3xl bg-white px-8 py-14 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/6">
              <h2 className="text-xl font-bold text-black md:text-2xl">
                No posts yet
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Check back soon for new PowerPulse issues and analysis.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10 md:gap-x-8 md:gap-y-12 lg:gap-x-10">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default BlogIndexPage;
