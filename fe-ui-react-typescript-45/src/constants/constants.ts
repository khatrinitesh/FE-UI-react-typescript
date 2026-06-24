import type { INavItem } from "../interfaces";

export const SITE_CONFIG = {
  appName: "Neon UI",
  tagline:
    "Modern React TypeScript UI with Zustand, Router, Motion and TailwindCSS",
  description:
    "A clean starter template with animated pages, global state management, and type-safe routing.",
};

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;
export type TPath = (typeof PATHS)[keyof typeof PATHS];

export const NAV_ITEMS: INavItem[] = [
  {
    label: "Home",
    path: PATHS.HOME,
  },
  {
    label: "About",
    path: PATHS.ABOUT,
  },
  {
    label: "Contact",
    path: PATHS.CONTACT,
  },
];
