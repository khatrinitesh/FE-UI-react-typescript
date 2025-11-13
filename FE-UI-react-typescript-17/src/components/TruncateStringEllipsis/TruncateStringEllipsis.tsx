import { useTruncateStore } from "../../store/truncateStore";

const TruncateStringEllipsis = () => {
  const inputString = useTruncateStore((state) => state.inputString);
  const maxLength = useTruncateStore((state) => state.maxLength);
  const setInputString = useTruncateStore((state) => state.setInputString);
  const setMaxLength = useTruncateStore((state) => state.setMaxLength);
  const truncatedString = useTruncateStore((state) => state.truncatedString());
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <label>
        Enter text:
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          style={{
            width: "100%",
            padding: 8,
            marginTop: 8,
            boxSizing: "border-box",
          }}
          placeholder="Type something long..."
        />
      </label>
      <label style={{ display: "block", marginTop: 12 }}>
        Max Length:
        <input
          type="number"
          value={maxLength}
          onChange={(e) => setMaxLength(Number(e.target.value))}
          style={{
            width: "100%",
            padding: 8,
            marginTop: 4,
            boxSizing: "border-box",
          }}
          min={1}
        />
      </label>

      <p style={{ marginTop: 20, fontWeight: "bold" }}>
        Truncated Output: <br />
        <span style={{ color: "teal" }}>{truncatedString}</span>
      </p>
    </div>
  );
};

export default TruncateStringEllipsis;
