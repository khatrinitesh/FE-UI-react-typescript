import { AnimatePresence, motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { cn } from "../../utils/cn";

export interface PreloaderProps {
  show?: boolean;
  overlay?: boolean;
  label?: string;
  className?: string;
  spinnerClassName?: string;
}

export function Preloader({
  show = true,
  overlay = true,
  label = "Loading...",
  className,
  spinnerClassName,
}: PreloaderProps) {
  return (
    <AnimatePresence>
      {show &&
        (overlay ? (
          <motion.div
            key="preloader-overlay"
            role="status"
            aria-live="polite"
            aria-label={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed inset-0 z-[9999] grid place-items-center",
              "bg-slate-950/50 backdrop-blur-sm",
              className,
            )}
          >
            <LoaderCircle
              aria-hidden="true"
              className={cn(
                "size-10 animate-spin text-white",
                spinnerClassName,
              )}
            />
          </motion.div>
        ) : (
          <motion.span
            key="preloader-spinner"
            role="status"
            aria-live="polite"
            aria-label={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("inline-flex items-center justify-center", className)}
          >
            <LoaderCircle
              aria-hidden="true"
              className={cn(
                "size-6 animate-spin text-blue-600",
                spinnerClassName,
              )}
            />
          </motion.span>
        ))}
    </AnimatePresence>
  );
}
