import {
    AnimatePresence,
    motion,
} from "framer-motion";

interface LoadingOverlayProps {
  visible: boolean;
  text?: string;
}

export function LoadingOverlay({
  visible,
  text = "Loading…",
}: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/50 text-white backdrop-blur-sm"
        >
          <span
            aria-hidden
            className="size-12 animate-spin rounded-full border-4 border-white/30 border-t-white"
          />

          <p>{text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}