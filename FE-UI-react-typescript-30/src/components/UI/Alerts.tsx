import { useEffect } from "react";
import { useAlertStore } from "../../store/alert.store";
import clsx from "clsx";

const ALERT_COLORS: Record<string, string> = {
  success: "bg-green-100 border-green-500 text-green-800",
  error: "bg-red-100 border-red-500 text-red-800",
  info: "bg-blue-100 border-blue-500 text-blue-800",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
};

const Alerts = () => {
  const { alerts, removeAlert } = useAlertStore();

  useEffect(() => {
    alerts.forEach((alert) => {
      if (alert.duration) {
        const timer = setTimeout(() => removeAlert(alert.id), alert.duration);
        return () => clearTimeout(timer);
      }
    });
  }, [alerts, removeAlert]);
  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={clsx(
            "border-l-4 p-4 rounded shadow-md flex justify-between items-center min-w-[250px]",
            ALERT_COLORS[alert.type]
          )}
        >
          <span>{alert.message}</span>
          <button
            onClick={() => removeAlert(alert.id)}
            className="ml-4 font-bold text-xl leading-none"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
