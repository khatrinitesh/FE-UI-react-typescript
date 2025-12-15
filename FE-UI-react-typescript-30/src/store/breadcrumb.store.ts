import { create } from "zustand";

interface BreadcrumbState {
  currentPath: string;
  setCurrentPath: (path: string) => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  currentPath: "/",
  setCurrentPath: (path) => set({ currentPath: path }),
}));
