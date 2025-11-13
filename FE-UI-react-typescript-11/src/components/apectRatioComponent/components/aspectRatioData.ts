export const ASPECT_RATIOS = {
  SQUARE: "1 / 1",
  WIDESCREEN: "16 / 9",
  STANDARD: "4 / 3",
  PORTRAIT: "3 / 4",
  ULTRAWIDE: "21 / 9",
} as const;

export type AspectRatio = keyof typeof ASPECT_RATIOS;
