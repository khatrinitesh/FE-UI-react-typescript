import type { AccordionItem, Card3DConfig } from "../interface";

export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: "setup",
    title: "Why use Zustand for accordion state?",
    content:
      "It keeps open/close logic centralized and predictable, while components stay focused on rendering.",
  },
  {
    id: "motion",
    title: "How does the smooth transition work?",
    content:
      "Framer Motion animates both the panel height/opacity and the plus-minus icon rotation for a polished feel.",
  },
  {
    id: "typescript",
    title: "What is typed here with TypeScript?",
    content:
      "The item model, constants, and store contract are strongly typed so the UI scales safely as features grow.",
  },
];

export const UI_COPY = {
  eyebrow: "React + TypeScript + Zustand + Framer Motion",
  title: "Smooth Accordion UI",
};

export const PANEL_TRANSITION = {
  duration: 0.32,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const ICON_TRANSITION = {
  duration: 0.24,
};

export const CARD_3D_CONFIG: Card3DConfig = {
  maxTiltDeg: 10,
  hoverScale: 1.02,
  perspective: 1300,
  shadowOffset: 18,
  shadowBlur: 32,
  shadowColor: "rgba(57, 71, 136, 0.2)",
  spring: {
    stiffness: 220,
    damping: 22,
    mass: 0.75,
  },
  glare: {
    startXPercent: 50,
    startYPercent: 18,
    opacity: 0.78,
    fadeStopPercent: 56,
  },
};

export const CARD_CONFIG = {
  ROTATION_RANGE: 15,
  PERSPECTIVE: 1000,
  SCALE: 1.05,
};

export const SPRING_CONFIG = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

export const ALERT_CONFIG = {
  AUTO_CLOSE_DELAY: 4000,
  POSITION: "top-right",
};

export const ALERT_ANIMATION = {
  initial: { opacity: 0, y: -20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 },
  transition: { duration: 0.25 },
};

export const ICON_CONFIG = {
  SIZE: 24,
  STROKE_WIDTH: 2,
};

export const ICON_ANIMATION = {
  duration: 0.25,
  ease: "easeInOut",
};

export const BUTTON_CONFIG = {
  HEIGHT: 48,
  BORDER_RADIUS: 12,
};

export const BUTTON_ANIMATION = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const SEARCH_CONFIG = {
  WIDTH_COLLAPSED: 40,
  WIDTH_EXPANDED: 300,
  HEIGHT: 40,
  BORDER_RADIUS: 20,
};

export const SEARCH_ANIMATION = {
  transition: { type: "spring", stiffness: 300, damping: 25 },
};

export const ARROW_CONFIG = {
  SIZE: 20, // size of the arrow
  STROKE_WIDTH: 2, // thickness
  ROTATION_DEG: 90, // rotation on toggle
};

export const ARROW_ANIMATION = {
  duration: 0.25,
  ease: "easeInOut",
};
