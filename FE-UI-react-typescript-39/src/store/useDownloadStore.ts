import { create } from "zustand";
import type { DownloadState } from "../interface";

export const useDownloadStore = create<DownloadState>((set) => ({
  downloadingId: null,
  setDownloading: (id) => set({ downloadingId: id }),
}));
