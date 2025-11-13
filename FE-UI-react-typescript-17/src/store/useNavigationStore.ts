// src/store/useNavigationStore.ts
import { create } from "zustand";
import type {
  MainMenuKey,
  SubMenuKey,
} from "../components/SubnavigationMenu/navigationConstants";

interface NavigationStore {
  activeMain: MainMenuKey;
  activeSub: SubMenuKey | null;
  setActiveMain: (key: MainMenuKey) => void;
  setActiveSub: (key: SubMenuKey) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  activeMain: "DASHBOARD",
  activeSub: null,
  setActiveMain: (key) => set({ activeMain: key, activeSub: null }),
  setActiveSub: (key) => set({ activeSub: key }),
}));
