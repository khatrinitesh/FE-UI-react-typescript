import { create } from "zustand";

interface CalloutState {
  visible: boolean;
  show: () => void;
  hide: () => void;
}

export const useCalloutStore = create<CalloutState>((set) => ({
  visible: true,
  show: () => set({ visible: true }),
  hide: () => set({ visible: false }),
}));
