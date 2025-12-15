import { create } from "zustand";
import type { IconItem } from "../interface/auth";
import { ICONS } from "../constants/constants";

interface IconState {
  icons: IconItem[];
  addIcon: (icon: IconItem) => void;
}

export const useIconStore = create<IconState>((set) => ({
  icons: ICONS,
  addIcon: (icon) => set((state) => ({ icons: [...state.icons, icon] })),
}));
