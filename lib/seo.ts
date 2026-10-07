import type { Metadata } from "next";

import { appConfig } from "@/constants";

export const siteConfig = {
  name: appConfig.siteName,
  shortName: appConfig.brandWordmark,
  description: appConfig.defaultMetadata.description,
  locale: "en_NG",
  language: "en",
  email: "info@saairenergy.com",
  phone: "+2349138667927",
  phoneDisplay: "+234 913 866 7927",
  address: {
    street: "20 Awudu Epheka Boulevard, Lekki Phase 1",
    locality: "Lagos",
    country: "NG",
    countryName: "Nigeria",
  },
  defaultOgImage: "/sliders/view-male.jpg",
  twitterHandle: undefined as string | undefined,
} as const;

/** Production origin; override with NEXT_PUBLIC_SITE_URL in deploy env. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "https://www.saairenergy.com";
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  keywords?: readonly string[];
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.defaultOgImage,
  imageAlt = siteConfig.name,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      ...(siteConfig.twitterHandle
        ? { creator: siteConfig.twitterHandle, site: siteConfig.twitterHandle }
        : {}),
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: getSiteUrl(),
    logo: absoluteUrl(appConfig.logoSrc),
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      areaServed: "NG",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.instagram.com/SAAIRenergy",
      "https://www.linkedin.com/company/SAAIR-energy/",
      "https://www.facebook.com/share/1JokzY7gVH/",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(appConfig.logoSrc),
      },
    },
    inLanguage: siteConfig.language,
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: absoluteUrl(input.image ?? siteConfig.defaultOgImage),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: getSiteUrl(),
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };
}

export function productJsonLd(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: absoluteUrl(input.image ?? siteConfig.defaultOgImage),
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: input.category,
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    image: absoluteUrl(input.image ?? siteConfig.defaultOgImage),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(appConfig.logoSrc),
      },
    },
    mainEntityOfPage: absoluteUrl(input.path),
  };
}
