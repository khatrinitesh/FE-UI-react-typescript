import { create } from "zustand";

interface AppState {
  isSidebarOpen: boolean;
  selectedPostId: number | null;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setSelectedPostId: (postId: number | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isSidebarOpen: false,
  selectedPostId: null,

  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),

  setSidebarOpen: (isOpen) => {
    set({ isSidebarOpen: isOpen });
  },

  setSelectedPostId: (postId) => {
    set({ selectedPostId: postId });
  },
}));