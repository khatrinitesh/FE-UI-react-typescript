import { useEffect } from "react";
import {
  BREAKPOINTS,
  type BreakpointName,
} from "../components/breakPointComponent/components/breakPointData";
import { useBreakpointStore } from "../logic-store-state-management/useBreakPointStore/useBreakPointStore";

function getBreakpoint(windowWidth: number): BreakpointName {
  if (windowWidth <= BREAKPOINTS.mobile) return "mobile";
  if (windowWidth <= BREAKPOINTS.tablet) return "tablet";
  if (windowWidth <= BREAKPOINTS.desktop) return "desktop";
  return "largeDesktop";
}

export const useResponsive = () => {
  const setBreakpoint = useBreakpointStore((state) => state.setBreakpoint);

  useEffect(() => {
    function onResize() {
      const bp = getBreakpoint(window.innerWidth);
      setBreakpoint(bp);
    }

    onResize(); // Set on mount
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [setBreakpoint]);
};
