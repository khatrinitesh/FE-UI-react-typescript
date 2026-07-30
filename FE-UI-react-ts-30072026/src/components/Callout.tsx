import {
  AlertCircle,
  CheckCircle2,
  Info,
  Lightbulb,
  TriangleAlert,
  X,
} from "lucide-react";
import type { ReactNode } from "react";

type CalloutVariant = "info" | "success" | "warning" | "error" | "tip";

type CalloutProps = {
  variant?: CalloutVariant;
  title: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
};

const calloutStyles: Record<
  CalloutVariant,
  {
    icon: ReactNode;
    wrapper: string;
    iconWrapper: string;
    title: string;
  }
> = {
  info: {
    icon: <Info size={20} />,
    wrapper:
      "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40",
    iconWrapper:
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    title: "text-blue-950 dark:text-blue-200",
  },

  success: {
    icon: <CheckCircle2 size={20} />,
    wrapper:
      "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
    iconWrapper:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    title: "text-emerald-950 dark:text-emerald-200",
  },

  warning: {
    icon: <TriangleAlert size={20} />,
    wrapper:
      "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
    iconWrapper:
      "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    title: "text-amber-950 dark:text-amber-200",
  },

  error: {
    icon: <AlertCircle size={20} />,
    wrapper: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40",
    iconWrapper: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    title: "text-red-950 dark:text-red-200",
  },

  tip: {
    icon: <Lightbulb size={20} />,
    wrapper:
      "border-primary/50 bg-primary/10 dark:border-primary/30 dark:bg-primary/10",
    iconWrapper:
      "bg-primary text-secondary dark:bg-primary dark:text-slate-950",
    title: "text-secondary dark:text-primary",
  },
};

export function Callout({
  variant = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
}: CalloutProps) {
  const styles = calloutStyles[variant];

  return (
    <aside
      role={variant === "error" ? "alert" : "note"}
      className={`relative rounded-2xl border p-5 ${styles.wrapper}`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${styles.iconWrapper}`}
        >
          {styles.icon}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className={`text-brand-16 font-medium ${styles.title}`}>
            {title}
          </h3>

          <div className="mt-1 text-brand-14 leading-6 text-slate-600 dark:text-slate-300">
            {children}
          </div>
        </div>

        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss callout"
            className="flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-black/5 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X size={17} />
          </button>
        )}
      </div>
    </aside>
  );
}
