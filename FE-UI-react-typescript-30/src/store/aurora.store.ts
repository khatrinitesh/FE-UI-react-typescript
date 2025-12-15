// store.ts
import { create } from "zustand";
import { AURORA_LAYERS } from "../constants/constants";
import type { AuroraLayer } from "../interface/auth";

interface AuroraState {
  layers: AuroraLayer[];
  setLayers: (layers: AuroraLayer[]) => void;
}

export const useAuroraStore = create<AuroraState>((set) => ({
  layers: AURORA_LAYERS,
  setLayers: (layers) => set({ layers }),
}));
