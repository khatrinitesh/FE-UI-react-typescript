import type { ReactNode } from "react";

type BentoItem = { id: number; title: string; description?: string; icon?: ReactNode; className?: string; content?: ReactNode };

type BentoGridProps = { items: BentoItem[]; className?: string };

export function BentoGrid({ items, className = "" }: BentoGridProps) {
  return (
    <div className={`grid auto-rows-55 grid-cols-1 gap-4 md:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg ${item.className ?? ""}`}>
          <div className="relative z-10 flex h-full flex-col">
            {item.icon && <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900">{item.icon}</div>}
            <h3 className="text-lg font-semibold text-neutral-950">{item.title}</h3>
            {item.description && <p className="mt-2 text-sm leading-6 text-neutral-500">{item.description}</p>}
            {item.content && <div className="mt-auto pt-4">{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
