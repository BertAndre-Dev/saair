import type { ComponentProps } from "react";

type CodeBlockProps = ComponentProps<"pre">;

const CodeBlock = ({ children, className, ...props }: Readonly<CodeBlockProps>) => {
  return (
    <pre
      className={`my-8 overflow-x-auto rounded-2xl border border-gray-200 bg-[#0f172a] p-5 text-[15px] leading-relaxed text-gray-100 shadow-sm [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[15px] [&_code]:text-inherit ${className ?? ""}`}
      {...props}
    >
      {children}
    </pre>
  );
};

export default CodeBlock;
