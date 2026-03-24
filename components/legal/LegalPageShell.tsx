import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const LegalPageShell = ({
  title,
  children,
}: Readonly<{
  title: string;
  children: ReactNode;
}>) => {
  return (
    <main className="flex min-h-screen flex-col bg-[#F9FAFA]">
      <Navbar />
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-28 md:pt-32">
        <h1 className="text-3xl font-bold tracking-tight text-[#001F3F] md:text-4xl">
          {title}
        </h1>
        <div className="mt-8 space-y-4 text-base leading-7 text-[#333] [&_a]:text-[#00804D] [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-[#006b42] [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#001F3F] [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#001F3F] [&_h4]:mt-6 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-[#001F3F] [&_hr]:my-10 [&_li]:text-[#333] [&_p]:text-[#333] [&_strong]:text-[#111] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default LegalPageShell;
