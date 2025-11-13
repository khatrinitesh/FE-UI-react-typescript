// src/constants/tickerConstants.ts
export const TICKER_STATUS = {
  PLAYING: "PLAYING",
  PAUSED: "PAUSED",
} as const;

export type TickerStatus = (typeof TICKER_STATUS)[keyof typeof TICKER_STATUS];
