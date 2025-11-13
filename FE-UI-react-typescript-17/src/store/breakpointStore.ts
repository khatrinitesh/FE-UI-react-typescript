// src/store/breakpointStore.ts

import { create } from "zustand";
import { DEVICE_BREAKPOINTS_CONSTANTS } from "../components/TypicalDeviceBreakpoints/deviceBreakPointsConstants";

export type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";

interface BreakpointState {
  device: DeviceType;
  width: number;
  setWidth: (width: number) => void;
  updateDeviceType: () => void;
}

export const useBreakpointStore = create<BreakpointState>((set, get) => ({
  device: "desktop",
  width: window.innerWidth,
  setWidth: (width) => set({ width }),
  updateDeviceType: () => {
    const width = get().width;
    let device: DeviceType = "desktop";

    if (width <= DEVICE_BREAKPOINTS_CONSTANTS.mobile) device = "mobile";
    else if (width <= DEVICE_BREAKPOINTS_CONSTANTS.tablet) device = "tablet";
    else if (width <= DEVICE_BREAKPOINTS_CONSTANTS.laptop) device = "laptop";

    set({ device });
  },
}));
