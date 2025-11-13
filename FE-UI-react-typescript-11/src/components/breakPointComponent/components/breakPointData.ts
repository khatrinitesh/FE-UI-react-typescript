export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
} as const;

export type BreakpointName = keyof typeof BREAKPOINTS;
