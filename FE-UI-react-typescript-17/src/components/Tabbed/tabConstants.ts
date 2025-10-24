// src/constants/tabConstants.ts
export const TAB_KEYS = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  CONTACT: "CONTACT",
} as const;

export type TabKey = (typeof TAB_KEYS)[keyof typeof TAB_KEYS];
