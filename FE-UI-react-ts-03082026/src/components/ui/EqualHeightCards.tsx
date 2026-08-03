import { ArrowRight, Code2, Palette, Rocket } from "lucide-react";

const cards = [
  {
    title: "Design",
    description: "Create clean and consistent user interfaces.",
    icon: Palette,
  },
  {
    title: "Development",
    description:
      "Build responsive React applications using TypeScript, reusable components, APIs, validation, state management, and modern frontend practices.",
    icon: Code2,
  },
  {
    title: "Launch",
    description: "Test, optimize, and deploy your application.",
    icon: Rocket,
  },
];

export default function EqualHeightCards() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold text-slate-900">
          Equal-height cards
        </h1>

        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-3">
          {cards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Icon size={24} />
              </div>

              <h2 className="text-xl font-semibold text-slate-900">{title}</h2>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
              >
                Learn more
                <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
