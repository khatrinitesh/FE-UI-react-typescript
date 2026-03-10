import { create } from "zustand";
import type { SidebarState } from "../interface";

export const useSidebarStore = create<SidebarState>((set) => ({
  collapsed: false,

  toggleSidebar: () => set((state) => ({ collapsed: !state.collapsed })),
}));
