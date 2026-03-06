import { create } from "zustand";

interface ImageButtonState {
  hovered: boolean;
  setHovered: (value: boolean) => void;
}

export const useImageButtonStore = create<ImageButtonState>((set) => ({
  hovered: false,
  setHovered: (value) => set({ hovered: value }),
}));
