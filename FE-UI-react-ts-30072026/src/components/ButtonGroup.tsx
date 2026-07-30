import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Grid2X2,
  List,
  Rows3,
} from "lucide-react";
import { useState } from "react";

type ViewOption = {
  id: "grid" | "list" | "compact";
  label: string;
  icon: React.ReactNode;
};

const viewOptions: ViewOption[] = [
  {
    id: "grid",
    label: "Grid",
    icon: <Grid2X2 className="size-4" />,
  },
  {
    id: "list",
    label: "List",
    icon: <List className="size-4" />,
  },
  {
    id: "compact",
    label: "Compact",
    icon: <Rows3 className="size-4" />,
  },
];

type Alignment = "left" | "center" | "right";

export function ButtonGroup() {
  const [selectedView, setSelectedView] = useState<ViewOption["id"]>("grid");

  const [alignment, setAlignment] = useState<Alignment>("left");

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-12 font-brand text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-brand-14 text-secondary dark:text-primary">
              React TypeScript
            </span>

            <h1 className="mt-5 text-brand-40 text-secondary dark:text-primary">
              Button group UI
            </h1>

            <p className="mt-3 max-w-2xl text-brand-16 leading-relaxed text-slate-600 dark:text-slate-300">
              Reusable segmented button groups with selected, hover and dark
              theme states.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6">
                <h2 className="text-brand-24 text-secondary dark:text-primary">
                  View selection
                </h2>

                <p className="mt-2 text-brand-14 text-slate-500 dark:text-slate-400">
                  Select one layout option.
                </p>
              </div>

              <div
                role="group"
                aria-label="Select view"
                className="inline-flex w-full rounded-2xl border border-slate-200 bg-slate-100 p-1.5 dark:border-slate-700 dark:bg-slate-950"
              >
                {viewOptions.map((option) => {
                  const isSelected = selectedView === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedView(option.id)}
                      aria-pressed={isSelected}
                      className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2 text-brand-14 transition-all duration-200 ${
                        isSelected
                          ? "bg-secondary text-white shadow-md dark:bg-primary dark:text-slate-950"
                          : "text-slate-500 hover:bg-white hover:text-secondary dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-primary"
                      }`}
                    >
                      {option.icon}
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-primary/10 p-5">
                <p className="text-brand-14 text-slate-500 dark:text-slate-400">
                  Selected view
                </p>

                <p className="mt-1 text-brand-20 capitalize text-secondary dark:text-primary">
                  {selectedView}
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6">
                <h2 className="text-brand-24 text-secondary dark:text-primary">
                  Text alignment
                </h2>

                <p className="mt-2 text-brand-14 text-slate-500 dark:text-slate-400">
                  Icon-only button group.
                </p>
              </div>

              <div
                role="group"
                aria-label="Text alignment"
                className="inline-flex overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <AlignmentButton
                  label="Align left"
                  isSelected={alignment === "left"}
                  onClick={() => setAlignment("left")}
                >
                  <AlignLeft className="size-5" />
                </AlignmentButton>

                <AlignmentButton
                  label="Align center"
                  isSelected={alignment === "center"}
                  onClick={() => setAlignment("center")}
                >
                  <AlignCenter className="size-5" />
                </AlignmentButton>

                <AlignmentButton
                  label="Align right"
                  isSelected={alignment === "right"}
                  onClick={() => setAlignment("right")}
                >
                  <AlignRight className="size-5" />
                </AlignmentButton>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
                <p
                  className={`text-brand-16 leading-7 text-slate-600 dark:text-slate-300 ${
                    alignment === "left"
                      ? "text-left"
                      : alignment === "center"
                        ? "text-center"
                        : "text-right"
                  }`}
                >
                  This text changes its alignment based on the selected button.
                </p>
              </div>
            </article>
          </div>

          <article className="mt-6 rounded-3xl bg-secondary p-6 text-white shadow-xl shadow-secondary/20 dark:bg-primary dark:text-slate-950">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-brand-24">Action button group</h2>

                <p className="mt-2 text-brand-14 opacity-75">
                  Use connected buttons for related actions.
                </p>
              </div>

              <div className="inline-flex overflow-hidden rounded-xl border border-white/20 dark:border-secondary/20">
                <button
                  type="button"
                  className="border-r border-white/20 bg-white/10 px-5 py-3 text-brand-14 transition hover:bg-white/20 dark:border-secondary/20 dark:bg-secondary/10 dark:hover:bg-secondary/20"
                >
                  Preview
                </button>

                <button
                  type="button"
                  className="border-r border-white/20 bg-white/10 px-5 py-3 text-brand-14 transition hover:bg-white/20 dark:border-secondary/20 dark:bg-secondary/10 dark:hover:bg-secondary/20"
                >
                  Save draft
                </button>

                <button
                  type="button"
                  className="bg-white px-5 py-3 text-brand-14 text-secondary transition hover:bg-primary/90 dark:bg-secondary dark:text-white"
                >
                  Publish
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

type AlignmentButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function AlignmentButton({
  label,
  isSelected,
  onClick,
  children,
}: AlignmentButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={isSelected}
      title={label}
      className={`flex size-12 items-center justify-center border-r border-slate-200 transition last:border-r-0 dark:border-slate-700 ${
        isSelected
          ? "bg-secondary text-white dark:bg-primary dark:text-slate-950"
          : "bg-white text-slate-500 hover:bg-primary/10 hover:text-secondary dark:bg-slate-900 dark:text-slate-400 dark:hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}
