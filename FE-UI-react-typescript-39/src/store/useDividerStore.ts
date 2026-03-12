import { create } from "zustand";

interface DividerState {
  visible: boolean;
  toggleDivider: () => void;
}

export const useDividerStore = create<DividerState>((set) => ({
  visible: true,
  toggleDivider: () => set((state) => ({ visible: !state.visible })),
}));
