import { useState } from "react";
import { usePasswordStore } from "../../store/usePasswordStore";
import { PASSWORD_VISIBILITY } from "./passwordConstants";

const TogglePwdVisibility = () => {
  const [password, setPassword] = useState("");
  const { visibility, toggleVisibility } = usePasswordStore();
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type={visibility === PASSWORD_VISIBILITY.SHOW ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{
            padding: "8px",
            borderRadius: "4px 0 0 4px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          onClick={toggleVisibility}
          style={{
            padding: "8px 12px",
            borderRadius: "0 4px 4px 0",
            border: "1px solid #ccc",
            backgroundColor:
              visibility === PASSWORD_VISIBILITY.SHOW ? "#007bff" : "#888",
            color: "white",
            cursor: "pointer",
          }}
        >
          {visibility === PASSWORD_VISIBILITY.SHOW ? "HIDE" : "SHOW"}
        </button>
      </div>

      <p style={{ marginTop: "1rem" }}>
        Password is currently: <strong>{visibility}</strong>
      </p>
    </div>
  );
};

export default TogglePwdVisibility;
