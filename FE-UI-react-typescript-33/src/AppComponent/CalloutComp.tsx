import { useCalloutStore } from "../store/useCalloutStore/useCalloutStore";
import { AnimatePresence, motion } from "framer-motion";

export const CalloutComp = () => {
  const show = useCalloutStore((s) => s.show);

  return (
    <>
      <button onClick={() => show("Saved successfully!", "SUCCESS")}>
        Show Callout
      </button>
      <Callout />
    </>
  );
};

const colors: Record<string, string> = {
  INFO: "#2196f3",
  SUCCESS: "#4caf50",
  WARNING: "#ff9800",
};

const Callout = () => {
  const { isOpen, message, type, hide } = useCalloutStore();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            background: colors[type],
            color: "#fff",
            padding: "12px 16px",
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          <span>{message}</span>
          <button onClick={hide} style={{ marginLeft: 12, cursor: "pointer" }}>
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
