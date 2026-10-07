import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import { serviceCards, servicesPageHero } from "@/constants";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceJsonLd,
} from "@/lib/seo";
import CTASection from "@/sections/CTASection";
import EnergyAuditSection from "@/sections/EnergyAuditSection";
import EnergyManagementSection from "@/sections/EnergyManagementSection";
import GasServiceSection from "@/sections/GasServiceSection";
import SiteInfrastructureSection from "@/sections/SiteInfrastructureSection";
import SmartMeteringSection from "@/sections/SmartMeteringSection";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const getService = (slug: string) =>
  serviceCards.find((card) => card.slug === slug);

const serviceDescription = (service: (typeof serviceCards)[number]) => {
  if (service.note) return `${service.note} ${service.points.slice(0, 2).join(". ")}.`;
  return `${service.title} from SAAIR Energy: ${service.points.slice(0, 3).join("; ")}.`;
};

export const generateStaticParams = () =>
  serviceCards.map((card) => ({ slug: card.slug }));

export const generateMetadata = async ({
  params,
}: ServicePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Not found", robots: { index: false } };

  return buildPageMetadata({
    title: service.title,
    description: serviceDescription(service),
    path: `/services/${service.slug}`,
    image: service.imageSrc,
    imageAlt: service.imageAlt,
    keywords: [service.title, "SAAIR Energy", "energy services Nigeria"],
  });
};

const ServicePage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const structuredData = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
    serviceJsonLd({
      name: service.title,
      description: serviceDescription(service),
      path: `/services/${service.slug}`,
      image: service.imageSrc,
    }),
  ];

  if (
    service.slug === "gas" ||
    service.slug === "energy-management" ||
    service.slug === "site-infrastructure" ||
    service.slug === "energy-audit" ||
    service.slug === "smart-metering"
  ) {
    return (
      <main className="flex min-h-screen flex-col bg-[#F1F4F0]">
        <JsonLd data={structuredData} />
        <Navbar />
        {service.slug === "gas" ? <GasServiceSection /> : null}
        {service.slug === "energy-management" ? <EnergyManagementSection /> : null}
        {service.slug === "site-infrastructure" ? <SiteInfrastructureSection /> : null}
        {service.slug === "energy-audit" ? <EnergyAuditSection /> : null}
        {service.slug === "smart-metering" ? <SmartMeteringSection /> : null}
        <CTASection />
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={structuredData} />
      <Navbar />
      <Hero {...servicesPageHero} title={service.title} />
      <section className="bg-[#F5F7F7] py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 xl:px-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-white">
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-[#00804D]">
              {service.number}
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-black md:text-3xl">
              {service.title}
            </h2>
            {service.note ? (
              <p className="mt-4 text-base leading-7 text-[#4C4C4C] md:text-lg">
                {service.note}
              </p>
            ) : null}
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-[#4C4C4C] md:text-lg">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#008148] active:opacity-70 md:text-base"
            >
              <span aria-hidden="true">←</span>
              All services
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default ServicePage;
