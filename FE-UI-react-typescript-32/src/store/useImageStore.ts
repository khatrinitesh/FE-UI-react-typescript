import { create } from "zustand";
import type { BWImage } from "../interface";
import { BW_IMAGES } from "../constants/constants";

interface ImageState {
  images: BWImage[];
  activeId: number | null;
  setActive: (id: number | null) => void;
}

export const useImageStore = create<ImageState>((set) => ({
  images: BW_IMAGES,
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
