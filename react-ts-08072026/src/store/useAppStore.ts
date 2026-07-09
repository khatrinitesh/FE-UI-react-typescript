import { create } from "zustand"

type AppStore = {
  count: number
  isSidebarOpen: boolean

  increase: () => void
  decrease: () => void
  resetCount: () => void

  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  count: 0,
  isSidebarOpen: false,

  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrease: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  resetCount: () =>
    set({
      count: 0,
    }),

  openSidebar: () =>
    set({
      isSidebarOpen: true,
    }),

  closeSidebar: () =>
    set({
      isSidebarOpen: false,
    }),

  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),
}))