// src/constants/thumbnailConstants.ts
export const THUMBNAIL_STATUS = {
  SELECTED: "SELECTED",
  UNSELECTED: "UNSELECTED",
} as const;

export type ThumbnailStatus =
  (typeof THUMBNAIL_STATUS)[keyof typeof THUMBNAIL_STATUS];
