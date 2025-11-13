// src/constants/visibilityConstants.ts
export const VISIBILITY_STATES = {
  SHOW: "SHOW",
  HIDE: "HIDE",
} as const;

export type VisibilityState =
  (typeof VISIBILITY_STATES)[keyof typeof VISIBILITY_STATES];
