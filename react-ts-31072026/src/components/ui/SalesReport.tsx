import { useMemo, useState } from "react";

type SalesStatus = "Achievement" | "No Achievement";

type Salesman = {
  id: number;
  brand: string;
  name: string;
  target: number;
  achievement: number;
};

const initialSalesData: Salesman[] = [
  // Bosch
  { id: 1, brand: "Bosch", name: "Anil", target: 0, achievement: 0 },
  { id: 2, brand: "Bosch", name: "Imran", target: 0, achievement: 0 },
  { id: 3, brand: "Bosch", name: "Krishna", target: 0, achievement: 0 },
  { id: 4, brand: "Bosch", name: "Govind", target: 0, achievement: 0 },
  { id: 5, brand: "Bosch", name: "Sunil S", target: 0, achievement: 0 },
  { id: 6, brand: "Bosch", name: "Sunil B", target: 0, achievement: 0 },
  { id: 7, brand: "Bosch", name: "Vipul", target: 0, achievement: 0 },

  // Autographix
  {
    id: 8,
    brand: "Autographix",
    name: "Jayesh",
    target: 0,
    achievement: 0,
  },
  {
    id: 9,
    brand: "Autographix",
    name: "Dinanath",
    target: 0,
    achievement: 0,
  },
  {
    id: 10,
    brand: "Autographix",
    name: "Mufadal",
    target: 0,
    achievement: 0,
  },
  {
    id: 11,
    brand: "Autographix",
    name: "Vishal G",
    target: 0,
    achievement: 0,
  },
  {
    id: 12,
    brand: "Autographix",
    name: "Mukesh",
    target: 0,
    achievement: 0,
  },

  // UPCL
  { id: 13, brand: "UPCL", name: "Rafat", target: 0, achievement: 0 },
  {
    id: 14,
    brand: "UPCL",
    name: "Gunvant",
    target: 0,
    achievement: 0,
  },

  // TotalEnergies ELF
  {
    id: 15,
    brand: "TotalEnergies ELF",
    name: "Haresh",
    target: 0,
    achievement: 0,
  },
];

const brandOrder = ["Bosch", "Autographix", "UPCL", "TotalEnergies ELF"];

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function getStatus(target: number, achievement: number): SalesStatus {
  if (target > 0 && achievement >= target) {
    return "Achievement";
  }

  return "No Achievement";
}

function getBalance(target: number, achievement: number) {
  return Math.max(target - achievement, 0);
}

function getPercentage(target: number, achievement: number) {
  if (target <= 0) return 0;

  return Math.min((achievement / target) * 100, 100);
}

export default function SalesReport() {
  const [salesData, setSalesData] = useState<Salesman[]>(initialSalesData);

  const [selectedBrand, setSelectedBrand] = useState("All Brands");

  const updateSalesValue = (
    id: number,
    field: "target" | "achievement",
    value: string,
  ) => {
    const numericValue = Math.max(Number(value) || 0, 0);

    setSalesData((currentData) =>
      currentData.map((salesman) =>
        salesman.id === id
          ? {
              ...salesman,
              [field]: numericValue,
            }
          : salesman,
      ),
    );
  };

  const filteredSalesData = useMemo(() => {
    if (selectedBrand === "All Brands") {
      return salesData;
    }

    return salesData.filter((salesman) => salesman.brand === selectedBrand);
  }, [salesData, selectedBrand]);

  const groupedSalesData = useMemo(() => {
    return brandOrder
      .map((brand) => ({
        brand,
        salesmen: filteredSalesData.filter(
          (salesman) => salesman.brand === brand,
        ),
      }))
      .filter((group) => group.salesmen.length > 0);
  }, [filteredSalesData]);

  const overallSummary = useMemo(() => {
    const target = filteredSalesData.reduce(
      (total, salesman) => total + salesman.target,
      0,
    );

    const achievement = filteredSalesData.reduce(
      (total, salesman) => total + salesman.achievement,
      0,
    );

    return {
      target,
      achievement,
      balance: getBalance(target, achievement),
      percentage: target > 0 ? Math.round((achievement / target) * 100) : 0,
      achievedCount: filteredSalesData.filter(
        (salesman) =>
          getStatus(salesman.target, salesman.achievement) === "Achievement",
      ).length,
    };
  }, [filteredSalesData]);

  return (
    <main className="min-h-screen bg-slate-100 p-4 font-montserrat desktop-sm:p-7">
      <div className="mx-auto max-w-[1600px]">
        <header className="mb-6 flex flex-col gap-5 rounded-3xl bg-secondary p-5 text-white shadow-lg desktop-sm:flex-row desktop-sm:items-center desktop-sm:justify-between desktop-sm:p-7">
          <div>
            <p className="text-12 font-semibold uppercase tracking-[0.18em] text-primary">
              Sales performance
            </p>

            <h1 className="mt-2 font-arialnb text-36 font-bold">
              Sales Report
            </h1>

            <p className="mt-2 text-14 text-white/65">
              Track targets and achievements for every brand and salesman.
            </p>
          </div>

          <div className="w-full desktop-sm:w-64">
            <label
              htmlFor="brand-filter"
              className="mb-2 block text-12 font-semibold uppercase tracking-[0.1em] text-white/60"
            >
              Filter by brand
            </label>

            <select
              id="brand-filter"
              value={selectedBrand}
              onChange={(event) => setSelectedBrand(event.target.value)}
              className="h-12 w-full rounded-xl border border-white/15 bg-white px-4 text-14 font-semibold text-secondary outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
            >
              <option>All Brands</option>

              {brandOrder.map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </header>

        <section className="mb-6 grid grid-cols-2 gap-3 desktop-sm:grid-cols-5">
          <SummaryCard
            label="Total Target"
            value={currencyFormatter.format(overallSummary.target)}
          />

          <SummaryCard
            label="Achievement"
            value={currencyFormatter.format(overallSummary.achievement)}
            highlighted
          />

          <SummaryCard
            label="Balance"
            value={currencyFormatter.format(overallSummary.balance)}
          />

          <SummaryCard
            label="Completion"
            value={`${overallSummary.percentage}%`}
          />

          <SummaryCard
            label="Achieved Salesmen"
            value={`${overallSummary.achievedCount}/${filteredSalesData.length}`}
            className="col-span-2 desktop-sm:col-span-1"
          />
        </section>

        <div className="space-y-6">
          {groupedSalesData.map(({ brand, salesmen }) => {
            const brandTarget = salesmen.reduce(
              (total, salesman) => total + salesman.target,
              0,
            );

            const brandAchievement = salesmen.reduce(
              (total, salesman) => total + salesman.achievement,
              0,
            );

            const brandBalance = getBalance(brandTarget, brandAchievement);

            const brandStatus = getStatus(brandTarget, brandAchievement);

            return (
              <section
                key={brand}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 px-5 py-5 desktop-sm:flex-row desktop-sm:items-center desktop-sm:justify-between">
                  <div>
                    <p className="text-12 font-semibold uppercase tracking-[0.15em] text-primary">
                      Brand
                    </p>

                    <h2 className="mt-1 font-arialnb text-28 font-bold text-secondary">
                      {brand}
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <BrandMetric
                      label="Target"
                      value={currencyFormatter.format(brandTarget)}
                    />

                    <BrandMetric
                      label="Achievement"
                      value={currencyFormatter.format(brandAchievement)}
                    />

                    <BrandMetric
                      label="Balance"
                      value={currencyFormatter.format(brandBalance)}
                    />

                    <StatusBadge status={brandStatus} />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-white">
                        <th className="px-5 py-4 text-left text-12 font-semibold uppercase tracking-[0.08em] text-secondary/60">
                          No.
                        </th>

                        <th className="px-5 py-4 text-left text-12 font-semibold uppercase tracking-[0.08em] text-secondary/60">
                          Salesman
                        </th>

                        <th className="px-5 py-4 text-left text-12 font-semibold uppercase tracking-[0.08em] text-secondary/60">
                          Target
                        </th>

                        <th className="px-5 py-4 text-left text-12 font-semibold uppercase tracking-[0.08em] text-secondary/60">
                          Achievement
                        </th>

                        <th className="px-5 py-4 text-left text-12 font-semibold uppercase tracking-[0.08em] text-secondary/60">
                          Balance
                        </th>

                        <th className="px-5 py-4 text-left text-12 font-semibold uppercase tracking-[0.08em] text-secondary/60">
                          Progress
                        </th>

                        <th className="px-5 py-4 text-left text-12 font-semibold uppercase tracking-[0.08em] text-secondary/60">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {salesmen.map((salesman, index) => {
                        const balance = getBalance(
                          salesman.target,
                          salesman.achievement,
                        );

                        const status = getStatus(
                          salesman.target,
                          salesman.achievement,
                        );

                        const percentage = getPercentage(
                          salesman.target,
                          salesman.achievement,
                        );

                        return (
                          <tr
                            key={salesman.id}
                            className="border-b border-slate-100 transition last:border-0 hover:bg-primary/[0.03]"
                          >
                            <td className="px-5 py-4">
                              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-14 font-bold text-primary">
                                {index + 1}
                              </span>
                            </td>

                            <td className="px-5 py-4">
                              <p className="text-16 font-semibold capitalize text-slate-900">
                                {salesman.name}
                              </p>

                              <p className="mt-1 text-12 text-secondary/60">
                                {salesman.brand}
                              </p>
                            </td>

                            <td className="px-5 py-4">
                              <CurrencyInput
                                value={salesman.target}
                                label={`${salesman.name} target`}
                                onChange={(value) =>
                                  updateSalesValue(salesman.id, "target", value)
                                }
                              />
                            </td>

                            <td className="px-5 py-4">
                              <CurrencyInput
                                value={salesman.achievement}
                                label={`${salesman.name} achievement`}
                                onChange={(value) =>
                                  updateSalesValue(
                                    salesman.id,
                                    "achievement",
                                    value,
                                  )
                                }
                              />
                            </td>

                            <td className="px-5 py-4">
                              <span
                                className={`text-14 font-bold ${
                                  balance > 0
                                    ? "text-red-600"
                                    : "text-emerald-600"
                                }`}
                              >
                                {currencyFormatter.format(balance)}
                              </span>
                            </td>

                            <td className="px-5 py-4">
                              <div className="w-40">
                                <div className="mb-2 flex items-center justify-between">
                                  <span className="text-12 text-secondary/60">
                                    Completion
                                  </span>

                                  <span className="text-12 font-bold text-secondary">
                                    {Math.round(percentage)}%
                                  </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                                  <div
                                    className={`h-full rounded-full transition-all duration-300 ${
                                      percentage >= 100
                                        ? "bg-emerald-500"
                                        : "bg-primary"
                                    }`}
                                    style={{
                                      width: `${percentage}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            </td>

                            <td className="px-5 py-4">
                              <StatusBadge status={status} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

type SummaryCardProps = {
  label: string;
  value: string;
  highlighted?: boolean;
  className?: string;
};

function SummaryCard({
  label,
  value,
  highlighted = false,
  className = "",
}: SummaryCardProps) {
  return (
    <article
      className={`rounded-2xl border p-4 shadow-sm desktop-sm:p-5 ${
        highlighted
          ? "border-primary bg-primary text-white"
          : "border-slate-200 bg-white text-secondary"
      } ${className}`}
    >
      <p
        className={`text-12 font-semibold uppercase tracking-[0.08em] ${
          highlighted ? "text-white/70" : "text-secondary/60"
        }`}
      >
        {label}
      </p>

      <p className="mt-3 font-arialnb text-24 font-bold">{value}</p>
    </article>
  );
}

type BrandMetricProps = {
  label: string;
  value: string;
};

function BrandMetric({ label, value }: BrandMetricProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-2">
      <p className="text-12 text-secondary/60">{label}</p>

      <p className="mt-1 text-14 font-bold text-secondary">{value}</p>
    </div>
  );
}

type CurrencyInputProps = {
  value: number;
  label: string;
  onChange: (value: string) => void;
};

function CurrencyInput({ value, label, onChange }: CurrencyInputProps) {
  return (
    <div className="relative w-40">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-14 font-semibold text-secondary/50">
        ₹
      </span>

      <input
        type="number"
        min="0"
        value={value || ""}
        aria-label={label}
        placeholder="0"
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-8 pr-3 text-14 font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

type StatusBadgeProps = {
  status: SalesStatus;
};

function StatusBadge({ status }: StatusBadgeProps) {
  const isAchieved = status === "Achievement";

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-3 py-2 text-12 font-bold ${
        isAchieved
          ? "bg-emerald-100 text-emerald-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      <span
        className={`mr-2 h-2 w-2 rounded-full ${
          isAchieved ? "bg-emerald-500" : "bg-red-500"
        }`}
      />

      {status}
    </span>
  );
}
