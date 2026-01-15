import { create } from "zustand";
import { BENTO_ITEMS } from "../constants/constants";

interface BentoState {
  items: BentoItem[];
  activeId: number | null;
  setActive: (id: number | null) => void;
}

export const useBentoStore = create<BentoState>((set) => ({
  items: BENTO_ITEMS,
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
