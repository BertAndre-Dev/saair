import type { NavLink, PricingPlan } from "@/types";

import type { HeroProps } from "@/components/layout/Hero";

export const appConfig = {
  siteName: "SAAIR Energy",
  brandWordmark: "SAAIR",
  logoSrc: "/logo.svg",
  a11y: {
    navbarPrimary: "Primary navigation",
    sectionNavigation: "Section navigation",
  },
  defaultMetadata: {
    title: "SAAIR Energy | Integrated Energy Solutions",
    description:
      "Shaping Africa's energy future through integrated renewable, non-renewable, and technology solutions.",
  },
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
];

export const navbarCtas = {
  primary: { href: "#cta", label: "Contact Us" },
};

/** Default props for `<Hero />` — override per page when reusing the component. */
export const heroCopy: HeroProps = {
  backgroundImageSrc:
    "/hero.gif",
  backgroundImageAlt: "",
  title: "ALL ENERGY. ONE VISION",
  subtitle:
    "Shaping Africa's energy future through integrated renewable, non-renewable, and technology solutions that power progress and redefine possibility.",
  bottomFeatureLabels: ["Energy Intelligence", "Energy Intelligence"],
  cards: [
    {
      label: "Renewable Energy",
      icon: "renewable",
      tone: "light",
    },
    {
      label: "Non-renewable Energy",
      icon: "nonRenewable",
      tone: "medium",
    },
    {
      label: "Technical & Technology Solutions",
      icon: "technical",
      tone: "dark",
    },
  ],
};

export const aboutCopy = {
  sectionId: "about",
  title: "WHO ARE WE",
  paragraphs: [
    "SAAIR Energy is an integrated energy solutions company focused on developing and deploying reliable, efficient and technology-enabled energy systems across emerging markets. The company operates across multiple segments of the energy value chain, including oil and gas, renewable energy, power infrastructure, and digital energy technologies.",
    "Founded with a goal of addressing energy access, efficiency, and infrastructure challenges. SAair Energy combines engineering expertise, advances technology platforms and strategic partnership to deliver scalable energy solutions for government, utilities, businesses, and communities.",
    "By bridging traditional energy systems with modern digital technologies, SAair Energy is helping to modernize energy infrastructure while supporting economic growth and energy security.",
  ],
  button: {
    label: "Learn More",
    href: "#cta",
  },
  image: {
    src: "/who.svg",
    alt: "Who are we image",
  },
};

export const servicesCopy = {
  sectionId: "services",
  title: "SERVICES",
  subtitle: "Three Domains. Infinite Possibilities",
  description:
    "Our integrated approach means you get more than isolated solutions; you get a strategic partner who understands the full energy ecosystem and how every piece connects.",
  secondaryDescription:
    "Our expertise spans three critical domains: renewable energy development, comprehensive oil and gas services, and cutting-edge technical solutions. This unique positioning allows us to deliver what others can't: complete, future-ready energy strategies tailored to the complex realities of African markets.",
  cards: [
    {
      number: "01",
      title: "Renewable Energy Solutions",
      description:
        "Clean, scalable, future-ready. We design and deploy solar systems, wind technologies, EV charging infrastructure, and smart mobility platforms that position your operations at the forefront of sustainable energy.",
      imageSrc: "/service/service.svg",
      iconSrc: "/service/ranking.svg",
    },
    {
      number: "02",
      title: "Non-Renewable Energy",
      description:
        "Reliable, comprehensive, performance-driven. Our upstream, midstream, and downstream capabilities cover production logistics, storage, compression, and field optimization that keeps operations running at peak efficiency.",
      imageSrc: "/service/service1.svg",
      iconSrc: "/service/search-favorite.svg",
    },
    {
      number: "03",
      title: "Technical & Technology Solutions",
      description:
        "Intelligent, efficient, data-driven. From engineering support and automation systems to analytics and asset monitoring, we deploy technologies that enhance visibility, control, and operational excellence across your energy infrastructure.",
      imageSrc: "/service/service3.svg",
      iconSrc: "/service/message-text.svg",
    },
  ],
} as const;

export const partnersCopy: {
  title: string;
  description: string;
  names: string[];
} = {
  title: "Trusted by delivery partners",
  description:
    "A snapshot of teams we support across planning, deployment, and ongoing operations.",
  names: ["Northline", "GreenGrid", "Atlas Works", "Sunward", "Crescent Labs"],
};

export const productsCopy = {
  sectionId: "products",
  badgeLabel: "SMART METERS",
  title: "OUR PRODUCTS",
  paragraphs: [
    "We're not just another energy company. SAair Energy is Africa's integrated energy powerhouse, bridging conventional and renewable systems with advanced technology that transforms how energy is produced, distributed, and optimized.",
    "Our expertise spans three critical domains: renewable energy development, comprehensive oil and gas services, and cutting-edge technical solutions. This unique positioning allows us to deliver what others can't: complete, future-ready energy strategies tailored to the complex realities of African markets.",
  ],
  images: {
    md: {
      leftBack: { src: "/meter/meter1.svg", alt: "Smart meters product image 1" },
      leftFront: {
        src: "/meter/meter2.svg",
        alt: "Smart meters product image 2",
      },
      rightBack: { src: "/meter/meter3.svg", alt: "Smart meters product image 3" },
      rightFront: {
        src: "/meter/meter4.svg",
        alt: "Smart meters product image 4",
      },
    },
    sm: [
      { src: "/meter/meter1.svg", alt: "Smart meters product image 1" },
      { src: "/meter/meter2.svg", alt: "Smart meters product image 2" },
      { src: "/meter/meter3.svg", alt: "Smart meters product image 3" },
      { src: "/meter/meter4.svg", alt: "Smart meters product image 4" },
    ],
  },
} as const;

export const pricingCopy: {
  title: string;
  description: string;
  plans: PricingPlan[];
  featuredLabel: string;
} = {
  title: "Pricing that scales with your rollout",
  description:
    "Choose a starting point and expand as your deployment needs grow.",
  featuredLabel: "Featured",
  plans: [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for exploration and early pilots.",
      features: [
        { label: "Landing page starter kit" },
        { label: "Basic reporting and templates" },
        { label: "Community onboarding" },
      ],
      ctaLabel: "Start free",
      ctaHref: "#cta",
    },
    {
      name: "Growth",
      price: "$499",
      description: "For teams launching multiple sites with confidence.",
      features: [
        { label: "Advanced modular deployment patterns" },
        { label: "Expanded performance visibility" },
        { label: "Priority onboarding" },
      ],
      ctaLabel: "Talk to sales",
      ctaHref: "#cta",
      isFeatured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large programs and multi-region rollouts.",
      features: [
        { label: "Implementation support and SLAs" },
        { label: "Program-level reporting" },
        { label: "Dedicated architecture reviews" },
      ],
      ctaLabel: "Contact us",
      ctaHref: "#cta",
    },
  ],
};

export const ctaCopy = {
  leftPanel: {
    title: "PIONEERS OF ENERGY",
    subtitle: "Commercial, Residential & Industrial Energy Systems!",
    description:
      "We offer products, solutions and services across the entire energy value chain. We support our customers on their way to a more sustainable future - no matter how far along the journey to energize society with affordable systems.",
    callout:
      "Request from us a free quote to know the solution that best fits your system.",
    note:
      "Receive an accurate quote/details within 3-5 days when you fill out this form, or give us a call: +234 123 456 7890",
  },
  form: {
    title: "Request A Quote",
    description:
      "We take pride in everything that we do, control over products allows us to ensure our customers receive the best quality service.",
    serviceAriaLabel: "Select service type",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    servicePlaceholder: "Service Type",
    messagePlaceholder: "Write your message",
    serviceOptions: [
      "Commercial Energy",
      "Residential Energy",
      "Industrial Energy",
      "Technical Solutions",
    ],
    submitLabel: "Submit Request",
  },
};

export const commitmentCopy = {
  title: "OUR COMMITMENT",
  description:
    "We lead with innovation that challenges boundaries. We think integratively to create synergy across domains. We act with sustainability and responsibility toward people and the planet. We execute with excellence and unwavering reliability. We build customer-centric partnerships that co-create value. We maintain ethical leadership in all dealings. And we invest in people and knowledge to drive lasting competitive advantage.",
  stats: [
    {
      value: "90%",
      label: "Energy Solutions",
    },
    {
      value: "100+",
      label: "Satisfied Customers",
    },
  ],
} as const;

export const footerCopy = {
  logoTagline: "Tailored Energy Solutions",
  a11y: {
    footerNav: "Footer navigation",
  },
  columns: [
    {
      title: "Socials",
      links: [
        { href: "#", label: "info@saairenergy.com" },
        { href: "#", label: "+234 913 866 7927" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { href: "#", label: "Home" },
        { href: "#", label: "About" },
        { href: "#", label: "Services" },
        { href: "#", label: "Products" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "#", label: "Renewable Energy" },
        { href: "#", label: "Non- Renewable Energy" },
        { href: "#", label: "Technical & Technological Solutions" },
      ],
    },
    {
      title: "Products",
      links: [
        { href: "#", label: "Smart Meters" },
      ],
    },
  ],
  legal: {
    prefix: "©",
    suffix: "All rights reserved.",
  },
};

