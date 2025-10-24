// src/constants/textRotatorConstants.ts
export const ROTATOR_STATUS = {
  PLAYING: "PLAYING",
  PAUSED: "PAUSED",
} as const;

export type RotatorStatus =
  (typeof ROTATOR_STATUS)[keyof typeof ROTATOR_STATUS];
