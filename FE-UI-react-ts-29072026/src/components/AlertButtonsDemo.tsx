import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Plus,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type AlertType = "success" | "error" | "warning" | "info";

type AlertItem = {
  id: number;
  type: AlertType;
  title: string;
  message: string;
};

type AlertStyle = {
  icon: LucideIcon;
  buttonClassName: string;
  alertClassName: string;
  iconClassName: string;
  progressClassName: string;
};

const alertStyles: Record<AlertType, AlertStyle> = {
  success: {
    icon: CheckCircle2,
    buttonClassName:
      "border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500 hover:text-white",
    alertClassName:
      "border-emerald-400/30 bg-emerald-950/90 shadow-[0_20px_60px_rgba(16,185,129,0.15)]",
    iconClassName: "bg-emerald-500/15 text-emerald-300",
    progressClassName: "bg-emerald-400",
  },

  error: {
    icon: AlertCircle,
    buttonClassName:
      "border-red-400/30 bg-red-500/10 text-red-300 hover:bg-red-500 hover:text-white",
    alertClassName:
      "border-red-400/30 bg-red-950/90 shadow-[0_20px_60px_rgba(239,68,68,0.15)]",
    iconClassName: "bg-red-500/15 text-red-300",
    progressClassName: "bg-red-400",
  },

  warning: {
    icon: AlertTriangle,
    buttonClassName:
      "border-amber-400/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500 hover:text-black",
    alertClassName:
      "border-amber-400/30 bg-amber-950/90 shadow-[0_20px_60px_rgba(245,158,11,0.15)]",
    iconClassName: "bg-amber-500/15 text-amber-300",
    progressClassName: "bg-amber-400",
  },

  info: {
    icon: Info,
    buttonClassName:
      "border-cyan-400/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-black",
    alertClassName:
      "border-cyan-400/30 bg-cyan-950/90 shadow-[0_20px_60px_rgba(6,182,212,0.15)]",
    iconClassName: "bg-cyan-500/15 text-cyan-300",
    progressClassName: "bg-cyan-400",
  },
};

type AlertProps = {
  alert: AlertItem;
  onClose: (id: number) => void;
  duration?: number;
};

function Alert({ alert, onClose, duration = 5000 }: AlertProps) {
  const style = alertStyles[alert.type];
  const Icon = style.icon;

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      onClose(alert.id);
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [alert.id, duration, onClose]);

  return (
    <article
      role="alert"
      className={`relative overflow-hidden rounded-2xl border p-4 backdrop-blur-xl transition-all duration-300 ${style.alertClassName}`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${style.iconClassName}`}
        >
          <Icon className="size-5" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-ogilvy-regular text-base text-white">
            {alert.title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-white/60">
            {alert.message}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onClose(alert.id)}
          aria-label="Close alert"
          className="flex size-8 shrink-0 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-black/20">
        <div
          className={`h-full origin-left animate-alert-progress ${style.progressClassName}`}
          style={{
            animationDuration: `${duration}ms`,
          }}
        />
      </div>
    </article>
  );
}

type AlertButtonProps = {
  type: AlertType;
  label: string;
  onClick: () => void;
};

function AlertButton({ type, label, onClick }: AlertButtonProps) {
  const style = alertStyles[type];
  const Icon = style.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition duration-300 active:scale-95 ${style.buttonClassName}`}
    >
      <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />

      {label}
    </button>
  );
}

const alertContent: Record<AlertType, Pick<AlertItem, "title" | "message">> = {
  success: {
    title: "Changes saved successfully",
    message: "Your latest changes have been saved and published.",
  },

  error: {
    title: "Something went wrong",
    message: "We could not complete your request. Please try again.",
  },

  warning: {
    title: "Action required",
    message: "Please review the information before continuing.",
  },

  info: {
    title: "New update available",
    message: "A newer version of this component is ready to use.",
  },
};

export default function AlertButtonsDemo() {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  const addAlert = (type: AlertType) => {
    const content = alertContent[type];

    const newAlert: AlertItem = {
      id: Date.now() + Math.random(),
      type,
      title: content.title,
      message: content.message,
    };

    setAlerts((currentAlerts) => [newAlert, ...currentAlerts]);
  };

  const removeAlert = (id: number) => {
    setAlerts((currentAlerts) =>
      currentAlerts.filter((alert) => alert.id !== id),
    );
  };

  const clearAlerts = () => {
    setAlerts([]);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070709] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <section className="relative mx-auto max-w-5xl">
        <header className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
            <Sparkles className="size-3.5" />
            Interactive UI Component
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                Component 09
              </p>

              <h1 className="font-ogilvy-regular mt-2 text-4xl tracking-tight sm:text-5xl">
                Alert Buttons
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
                Trigger animated success, error, warning and information
                notifications.
              </p>
            </div>

            {alerts.length > 0 && (
              <button
                type="button"
                onClick={clearAlerts}
                className="self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                Clear all
              </button>
            )}
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Plus className="size-5" />
              </div>

              <div>
                <h2 className="font-ogilvy-regular text-xl">Create an alert</h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Select an alert type to display a notification.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <AlertButton
                type="success"
                label="Success alert"
                onClick={() => addAlert("success")}
              />

              <AlertButton
                type="error"
                label="Error alert"
                onClick={() => addAlert("error")}
              />

              <AlertButton
                type="warning"
                label="Warning alert"
                onClick={() => addAlert("warning")}
              />

              <AlertButton
                type="info"
                label="Information alert"
                onClick={() => addAlert("info")}
              />
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Current alerts
              </p>

              <p className="mt-2 text-3xl font-semibold">
                {alerts.length.toString().padStart(2, "0")}
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Alerts disappear automatically after five seconds.
              </p>
            </div>
          </div>

          <div className="min-h-[410px] rounded-3xl border border-white/10 bg-black/20 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-ogilvy-regular text-lg">Alert preview</h2>

                <p className="mt-1 text-xs text-zinc-500">
                  Latest notification appears first.
                </p>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                Live
              </span>
            </div>

            <div className="space-y-3">
              {alerts.length > 0 ? (
                alerts.map((alert) => (
                  <Alert key={alert.id} alert={alert} onClose={removeAlert} />
                ))
              ) : (
                <div className="flex min-h-[290px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white/5 text-zinc-500">
                    <AlertCircle className="size-6" />
                  </div>

                  <h3 className="font-ogilvy-regular mt-4 text-lg text-zinc-300">
                    No active alerts
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">
                    Click one of the alert buttons to display a notification.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
