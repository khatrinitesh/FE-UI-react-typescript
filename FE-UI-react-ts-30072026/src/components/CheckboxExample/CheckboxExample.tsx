import { useState } from "react";
import { Checkbox } from "../Checkbox";

type Preference = {
  id: string;
  label: string;
  description: string;
};

const preferences: Preference[] = [
  {
    id: "email",
    label: "Email notifications",
    description: "Receive project updates through email.",
  },
  {
    id: "marketing",
    label: "Marketing messages",
    description: "Receive product news and promotional updates.",
  },
  {
    id: "security",
    label: "Security alerts",
    description: "Get notified about important account activity.",
  },
];

export function CheckboxExample() {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "email",
    "security",
  ]);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setSelectedItems((currentItems) =>
      checked
        ? [...currentItems, id]
        : currentItems.filter((item) => item !== id),
    );
  };

  const areAllSelected = selectedItems.length === preferences.length;

  const handleSelectAll = (checked: boolean) => {
    setSelectedItems(checked ? preferences.map((item) => item.id) : []);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-5 py-12 font-brand dark:bg-slate-950">
      <div className="w-full max-w-xl rounded-4xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <div>
          <span className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-brand-12 text-secondary dark:text-primary">
            Preferences
          </span>

          <h1 className="mt-4 text-brand-28 text-secondary dark:text-primary">
            Checkbox selection
          </h1>

          <p className="mt-2 text-brand-14 text-slate-500 dark:text-slate-400">
            Select the notifications you want to receive.
          </p>
        </div>

        <div className="mt-7">
          <Checkbox
            label="Select all"
            description="Enable or disable every notification option."
            checked={areAllSelected}
            onChange={handleSelectAll}
          />
        </div>

        <div className="my-5 border-t border-slate-200 dark:border-slate-800" />

        <div className="space-y-3">
          {preferences.map((preference) => (
            <Checkbox
              key={preference.id}
              label={preference.label}
              description={preference.description}
              checked={selectedItems.includes(preference.id)}
              onChange={(checked) =>
                handleCheckboxChange(preference.id, checked)
              }
            />
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between rounded-2xl bg-slate-100 px-5 py-4 dark:bg-slate-950">
          <span className="text-brand-13 text-slate-500 dark:text-slate-400">
            Selected options
          </span>

          <span className="rounded-full bg-primary/15 px-3 py-1 text-brand-13 text-secondary dark:text-primary">
            {selectedItems.length}
          </span>
        </div>

        <button
          type="button"
          disabled={selectedItems.length === 0}
          className="mt-5 w-full rounded-xl bg-secondary px-5 py-3.5 text-brand-14 text-white transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-primary dark:text-slate-950"
        >
          Save preferences
        </button>
      </div>
    </section>
  );
}
