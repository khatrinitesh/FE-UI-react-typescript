import { create } from "zustand";
import type { FocusState } from "../../interface";

export const useFocusStore = create<FocusState>((set) => ({
  activeElement: null,
  setActiveElement: (element) => set({ activeElement: element }),
}));
