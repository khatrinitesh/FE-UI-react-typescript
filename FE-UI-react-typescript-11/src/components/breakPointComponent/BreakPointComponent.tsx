import { useBreakpointStore } from "../../logic-store-state-management/useBreakPointStore/useBreakPointStore";

const BreakPointComponent = () => {
  return (
    <>
      <BreakpointDisplay />
    </>
  );
};

export default BreakPointComponent;

const BreakpointDisplay = () => {
  const current = useBreakpointStore((state) => state.current);

  return (
    <div>
      <h2>Current Breakpoint: {current}</h2>
    </div>
  );
};
