export const RATING_SCORES = [1, 2, 3, 4, 5] as const;
export type RatingScore = (typeof RATING_SCORES)[number];
