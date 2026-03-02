import type { Variants } from "framer-motion";
import { PATH } from "../router/path";
import type { CardItem, NavItem } from "../interface";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export const TOP_NAVIGATION: NavItem[] = [
  { name: "Home", path: PATH.HOME },
  { name: "About", path: PATH.ABOUT },
  { name: "Products", path: PATH.PRODUCTS },
  { name: "Contact", path: PATH.CONTACT },
];

export const CARD_DATA: CardItem[] = [
  {
    id: 1,
    title: "Modern Design",
    description: "Smooth 3D animated card effect with motion.",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: "Creative UI",
    description: "Built using Framer Motion + TailwindCSS.",
    image: "https://picsum.photos/400/300?random=2",
  },
];

export const ANIMATION_DURATION = 0.3;

export const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
  },
  expanded: {
    height: "auto",
    opacity: 1,
  },
};

export const iconVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

export const ALERT_VARIANTS = {
  success: "bg-green-50 border-green-500 text-green-800",
  error: "bg-red-50 border-red-500 text-red-800",
  warning: "bg-yellow-50 border-yellow-500 text-yellow-800",
  info: "bg-blue-50 border-blue-500 text-blue-800",
} as const;

export const BUTTON_VARIANTS = {
  success: "bg-green-600 hover:bg-green-700 text-white",
  error: "bg-red-600 hover:bg-red-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  info: "bg-blue-600 hover:bg-blue-700 text-white",
} as const;

export const alertMotion = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

export const ICON_SIZE = 24; // default icon size in px
export const ICON_COLOR = "text-gray-800";

export const iconVariants2: Variants = {
  idle: { rotate: 0, scale: 1, opacity: 1 },
  hover: { rotate: 20, scale: 1.2, opacity: 1 },
  tap: { scale: 0.9, rotate: -10 },
};

export type IconAnimationState = "idle" | "hover" | "tap";
