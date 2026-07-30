import { ArrowUpRight, Layers3, Sparkles, WandSparkles } from "lucide-react";
import { AuroraBackground } from "./AuroraBackground";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground interactive showGrid>
      <main className="flex min-h-screen items-center justify-center px-5 py-16">
        <section className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-violet-200 backdrop-blur-xl">
              <Sparkles className="size-3.5" />
              Interactive Aurora Background
            </div>

            <h1 className="font-ogilvy-regular mt-7 text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build beautiful
              <span className="block bg-gradient-to-r from-violet-300 via-cyan-200 to-pink-300 bg-clip-text text-transparent">
                digital experiences
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              A reusable animated aurora background with moving gradients,
              subtle grid details and an interactive cursor glow.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-violet-100 active:scale-95"
              >
                Explore components
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10 active:scale-95"
              >
                View documentation
              </button>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={WandSparkles}
              title="Animated gradients"
              description="Multiple gradient layers move independently to create a natural aurora effect."
            />

            <FeatureCard
              icon={Sparkles}
              title="Interactive glow"
              description="The background glow smoothly follows the user's mouse position."
            />

            <FeatureCard
              icon={Layers3}
              title="Reusable layout"
              description="Place any page, hero section or dashboard content inside the component."
            />
          </div>
        </section>
      </main>
    </AuroraBackground>
  );
}

type FeatureCardProps = {
  icon: typeof Sparkles;
  title: string;
  description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075]">
      <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-violet-200 transition duration-300 group-hover:scale-105">
        <Icon className="size-5" />
      </div>

      <h2 className="font-ogilvy-regular mt-6 text-xl text-white">{title}</h2>

      <p className="mt-3 text-sm leading-6 text-white/45">{description}</p>
    </article>
  );
}
