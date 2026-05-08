import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className = "" }: Readonly<SectionProps>) => {
  return (
    <section className={`my-12 ${className}`.trim()}>{children}</section>
  );
};

export default Section;
