import { create } from "zustand";
import type { ScrollState } from "../interface";

export const useScrollStore = create<ScrollState>((set) => ({
  active: null,

  setActive: (id) =>
    set({
      active: id,
    }),
}));
