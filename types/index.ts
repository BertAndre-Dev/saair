export type NavLink = {
  href: string;
  label: string;
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
