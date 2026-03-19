export type NavLink = {
  href: string;
  label: string;
};

export type FeatureIconKey =
  | "bolt"
  | "shield"
  | "sparkles"
  | "chart"
  | "globe"
  | "users";

export type Feature = {
  icon: FeatureIconKey;
  title: string;
  description: string;
};

export type Statistic = {
  value: string;
  label: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type PricingFeature = {
  label: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  isFeatured?: boolean;
};

