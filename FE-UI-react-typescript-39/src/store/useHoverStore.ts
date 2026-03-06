import { create } from "zustand";

interface HoverState {
  isHovered: boolean;
  setHover: (value: boolean) => void;
}

export const useHoverStore = create<HoverState>((set) => ({
  isHovered: false,
  setHover: (value) => set({ isHovered: value }),
}));
