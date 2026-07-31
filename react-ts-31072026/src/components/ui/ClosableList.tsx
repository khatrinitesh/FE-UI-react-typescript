import { Plus, X } from "lucide-react";
import { useState } from "react";

type ListItem = {
  id: number;
  title: string;
  description?: string;
};

const initialItems: ListItem[] = [
  {
    id: 1,
    title: "Brand guidelines",
    description: "Review typography and color usage.",
  },
  {
    id: 2,
    title: "Homepage design",
    description: "Complete responsive desktop layout.",
  },
  {
    id: 3,
    title: "Checkout form",
    description: "Connect the form with the payment API.",
  },
];

export default function ClosableList() {
  const [items, setItems] = useState<ListItem[]>(initialItems);
  const [inputValue, setInputValue] = useState("");

  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const addItem = () => {
    const title = inputValue.trim();
    if (!title) return;
    setItems((currentItems) => [
      ...currentItems,
      {
        id: Date.now(),
        title,
        description: "New list item",
      },
    ]);
    setInputValue("");
  };

  return (
    <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-5 shadow-lg sm:p-7">
      <header className="mb-6">
        <p className="font-montserrat text-12 font-semibold uppercase tracking-[0.14em] text-primary">
          Task list
        </p>

        <h2 className="mt-2 font-arialnb text-28 font-bold text-secondary">
          Closable list items
        </h2>

        <p className="mt-2 font-montserrat text-14 text-secondary/75">
          Add new items or remove completed items.
        </p>
      </header>

      <div className="mb-5 flex gap-2">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter a new item..."
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addItem();
            }
          }}
          className="
            h-12 min-w-0 flex-1 rounded-xl border border-slate-300
            bg-white px-4 font-montserrat text-14 text-slate-900
            outline-none transition placeholder:text-slate-400
            focus:border-primary focus:ring-4 focus:ring-primary/10
          "
        />

        <button
          type="button"
          onClick={addItem}
          aria-label="Add item"
          className="
            flex h-12 w-12 shrink-0 items-center justify-center
            rounded-xl bg-primary text-white transition
            hover:bg-sky-600 focus:outline-none
            focus:ring-4 focus:ring-primary/20 active:scale-95
          "
        >
          <Plus size={21} aria-hidden="true" />
        </button>
      </div>

      {items.length > 0 ? (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={item.id}
              className="
                group flex items-start gap-4 rounded-2xl
                border border-slate-200 bg-slate-50 p-4
                transition hover:border-primary/40 hover:bg-primary/5
              "
            >
              <span
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-full bg-primary/10 font-arialnb
                  text-16 font-bold text-primary
                "
              >
                {index + 1}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-montserrat text-16 font-semibold text-slate-900">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-1 font-montserrat text-12 leading-5 text-secondary/75">
                    {item.description}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.title}`}
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-full text-secondary transition
                  hover:bg-red-100 hover:text-red-600
                  focus:outline-none focus:ring-4 focus:ring-red-100
                "
              >
                <X size={18} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center">
          <p className="font-arialnb text-20 font-bold text-secondary">
            No items available
          </p>

          <p className="mt-2 font-montserrat text-14 text-secondary/70">
            Add a new item using the field above.
          </p>
        </div>
      )}
    </section>
  );
}
