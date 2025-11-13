import { useEffect } from "react";
import { useFocusStore } from "../../../logicStore/useFocusStore/useFocusStore";

const ActiveElementDomDocument = () => {
  UseFocusTracker(); // Start tracking focus

  const activeElement = useFocusStore((state) => state.activeElement);
  console.log("Currently focused element:", activeElement);
  return (
    <>
      <input placeholder="Input 1" />
      <input placeholder="Input 2" />
      <p>Active Element: {activeElement?.tagName}</p>
    </>
  );
};

export default ActiveElementDomDocument;

const UseFocusTracker = () => {
  const setActiveElement = useFocusStore((state) => state.setActiveElement);

  useEffect(() => {
    const handleFocus = () => {
      setActiveElement(document.activeElement as HTMLElement);
    };

    window.addEventListener("focus", handleFocus, true);

    return () => {
      window.removeEventListener("focus", handleFocus, true);
    };
  }, [setActiveElement]);
};
