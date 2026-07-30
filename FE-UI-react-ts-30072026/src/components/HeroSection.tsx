import {
  ArrowRight,
  Check,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Beautiful interface",
    description:
      "A clean and responsive experience built around your brand identity.",
    icon: <Sparkles size={22} />,
  },
  {
    title: "Reusable system",
    description:
      "Consistent typography, spacing and colors across every component.",
    icon: <Layers3 size={22} />,
  },
  {
    title: "Production ready",
    description:
      "Accessible interactions, responsive layouts and dark mode support.",
    icon: <ShieldCheck size={22} />,
  },
];

export function HeroSection() {
  return (
    <main className="overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-dark-background dark:text-white">
      <section className="relative isolate min-h-[calc(100vh-80px)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 -z-10 size-80 rounded-full bg-primary/25 blur-3xl dark:bg-primary/10" />

        <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 size-96 rounded-full bg-secondary/15 blur-3xl dark:bg-primary/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary-soft px-4 py-2 text-sm font-medium text-secondary dark:border-primary/20 dark:bg-primary/10 dark:text-primary">
              <Sparkles size={16} />
              Modern digital experiences
            </div>

            <h1 className="max-w-4xl font-poppins text-heading text-slate-950 dark:text-white">
              Build products that feel{" "}
              <span className="text-secondary dark:text-primary">
                simple, modern and memorable.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-description text-slate-600 dark:text-slate-300">
              Create a polished digital experience using a scalable design
              system, responsive components and your primary and secondary brand
              colors.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 font-poppins text-sm text-white shadow-lg shadow-secondary/20 transition hover:-translate-y-0.5 hover:bg-secondary-hover dark:bg-primary dark:text-dark-background dark:hover:bg-primary-hover">
                Start your project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-poppins text-sm text-secondary transition hover:border-primary hover:bg-primary-soft dark:border-dark-border dark:bg-dark-surface dark:text-primary dark:hover:border-primary">
                Explore features
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
              {["Responsive design", "Dark mode", "Reusable components"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary-soft text-secondary dark:bg-primary/15 dark:text-primary">
                      <Check size={13} />
                    </span>

                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-3 shadow-2xl shadow-secondary/10 backdrop-blur dark:border-dark-border dark:bg-dark-surface/80">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 dark:border-dark-border dark:bg-dark-background">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-dark-border">
                  <div className="flex gap-2">
                    <span className="size-2.5 rounded-full bg-red-400" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-primary" />
                  </div>

                  <span className="text-xs text-slate-400">
                    Project overview
                  </span>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="rounded-2xl bg-secondary p-6 text-white dark:bg-primary dark:text-dark-background">
                    <p className="text-sm opacity-80">Total engagement</p>

                    <div className="mt-3 flex items-end justify-between">
                      <h2 className="font-poppins text-4xl sm:text-5xl">
                        84.6%
                      </h2>

                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium dark:bg-dark-background/10">
                        +12.4%
                      </span>
                    </div>

                    <div className="mt-7 flex h-24 items-end gap-2">
                      {[32, 52, 42, 70, 55, 82, 68, 95, 76, 88].map(
                        (height, index) => (
                          <span
                            key={`${height}-${index}`}
                            className="flex-1 rounded-t-md bg-white/35 dark:bg-dark-background/25"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Active users
                      </p>

                      <p className="mt-2 font-poppins text-2xl text-secondary dark:text-primary">
                        24.8K
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Conversion
                      </p>

                      <p className="mt-2 font-poppins text-2xl text-secondary dark:text-primary">
                        18.2%
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-dark-border dark:bg-dark-surface">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="font-poppins text-sm">Project progress</p>

                      <span className="text-sm text-secondary dark:text-primary">
                        72%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-background">
                      <div className="h-full w-[72%] rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-primary/25 bg-white px-5 py-4 shadow-xl md:block dark:border-dark-border dark:bg-dark-surface">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Customer satisfaction
              </p>

              <p className="mt-1 font-poppins text-2xl text-secondary dark:text-primary">
                4.9/5
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 dark:border-dark-border dark:bg-dark-surface/30 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-poppins text-sm uppercase tracking-[0.2em] text-secondary dark:text-primary">
              Core features
            </p>

            <h2 className="mt-4 font-poppins text-subheading text-slate-950 dark:text-white">
              Everything needed for a consistent brand experience
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-secondary/5 dark:border-dark-border dark:bg-dark-surface dark:hover:border-primary"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-secondary transition group-hover:bg-primary dark:bg-primary/10 dark:text-primary dark:group-hover:bg-primary dark:group-hover:text-dark-background">
                  {feature.icon}
                </div>

                <h3 className="mt-6 font-poppins text-xl text-secondary dark:text-primary">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
