import Card from "@/components/ui/Card";
import { statisticsCopy } from "@/constants";

const StatisticsSection = () => {
  return (
    <section className="bg-zinc-50 py-16 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {statisticsCopy.title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            {statisticsCopy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statisticsCopy.items.map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                  {stat.label}
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

