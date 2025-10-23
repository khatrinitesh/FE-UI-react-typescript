// src/hooks/useBreakpoint.ts

import { useEffect } from "react";
import { useBreakpointStore } from "../store/breakpointStore";

export function useBreakpoint() {
  const setWidth = useBreakpointStore((state) => state.setWidth);
  const updateDeviceType = useBreakpointStore(
    (state) => state.updateDeviceType
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      updateDeviceType();
    };

    window.addEventListener("resize", handleResize);

    // Initialize on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setWidth, updateDeviceType]);
}
