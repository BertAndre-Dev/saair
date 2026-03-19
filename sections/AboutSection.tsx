import Card from "@/components/ui/Card";
import { aboutCopy } from "@/constants";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
              {aboutCopy.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {aboutCopy.title}
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              {aboutCopy.description}
            </p>

            <ul className="mt-6 space-y-3">
              {aboutCopy.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
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
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <div className="space-y-3">
                <div className="h-3 w-2/3 rounded bg-black/10 dark:bg-white/10" />
                <div className="h-3 w-full rounded bg-black/10 dark:bg-white/10" />
                <div className="h-3 w-5/6 rounded bg-black/10 dark:bg-white/10" />
                <div className="mt-6 rounded-2xl border border-black/10 p-4 dark:border-white/15">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-20 rounded bg-black/10 dark:bg-white/10" />
                    <div className="h-8 w-8 rounded-xl bg-black/5 dark:bg-white/10" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-full rounded bg-black/10 dark:bg-white/10" />
                    <div className="h-3 w-4/5 rounded bg-black/10 dark:bg-white/10" />
                    <div className="h-3 w-3/5 rounded bg-black/10 dark:bg-white/10" />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-2xl bg-black/5 dark:bg-white/10" />
                <div className="space-y-2">
                  <div className="h-3 w-36 rounded bg-black/10 dark:bg-white/10" />
                  <div className="h-3 w-44 rounded bg-black/10 dark:bg-white/10" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

