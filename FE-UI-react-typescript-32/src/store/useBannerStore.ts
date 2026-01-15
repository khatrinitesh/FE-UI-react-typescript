// src/store/useBannerStore.ts
import { create } from "zustand";
import type { BannerItem } from "../interface";
import { BANNERS } from "../constants/constants";

interface BannerState {
  activeBanner: BannerItem;
  nextBanner: () => void;
}

export const useBannerStore = create<BannerState>((set, get) => ({
  activeBanner: BANNERS[0],
  nextBanner: () => {
    const currentIndex = BANNERS.findIndex(
      (b) => b.id === get().activeBanner.id
    );
    const nextIndex = (currentIndex + 1) % BANNERS.length;
    set({ activeBanner: BANNERS[nextIndex] });
  },
}));
