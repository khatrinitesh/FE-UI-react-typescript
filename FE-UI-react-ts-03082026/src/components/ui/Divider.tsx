import type { ReactNode } from "react";

type DividerProps = {
  label?: ReactNode;
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "gradient";
};

export default function Divider({
  label,
  orientation = "horizontal",
  variant = "solid",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className="mx-4 h-full min-h-12 w-px bg-slate-300"
      />
    );
  }

  const lineStyle = {
    solid: "border-t border-slate-300",
    dashed: "border-t border-dashed border-slate-300",
    gradient:
      "h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent",
  }[variant];

  if (!label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={`my-6 w-full ${lineStyle}`}
      />
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className="my-6 flex items-center gap-4"
    >
      <div className={`flex-1 ${lineStyle}`} />

      <span className="shrink-0 text-sm font-medium text-slate-500">
        {label}
      </span>

      <div className={`flex-1 ${lineStyle}`} />
    </div>
  );
}
