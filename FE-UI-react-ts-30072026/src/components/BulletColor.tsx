type BulletItem = {
  id: number;
  title: string;
  description: string;
};

const primaryItems: BulletItem[] = [
  {
    id: 1,
    title: "Responsive design",
    description: "Layouts adapt smoothly across desktop screen resolutions.",
  },
  {
    id: 2,
    title: "Brand typography",
    description: "Uses your Poppins font and responsive brand font sizes.",
  },
  {
    id: 3,
    title: "Theme support",
    description: "Supports both light and dark interface themes.",
  },
];

const secondaryItems: string[] = [
  "Reusable React components",
  "Type-safe TypeScript code",
  "Tailwind CSS utility classes",
];

export function BulletColor() {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12 font-brand text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <span className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-brand-14 text-secondary dark:text-primary">
              Brand features
            </span>

            <h1 className="mt-5 text-brand-40 text-secondary dark:text-primary">
              Colored bullet list design
            </h1>

            <p className="mt-3 max-w-2xl text-brand-16 leading-relaxed text-slate-600 dark:text-slate-300">
              Use the Tailwind marker variant to apply primary and secondary
              brand colors directly to list bullets.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-brand-24 text-secondary dark:text-primary">
                Primary bullets
              </h2>

              <ul className="mt-6 list-disc space-y-5 pl-6 marker:text-primary marker:text-brand-24">
                {primaryItems.map((item) => (
                  <li key={item.id} className="pl-2">
                    <h3 className="text-brand-18 text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-brand-14 leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl bg-secondary p-7 text-white shadow-lg shadow-secondary/20 dark:bg-primary dark:text-slate-950">
              <h2 className="text-brand-24">Secondary bullets</h2>

              <ul className="mt-6 list-disc space-y-4 pl-6 marker:text-primary marker:text-brand-24 dark:marker:text-secondary">
                {secondaryItems.map((item) => (
                  <li key={item} className="pl-2 text-brand-16">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 dark:bg-secondary/10">
                <p className="text-brand-14 leading-relaxed">
                  The bullet and text colors can be controlled separately using
                  the marker variant.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
