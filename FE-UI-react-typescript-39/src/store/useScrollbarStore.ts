import { create } from "zustand";

interface ScrollState {
  scrollProgress: number;
  setScrollProgress: (value: number) => void;
}

export const useScrollbarStore = create<ScrollState>((set) => ({
  scrollProgress: 0,

  setScrollProgress: (value) =>
    set({
      scrollProgress: value,
    }),
}));
