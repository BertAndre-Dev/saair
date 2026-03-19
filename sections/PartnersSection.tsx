import { partnersCopy } from "@/constants";

const PartnersSection = () => {
  return (
    <section className="bg-zinc-50 py-16 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {partnersCopy.title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            {partnersCopy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {partnersCopy.names.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-6 text-center text-sm font-semibold text-zinc-900 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

