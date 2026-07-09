import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

interface ComparisonFeature {
  feature: string
  basic: boolean | string
  pro: boolean | string
  enterprise: boolean | string
}

const comparisonData: ComparisonFeature[] = [
  {
    feature: "Responsive Design",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Custom Components",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "API Integration",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Admin Dashboard",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Priority Support",
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Users",
    basic: "5 Users",
    pro: "50 Users",
    enterprise: "Unlimited",
  },
]

function TableValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
        <Check size={18} />
      </span>
    ) : (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
        <X size={18} />
      </span>
    )
  }

  return (
    <span className="text-sm font-semibold text-slate-700">
      {value}
    </span>
  )
}

export default function ComparisonTable() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Compare Plans
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Choose Your Best Plan
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Compare all features and select the package that fits your project requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    Features
                  </th>

                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">
                    Basic
                  </th>

                  <th className="relative px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">
                    <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-black uppercase text-slate-950">
                      Popular
                    </span>
                    <span className="mt-6 block">Pro</span>
                  </th>

                  <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">
                    Enterprise
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={item.feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                    }}
                    className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
                  >
                    <td className="px-6 py-5 text-sm font-bold text-slate-900">
                      {item.feature}
                    </td>

                    <td className="px-6 py-5 text-center">
                      <TableValue value={item.basic} />
                    </td>

                    <td className="bg-cyan-50 px-6 py-5 text-center">
                      <TableValue value={item.pro} />
                    </td>

                    <td className="px-6 py-5 text-center">
                      <TableValue value={item.enterprise} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}