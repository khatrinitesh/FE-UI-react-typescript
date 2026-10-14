
import { useEffect, useRef, useState } from "react";

export default function SizeMeSection() {
  const [width, setWidth] = useState(400);
  const [size, setSize] = useState<{ width: number | null; height: number | null }>({
    width: null,
    height: null,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        React SizeMe Demo
      </h1>

      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setWidth(250)}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Small
        </button>

        <button
          onClick={() => setWidth(400)}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Medium
        </button>

        <button
          onClick={() => setWidth(600)}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Large
        </button>
      </div>

      <div
        ref={ref}
        style={{ width, maxWidth: "100%" }}
        className="min-h-48 rounded-xl border border-blue-400 bg-slate-800 p-6 transition-all duration-300"
      >
        <h2 className="mb-4 text-xl font-semibold">
          Resizable Container
        </h2>

        <p>Width: {Math.round(size.width ?? 0)}px</p>
        <p>Height: {Math.round(size.height ?? 0)}px</p>

        <p className="mt-4 text-blue-300">
          {size.width === null
            ? "Measuring..."
            : size.width < 350
              ? "Mobile Layout"
              : size.width < 500
                ? "Tablet Layout"
                : "Desktop Layout"}
        </p>
      </div>
    </section>
  );
}
