import {
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  LoaderCircle,
  Lock,
  Mail,
  Play,
  Plus,
  Send,
  ShoppingBag,
  Sparkles,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";

type BlockButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "gradient"
  | "success"
  | "danger"
  | "glass";

type BlockButtonSize = "sm" | "md" | "lg";

type BlockButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  description?: string;
  icon?: LucideIcon;
  endIcon?: LucideIcon;
  variant?: BlockButtonVariant;
  size?: BlockButtonSize;
  loading?: boolean;
  badge?: string;
  children?: ReactNode;
};

const variantClasses: Record<BlockButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-violet-100 shadow-[0_16px_40px_rgba(255,255,255,0.12)]",

  secondary:
    "bg-violet-600 text-white hover:bg-violet-500 shadow-[0_16px_40px_rgba(124,58,237,0.25)]",

  outline:
    "border border-white/15 bg-transparent text-white hover:border-violet-400/50 hover:bg-violet-500/10",

  gradient:
    "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 text-white hover:shadow-[0_20px_55px_rgba(124,58,237,0.35)]",

  success:
    "border border-emerald-400/25 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500 hover:text-white",

  danger:
    "border border-red-400/25 bg-red-500/10 text-red-200 hover:bg-red-500 hover:text-white",

  glass:
    "border border-white/10 bg-white/[0.06] text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.1]",
};

const sizeClasses: Record<BlockButtonSize, string> = {
  sm: "min-h-14 px-4 py-3",
  md: "min-h-16 px-5 py-4",
  lg: "min-h-20 px-6 py-5",
};

export function BlockButton({
  label,
  description,
  icon: Icon,
  endIcon: EndIcon = ArrowRight,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  badge,
  className = "",
  children,
  ...buttonProps
}: BlockButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl text-left font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...buttonProps}
    >
      <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

      {Icon && (
        <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl border border-current/10 bg-black/10">
          {loading ? (
            <LoaderCircle className="size-5 animate-spin" />
          ) : (
            <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
          )}
        </span>
      )}

      {!Icon && loading && (
        <LoaderCircle className="relative size-5 shrink-0 animate-spin" />
      )}

      <span className="relative min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="block text-sm font-semibold sm:text-base">
            {loading ? "Processing..." : label}
          </span>

          {badge && (
            <span className="rounded-full border border-current/15 bg-black/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
              {badge}
            </span>
          )}
        </span>

        {description && (
          <span className="mt-1 block text-xs leading-5 opacity-60 sm:text-sm">
            {description}
          </span>
        )}

        {children}
      </span>

      {!loading && (
        <EndIcon className="relative size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}

type IconBlockButtonProps = {
  label: string;
  icon: LucideIcon;
  value?: string;
  active?: boolean;
  onClick?: () => void;
};

export function IconBlockButton({
  label,
  icon: Icon,
  value,
  active = false,
  onClick,
}: IconBlockButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-32 w-full flex-col items-start justify-between rounded-3xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
        active
          ? "border-violet-400/50 bg-violet-500/15 shadow-[0_20px_50px_rgba(124,58,237,0.16)]"
          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      <div className="flex w-full items-start justify-between">
        <span
          className={`flex size-11 items-center justify-center rounded-xl ${
            active
              ? "bg-violet-500 text-white"
              : "bg-white/[0.07] text-zinc-400 group-hover:text-white"
          }`}
        >
          <Icon className="size-5" />
        </span>

        {value && (
          <span className="text-xs font-semibold text-zinc-500">{value}</span>
        )}
      </div>

      <span
        className={`font-ogilvy-regular mt-5 text-lg ${
          active ? "text-white" : "text-zinc-300"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function LoadingBlockButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;

    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <BlockButton
      label="Generate content"
      description="Create a new AI-generated response."
      icon={Sparkles}
      variant="gradient"
      loading={loading}
      onClick={handleClick}
    />
  );
}

function SuccessBlockButton() {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(true);

    window.setTimeout(() => {
      setCompleted(false);
    }, 2200);
  };

  return (
    <BlockButton
      label={completed ? "Completed successfully" : "Confirm action"}
      description={
        completed
          ? "Your changes have been saved."
          : "Save and confirm the current changes."
      }
      icon={completed ? Check : Lock}
      endIcon={completed ? Check : ArrowRight}
      variant={completed ? "success" : "outline"}
      onClick={handleClick}
    />
  );
}

export default function BlockButtonsDemo() {
  const [activeOption, setActiveOption] = useState("Design");

  const navigationButtons = [
    {
      label: "Design",
      icon: Sparkles,
      value: "12",
    },
    {
      label: "Development",
      icon: Plus,
      value: "08",
    },
    {
      label: "Downloads",
      icon: Download,
      value: "24",
    },
    {
      label: "Messages",
      icon: Mail,
      value: "05",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080a] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 -top-40 size-[520px] rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <section className="relative mx-auto max-w-6xl">
        <header className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
            <Sparkles className="size-3.5" />
            Interactive UI Component
          </div>

          <h1 className="font-ogilvy-regular mt-5 text-4xl tracking-tight sm:text-5xl">
            Block Buttons
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Full-width action buttons with icons, descriptions, loading states,
            badges and multiple visual styles.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[32px] border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                Action buttons
              </p>

              <h2 className="font-ogilvy-regular mt-2 text-2xl">
                Button Variants
              </h2>
            </div>

            <div className="space-y-4">
              <BlockButton
                label="Start new project"
                description="Create and configure a new workspace."
                icon={Plus}
                variant="primary"
                badge="New"
                onClick={() => console.log("New project")}
              />

              <BlockButton
                label="Explore components"
                description="Browse available React UI components."
                icon={Sparkles}
                variant="secondary"
              />

              <BlockButton
                label="Download project files"
                description="Download all project assets in a ZIP file."
                icon={Download}
                variant="outline"
              />

              <LoadingBlockButton />

              <SuccessBlockButton />

              <BlockButton
                label="Delete project"
                description="Permanently remove this project and its files."
                icon={Trash2}
                endIcon={Trash2}
                variant="danger"
              />
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Quick actions
              </p>

              <h2 className="font-ogilvy-regular mt-2 text-2xl">
                Compact Blocks
              </h2>
            </div>

            <div className="space-y-3">
              <BlockButton
                label="Send message"
                icon={Send}
                endIcon={Send}
                variant="glass"
                size="sm"
              />

              <BlockButton
                label="Watch product demo"
                icon={Play}
                endIcon={Play}
                variant="glass"
                size="sm"
              />

              <BlockButton
                label="Open documentation"
                icon={ExternalLink}
                endIcon={ExternalLink}
                variant="glass"
                size="sm"
              />

              <BlockButton
                label="View available plans"
                icon={ShoppingBag}
                variant="gradient"
                size="lg"
                description="Compare features and choose the best plan."
              />
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Navigation blocks
              </p>

              <h2 className="font-ogilvy-regular mt-2 text-2xl">
                Select a Category
              </h2>
            </div>

            <span className="text-sm text-zinc-500">
              Selected: {activeOption}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {navigationButtons.map((item) => (
              <IconBlockButton
                key={item.label}
                label={item.label}
                icon={item.icon}
                value={item.value}
                active={activeOption === item.label}
                onClick={() => setActiveOption(item.label)}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
