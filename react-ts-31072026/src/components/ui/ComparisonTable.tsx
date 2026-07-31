import {
  Check,
  Crown,
  Minus,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";

type FeatureValue = boolean | string | number | null;

type Plan = {
  id: string;
  name: string;
  description: string;
  price: string;
  period?: string;
  icon: LucideIcon;
  recommended?: boolean;
  buttonLabel: string;
};

type ComparisonFeature = {
  id: string;
  category: string;
  label: string;
  values: Record<string, FeatureValue>;
};

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "For individuals getting started",
    price: "₹999",
    period: "/month",
    icon: Sparkles,
    buttonLabel: "Choose Basic",
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing teams and businesses",
    price: "₹2,499",
    period: "/month",
    icon: Crown,
    recommended: true,
    buttonLabel: "Choose Professional",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organisations",
    price: "Custom",
    icon: Crown,
    buttonLabel: "Contact Sales",
  },
];

const comparisonFeatures: ComparisonFeature[] = [
  {
    id: "users",
    category: "Usage",
    label: "Team members",
    values: {
      basic: "1 user",
      professional: "10 users",
      enterprise: "Unlimited",
    },
  },
  {
    id: "projects",
    category: "Usage",
    label: "Active projects",
    values: {
      basic: "5",
      professional: "50",
      enterprise: "Unlimited",
    },
  },
  {
    id: "storage",
    category: "Usage",
    label: "Cloud storage",
    values: {
      basic: "10 GB",
      professional: "100 GB",
      enterprise: "1 TB+",
    },
  },
  {
    id: "analytics",
    category: "Features",
    label: "Advanced analytics",
    values: {
      basic: false,
      professional: true,
      enterprise: true,
    },
  },
  {
    id: "export",
    category: "Features",
    label: "Report exports",
    values: {
      basic: "PDF",
      professional: "PDF, Excel",
      enterprise: "All formats",
    },
  },
  {
    id: "automation",
    category: "Features",
    label: "Workflow automation",
    values: {
      basic: false,
      professional: true,
      enterprise: true,
    },
  },
  {
    id: "branding",
    category: "Customisation",
    label: "Custom branding",
    values: {
      basic: false,
      professional: true,
      enterprise: true,
    },
  },
  {
    id: "domain",
    category: "Customisation",
    label: "Custom domain",
    values: {
      basic: false,
      professional: false,
      enterprise: true,
    },
  },
  {
    id: "support",
    category: "Support",
    label: "Customer support",
    values: {
      basic: "Email",
      professional: "Priority",
      enterprise: "Dedicated manager",
    },
  },
  {
    id: "sla",
    category: "Support",
    label: "Service-level agreement",
    values: {
      basic: null,
      professional: null,
      enterprise: "99.9% SLA",
    },
  },
];

function FeatureValueCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span
        className="
          inline-flex h-8 w-8 items-center justify-center
          rounded-full bg-emerald-100 text-emerald-700
        "
        aria-label="Included"
      >
        <Check size={17} strokeWidth={3} aria-hidden="true" />
      </span>
    );
  }

  if (value === false) {
    return (
      <span
        className="
          inline-flex h-8 w-8 items-center justify-center
          rounded-full bg-red-50 text-red-500
        "
        aria-label="Not included"
      >
        <X size={16} strokeWidth={2.5} aria-hidden="true" />
      </span>
    );
  }

  if (value === null) {
    return (
      <span
        className="
          inline-flex h-8 w-8 items-center justify-center
          text-slate-300
        "
        aria-label="Not available"
      >
        <Minus size={18} aria-hidden="true" />
      </span>
    );
  }

  return (
    <span className="font-montserrat text-14 font-semibold text-secondary">
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  const categories = Array.from(
    new Set(comparisonFeatures.map((feature) => feature.category)),
  );

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 font-montserrat desktop-sm:px-8">
      <div className="mx-auto max-w-360">
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-12 font-semibold uppercase tracking-[0.18em] text-primary">
            Pricing plans
          </p>

          <h1 className="mt-3 font-arialnb text-40 font-bold leading-tight text-secondary">
            Compare our plans
          </h1>

          <p className="mt-4 text-16 leading-7 text-secondary/70">
            Choose the right package based on your team size, required features,
            and support needs.
          </p>
        </header>

        <section
          className="
            overflow-hidden rounded-3xl border border-slate-200
            bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] table-fixed border-collapse">
              <thead>
                <tr>
                  <th
                    className="
                      sticky left-0 z-20 w-[260px] border-b
                      border-r border-slate-200 bg-white p-6
                      text-left align-bottom
                    "
                  >
                    <p className="font-arialnb text-24 font-bold text-secondary">
                      Plan features
                    </p>

                    <p className="mt-2 text-12 leading-5 text-secondary/60">
                      Compare all available options.
                    </p>
                  </th>

                  {plans.map((plan) => {
                    const Icon = plan.icon;

                    return (
                      <th
                        key={plan.id}
                        className={`
                          relative border-b border-slate-200 p-6
                          text-left align-top
                          ${plan.recommended ? "bg-primary/[0.05]" : "bg-white"}
                        `}
                      >
                        {plan.recommended && (
                          <span
                            className="
                              absolute right-5 top-5 rounded-full
                              bg-primary px-3 py-1 text-12
                              font-semibold text-white
                            "
                          >
                            Recommended
                          </span>
                        )}

                        <span
                          className={`
                            flex h-12 w-12 items-center justify-center
                            rounded-2xl
                            ${
                              plan.recommended
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary"
                            }
                          `}
                        >
                          <Icon size={23} aria-hidden="true" />
                        </span>

                        <h2 className="mt-5 font-arialnb text-24 font-bold text-secondary">
                          {plan.name}
                        </h2>

                        <p className="mt-2 min-h-10 text-12 leading-5 text-secondary/60">
                          {plan.description}
                        </p>

                        <div className="mt-5 flex items-end gap-1">
                          <span className="font-arialnb text-32 font-bold text-secondary">
                            {plan.price}
                          </span>

                          {plan.period && (
                            <span className="pb-1 text-12 text-secondary/60">
                              {plan.period}
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          className={`
                            mt-5 h-11 w-full rounded-xl
                            font-montserrat text-14 font-bold
                            transition focus:outline-none
                            focus:ring-4 focus:ring-primary/20
                            ${
                              plan.recommended
                                ? "bg-primary text-white hover:bg-sky-600"
                                : "border border-primary text-primary hover:bg-primary hover:text-white"
                            }
                          `}
                        >
                          {plan.buttonLabel}
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {categories.map((category) => {
                  const categoryFeatures = comparisonFeatures.filter(
                    (feature) => feature.category === category,
                  );

                  return (
                    <>
                      <tr key={`${category}-heading`}>
                        <td
                          colSpan={plans.length + 1}
                          className="
                            border-y border-slate-200 bg-slate-50
                            px-6 py-3 text-12 font-bold uppercase
                            tracking-[0.12em] text-primary
                          "
                        >
                          {category}
                        </td>
                      </tr>

                      {categoryFeatures.map((feature) => (
                        <tr
                          key={feature.id}
                          className="group transition hover:bg-primary/[0.025]"
                        >
                          <th
                            scope="row"
                            className="
                              sticky left-0 z-10 border-b border-r
                              border-slate-100 bg-white px-6 py-5
                              text-left font-montserrat text-14
                              font-semibold text-secondary
                              group-hover:bg-sky-50
                            "
                          >
                            {feature.label}
                          </th>

                          {plans.map((plan) => (
                            <td
                              key={`${feature.id}-${plan.id}`}
                              className={`
                                border-b border-slate-100 px-6 py-5
                                text-center
                                ${plan.recommended ? "bg-primary/[0.025]" : ""}
                              `}
                            >
                              <FeatureValueCell
                                value={feature.values[plan.id]}
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  );
                })}
              </tbody>

              <tfoot>
                <tr>
                  <td
                    className="
                      sticky left-0 z-10 border-r border-slate-200
                      bg-secondary px-6 py-6 text-white
                    "
                  >
                    <p className="font-arialnb text-20 font-bold">
                      Ready to get started?
                    </p>

                    <p className="mt-1 text-12 text-white/60">
                      Select the plan that works for you.
                    </p>
                  </td>

                  {plans.map((plan) => (
                    <td
                      key={`${plan.id}-footer`}
                      className={`
                        bg-secondary px-6 py-6
                        ${plan.recommended ? "border-x border-white/10" : ""}
                      `}
                    >
                      <button
                        type="button"
                        className={`
                          h-11 w-full rounded-xl font-montserrat
                          text-14 font-bold transition
                          ${
                            plan.recommended
                              ? "bg-primary text-white hover:bg-sky-600"
                              : "border border-white/30 text-white hover:bg-white hover:text-secondary"
                          }
                        `}
                      >
                        {plan.buttonLabel}
                      </button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <p className="mt-4 text-center text-12 text-secondary/60">
          Scroll horizontally on mobile devices to compare all plans.
        </p>
      </div>
    </main>
  );
}
