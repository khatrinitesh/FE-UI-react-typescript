import { create } from "zustand";
import type { CalloutState } from "../../interface";

export const useCalloutStore = create<CalloutState>((set) => ({
  isOpen: false,
  message: "",
  type: "INFO",
  show: (message, type) => set({ isOpen: true, message, type }),
  hide: () => set({ isOpen: false }),
}));
