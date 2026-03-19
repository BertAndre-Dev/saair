import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { heroCopy } from "@/constants";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-black/5 blur-3xl dark:bg-white/10" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/5 blur-3xl dark:bg-white/10" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Badge variant="accent">{heroCopy.badge}</Badge>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              <span>{heroCopy.titleLead} </span>
              <span className="text-zinc-900 dark:text-zinc-50">
                {heroCopy.titleEmphasis}
              </span>
              <span> {heroCopy.titleTail}</span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              {heroCopy.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={heroCopy.primaryCta.href}
                size="lg"
                className="w-full sm:w-auto"
              >
                {heroCopy.primaryCta.label}
              </Button>
              <Button
                href={heroCopy.secondaryCta.href}
                variant="outline"
                size="lg"
                className="w-full bg-white sm:w-auto"
              >
                {heroCopy.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="w-full lg:max-w-md">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-black text-white dark:bg-white dark:text-black" />
                  <div>
                    <div className="h-4 w-36 rounded bg-black/10 dark:bg-white/10" />
                    <div className="mt-2 h-3 w-44 rounded bg-black/10 dark:bg-white/10" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full rounded bg-black/10 dark:bg-white/10" />
                  <div className="h-3 w-5/6 rounded bg-black/10 dark:bg-white/10" />
                  <div className="h-3 w-4/6 rounded bg-black/10 dark:bg-white/10" />
                </div>
                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/15">
                  <div className="h-4 w-24 rounded bg-black/10 dark:bg-white/10" />
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-black/5 dark:bg-white/10" />
                    <div className="h-9 w-9 rounded-xl bg-black/5 dark:bg-white/10" />
                    <div className="h-9 w-9 rounded-xl bg-black/5 dark:bg-white/10" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

