import { AlertTriangle, LockKeyhole } from "lucide-react";
import { useState } from "react";

export default function CapsLockDetector() {
  const [password, setPassword] = useState("");
  const [capsLockOn, setCapsLockOn] = useState(false);

  const detectCapsLock = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>,
  ) => {
    // getModifierState exists on keyboard events; narrow at runtime to be safe for focus events
    const maybeGet = (event as any).getModifierState;
    const isOn =
      typeof maybeGet === "function" && maybeGet.call(event, "CapsLock");
    setCapsLockOn(Boolean(isOn));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <LockKeyhole size={24} />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Enter your password
            </h1>
            <p className="text-sm text-slate-500">
              Caps Lock detection is enabled
            </p>
          </div>
        </div>

        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Password
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={detectCapsLock}
          onKeyUp={detectCapsLock}
          onFocus={detectCapsLock}
          onBlur={() => setCapsLockOn(false)}
          placeholder="Enter your password"
          aria-describedby={capsLockOn ? "caps-lock-warning" : undefined}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
            capsLockOn
              ? "border-amber-500 ring-4 ring-amber-100"
              : "border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          }`}
        />

        {capsLockOn && (
          <div
            id="caps-lock-warning"
            role="alert"
            className="mt-3 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700"
          >
            <AlertTriangle size={18} />
            Caps Lock is turned on
          </div>
        )}

        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
