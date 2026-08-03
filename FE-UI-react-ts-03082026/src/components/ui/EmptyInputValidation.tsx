import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function EmptyInputValidation() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateName = (value: string) => {
    if (!value.trim()) {
      setError("Name is required.");
      return false;
    }

    setError("");
    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setName(value);
    setIsSubmitted(false);

    if (error && value.trim()) {
      setError("");
    }
  };

  const handleBlur = () => {
    validateName(name);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateName(name)) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-6">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg"
      >
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Create profile
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Enter your name to continue.
          </p>
        </div>

        <div className="mt-6">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Full name
            <span className="ml-1 text-red-500">*</span>
          </label>

          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "name-error" : undefined}
              className={`w-full rounded-xl border px-4 py-3 pr-11 outline-none transition ${
                error
                  ? "border-red-500 bg-red-50 focus:ring-4 focus:ring-red-100"
                  : "border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              }`}
            />

            {error && (
              <AlertCircle
                size={19}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500"
              />
            )}
          </div>

          {error && (
            <p
              id="name-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
            >
              <AlertCircle size={15} />
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Submit
        </button>

        {isSubmitted && (
          <div
            role="status"
            className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700"
          >
            <CheckCircle2 size={18} />
            Form submitted successfully.
          </div>
        )}
      </form>
    </main>
  );
}
