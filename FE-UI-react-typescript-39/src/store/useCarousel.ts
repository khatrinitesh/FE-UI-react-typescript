import { create } from "zustand";
import type { CarouselState } from "../interface";

export const useCarousel = create<CarouselState>((set) => ({
  currentIndex: 0,
  next: (length) =>
    set((state) => ({ currentIndex: (state.currentIndex + 1) % length })),
  prev: (length) =>
    set((state) => ({
      currentIndex: (state.currentIndex - 1 + length) % length,
    })),
}));
