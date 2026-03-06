import { create } from "zustand";

interface ImageState {
  isHovered: boolean;
  setHover: (value: boolean) => void;
}

export const useImageStore = create<ImageState>((set) => ({
  isHovered: false,
  setHover: (value) => set({ isHovered: value }),
}));
