// src/store/tracingBeamStore.ts

import { create } from "zustand";
import { DEFAULT_TRACING_BEAM_CONFIG } from "../components/TracingBeam/data";
import type { TracingBeamConfig } from "../interface";

interface TracingBeamState extends TracingBeamConfig {
  x: number;
  y: number;
  setPosition: (x: number, y: number) => void;
  setColor: (color: string) => void;
  setSpeed: (speed: number) => void;
  setThickness: (thickness: number) => void;
}

export const useTracingBeamStore = create<TracingBeamState>((set) => ({
  ...DEFAULT_TRACING_BEAM_CONFIG,
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,

  setPosition: (x, y) => set({ x, y }),
  setColor: (color) => set({ color }),
  setSpeed: (speed) => set({ speed }),
  setThickness: (thickness) => set({ thickness }),
}));
