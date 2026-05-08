import "server-only";

import { evaluate } from "@mdx-js/mdx";
import type { MDXProps } from "mdx/types";
import remarkGfm from "remark-gfm";
import type { ComponentType } from "react";
import * as runtime from "react/jsx-runtime";
import { pathToFileURL } from "node:url";

import type { BlogPostMetadata } from "@/lib/types/blog";

export type CompiledPost = {
  Content: ComponentType<MDXProps>;
  metadata: BlogPostMetadata;
  exports: Record<string, unknown>;
};

function assertMetadata(
  value: unknown,
  filePath: string,
): asserts value is BlogPostMetadata {
  if (!value || typeof value !== "object") {
    throw new Error(`Missing metadata export (${filePath})`);
  }
  const m = value as Record<string, unknown>;
  for (const key of ["title", "description", "date", "coverImage"]) {
    if (typeof m[key] !== "string" || !m[key]) {
      throw new Error(
        `metadata.${key} must be a non-empty string (${filePath})`,
      );
    }
  }
}

export async function evaluateMdx(
  source: string,
  filePath: string,
  components: MDXProps["components"],
): Promise<CompiledPost> {
  const mod = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    baseUrl: pathToFileURL(filePath).href,
    development: process.env.NODE_ENV === "development",
  });

  const MDXContent = mod.default as ComponentType<MDXProps>;
  const exported = mod as Record<string, unknown> & { metadata?: unknown };
  assertMetadata(exported.metadata, filePath);
  const metadata = exported.metadata;

  const Content = (props: Omit<MDXProps, "components">) => (
    <MDXContent {...props} components={components} />
  );

  return { Content, metadata, exports: exported };
}
