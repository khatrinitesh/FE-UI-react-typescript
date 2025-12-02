import type { Transition } from "framer-motion";
import { PATHS } from "../routes/path";
import type { AccordionItem, AlertType, IconType } from "../interface";

export const navLinks = [
  { label: "Home", path: PATHS.HOME },
  { label: "Products", path: PATHS.PRODUCTS },
  { label: "Contact", path: PATHS.CONTACT },
  { label: "About", path: PATHS.ABOUT },
];

export const TILT_CONFIG = {
  rotateX: 12,
  rotateY: 12,
  transition: { type: "spring", stiffness: 150, damping: 20 },
};

export const PIN_CONFIG: {
  transition: Transition;
  hoverLift: number;
  rotate: number;
} = {
  hoverLift: 25,
  rotate: 6,
  transition: {
    type: "spring",
    stiffness: 180,
    damping: 20,
  },
};

export const ACCORDION_ITEM: AccordionItem[] = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    title: "What is Zustand?",
    content: "Zustand is a small, fast state-management library.",
  },
  {
    id: 3,
    title: "What is Framer Motion?",
    content: "Framer Motion is a motion library for React animations.",
  },
];

export const ACCORDION_CONFIG = {
  transition: {
    type: "spring" as const,
    stiffness: 150,
    damping: 20,
  },
};

export const ALERT_CONFIG = {
  autoHideTime: 3000, // 3 seconds
  colors: {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  } as Record<AlertType, string>,

  icons: {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  } as Record<AlertType, string>,
};

export const ICON_CONFIG = {
  defaultSize: 32,
  defaultColor: "#333",

  animations: {
    heart: {
      scale: [1, 1.3, 1],
      transition: { repeat: Infinity, duration: 1.2 },
    },

    star: {
      rotate: [0, 360],
      transition: { repeat: Infinity, duration: 2, ease: "linear" },
    },

    check: {
      scale: [0.8, 1],
      opacity: [0.4, 1],
      transition: { repeat: Infinity, duration: 1 },
    },

    alert: {
      y: [0, -5, 0],
      transition: { repeat: Infinity, duration: 0.8 },
    },
  } as Record<IconType, any>,
};
