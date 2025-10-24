// src/constants/themeConstants.ts
export const THEME_CLASSES = {
  LIGHT: "theme-light",
  DARK: "theme-dark",
} as const;

export type ThemeClass = (typeof THEME_CLASSES)[keyof typeof THEME_CLASSES];
