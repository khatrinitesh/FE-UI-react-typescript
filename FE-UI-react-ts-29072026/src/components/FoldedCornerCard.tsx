import {
  ArrowUpRight,
  FileText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

type FoldedCornerCardProps = {
  title: string;
  description: string;
  label?: string;
  icon?: LucideIcon;
  children?: ReactNode;
  onClick?: () => void;
};

export function FoldedCornerCard({
  title,
  description,
  label = "Featured",
  icon: Icon = FileText,
  children,
  onClick,
}: FoldedCornerCardProps) {
  return (
    <article className="group relative w-full max-w-sm">
      {/* Card shadow */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-violet-500/20 blur-xl transition duration-500 group-hover:bg-violet-500/30" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-zinc-900 via-zinc-950 to-black p-7 shadow-2xl">
        {/* Folded corner */}
        <div className="absolute right-0 top-0 size-24">
          {/* Fold shadow */}
          <div className="absolute right-0 top-0 size-24 bg-linear-to-bl from-black/60 via-black/20 to-transparent" />

          {/* Fold triangle */}
          <div className="absolute right-0 top-0 size-0 border-b-96 border-l-96 border-b-transparent border-l-violet-500" />

          {/* Fold inner highlight */}
          <div className="absolute right-7 top-7 size-0 border-b-76 border-l-76 border-b-transparent border-l-violet-400/80" />

          <Sparkles className="absolute right-4 top-4 z-10 size-5 rotate-12 text-white" />
        </div>

        {/* Background decoration */}
        <div className="absolute -bottom-20 -left-20 size-56 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-10 flex items-center justify-between pr-14">
            <div className="flex size-13 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-violet-300 shadow-lg backdrop-blur-xl">
              <Icon className="size-6" />
            </div>

            <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
              {label}
            </span>
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            Folded corner
          </p>

          <h3 className="font-ogilvy text-2xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>

          {children && <div className="mt-6">{children}</div>}

          <button
            type="button"
            onClick={onClick}
            className="mt-8 flex items-center gap-2 text-sm font-semibold text-white transition hover:text-violet-300"
          >
            View details
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-violet-400/50 to-transparent" />
      </div>
    </article>
  );
}
