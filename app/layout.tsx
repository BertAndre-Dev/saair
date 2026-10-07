import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import CookieBanner from "@/components/legal/CookieBanner";
import PageTransition from "@/components/providers/PageTransition";
import JsonLd from "@/components/seo/JsonLd";
import { appConfig } from "@/constants";
import {
  getSiteUrl,
  organizationJsonLd,
  siteConfig,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: appConfig.defaultMetadata.title,
  description: appConfig.defaultMetadata.description,
  keywords: [...appConfig.defaultMetadata.keywords],
  applicationName: appConfig.siteName,
  authors: [{ name: appConfig.siteName, url: getSiteUrl() }],
  creator: appConfig.siteName,
  publisher: appConfig.siteName,
  category: "energy",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo3.svg",
    shortcut: "/logo3.svg",
    apple: "/logo3.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: getSiteUrl(),
    siteName: appConfig.siteName,
    title: appConfig.defaultMetadata.title.default,
    description: appConfig.defaultMetadata.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${appConfig.siteName} — integrated energy solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.defaultMetadata.title.default,
    description: appConfig.defaultMetadata.description,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#001226" },
    { media: "(prefers-color-scheme: dark)", color: "#001226" },
  ],
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <PageTransition>{children}</PageTransition>
        <CookieBanner />
        <GoogleAnalytics gaId="G-PN7E8CZ7E1" />
      </body>
    </html>
  );
};

export default RootLayout;
