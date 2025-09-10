export const ARROW_DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
  UP: "up",
  DOWN: "down",
} as const;

export type ArrowDirection = keyof typeof ARROW_DIRECTIONS;
