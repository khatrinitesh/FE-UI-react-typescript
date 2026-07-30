import { ArrowUpRight, Boxes, Orbit, Zap, type LucideIcon } from "lucide-react";

import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";

export default function BackgroundBeamsDemo() {
  return (
    <BackgroundBeamsWithCollision beamCount={12}>
      <main className="flex min-h-screen items-center justify-center px-5 py-20">
        <section className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-violet-200 backdrop-blur-xl">
              <Zap className="size-3.5" />
              Animated Background Effect
            </div>

            <h1 className="font-ogilvy-regular mt-7 text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Background beams
              <span className="block bg-gradient-to-r from-violet-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                with collision
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Animated beams fall through the background and generate glowing
              particles when they reach the collision line.
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
                View source
              </button>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={Zap}
              title="Collision effects"
              description="Each beam creates a glowing flash, ring and particle explosion."
            />

            <FeatureCard
              icon={Orbit}
              title="Smooth animation"
              description="Different speeds and angles produce a natural, varied movement."
            />

            <FeatureCard
              icon={Boxes}
              title="Reusable component"
              description="Place any hero section or page content inside the background."
            />
          </div>
        </section>
      </main>
    </BackgroundBeamsWithCollision>
  );
}

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-black/20 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/25 hover:bg-white/[0.06]">
      <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-violet-200 transition duration-300 group-hover:scale-105">
        <Icon className="size-5" />
      </div>

      <h2 className="font-ogilvy-regular mt-6 text-xl text-white">{title}</h2>

      <p className="mt-3 text-sm leading-6 text-white/45">{description}</p>
    </article>
  );
}
