import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface AppStore {
  theme: Theme
  selectedProductId: number | null
  isMenuOpen: boolean
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  setSelectedProductId: (id: number | null) => void
  toggleMenu: () => void
  closeMenu: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  theme: 'light',
  selectedProductId: null,
  isMenuOpen: false,
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setSelectedProductId: (id) => set({ selectedProductId: id }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}))
