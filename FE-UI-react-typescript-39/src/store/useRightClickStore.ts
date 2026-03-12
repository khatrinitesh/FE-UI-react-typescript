import { create } from "zustand";
import type { RightClickState } from "../interface";

export const useRightClickStore = create<RightClickState>((set) => ({
  disabled: true,
  toggleDisable: () => set((state) => ({ disabled: !state.disabled })),
}));
