// src/constants/passwordConstants.ts
export const PASSWORD_VISIBILITY = {
  SHOW: "SHOW",
  HIDE: "HIDE",
} as const;

export type PasswordVisibility =
  (typeof PASSWORD_VISIBILITY)[keyof typeof PASSWORD_VISIBILITY];
