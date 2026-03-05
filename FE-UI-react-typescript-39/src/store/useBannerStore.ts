import { create } from "zustand";

interface BannerState {
  currentIndex: number;
  next: (length: number) => void;
  prev: (length: number) => void;
}

export const useBannerStore = create<BannerState>((set) => ({
  currentIndex: 0,
  next: (length) =>
    set((state) => ({ currentIndex: (state.currentIndex + 1) % length })),
  prev: (length) =>
    set((state) => ({
      currentIndex: (state.currentIndex - 1 + length) % length,
    })),
}));
