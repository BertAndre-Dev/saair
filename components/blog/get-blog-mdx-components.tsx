import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import BlogImage from "@/components/blog/mdx/BlogImage";
import Callout from "@/components/blog/mdx/Callout";
import CodeBlock from "@/components/blog/mdx/CodeBlock";
import Section from "@/components/blog/mdx/Section";

type HeadingProps = ComponentPropsWithoutRef<"h1"> & { children?: ReactNode };

export function getBlogMdxComponents(): MDXComponents {
  return {
    h1: ({ children, ...props }: HeadingProps) => (
      <h1
        className="mt-12 scroll-mt-28 text-3xl font-bold tracking-tight text-black first:mt-0 md:text-[34px] md:leading-tight"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: HeadingProps) => (
      <h2
        className="mt-12 scroll-mt-28 text-2xl font-bold tracking-tight text-black md:text-[26px]"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: HeadingProps) => (
      <h3
        className="mt-10 scroll-mt-28 text-xl font-bold text-black md:text-[22px]"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p
        className="mb-5 text-[17px] leading-[1.65] text-gray-600 last:mb-0 md:text-lg md:leading-relaxed"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul
        className="mb-6 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-gray-600 marker:text-gray-400 md:text-lg"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className="mb-6 list-decimal space-y-2 pl-6 text-[17px] leading-relaxed text-gray-600 marker:text-gray-400 md:text-lg"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li className="pl-1" {...props}>
        {children}
      </li>
    ),
    blockquote: ({
      children,
      ...props
    }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="my-8 border-l-4 border-gray-300 pl-5 text-[17px] italic leading-relaxed text-gray-700 md:text-lg"
        {...props}
      >
        {children}
      </blockquote>
    ),
    a: ({ children, href, ...props }: ComponentPropsWithoutRef<"a">) => {
      const external = href?.startsWith("http");
      return (
        <a
          href={href}
          className="font-medium text-[#0B4F6C] underline-offset-4 decoration-[#0B4F6C]/30 hover:underline"
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
    hr: (props: ComponentPropsWithoutRef<"hr">) => (
      <hr className="my-14 border-0 border-t border-gray-200" {...props} />
    ),
    pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <CodeBlock {...props}>{children}</CodeBlock>
    ),
    code: ({
      children,
      className,
      ...props
    }: ComponentPropsWithoutRef<"code">) => {
      const isBlock =
        typeof className === "string" && className.includes("language-");
      if (isBlock) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] font-normal text-gray-900"
          {...props}
        >
          {children}
        </code>
      );
    },
    img: (props) => {
      const { src, alt } = props;
      if (!src || typeof src !== "string") return null;
      return (
        <BlogImage
          src={src}
          alt={typeof alt === "string" ? alt : ""}
          width={typeof props.width === "number" ? props.width : 1200}
          height={typeof props.height === "number" ? props.height : 800}
        />
      );
    },
    Callout,
    CodeBlock,
    BlogImage,
    Section,
  };
}
