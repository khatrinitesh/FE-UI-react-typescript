import { create } from "zustand";

interface RatingState {
  rating: number;
  setRating: (rating: number) => void;
}

export const useRatingStore = create<RatingState>((set) => ({
  rating: 0,
  setRating: (rating) => set({ rating }),
}));
