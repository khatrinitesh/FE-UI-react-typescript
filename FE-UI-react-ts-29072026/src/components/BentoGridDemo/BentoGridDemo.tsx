import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers3,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

type BentoCardSize = "default" | "wide" | "tall" | "large" | "full";

type BentoCardVariant = "violet" | "cyan" | "orange" | "green" | "neutral";

type BentoCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  label?: string;
  size?: BentoCardSize;
  variant?: BentoCardVariant;
  children?: ReactNode;
  onClick?: () => void;
};

const sizeClasses: Record<BentoCardSize, string> = {
  default: "md:col-span-1 md:row-span-1",
  wide: "md:col-span-2 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
  large: "md:col-span-2 md:row-span-2",
  full: "md:col-span-3 md:row-span-1",
};

const variantClasses: Record<
  BentoCardVariant,
  {
    glow: string;
    icon: string;
    label: string;
    border: string;
  }
> = {
  violet: {
    glow: "bg-violet-500/20",
    icon: "bg-violet-500/15 text-violet-300",
    label: "text-violet-300",
    border: "hover:border-violet-400/40",
  },

  cyan: {
    glow: "bg-cyan-500/20",
    icon: "bg-cyan-500/15 text-cyan-300",
    label: "text-cyan-300",
    border: "hover:border-cyan-400/40",
  },

  orange: {
    glow: "bg-orange-500/20",
    icon: "bg-orange-500/15 text-orange-300",
    label: "text-orange-300",
    border: "hover:border-orange-400/40",
  },

  green: {
    glow: "bg-emerald-500/20",
    icon: "bg-emerald-500/15 text-emerald-300",
    label: "text-emerald-300",
    border: "hover:border-emerald-400/40",
  },

  neutral: {
    glow: "bg-white/10",
    icon: "bg-white/10 text-zinc-300",
    label: "text-zinc-400",
    border: "hover:border-white/25",
  },
};

export function BentoCard({
  title,
  description,
  icon: Icon = Boxes,
  label,
  size = "default",
  variant = "neutral",
  children,
  onClick,
}: BentoCardProps) {
  const styles = variantClasses[variant];

  return (
    <article
      onClick={onClick}
      className={`group relative min-h-[250px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.065] ${sizeClasses[size]} ${styles.border} ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 size-56 rounded-full blur-[90px] transition-all duration-500 group-hover:scale-125 ${styles.glow}`}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 ${styles.icon}`}
          >
            <Icon className="size-5" />
          </div>

          <ArrowUpRight className="size-5 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
        </div>

        <div className="mt-auto pt-8">
          {label && (
            <p
              className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${styles.label}`}
            >
              {label}
            </p>
          )}

          <h3 className="font-ogilvy-regular text-2xl leading-tight text-white">
            {title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            {description}
          </p>

          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </article>
  );
}

type StatProps = {
  value: string;
  label: string;
  change?: string;
};

function Stat({ value, label, change }: StatProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-2xl font-semibold text-white">{value}</p>

        {change && (
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
            {change}
          </span>
        )}
      </div>

      <p className="mt-1 text-xs text-zinc-500">{label}</p>
    </div>
  );
}

function AnalyticsChart() {
  const chartBars = [38, 54, 42, 70, 58, 84, 76, 96, 72, 88];

  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex h-28 items-end gap-2">
        {chartBars.map((height, index) => (
          <div key={index} className="group/bar flex h-full flex-1 items-end">
            <div
              style={{ height: `${height}%` }}
              className="w-full rounded-t-md bg-gradient-to-t from-violet-600 to-cyan-300 opacity-60 transition duration-300 group-hover/bar:opacity-100"
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-between text-[10px] text-zinc-600">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
      </div>
    </div>
  );
}

function UserStack() {
  const users = [
    {
      name: "Olivia",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Daniel",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Sophia",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Chris",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <div className="flex items-center">
      {users.map((user, index) => (
        <img
          key={user.name}
          src={user.image}
          alt={user.name}
          className={`size-11 rounded-full border-2 border-[#111116] object-cover ${
            index > 0 ? "-ml-3" : ""
          }`}
        />
      ))}

      <div className="-ml-3 flex size-11 items-center justify-center rounded-full border-2 border-[#111116] bg-violet-500 text-xs font-semibold text-white">
        +18
      </div>
    </div>
  );
}

function IntegrationList() {
  const integrations = [
    {
      name: "Cloud Storage",
      icon: Cloud,
      status: "Connected",
    },
    {
      name: "Database",
      icon: Database,
      status: "Connected",
    },
    {
      name: "Global API",
      icon: Globe2,
      status: "Active",
    },
  ];

  return (
    <div className="space-y-2">
      {integrations.map((integration) => {
        const Icon = integration.icon;

        return (
          <div
            key={integration.name}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-zinc-400">
              <Icon className="size-4" />
            </div>

            <span className="min-w-0 flex-1 truncate text-sm text-zinc-300">
              {integration.name}
            </span>

            <span className="flex items-center gap-1.5 text-[11px] text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              {integration.status}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function BentoGridDemo() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080a] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-48 -top-48 size-[600px] rounded-full bg-violet-600/15 blur-[160px]" />

      <div className="pointer-events-none absolute -bottom-48 -right-48 size-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <section className="relative mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
              <Sparkles className="size-3.5" />
              Modern UI Component
            </div>

            <h1 className="font-ogilvy-regular mt-5 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Bento Grid
              <span className="block bg-gradient-to-r from-violet-300 via-cyan-200 to-pink-300 bg-clip-text text-transparent">
                dashboard design
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              A responsive modular grid for displaying features, analytics,
              integrations and team information.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex self-start items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-violet-100 active:scale-95"
          >
            Explore dashboard
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </header>

        <div className="grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
          <BentoCard
            title="Real-time Analytics"
            description="Monitor performance, user engagement and growth using live dashboard metrics."
            icon={BarChart3}
            label="Analytics"
            size="large"
            variant="violet"
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat value="24.8K" label="Total visitors" change="+18%" />
              <Stat value="72%" label="Engagement" change="+9%" />
              <Stat value="8.4K" label="Conversions" change="+12%" />
            </div>

            <div className="mt-3">
              <AnalyticsChart />
            </div>
          </BentoCard>

          <BentoCard
            title="Lightning Fast"
            description="Optimized components provide fast page loads and smooth interactions."
            icon={Zap}
            label="Performance"
            size="tall"
            variant="orange"
          >
            <div className="relative mt-3 flex min-h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="absolute size-44 rounded-full border border-orange-400/20" />
              <div className="absolute size-32 rounded-full border border-orange-400/30" />
              <div className="absolute size-20 rounded-full border border-orange-400/40" />

              <div className="relative flex size-16 items-center justify-center rounded-full bg-orange-400 text-black shadow-[0_0_60px_rgba(251,146,60,0.45)]">
                <Zap className="size-7 fill-current" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Stat value="98" label="Performance score" />
              <Stat value="0.8s" label="Load time" />
            </div>
          </BentoCard>

          <BentoCard
            title="Team Collaboration"
            description="Invite your team and manage projects together in one workspace."
            icon={Users}
            label="Workspace"
            size="wide"
            variant="cyan"
          >
            <div className="flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-white">
                  Project contributors
                </p>

                <p className="mt-1 text-xs text-zinc-500">22 active members</p>
              </div>

              <UserStack />
            </div>
          </BentoCard>

          <BentoCard
            title="Secure by Default"
            description="Enterprise-grade security protects your data and user accounts."
            icon={ShieldCheck}
            label="Security"
            variant="green"
          >
            <div className="space-y-2">
              {["Encrypted data", "Role-based access", "Automatic backups"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="size-4 text-emerald-300" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </BentoCard>

          <BentoCard
            title="Smart Interactions"
            description="Create responsive components with polished hover and click states."
            icon={MousePointer2}
            label="Experience"
            variant="violet"
          >
            <button
              type="button"
              className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4 text-left transition hover:border-violet-400/30 hover:bg-violet-500/10"
            >
              <span>
                <span className="block text-sm font-medium text-white">
                  Interactive preview
                </span>

                <span className="mt-1 block text-xs text-zinc-500">
                  Hover over this element
                </span>
              </span>

              <ArrowUpRight className="size-5 text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300" />
            </button>
          </BentoCard>

          <BentoCard
            title="Connected Platform"
            description="Connect your application with cloud tools, APIs and databases."
            icon={Layers3}
            label="Integrations"
            size="wide"
            variant="cyan"
          >
            <IntegrationList />
          </BentoCard>

          <BentoCard
            title="Developer Friendly"
            description="Built with reusable React, TypeScript and Tailwind CSS components."
            icon={Code2}
            label="Development"
            variant="neutral"
          >
            <div className="rounded-2xl border border-white/10 bg-[#050507] p-4 font-mono text-xs leading-6 text-zinc-400">
              <p>
                <span className="text-violet-300">import</span>{" "}
                <span className="text-cyan-200">{"{ BentoCard }"}</span>
              </p>

              <p>
                <span className="text-violet-300">from</span>{" "}
                <span className="text-emerald-300">"./BentoGridDemo"</span>
              </p>
            </div>
          </BentoCard>
        </div>
      </section>
    </main>
  );
}
