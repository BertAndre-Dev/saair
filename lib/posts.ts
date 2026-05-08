import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

import { getBlogMdxComponents } from "@/components/blog/get-blog-mdx-components";
import { evaluateMdx, type CompiledPost } from "@/lib/mdx-evaluate";

import type { BlogPostMetadata } from "@/lib/types/blog";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type BlogListItem = BlogPostMetadata & { slug: string };

export async function getPostSlugs(): Promise<string[]> {
  let names: string[];
  try {
    names = await fs.readdir(CONTENT_DIR);
  } catch {
    return [];
  }
  return names
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<BlogListItem[]> {
  const slugs = await getPostSlugs();
  const components = getBlogMdxComponents();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
      const source = await fs.readFile(filePath, "utf8");
      const { metadata } = await evaluateMdx(source, filePath, components);
      return { slug, ...metadata };
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export const getPostBySlug = cache(
  async (slug: string): Promise<CompiledPost | null> => {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    try {
      const source = await fs.readFile(filePath, "utf8");
      return evaluateMdx(source, filePath, getBlogMdxComponents());
    } catch {
      return null;
    }
  },
);
