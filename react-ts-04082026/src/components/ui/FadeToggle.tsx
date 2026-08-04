import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "../../utils/cn";

export interface FadeToggleProps {
  show: boolean;
  children: ReactNode;
  className?: string;
  duration?: number;
  collapse?: boolean;
  animateOnMount?: boolean;
  onExitComplete?: () => void;
}

export function FadeToggle({
  show,
  children,
  className,
  duration = 0.3,
  collapse = true,
  animateOnMount = true,
  onExitComplete,
}: FadeToggleProps) {
  return (
    <AnimatePresence initial={animateOnMount} onExitComplete={onExitComplete}>
      {show && (
        <motion.div
          key="fade-toggle-content"
          initial={{
            opacity: 0,
            height: collapse ? 0 : "auto",
            y: -8,
          }}
          animate={{
            opacity: 1,
            height: "auto",
            y: 0,
          }}
          exit={{
            opacity: 0,
            height: collapse ? 0 : "auto",
            y: -8,
          }}
          transition={{
            duration,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(collapse && "overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
