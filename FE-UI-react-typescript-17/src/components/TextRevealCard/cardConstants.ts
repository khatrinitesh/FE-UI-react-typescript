// src/constants/cardConstants.ts
export const CARD_STATUS = {
  REVEALED: "REVEALED",
  HIDDEN: "HIDDEN",
} as const;

export type CardStatus = (typeof CARD_STATUS)[keyof typeof CARD_STATUS];
