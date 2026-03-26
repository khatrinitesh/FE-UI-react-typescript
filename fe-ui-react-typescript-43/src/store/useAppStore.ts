import { create } from "zustand";

interface AppState {
  loading: boolean;
  setLoading: (val: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  loading: false,
  setLoading: (val) => set({ loading: val }),
}));
