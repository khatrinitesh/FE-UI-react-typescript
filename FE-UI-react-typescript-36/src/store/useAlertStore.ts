import { create } from "zustand";

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertItem {
  id: string;
  message: string;
  type: AlertType;
}

interface AlertState {
  alerts: AlertItem[];
  addAlert: (alert: Omit<AlertItem, "id">) => void;
  removeAlert: (id: string) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  alerts: [],
  addAlert: (alert) =>
    set((state) => ({
      alerts: [...state.alerts, { ...alert, id: crypto.randomUUID() }],
    })),
  removeAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.filter((a) => a.id !== id),
    })),
}));
