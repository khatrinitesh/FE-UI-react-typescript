import { create } from "zustand";
import type { AlertData } from "../interface";
import { ALERT_CONFIG } from "../constants/constants";

interface AlertState {
  alert: AlertData | null;
  showAlert: (data: AlertData) => void;
  hideAlert: () => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  alert: null,

  showAlert: (data) => {
    set({ alert: data });

    // Auto-hide after 3 seconds
    setTimeout(() => {
      set({ alert: null });
    }, ALERT_CONFIG.autoHideTime);
  },

  hideAlert: () => set({ alert: null }),
}));
