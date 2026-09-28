import type { ReactNode } from "react";

interface CalloutProps {
  title?: string;
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  className?: string;
}

const Callout = ({ title, children, variant = "info", className = "" }: CalloutProps) => {
  const styles = {
    info: "border-blue-200 bg-blue-50 text-blue-900",
    success: "border-green-200 bg-green-50 text-green-900",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-900",
    error: "border-red-200 bg-red-50 text-red-900",
  };

  return (
    <div className={`callout rounded-lg border p-4 ${styles[variant]} ${className}`}>
      {title && <h3 className="callout__title mb-1 text-sm font-semibold">{title}</h3>}
      <div className="callout__content text-sm">{children}</div>
    </div>
  );
};

export default Callout;