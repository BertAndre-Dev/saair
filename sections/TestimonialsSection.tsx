import Card from "@/components/ui/Card";
import { testimonialsCopy } from "@/constants";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="bg-white py-16 dark:bg-zinc-950"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {testimonialsCopy.title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            {testimonialsCopy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonialsCopy.items.map((t) => (
            <Card key={t.name} className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-10 rounded-2xl bg-black/5 dark:bg-white/10" />
                <div className="space-y-3">
                  <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                    {t.quote}
                  </p>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {t.name}
                    </div>
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

