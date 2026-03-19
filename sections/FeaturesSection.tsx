import Card from "@/components/ui/Card";
import { featuresCopy } from "@/constants";
import type { FeatureIconKey } from "@/types";

const FeatureIcon = ({ icon }: { icon: FeatureIconKey }) => {
  const common = "h-6 w-6";

  switch (icon) {
    case "bolt":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8Z" />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" />
        </svg>
      );
    case "sparkles":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 2l1.5 6L20 10l-6.5 2L12 18l-1.5-6L4 10l6.5-2L12 2Z" />
          <path d="M20 14l.8 3.2L24 18l-3.2.8L20 22l-.8-3.2L16 18l3.2-.8L20 14Z" />
        </svg>
      );
    case "chart":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M3 3v18h18" />
          <path d="M7 14l3-3 4 4 6-8" />
        </svg>
      );
    case "globe":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20" />
          <path d="M12 2a15.3 15.3 0 0 0 0 20" />
        </svg>
      );
    case "users":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M17 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return null;
  }
};

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-zinc-50 py-16 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {featuresCopy.title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            {featuresCopy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuresCopy.items.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

