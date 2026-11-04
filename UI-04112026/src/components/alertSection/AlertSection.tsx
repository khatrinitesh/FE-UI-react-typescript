import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import type { AlertProps } from "../../interfaces/alerts.interface";

export default function AlertSection() {
  return (
    <>
      <Alert
        variant="success"
        title="Success"
        message="Your data has been saved."
      />

      <Alert
        variant="error"
        title="Error"
        message="Unable to save your data."
      />
    </>
  );
}

const alertStyles = {
  success: {
    wrapper: "bg-green-50 border-green-200 text-green-800",
    icon: CheckCircle,
  },
  error: {
    wrapper: "bg-red-50 border-red-200 text-red-800",
    icon: AlertCircle,
  },
  warning: {
    wrapper: "bg-yellow-50 border-yellow-200 text-yellow-800",
    icon: AlertTriangle,
  },
  info: {
    wrapper: "bg-blue-50 border-blue-200 text-blue-800",
    icon: Info,
  },
};

function Alert({ variant = "info", title, message, onClose }: AlertProps) {
  const Icon = alertStyles[variant].icon;

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border p-4 ${alertStyles[variant].wrapper}`}
      role="alert"
    >
      <Icon size={22} />

      <div className="flex-1">
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm">{message}</p>
      </div>

      {onClose && (
        <button onClick={onClose} aria-label="Close alert">
          <X size={18} />
        </button>
      )}
    </div>
  );
}
