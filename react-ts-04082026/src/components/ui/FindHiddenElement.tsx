import { Eye, EyeOff, Search } from "lucide-react";
import { useRef, useState } from "react";

type VisibilityStatus = "visible" | "hidden" | "unchecked";

function isElementHidden(element: HTMLElement): boolean {
  const styles = window.getComputedStyle(element);

  return (
    element.hidden ||
    styles.display === "none" ||
    styles.visibility === "hidden" ||
    Number(styles.opacity) === 0 ||
    element.getClientRects().length === 0
  );
}

export default function FindHiddenElement() {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [status, setStatus] = useState<VisibilityStatus>("unchecked");

  const elementRef = useRef<HTMLDivElement>(null);
  const shouldHideElement = Boolean(isHidden);

  const checkElementVisibility = () => {
    if (!elementRef.current) return;

    setStatus(isElementHidden(elementRef.current) ? "hidden" : "visible");
  };

  const toggleElement = () => {
    setIsHidden((previous) => !previous);
    setStatus("unchecked");
  };

  return (
    <section className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Find Hidden Element
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#525659]">
          Hide or show the target element, and then check its current
          visibility.
        </p>
      </header>

      <div
        ref={elementRef}
        hidden={shouldHideElement}
        className="mb-6 rounded-xl border border-[#009eff]/30 bg-[#009eff]/10 p-5"
      >
        <h3 className="font-semibold text-slate-900">Target Element</h3>

        <p className="mt-1 text-sm text-[#525659]">
          This is the element whose visibility will be checked.
        </p>
      </div>

      {isHidden && (
        <div className="mb-6 rounded-xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-500">
          The target element is not currently displayed.
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={toggleElement}
          className="inline-flex items-center gap-2 rounded-lg bg-[#009eff] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#007dcc]"
        >
          {isHidden ? <Eye size={18} /> : <EyeOff size={18} />}
          {isHidden ? "Show Element" : "Hide Element"}
        </button>

        <button
          type="button"
          onClick={checkElementVisibility}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-[#009eff] hover:text-[#009eff]"
        >
          <Search size={18} />
          Check Element
        </button>
      </div>

      <div
        aria-live="polite"
        className={`mt-6 rounded-xl border p-4 text-sm font-medium ${
          status === "visible"
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : status === "hidden"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-slate-200 bg-slate-50 text-slate-500"
        }`}
      >
        {status === "visible" && "The target element is visible."}

        {status === "hidden" && "The target element is hidden."}

        {status === "unchecked" &&
          'Select "Check Element" to check its visibility.'}
      </div>
    </section>
  );
}
