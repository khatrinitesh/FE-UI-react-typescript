import { create } from "zustand";
import { BACKGROUND_IMAGES } from "../constants/constants";

interface BackgroundState {
  activeId: number;
  setActive: (id: number) => void;
}

export const useBackgroundStore = create<BackgroundState>((set) => ({
  activeId: BACKGROUND_IMAGES[0].id,

  setActive: (id) => set({ activeId: id }),
}));
