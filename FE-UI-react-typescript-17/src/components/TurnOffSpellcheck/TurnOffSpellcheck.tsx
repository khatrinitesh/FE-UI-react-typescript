import { useInputSettingsStore } from "../../store/inputSettingsStore";

const TurnOffSpellcheck = () => {
  const spellCheck = useInputSettingsStore((state) => state.spellCheck);
  const toggleSpellCheck = useInputSettingsStore(
    (state) => state.toggleSpellCheck
  );
  return (
    <div style={{ padding: 20 }}>
      <label>
        <input
          type="text"
          placeholder="Type something..."
          spellCheck={spellCheck}
          style={{ width: 300, padding: 8, fontSize: 16 }}
        />
      </label>
      <div style={{ marginTop: 12 }}>
        <button onClick={toggleSpellCheck}>
          Turn Spellcheck {spellCheck ? "Off" : "On"}
        </button>
      </div>
    </div>
  );
};

export default TurnOffSpellcheck;
