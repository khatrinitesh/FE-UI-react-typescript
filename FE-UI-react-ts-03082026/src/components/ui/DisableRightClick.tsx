import { ShieldAlert, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function DisableRightClick() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setShowWarning(true);
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    if (!showWarning) return;
    const timeout = window.setTimeout(() => {
      setShowWarning(false);
    }, 2500);

    return () => window.clearTimeout(timeout);
  }, [showWarning]);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <ShieldAlert size={28} />
        </div>

        <h1 className="text-2xl font-semibold text-slate-900">
          Protected content
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Right-click anywhere on this page to test the protection.
        </p>
      </section>

      {showWarning && (
        <div
          role="alert"
          className="fixed bottom-6 left-1/2 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-white shadow-xl"
        >
          <ShieldAlert className="shrink-0 text-amber-400" size={20} />

          <p className="flex-1 text-sm font-medium">
            Right-click is disabled on this page.
          </p>

          <button
            type="button"
            onClick={() => setShowWarning(false)}
            aria-label="Close notification"
            className="rounded-md p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </main>
  );
}
