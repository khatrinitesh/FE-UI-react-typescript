import { useInputSettingsStore } from "../../store/inputSettingsAutocompleteStore";

const TurnOffAutocomplete = () => {
  const autocomplete = useInputSettingsStore((state) => state.autocomplete);
  const toggleAutocomplete = useInputSettingsStore(
    (state) => state.toggleAutocomplete
  );
  return (
    <div style={{ padding: 20 }}>
      <label>
        <input
          type="text"
          placeholder="Type here..."
          autoComplete={autocomplete}
          style={{ width: 300, padding: 8, fontSize: 16 }}
        />
      </label>
      <div style={{ marginTop: 12 }}>
        <button onClick={toggleAutocomplete}>
          Turn Autocomplete {autocomplete === "on" ? "Off" : "On"}
        </button>
      </div>
    </div>
  );
};

export default TurnOffAutocomplete;
