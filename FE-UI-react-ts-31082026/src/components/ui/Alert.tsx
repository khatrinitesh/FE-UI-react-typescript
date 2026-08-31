import type { ReactNode } from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

type AlertProps = {
  title: string;
  children: ReactNode;
  variant?: AlertVariant;
  onClose?: () => void;
};

const alertClasses = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

const alertIcons = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "×",
};

function Alert({ children, onClose, title, variant = "info" }: AlertProps) {
  return (
    <div className={alertClasses[variant]} role={variant === "error" ? "alert" : "status"}>
      <span className="alert-icon" aria-hidden="true">
        {alertIcons[variant]}
      </span>
      <div className="alert-copy">
        <p className="alert-title">{title}</p>
        <div className="alert-message">{children}</div>
      </div>
      {onClose && (
        <button className="alert-close" type="button" aria-label={`Dismiss ${title}`} onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
}

export default Alert;
