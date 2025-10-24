// src/store/useTabStore.ts
import { create } from "zustand";
import { TAB_KEYS, type TabKey } from "../components/Tabbed/tabConstants";

interface TabStore {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: TAB_KEYS.HOME,
  setActiveTab: (tab: TabKey) => set({ activeTab: tab }),
}));
