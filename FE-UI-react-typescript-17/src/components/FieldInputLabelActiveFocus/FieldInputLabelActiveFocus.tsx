import { useInputFocusStore } from "../../store/useInputFocusStore";

const FieldInputLabelActiveFocus = () => {
  return <InputWithLabel label="Happy" id="name-input" />;
};

export default FieldInputLabelActiveFocus;

const InputWithLabel: React.FC<{ label: string; id: string }> = ({
  label,
  id,
}) => {
  const { focused, setFocused } = useInputFocusStore();

  return (
    <div style={{ position: "relative", marginBottom: 24 }}>
      <input
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          padding: "10px 12px",
          fontSize: 16,
          border: focused ? "2px solid #2563eb" : "1px solid #ccc",
          borderRadius: 4,
          outline: "none",
          width: "100%",
        }}
      />
      <label
        htmlFor={id}
        style={{
          position: "absolute",
          left: 12,
          top: focused ? -8 : 12,
          fontSize: focused ? 12 : 16,
          color: focused ? "#2563eb" : "#999",
          backgroundColor: focused ? "#fff" : "transparent",
          padding: focused ? "0 4px" : 0,
          pointerEvents: "none",
          transition: "all 0.2s ease",
        }}
      >
        {label}
      </label>
    </div>
  );
};
