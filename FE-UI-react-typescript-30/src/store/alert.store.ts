import { create } from "zustand";
import type { Alert } from "../interface/auth";

interface AlertState {
  alerts: Alert[];
  addAlert: (alert: Omit<Alert, "id">) => void;
  removeAlert: (id: string) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  alerts: [],
  addAlert: (alert) =>
    set((state) => ({
      alerts: [
        ...state.alerts,
        { ...alert, id: crypto.randomUUID() }, // generate unique id
      ],
    })),
  removeAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.filter((a) => a.id !== id),
    })),
}));
