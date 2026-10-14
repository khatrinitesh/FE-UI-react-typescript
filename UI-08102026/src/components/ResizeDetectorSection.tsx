
import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";

export default function ResizeDetectorSection() {
  const [containerWidth, setContainerWidth] = useState(400);

  const { width, height, ref } = useResizeDetector({
    refreshMode: "debounce",
    refreshRate: 100,
  });

  return (
    <section className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        React Resize Detector
      </h1>

      <div className="mb-6 flex flex-wrap gap-3">
        {[250, 400, 600].map((size) => (
          <button
            key={size}
            onClick={() => setContainerWidth(size)}
            className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-500"
          >
            {size}px
          </button>
        ))}
      </div>

      <div
        ref={ref}
        style={{
          width: containerWidth,
          maxWidth: "100%",
        }}
        className="min-h-48 rounded-xl border border-blue-400 bg-slate-800 p-6 transition-all duration-300"
      >
        <h2 className="mb-4 text-xl font-bold">
          Resizable Box
        </h2>

        <p>Width: {Math.round(width ?? 0)}px</p>
        <p>Height: {Math.round(height ?? 0)}px</p>

        <p className="mt-4 text-blue-300">
          {width === undefined
            ? "Measuring..."
            : width < 350
              ? "Mobile Layout"
              : width < 500
                ? "Tablet Layout"
                : "Desktop Layout"}
        </p>
      </div>
    </section>
  );
}
