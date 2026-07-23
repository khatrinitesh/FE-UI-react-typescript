import { motion } from "motion/react";
import { cn } from "../../utils/cn";


interface LoaderProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
  fullScreen?: boolean;
}

const sizeClasses = {
  sm: "size-4 border-2",
  md: "size-8 border-[3px]",
  lg: "size-12 border-4",
};

export function Loader({
  size = "md",
  label,
  className,
  fullScreen = false,
}: LoaderProps) {
  const loader = (
    <div
      className={cn(
        "flex items-center justify-center gap-3",
        fullScreen && "min-h-screen",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className={cn(
          "rounded-full border-blue-600 border-t-transparent",
          sizeClasses[size],
        )}
      />

      {label && (
        <span className="text-sm text-slate-600">{label}</span>
      )}

      <span className="sr-only">Loading</span>
    </div>
  );

  return loader;
}