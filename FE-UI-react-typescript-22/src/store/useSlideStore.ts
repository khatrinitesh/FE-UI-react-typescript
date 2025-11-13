import { create } from "zustand";
import { SLIDES } from "../constants/constants";
import type { SlideState } from "../interface";

export const useSlideStore = create<SlideState>((set, get) => ({
  index: 0,

  nextSlide: () => {
    const current = get().index;
    set({ index: (current + 1) % SLIDES.length });
  },

  prevSlide: () => {
    const current = get().index;
    set({ index: (current - 1 + SLIDES.length) % SLIDES.length });
  },
}));
