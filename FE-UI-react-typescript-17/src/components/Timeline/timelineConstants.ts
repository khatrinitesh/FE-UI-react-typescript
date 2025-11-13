// src/constants/timelineConstants.ts
export const EVENT_STATUS = {
  UPCOMING: "UPCOMING",
  COMPLETED: "COMPLETED",
} as const;

export type EventStatus = (typeof EVENT_STATUS)[keyof typeof EVENT_STATUS];
