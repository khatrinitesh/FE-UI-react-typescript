// src/constants/toggleConstants.ts
export const TOGGLE_STATES = {
  ON: "ON",
  OFF: "OFF",
} as const;

export type ToggleState = (typeof TOGGLE_STATES)[keyof typeof TOGGLE_STATES];
