import {
  ArrowRight,
  Layers3,
  Rotate3D,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

type ThreeDFlipCardProps = {
  title: string;
  description: string;
  backTitle?: string;
  backDescription?: string;
  icon?: LucideIcon;
  children?: ReactNode;
  onAction?: () => void;
};

export function ThreeDFlipCard({
  title,
  description,
  backTitle = "Explore Experience",
  backDescription = "Discover more information about this interactive experience.",
  icon: Icon = Layers3,
  children,
  onAction,
}: ThreeDFlipCardProps) {
  return (
    <div className="group h-[400px] w-full max-w-sm [perspective:1200px]">
      <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-7 shadow-2xl [backface-visibility:hidden]">
          <div className="absolute -right-20 -top-20 size-52 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 size-52 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-violet-300 shadow-xl backdrop-blur-xl">
                <Icon className="size-7" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">
                <Rotate3D className="size-3.5" />
                Hover to flip
              </div>
            </div>

            <div className="mt-auto">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                Interactive component
              </p>

              <h3 className="text-3xl font-semibold leading-tight text-white">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {description}
              </p>

              {children && <div className="mt-6">{children}</div>}
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950 via-zinc-950 to-black p-7 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex h-full flex-col items-center justify-center text-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <Sparkles className="size-7" />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              More details
            </p>

            <h3 className="mt-3 text-3xl font-semibold text-white">
              {backTitle}
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
              {backDescription}
            </p>

            <button
              type="button"
              onClick={onAction}
              className="mt-8 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 active:scale-95"
            >
              View details
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
