import { create } from "zustand";
import type { CarouselState } from "../interface/auth";
import { ITEMS } from "../constants/constants";

export const useCarouselStore = create<CarouselState>((set, get) => ({
  currentIndex: 0,
  items: ITEMS,
  next: () => {
    const { currentIndex, items } = get();
    set({ currentIndex: (currentIndex + 1) % items.length });
  },
  prev: () => {
    const { currentIndex, items } = get();
    set({ currentIndex: (currentIndex - 1 + items.length) % items.length });
  },
}));
