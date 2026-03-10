import { create } from "zustand";
import type { CoverState } from "../interface";

export const useCoverStore = create<CoverState>((set) => ({
  open: false,

  toggleCover: () =>
    set((state) => ({
      open: !state.open,
    })),
}));
