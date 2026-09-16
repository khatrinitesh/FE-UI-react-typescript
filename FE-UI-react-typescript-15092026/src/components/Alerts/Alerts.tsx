import { useState } from "react";
import {
  CheckCircle,
  Info,
  AlertTriangle,
  XCircle,
  Bell,
  ShieldCheck,
  Clock,
  CircleHelp,
  Zap,
  X,
} from "lucide-react";

import "./Alerts.css";

type AlertType =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "notification"
  | "security"
  | "pending"
  | "help"
  | "update";

interface AlertItem {
  id: number;
  type: AlertType;
  title: string;
  message: string;
}

const alertData: AlertItem[] = [
  {
    id: 1,
    type: "success",
    title: "Success",
    message: "Your profile has been updated successfully.",
  },
  {
    id: 2,
    type: "info",
    title: "Information",
    message: "Your account information is up to date.",
  },
  {
    id: 3,
    type: "warning",
    title: "Warning",
    message: "Please check your information before continuing.",
  },
  {
    id: 4,
    type: "error",
    title: "Error",
    message: "Something went wrong. Please try again.",
  },
  {
    id: 5,
    type: "notification",
    title: "Notification",
    message: "You have received a new notification.",
  },
  {
    id: 6,
    type: "security",
    title: "Security",
    message: "A new device has logged into your account.",
  },
  {
    id: 7,
    type: "pending",
    title: "Pending",
    message: "Your request is currently being processed.",
  },
  {
    id: 8,
    type: "help",
    title: "Help",
    message: "Need help? Please contact our support team.",
  },
  {
    id: 9,
    type: "update",
    title: "Update",
    message: "A new application update is available.",
  },
];

const alertConfig = {
  success: {
    icon: CheckCircle,
    className: "alert-success",
  },

  info: {
    icon: Info,
    className: "alert-info",
  },

  warning: {
    icon: AlertTriangle,
    className: "alert-warning",
  },

  error: {
    icon: XCircle,
    className: "alert-error",
  },

  notification: {
    icon: Bell,
    className: "alert-notification",
  },

  security: {
    icon: ShieldCheck,
    className: "alert-security",
  },

  pending: {
    icon: Clock,
    className: "alert-pending",
  },

  help: {
    icon: CircleHelp,
    className: "alert-help",
  },

  update: {
    icon: Zap,
    className: "alert-update",
  },
};

const Alerts = () => {
  const [activeAlert, setActiveAlert] = useState<AlertItem | null>(null);

  const handleAlert = (alert: AlertItem) => {
    setActiveAlert(alert);
  };

  const closeAlert = () => {
    setActiveAlert(null);
  };

  return (
    <section className="alerts-section">
      {/* Heading */}

      <div className="alerts-heading">
        <span className="alerts-subtitle">COMPONENT</span>

        <h1>Alert Buttons</h1>

        <p>Click any button to display a different alert.</p>
      </div>

      {/* Alert Buttons */}

      <div className="alerts-grid">
        {alertData.map((alert) => {
          const config = alertConfig[alert.type];

          const Icon = config.icon;

          return (
            <button
              key={alert.id}
              type="button"
              onClick={() => handleAlert(alert)}
              className={`alert-button ${config.className}`}
            >
              <Icon size={20} />

              <span>{alert.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Alert */}

      {activeAlert && (
        <div className="alert-wrapper">
          {(() => {
            const config = alertConfig[activeAlert.type];

            const Icon = config.icon;

            return (
              <div className={`alert-box ${config.className}`}>
                <div className="alert-icon">
                  <Icon size={24} />
                </div>

                <div className="alert-content">
                  <h3>{activeAlert.title}</h3>

                  <p>{activeAlert.message}</p>
                </div>

                <button
                  type="button"
                  className="alert-close"
                  onClick={closeAlert}
                  aria-label="Close alert"
                >
                  <X size={20} />
                </button>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
};

export default Alerts;
