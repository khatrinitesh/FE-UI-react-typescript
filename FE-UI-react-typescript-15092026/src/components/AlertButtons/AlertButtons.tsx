import { useState } from "react";
import {
  CheckCircle,
  Info,
  AlertTriangle,
  XCircle,
  Bell,
  X,
} from "lucide-react";

type AlertType = "success" | "info" | "warning" | "error" | "notification";

interface AlertConfig {
  type: AlertType;
  title: string;
  message: string;
}

const alerts: AlertConfig[] = [
  {
    type: "success",
    title: "Success",
    message: "Your changes have been saved successfully.",
  },
  {
    type: "info",
    title: "Information",
    message: "This is an informational alert.",
  },
  {
    type: "warning",
    title: "Warning",
    message: "Please check your information before continuing.",
  },
  {
    type: "error",
    title: "Error",
    message: "Something went wrong. Please try again.",
  },
  {
    type: "notification",
    title: "Notification",
    message: "You have a new notification.",
  },
];

const alertStyles = {
  success: {
    icon: CheckCircle,
    className: "border-green-500 bg-green-50 text-green-700",
  },
  info: {
    icon: Info,
    className: "border-blue-500 bg-blue-50 text-blue-700",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-yellow-500 bg-yellow-50 text-yellow-700",
  },
  error: {
    icon: XCircle,
    className: "border-red-500 bg-red-50 text-red-700",
  },
  notification: {
    icon: Bell,
    className: "border-purple-500 bg-purple-50 text-purple-700",
  },
};

const AlertButtons = () => {
  const [activeAlert, setActiveAlert] = useState<AlertConfig | null>(null);

  const showAlert = (alert: AlertConfig) => {
    setActiveAlert(alert);
  };

  const closeAlert = () => {
    setActiveAlert(null);
  };

  const style = activeAlert ? alertStyles[activeAlert.type] : null;

  const Icon = style?.icon;

  return (
    <div className="relative min-h-screen bg-slate-100 p-8">
      {/* Buttons */}
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold">Alert Buttons</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {alerts.map((alert) => (
            <button
              key={alert.type}
              type="button"
              onClick={() => showAlert(alert)}
              className="rounded-lg bg-slate-900 px-5 py-3
                         font-medium text-white
                         transition hover:-translate-y-1
                         hover:bg-slate-700"
            >
              {alert.title}
            </button>
          ))}
        </div>
      </div>

      {/* Alert */}
      {activeAlert && Icon && (
        <div className="fixed right-6 top-6 z-50 w-[350px] max-w-[calc(100%-3rem)]">
          <div
            className={`flex items-start gap-3 rounded-xl border-l-4
              p-4 shadow-xl ${style?.className}`}
          >
            <Icon size={24} className="mt-0.5 shrink-0" />

            <div className="flex-1">
              <h2 className="font-bold">{activeAlert.title}</h2>

              <p className="mt-1 text-sm">{activeAlert.message}</p>
            </div>

            <button
              type="button"
              onClick={closeAlert}
              className="rounded-md p-1 transition hover:bg-black/10"
              aria-label="Close alert"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertButtons;
