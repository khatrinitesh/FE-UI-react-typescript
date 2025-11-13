// src/constants/likeConstants.ts
export const LIKE_STATES = {
  LIKE: "LIKE",
  DISLIKE: "DISLIKE",
  NONE: "NONE", // optional neutral state
} as const;

export type LikeState = (typeof LIKE_STATES)[keyof typeof LIKE_STATES];
