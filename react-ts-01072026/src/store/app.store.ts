import { create } from "zustand"

interface AppStore {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

export const useAppStore = create<AppStore>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
}))