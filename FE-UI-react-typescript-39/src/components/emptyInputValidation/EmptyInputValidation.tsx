import { ERROR_MESSAGE } from "../../constants/constants";
import { useFormStore } from "../../store/useFormStore";

const EmptyInputValidation = () => {
  const { inputValue, setInputValue, error, setError } = useFormStore();

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setError(ERROR_MESSAGE);
      return;
    }
    setError("");
    alert("Form Submitted");
  };

  return (
    <div className="space-y-4 w-60">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border px-4 py-2 rounded-lg"
        placeholder="Enter text"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default EmptyInputValidation;
