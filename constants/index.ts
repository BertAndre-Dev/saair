import type {
  Feature,
  FeatureIconKey,
  NavLink,
  PricingPlan,
  Statistic,
  Testimonial,
} from "@/types";

export const appConfig = {
  siteName: "Saair Energy",
  a11y: {
    navbarPrimary: "Primary navigation",
    sectionNavigation: "Section navigation",
  },
  defaultMetadata: {
    title: "Saair Energy | Modular Solar Solutions",
    description:
      "Deploy resilient, scalable solar infrastructure with modular design, fast deployment, and transparent performance.",
  },
};

export const navLinks: NavLink[] = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#commitment", label: "Commitment" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#cta", label: "Contact" },
];

export const navbarCtas = {
  primary: { href: "#cta", label: "Request a demo" },
};

export const heroCopy = {
  badge: "Modular solar, engineered to scale",
  titleLead: "Energy systems",
  titleEmphasis: "built for speed",
  titleTail: "and reliability.",
  description:
    "From concept to commissioning, Saair Energy delivers modular solar solutions designed for rapid deployment and consistent performance.",
  primaryCta: { href: "#cta", label: "Get started" },
  secondaryCta: { href: "#features", label: "Explore features" },
};

const featureIconKeys: FeatureIconKey[] = [
  "bolt",
  "shield",
  "sparkles",
  "chart",
  "globe",
  "users",
];

export const featuresCopy: {
  title: string;
  description: string;
  items: Array<Feature>;
} = {
  title: "Everything you need to launch",
  description:
    "A modular foundation with the details that help teams deploy quickly and operate confidently.",
  items: [
    {
      icon: featureIconKeys[0],
      title: "Fast deployment",
      description:
        "Pre-engineered modules reduce installation time and simplify on-site coordination.",
    },
    {
      icon: featureIconKeys[1],
      title: "Built-in resilience",
      description:
        "Design patterns that support stable output and easier maintenance over time.",
    },
    {
      icon: featureIconKeys[2],
      title: "Clean design system",
      description:
        "Reusable components that keep projects consistent across teams and sites.",
    },
    {
      icon: featureIconKeys[3],
      title: "Performance visibility",
      description:
        "Transparent metrics and reporting that help teams make faster decisions.",
    },
    {
      icon: featureIconKeys[4],
      title: "Scales across regions",
      description:
        "A flexible approach that adapts to local constraints and deployment timelines.",
    },
    {
      icon: featureIconKeys[5],
      title: "Support that sticks",
      description:
        "Guidance for implementation, onboarding, and ongoing optimization.",
    },
  ],
};

export const aboutCopy = {
  eyebrow: "Why Saair",
  title: "Modular by design. Reliable in operation.",
  description:
    "We combine engineered modularity with practical delivery so teams can move quickly without sacrificing reliability.",
  bullets: [
    "Repeatable layouts and components for consistent projects.",
    "Deployment-ready documentation and clear handoffs.",
    "A performance-first approach to monitoring and improvements.",
  ],
};

export const statisticsCopy: {
  title: string;
  description: string;
  items: Statistic[];
} = {
  title: "Built to perform",
  description:
    "Designed for stable operation, with clear visibility across key outcomes.",
  items: [
    {
      value: "99.9%",
      label: "Uptime target",
      description: "Reliability-focused design for continuous operation.",
    },
    {
      value: "6–10",
      label: "Weeks to launch",
      description: "Modular planning that shortens timelines to commissioning.",
    },
    {
      value: "30+",
      label: "Deployment playbooks",
      description: "Reusable patterns for different project constraints.",
    },
  ],
};

export const testimonialsCopy: {
  title: string;
  description: string;
  items: Testimonial[];
} = {
  title: "Teams choose Saair for clarity",
  description:
    "See what partners say about speed, reliability, and deployment experience.",
  items: [
    {
      quote:
        "The modular approach made deployment feel predictable. Our teams moved faster with fewer surprises.",
      name: "A. Rahman",
      role: "Operations Lead",
    },
    {
      quote:
        "Clear documentation and consistent components improved our delivery cadence from the first project.",
      name: "M. Chen",
      role: "Program Manager",
    },
    {
      quote:
        "Performance visibility helped us manage outcomes and quickly iterate on improvements.",
      name: "S. Alvarez",
      role: "Technical Director",
    },
  ],
};

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

