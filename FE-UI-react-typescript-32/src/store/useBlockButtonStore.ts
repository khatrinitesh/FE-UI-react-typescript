import { create } from "zustand";
import type { BlockButtonItem } from "../interface";
import { BLOCK_BUTTONS } from "../constants/constants";

interface BlockButtonState {
  buttons: BlockButtonItem[];
  activeId: number | null;
  setActive: (id: number) => void;
}

export const useBlockButtonStore = create<BlockButtonState>((set) => ({
  buttons: BLOCK_BUTTONS,
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
