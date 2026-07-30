import {
  ArrowRight,
  Bell,
  Check,
  Download,
  Heart,
  LoaderCircle,
  Mail,
  Play,
  Rocket,
  Send,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type AnimatedIconCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
  animationClassName: string;
};

function AnimatedIconCard({
  title,
  description,
  icon: Icon,
  iconClassName,
  animationClassName,
}: AnimatedIconCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <div
        className={`flex size-14 items-center justify-center rounded-2xl ${iconClassName}`}
      >
        <Icon className={`size-6 ${animationClassName}`} />
      </div>

      <h3 className="font-ogilvy-regular mt-5 text-lg text-white">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
    </article>
  );
}

type AnimatedButtonProps = {
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "outline" | "gradient" | "glass";
  animation?: "arrow" | "send" | "download" | "play" | "sparkle";
  onClick?: () => void;
};

const buttonVariants = {
  primary:
    "bg-white text-black hover:bg-violet-200 shadow-[0_12px_35px_rgba(255,255,255,0.12)]",

  outline:
    "border border-white/15 bg-transparent text-white hover:border-violet-400/50 hover:bg-violet-500/10",

  gradient:
    "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_15px_40px_rgba(124,58,237,0.25)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.4)]",

  glass:
    "border border-white/10 bg-white/[0.07] text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.12]",
};

function getIconAnimation(animation: AnimatedButtonProps["animation"]): string {
  switch (animation) {
    case "arrow":
      return "group-hover:translate-x-1";

    case "send":
      return "group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:-rotate-12";

    case "download":
      return "group-hover:animate-button-download";

    case "play":
      return "group-hover:scale-125";

    case "sparkle":
      return "group-hover:rotate-12 group-hover:scale-125";

    default:
      return "";
  }
}

function AnimatedButton({
  label,
  icon: Icon,
  variant = "primary",
  animation = "arrow",
  onClick,
}: AnimatedButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${buttonVariants[variant]}`}
    >
      <span>{label}</span>

      <Icon
        className={`size-4 transition-transform duration-300 ${getIconAnimation(
          animation,
        )}`}
      />
    </button>
  );
}

function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (isLoading) return;

    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="group inline-flex min-h-12 min-w-40 items-center justify-center gap-2.5 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(124,58,237,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 active:scale-95 disabled:cursor-wait disabled:opacity-80"
    >
      {isLoading ? (
        <>
          <LoaderCircle className="size-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          Submit
          <Rocket className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}

function SuccessButton() {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    if (isCompleted) return;

    setIsCompleted(true);

    window.setTimeout(() => {
      setIsCompleted(false);
    }, 2200);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex min-h-12 min-w-40 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-95 ${
        isCompleted
          ? "bg-emerald-500 text-white"
          : "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white"
      }`}
    >
      {isCompleted ? (
        <>
          <Check className="size-4 animate-success-check" />
          Completed
        </>
      ) : (
        <>
          Confirm
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}

function NotificationButton() {
  const [notifications, setNotifications] = useState(3);

  return (
    <button
      type="button"
      onClick={() => setNotifications(0)}
      aria-label="Open notifications"
      className="group relative flex size-13 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-zinc-300 transition duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white active:scale-95"
    >
      <Bell className="size-5 origin-top transition-transform duration-300 group-hover:animate-bell-ring" />

      {notifications > 0 && (
        <span className="absolute right-1.5 top-1.5 flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-[#09090b]">
          {notifications}
        </span>
      )}
    </button>
  );
}

export default function AnimatedButtonsDemo() {
  const animatedIcons: AnimatedIconCardProps[] = [
    {
      title: "Floating Icon",
      description: "A smooth floating animation suitable for hero sections.",
      icon: Rocket,
      iconClassName: "bg-violet-500/15 text-violet-300",
      animationClassName: "animate-icon-float",
    },
    {
      title: "Bell Ring",
      description: "A notification bell with a natural ringing animation.",
      icon: Bell,
      iconClassName: "bg-amber-500/15 text-amber-300",
      animationClassName: "animate-bell-ring",
    },
    {
      title: "Heart Beat",
      description: "A repeating heartbeat effect for favourite actions.",
      icon: Heart,
      iconClassName: "bg-red-500/15 text-red-300",
      animationClassName: "animate-heart-beat",
    },
    {
      title: "Sparkle Spin",
      description: "A subtle rotation and glow for AI-related features.",
      icon: Sparkles,
      iconClassName: "bg-cyan-500/15 text-cyan-300",
      animationClassName: "animate-sparkle-spin",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
            <Sparkles className="size-3.5" />
            Interactive UI Components
          </div>

          <h1 className="font-ogilvy-regular text-4xl tracking-tight sm:text-5xl">
            Animated Icons & Buttons
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Reusable icon animations and interactive button states built using
            React, TypeScript, Tailwind CSS and Lucide icons.
          </p>
        </header>

        {/* Animated icons */}
        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
                Component 10
              </p>

              <h2 className="font-ogilvy-regular mt-2 text-2xl">
                Animated Icons
              </h2>
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-500">
              4 animations
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {animatedIcons.map((item) => (
              <AnimatedIconCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* Animated buttons */}
        <section className="mt-14">
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
              Component 11
            </p>

            <h2 className="font-ogilvy-regular mt-2 text-2xl">
              Animated Buttons
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="flex flex-wrap gap-4">
              <AnimatedButton
                label="Explore"
                icon={ArrowRight}
                animation="arrow"
              />

              <AnimatedButton
                label="Send message"
                icon={Send}
                variant="gradient"
                animation="send"
              />

              <AnimatedButton
                label="Download"
                icon={Download}
                variant="outline"
                animation="download"
              />

              <AnimatedButton
                label="Watch demo"
                icon={Play}
                variant="glass"
                animation="play"
              />

              <AnimatedButton
                label="Generate"
                icon={Sparkles}
                variant="gradient"
                animation="sparkle"
              />
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <h3 className="font-ogilvy-regular text-lg">Button states</h3>

            <p className="mt-2 text-sm text-zinc-500">
              Interactive loading, success, and notification button examples.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <LoadingButton />

              <SuccessButton />

              <NotificationButton />

              <button
                type="button"
                className="group inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 active:scale-95"
              >
                <span className="relative flex size-5 items-center justify-center">
                  <Mail className="absolute size-4 transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0" />

                  <Send className="absolute size-4 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
                </span>
                Contact us
              </button>

              <button
                type="button"
                className="group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <Star className="relative mr-2 size-4 transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" />

                <span className="relative">Upgrade plan</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
