import Button from "@/components/ui/Button";
import { ctaCopy } from "@/constants";

const CTASection = () => {
  return (
    <section id="cta" className="bg-zinc-50 py-16 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/15 dark:bg-zinc-950 sm:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-black/5 blur-3xl dark:bg-white/10" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/5 blur-3xl dark:bg-white/10" />
          </div>

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {ctaCopy.title}
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300">
                {ctaCopy.description}
              </p>
            </div>

            <Button href="#cta" size="lg" className="w-full sm:w-auto">
              {ctaCopy.buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

