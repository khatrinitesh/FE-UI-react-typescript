export const AURORA_THEMES = {
  DEFAULT: "default",
  OCEAN: "ocean",
  PINK_PURPLE: "pinkPurple",
  DARK: "dark",
} as const;

export type AuroraTheme = keyof typeof AURORA_THEMES;
