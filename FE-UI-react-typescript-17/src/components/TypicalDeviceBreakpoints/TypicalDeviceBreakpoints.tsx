import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useBreakpointStore } from "../../store/breakpointStore";

const TypicalDeviceBreakpoints = () => {
  useBreakpoint(); // listens to window resize

  const device = useBreakpointStore((state) => state.device);
  const width = useBreakpointStore((state) => state.width);
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>
        Current Device: <strong>{device.toUpperCase()}</strong>
      </h2>
      <p>Window Width: {width}px</p>
    </div>
  );
};

export default TypicalDeviceBreakpoints;
