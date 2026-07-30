import { AnimatedSearch, type SearchSuggestion } from "./AnimatedSearch";

const suggestions: SearchSuggestion[] = [
  {
    id: 1,
    title: "3D Tilt Card",
    category: "Card components",
  },
  {
    id: 2,
    title: "Folded Corner Card",
    category: "Card components",
  },
  {
    id: 3,
    title: "Animated Buttons",
    category: "Button components",
  },
  {
    id: 4,
    title: "Alert Notifications",
    category: "Feedback components",
  },
  {
    id: 5,
    title: "Accordion UI",
    category: "Content components",
  },
  {
    id: 6,
    title: "Animated Icons",
    category: "Icon components",
  },
];

export default function AnimatedSearchDemo() {
  return (
    <main className="relative flex min-h-screen items-start justify-center overflow-hidden bg-[#08080a] px-4 py-24 text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <section className="relative flex w-full max-w-4xl flex-col items-center">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            Component 12
          </p>

          <h1 className="font-ogilvy-regular mt-3 text-4xl sm:text-5xl">
            Animated Search
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Click the search icon to expand the input and display animated
            search suggestions.
          </p>
        </div>

        <AnimatedSearch
          placeholder="Search UI components..."
          suggestions={suggestions}
          onSearch={(value) => {
            console.log("Search submitted:", value);
          }}
          onSelect={(suggestion) => {
            console.log("Selected:", suggestion);
          }}
        />
      </section>
    </main>
  );
}
