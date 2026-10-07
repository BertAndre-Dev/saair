import type { NavLink, PricingPlan } from "@/types";

import type { HeroProps } from "@/components/layout/Hero";

export const appConfig = {
  siteName: "SAAIR Energy",
  brandWordmark: "SAAIR",
  logoSrc: "/logo.svg",
  logoSrc2: "/logo2.svg",
  a11y: {
    navbarPrimary: "Primary navigation",
    sectionNavigation: "Section navigation",
  },
  fontSans: "Aeonik_TRIAL",
  defaultMetadata: {
    title: "SAAIR Energy | Integrated Energy Solutions",
    description:
      "Shaping Africa's energy future through integrated renewable, non-renewable, and technology solutions.",
  },
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
];

export const navbarCtas = {
  primary: { href: "/#cta", label: "Contact Us" },
};

/** Default props for `<Hero />` — override per page when reusing the component. */
export const heroCopy: HeroProps = {
  variant: "default",
  backgroundImageSrc: "/hero.gif",
  backgroundImageAlt: "",
  title: "ALL ENERGY. ONE VISION",
  subtitle:
    "Shaping Africa's energy future through integrated renewable, non-renewable, and technology solutions that power progress and redefine possibility.",
  bottomFeatureLabels: ["Sustainability", "Clean Energy"],
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

/** About Us page — centered hero (reuse `<Hero {...aboutPageHero} />`). */
export const aboutPageHero: HeroProps = {
  variant: "pageTitle",
  backgroundImageSrc: "/hero.gif",
  backgroundImageAlt: "",
  title: "ABOUT US",
};

/** Services page — centered hero title. */
export const servicesPageHero: HeroProps = {
  variant: "pageTitle",
  backgroundImageSrc: "/hero.gif",
  backgroundImageAlt: "",
  title: "SERVICES",
};

/** Products page — centered hero title. */
export const productsPageHero: HeroProps = {
  variant: "pageTitle",
  backgroundImageSrc: "/hero.gif",
  backgroundImageAlt: "",
  title: "PRODUCTS",
};

/** Products page — smart meters overview (Figma). */
export const productsPageOverview = {
  badgeLabel: "SMART ELECTRICITY METERS",
  title: "PRODUCT OVERVIEW",
  paragraphs: [
    "SAAIR Energy delivers advanced smart metering solutions across electricity, gas, and water networks. Engineered for utilities, regulators, and large-scale energy and resource operators, our smart meters provide real-time data, two-way communication, and actionable insights to optimize resource management, reduce losses, and enhance customer engagement.",
    "Smart metering is no longer a luxury — it's essential for modern utilities. SAAIR Energy's meters capture precise consumption data, enabling efficient operations, accurate billing, and better decision-making across multiple sectors.",
  ],
  subheading: "Why Smart Metering Matters",
  leadIn:
    "Across Africa, utilities lose millions annually to inefficiency, energy theft, outdated infrastructure, and manual reporting. Smart metering solves these gaps with:",
  bullets: [
    "Real-time consumption tracking",
    "Automated billing & revenue assurance",
    "Remote monitoring & disconnection",
    "Tamper detection & system alerts",
    "Load management insights",
  ],
  closing:
    "Whether you manage thousands of customers or a single industrial estate, reliable data is the foundation of a stable, profitable, future-ready energy ecosystem.",
} as const;

/** Products page — technical specification copy. */
export const productsTechnicalCopy = {
  title: "TECHNICAL SPECIFICATION",
  items: [
    {
      term: "Cost-Effectiveness",
      description:
        "The PLC meters with 4G-enabled DCUs offer superior cost efficiency compared to other NMMP-compliant meter specifications.",
    },
    {
      term: "Enhanced Connectivity",
      description:
        "The 4G communication capability provides robust connectivity, with the added flexibility of supporting 3G/2G in areas lacking 4G coverage",
    },
    {
      term: "Efficient Communication Infrastructure",
      description:
        "A single SIM-managed DCU can aggregate and relay data for up to 500 meters, simplifying logistics, SIM management, and backhaul for distribution companies.",
    },
    {
      term: "Improved Accessibility and Maintenance",
      description:
        "DCUs are installed at transformer locations, allowing DisCo staff easier access for maintenance compared to individual meters installed within customer premises.",
    },
  ],
} as const;

export const aboutPageIntroCopy = {
  intro: [
    "Headquartered in Nigeria, SAAIR Energy is positioned as a multi-sector energy infrastructure and technology company delivering solutions across both conventional and emerging energy systems.",
    "The company's operations span key areas of the energy industry including:",
  ],
  bullets: [
    "Oil and gas infrastructure and energy supply solutions",
    "Gas-powered electricity and energy systems",
    "Renewable energy development and integration",
    "Smart metering and digital energy platforms",
    "Energy monitoring and data technologies",
    "Electric mobility infrastructure and EV charging systems",
  ],
  outro: [
    "SAAIR Energy integrates technology, infrastructure and energy services to improve how energy is produced, distributed, monitored, and consumed.",
    "Through innovation and strategic collaboration, the company aims to strengthen energy systems while supporting the transition toward more efficient and sustainable energy solutions.",
  ],
} as const;

export const aboutMissionVisionApproachCopy = {
  iconSrc: "/Group%20(1).svg",
  iconAlt: "SAAIR Energy leaves mark",
  mission: {
    title: "Mission",
    body:
      "Our mission is to design, deploy, and manage modern energy infrastructure that combines conventional energy resources, renewable systems, and advanced digital technologies to deliver reliable and efficient energy solutions.",
  },
  vision: {
    title: "Vision",
    body:
      "To become a leading integrated energy infrastructure and technology company driving reliable, efficient, and sustainable energy systems across emerging markets.",
  },
  approach: {
    title: "Our Approach",
    intro: [
      "SAAIR Energy adopts an integrated approach to energy development by combining infrastructure, technology, and strategic partnerships.",
      "The company focuses on:",
    ],
    bullets: [
      "Developing scalable energy infrastructure",
      "Leveraging digital technologies to improve system efficiency",
      "Integrating renewable and conventional energy systems",
      "Supporting national and regional energy development initiatives",
    ],
  },
} as const;

export const aboutValuesCopy = {
  title: "Values",
  description:
    "We operate with integrity, technical excellence, and a long-term view of energy security. Our teams prioritize safety, transparency, and collaboration—aligning infrastructure delivery with the realities of African markets and the global energy transition.",
  imageSrc: "/about-us/value.svg",
  imageAlt: "SAAIR Energy values",
} as const;

export const aboutCopy = {
  sectionId: "about",
  title: "WHO ARE WE",
  paragraphs: [
    "SAAIR Energy is an integrated energy solutions company focused on developing and deploying reliable, efficient and technology-enabled energy systems across emerging markets. The company operates across multiple segments of the energy value chain, including oil and gas, renewable energy, power infrastructure, and digital energy technologies.",
    "Founded with a goal of addressing energy access, efficiency, and infrastructure challenges. SAAIR Energy combines engineering expertise, advances technology platforms and strategic partnership to deliver scalable energy solutions for government, utilities, businesses, and communities.",
    "By bridging traditional energy systems with modern digital technologies, SAAIR Energy is helping to modernize energy infrastructure while supporting economic growth and energy security.",
  ],
  button: {
    label: "Learn More",
    href: "/about",
  },
  image: {
    src: "/who.svg",
    alt: "Who are we image",
  },
};

export type ServiceCard = {
  slug: string;
  number: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  note?: string;
  points: string[];
};

export const serviceCards: ServiceCard[] = [
  {
    slug: "gas",
    number: "01",
    title: "Gas — Primary Business",
    imageSrc: "/service/gas.png",
    imageAlt: "Industrial gas piping and processing equipment",
    iconSrc: "/service/ranking.svg",
    points: [
      "Industrial and commercial gas supply — LPG and CNG",
      "Gas supply for generators",
      "Gas metering and consumption monitoring",
      "Supply planning",
      "Consultation on diesel-to-gas conversion, including advising on whether conversion makes commercial sense for a site",
    ],
  },
  {
    slug: "smart-metering",
    number: "02",
    title: "Smart Metering and Revenue Recovery",
    imageSrc: "/service/smart-meter.png",
    imageAlt: "A row of installed smart electricity meters",
    iconSrc: "/service/search-favorite.svg",
    points: [
      "Smart prepaid meter supply — single-phase and three-phase",
      "Meter installation, commissioning and configuration",
      "STS-compliant prepaid metering and token management",
      "Vending and payment channel for occupants",
    ],
  },
  {
    slug: "energy-audit",
    number: "03",
    title: "Energy Audit and Energy Intelligence",
    imageSrc: "/service/man.png",
    imageAlt: "Glowing light bulb representing energy use",
    iconSrc: "/service/message-text.svg",
    points: [
      "Energy audits for commercial, industrial and residential sites",
      "True cost per unit delivered, by supply source",
      "Generator sizing and load performance assessment",
      "Fuel purchased versus energy produced reconciliation",
    ],
  },
  {
    slug: "energy-management",
    number: "04",
    title: "Energy Management",
    imageSrc: "/service/energ.png",
    imageAlt: "Glowing light bulb representing energy use",
    iconSrc: "/service/ranking.svg",
    points: [
      "Prepaid energy management for residential, mixed-use and commercial sites",
      "Energy revenue management and collection",
      "Centralised visibility of energy consumption across units and sites",
      "Energy cost reporting for site owners and operators",
    ],
  },
  {
    slug: "site-infrastructure",
    number: "05",
    title: "Site Specific Infrastructure",
    imageSrc: "/service/site.png",
    imageAlt: "Two engineers shaking hands on a project site",
    iconSrc: "/service/search-favorite.svg",
    note: "SAAIR coordinates these; the technical work is delivered by our partners.",
    points: [
      "Grid connection support and supply upgrades, including priority connection",
      "Distribution transformer supply",
      "Power-line and distribution infrastructure requirements",
      "Backup generation planning and sizing",
    ],
  },
];

export const servicesCopy = {
  sectionId: "services",
  title: "SERVICES",
  subtitle: "Three Domains. Infinite Possibilities",
  description:
    "Our integrated approach means you get more than isolated solutions; you get a strategic partner who understands the full energy ecosystem and how every piece connects.",
  secondaryDescription:
    "Gas supply, smart metering, energy audits, energy management, and site infrastructure — delivered as one connected practice rather than isolated jobs.",
  cards: serviceCards,
} as const;

/** Services page uses the same offerings as the home services section. */
export const servicesPageCards = serviceCards;

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
  headline: "Smarter Energy. Better Control",
  ctaLabel: "Explore our products",
  ctaHref: "/products",
  paragraphs: [
    "SAAIR Energy delivers advanced smart metering solutions across electricity, gas, and water networks. Engineered for utilities, regulators, and large-scale energy and resource operators, our smart meters provide real-time data, two-way communication, and actionable insights to optimize resource management, reduce losses, and enhance customer engagement.",
  ],
  cards: [
    {
      category: "Electricity",
      title: "Smart Electricity Meters",
      description: "Accurate, reliable and intelligent energy measurement.",
      imageSrc: "/meter/meter1.png",
      imageAlt: "SAAIR three phase energy meter",
      href: "/products/smart-meters",
    },
    {
      category: "Gas",
      title: "Smart Gas Meters",
      description: "Accurate, reliable and intelligent energy measurement.",
      imageSrc: "/meter/meter3.png",
      imageAlt: "SAAIR prepaid gas meter",
      href: "/products/smart-gas",
    },
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
      { src: "/meter/meter1.png", alt: "Smart meters product image 1" },
      { src: "/meter/meter2.png", alt: "Smart meters product image 2" },
      { src: "/meter/meter3.png", alt: "Smart meters product image 3" },
      { src: "/meter/meter4.png", alt: "Smart meters product image 4" },
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
      "Receive an accurate quote/details when you fill out this form, or give us a call: +234 913 866 7927",
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
      "Smart Metering",
      "Energy Audit",
      "Energy Management",
      "Site Infrastructure",
      "Gas Supply",
      "Smart Gas Meters",
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
      title: "Explore Segments",
      links: [
        { href: "/services/gas", label: "Gas" },
        { href: "/services/smart-metering", label: "Smart Metering" },
        { href: "/services/energy-audit", label: "Energy Audit" },
        { href: "/services/energy-management", label: "Energy Management" },
        { href: "/services/site-infrastructure", label: "Site Infrastructure" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/products", label: "Products" },
        { href: "/products/smart-meters", label: "Smart Electricity Meters" },
        { href: "/products/smart-gas", label: "Smart Gas Meters" },
        { href: "/blog", label: "Blog" },
      ],
    },
  ],
  contact: {
    title: "Contacts",
    address: "20 Awudu Epheka Boulevard, Lekki Phase 1, Lagos Nigeria.",
    email: "info@saairenergy.com",
    phone: "+234 913 866 7927",
  },
  socials: [
    { href: "https://www.instagram.com/SAAIRenergy?igsh=b2lwNWJ4dzJ2dHlk", label: "Instagram", icon: "instagram" },
    { href: "https://www.linkedin.com/company/SAAIR-energy/", label: "LinkedIn", icon: "linkedin" },
    { href: "https://www.facebook.com/share/1JokzY7gVH/?mibextid=wwXIfr", label: "Facebook", icon: "facebook" }, 
  ],
  legal: {
    prefix: "©",
    suffix: "SAAIR Energy Limited. All rights reserved.",
    links: [
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/privacy", label: "Privacy Notice" },
    ],
  },
};

