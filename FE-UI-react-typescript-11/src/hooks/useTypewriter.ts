import { useEffect } from "react";
import { useTypewriterStore } from "../logic-store-state-management/usetypewriterStore/usetypewriterStore";
import { TYPEWRITER_SPEED } from "../components/typeWriterComponent/components/typeWriteData";

export const useTypewriter = () => {
  const { text, displayText, setDisplayText, status, setStatus } =
    useTypewriterStore();

  useEffect(() => {
    if (status !== "TYPING") return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, TYPEWRITER_SPEED);

      return () => clearTimeout(timeout);
    } else {
      setStatus("DONE");
    }
  }, [text, displayText, status, setDisplayText, setStatus]);
};
