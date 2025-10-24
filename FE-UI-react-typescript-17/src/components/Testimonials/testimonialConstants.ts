// src/constants/testimonialConstants.ts
export const TESTIMONIAL_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

export type TestimonialStatus =
  (typeof TESTIMONIAL_STATUS)[keyof typeof TESTIMONIAL_STATUS];
