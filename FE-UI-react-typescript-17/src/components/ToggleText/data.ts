// src/constants/textConstants.ts
export const TEXT_VALUES = {
  HELLO: "world",
  HAPPY: "happy",
} as const;

export type TextValue = (typeof TEXT_VALUES)[keyof typeof TEXT_VALUES];
