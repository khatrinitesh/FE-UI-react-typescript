import { create } from "zustand";

interface RightClickState {
  showMessage: boolean;
  setShowMessage: (value: boolean) => void;
}

export const useRightClickStore = create<RightClickState>((set) => ({
  showMessage: false,
  setShowMessage: (value) => set({ showMessage: value }),
}));
