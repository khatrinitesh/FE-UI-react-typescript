import { create } from "zustand";

interface BannerState {
  open: boolean;
  message: string;
  show: (msg: string) => void;
  hide: () => void;
}

export const useBannerStore = create<BannerState>((set) => ({
  open: false,
  message: "",
  show: (msg) => set({ open: true, message: msg }),
  hide: () => set({ open: false }),
}));
