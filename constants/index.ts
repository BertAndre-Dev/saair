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
  badgeLabel: "SMART METERS",
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
        "Our PLC metering architecture pairs intelligent meters with 4G-enabled Data Concentrator Units (DCUs), reducing communication endpoints and lowering total cost of ownership for large utility rollouts.",
    },
    {
      term: "Enhanced Connectivity",
      description:
        "End-to-end communication uses 4G where available, with automatic 3G/2G fallback so meters and DCUs stay reachable across varying network conditions in the field.",
    },
    {
      term: "Efficient Communication Infrastructure",
      description:
        "A single SIM-managed DCU can aggregate and relay data for up to 500 meters, simplifying logistics, SIM management, and backhaul for distribution companies.",
    },
    {
      term: "Improved Accessibility and Maintenance",
      description:
        "DCUs are deployed at transformer and strategic distribution points, giving DisCo staff local access for commissioning, troubleshooting, and updates without visiting every endpoint.",
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

/** Full Services page — five cards (Figma). Home still uses `servicesCopy` (3 cards). */
export const servicesPageCards = [
  {
    number: "01",
    title: "Renewable Energy Systems",
    description:
      "The company develops and deploys renewable energy solutions that help improve energy access and support sustainable power generation. These systems are designed to complement existing energy infrastructure while supporting the global transition toward cleaner energy.",
    imageSrc: "/service/service.svg",
    iconSrc: "/service/ranking.svg",
  },
  {
    number: "02",
    title: "Oil & Gas Infrastructure",
    description:
      "SAAIR Energy is designed to participate in development and deployment of energy infrastructure supporting oil and gas operations, including gas-powered energy solutions, energy distribution systems, and midstream infrastructure partnerships. These initiatives support reliable energy supply and contribute to the broader development of the energy sector.",
    imageSrc: "/service/service1.svg",
    iconSrc: "/service/search-favorite.svg",
  },
  {
    number: "03",
    title: "Smart Metering & Energy Technology",
    description:
      "We design and deploy smart metering, digital platforms, and energy technology that improve billing accuracy, demand visibility, and integration across utilities and commercial operations—so teams can manage assets with clarity and scale.",
    imageSrc: "/meter/meter4.svg",
    iconSrc: "/service/message-text.svg",
  },
  {
    number: "04",
    title: "Electric Mobility Infrastructure",
    description:
      "SAAIR Energy is actively supporting the growth of electric mobility through the development of EV charging infrastructure and supporting technologies that enable the adoption of electric transportation systems.",
    imageSrc: "/meter/meter6.svg",
    iconSrc: "/service/message-text.svg",
  },
  {
    number: "05",
    title: "Electric Monitoring & Digital Infrastructure",
    description:
      "Through advanced sensors, monitoring technologies, and digital platforms, SAAIR Energy enables real-time monitoring of energy systems, infrastructure performance, and consumption patterns. These tools support improved system management, predictive maintenance, and operational efficiency.",
    imageSrc: "/meter/meter5.svg",
    iconSrc: "/service/ranking.svg",
  },
] as const;

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
    "We're not just another energy company. SAAIR Energy is Africa's integrated energy powerhouse, bridging conventional and renewable systems with advanced technology that transforms how energy is produced, distributed, and optimized.",
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
      "Receive an accurate quote/details within 3-5 days when you fill out this form, or give us a call: +234 913 866 7927",
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
      title: "Explore Segments",
      links: [
        { href: "/services", label: "Renewable Energy" },
        { href: "/services", label: "Non- Renewable Energy" },
        { href: "/services", label: "Technical & Technological Solutions" },
        { href: "/services", label: "Oil & Gas Infrastructure" },
        { href: "/services", label: "Electric Mobility Infrastructure" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/products", label: "Products" },
        { href: "/cookies", label: "Cookie Policy" },
        { href: "/privacy", label: "Privacy Notice" },
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
  },
};

