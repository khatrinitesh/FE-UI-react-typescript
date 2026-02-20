import { create } from "zustand";

interface ButtonState {
  loadingId: string | null;
  setLoading: (id: string | null) => void;
}

export const useButtonStore = create<ButtonState>((set) => ({
  loadingId: null,
  setLoading: (id) => set({ loadingId: id }),
}));
