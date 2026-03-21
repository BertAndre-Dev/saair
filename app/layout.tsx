import type { Metadata } from "next";

import PageTransition from "@/components/providers/PageTransition";
import { appConfig } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: appConfig.defaultMetadata.title,
  description: appConfig.defaultMetadata.description,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
};

export default RootLayout;
