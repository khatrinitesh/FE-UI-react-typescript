import { GripVertical, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

export default function DraggableElement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<Position>({
    x: 24,
    y: 24,
  });

  const dragStart = useRef({
    pointerX: 0,
    pointerY: 0,
    elementX: 0,
    elementY: 0,
  });

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);

    dragStart.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      elementX: position.x,
      elementY: position.y,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    const container = containerRef.current;
    const element = elementRef.current;

    if (!container || !element) return;

    const deltaX = event.clientX - dragStart.current.pointerX;
    const deltaY = event.clientY - dragStart.current.pointerY;

    const maximumX = container.clientWidth - element.offsetWidth;
    const maximumY = container.clientHeight - element.offsetHeight;

    const nextX = Math.min(
      Math.max(0, dragStart.current.elementX + deltaX),
      maximumX,
    );

    const nextY = Math.min(
      Math.max(0, dragStart.current.elementY + deltaY),
      maximumY,
    );

    setPosition({
      x: nextX,
      y: nextY,
    });
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const resetPosition = () => {
    setPosition({ x: 24, y: 24 });
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Draggable element
            </h1>

            <p className="text-sm text-slate-500">
              Drag the card within the area below.
            </p>
          </div>

          <button
            type="button"
            onClick={resetPosition}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>

        <div
          ref={containerRef}
          className="relative h-[500px] overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-white"
        >
          <div
            ref={elementRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
            className="absolute left-0 top-0 flex w-56 touch-none select-none items-center gap-3 rounded-xl bg-blue-600 p-4 text-white shadow-lg hover:bg-blue-700 active:cursor-grabbing"
          >
            <GripVertical className="shrink-0 cursor-grab" size={22} />

            <div>
              <p className="font-semibold">Drag me</p>
              <p className="text-sm text-blue-100">
                X: {Math.round(position.x)}, Y: {Math.round(position.y)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
