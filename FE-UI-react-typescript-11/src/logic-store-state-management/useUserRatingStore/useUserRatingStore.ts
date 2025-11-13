import { create } from "zustand";
import type { UserRatingState } from "../../interface";

export const useUserRatingStore = create<UserRatingState>((set) => ({
  ratings: {},
  setRating: (userId, rating, comment) =>
    set((state) => ({
      ratings: {
        ...state.ratings,
        [userId]: { userId, rating, comment },
      },
    })),
  clearRating: (userId) =>
    set((state) => {
      const newRatings = { ...state.ratings };
      delete newRatings[userId];
      return { ratings: newRatings };
    }),
}));
