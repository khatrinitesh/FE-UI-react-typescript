import {
  ArrowUpRight,
  ImageIcon,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

type BlurBackgroundImageProps = {
  image: string;
  title: string;
  description?: string;
  eyebrow?: string;
  icon?: LucideIcon;
  children?: ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg" | "xl";
  overlay?: "light" | "medium" | "dark";
  onAction?: () => void;
};

const blurClasses = {
  sm: "blur-sm scale-[1.03]",
  md: "blur-md scale-[1.05]",
  lg: "blur-lg scale-[1.08]",
  xl: "blur-2xl scale-[1.12]",
};

const overlayClasses = {
  light: "bg-black/25",
  medium: "bg-black/50",
  dark: "bg-black/70",
};

export function BlurBackgroundImage({
  image,
  title,
  description,
  eyebrow = "Featured experience",
  icon: Icon = ImageIcon,
  children,
  className = "",
  blur = "lg",
  overlay = "medium",
  onAction,
}: BlurBackgroundImageProps) {
  return (
    <section
      className={`group relative isolate min-h-[600px] overflow-hidden rounded-[36px] border border-white/10 bg-black text-white shadow-2xl ${className}`}
    >
      {/* Blurred background image */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 -z-30 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.14] ${blurClasses[blur]}`}
      />

      {/* Dark overlay */}
      <div className={`absolute inset-0 -z-20 ${overlayClasses[overlay]}`} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-violet-950/60 via-transparent to-cyan-950/30" />

      {/* Decorative glow */}
      <div className="absolute -left-20 top-16 -z-10 size-72 rounded-full bg-violet-500/20 blur-[100px]" />

      <div className="absolute -right-20 bottom-10 -z-10 size-72 rounded-full bg-cyan-400/15 blur-[100px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[60px_60px] mask-[linear-gradient(to_bottom,black,transparent_90%)]" />

      {/* Top highlight */}
      <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

      <div className="relative flex min-h-[600px] items-end p-5 sm:p-8 lg:p-12">
        <div className="w-full max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-xl">
            <Sparkles className="size-3.5 text-violet-200" />
            {eyebrow}
          </div>

          <div className="rounded-[30px] border border-white/15 bg-black/25 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="flex items-start gap-4">
              <div className="hidden size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-violet-200 sm:flex">
                <Icon className="size-5" />
              </div>

              <div className="min-w-0 flex-1">
                <h1 className="font-ogilvy-regular text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h1>

                {description && (
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                    {description}
                  </p>
                )}

                {children && <div className="mt-6">{children}</div>}

                <button
                  type="button"
                  onClick={onAction}
                  className="group/button mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-violet-100 active:scale-95"
                >
                  Explore experience
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
