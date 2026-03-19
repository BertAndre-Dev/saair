import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { pricingCopy } from "@/constants";

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {pricingCopy.title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            {pricingCopy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pricingCopy.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 ${
                plan.isFeatured
                  ? "border-black/20 shadow-md dark:border-white/20"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {plan.name}
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <div className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {plan.price}
                    </div>
                  </div>
                </div>
                {plan.isFeatured ? (
                  <div className="rounded-full border border-black/10 bg-black px-3 py-1 text-xs font-semibold text-white dark:border-white/15 dark:bg-white dark:text-black">
                    {pricingCopy.featuredLabel}
                  </div>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5 text-zinc-900 dark:bg-white/10 dark:text-zinc-50">
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href={plan.ctaHref}
                  variant={plan.isFeatured ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.ctaLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

