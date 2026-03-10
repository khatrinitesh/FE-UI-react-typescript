import { create } from "zustand";
import type { SidePanelState } from "../interface";

export const useSidePanelStore = create<SidePanelState>((set) => ({
  open: false,

  togglePanel: () => set((state) => ({ open: !state.open })),

  closePanel: () => set({ open: false }),
}));
