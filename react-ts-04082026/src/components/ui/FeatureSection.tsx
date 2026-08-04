import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

const features: Feature[] = [
  {
    title: "Fast Performance",
    description:
      "Optimized architecture provides a fast and responsive experience across all devices.",
    icon: Zap,
    href: "/features/performance",
  },
  {
    title: "Secure Platform",
    description:
      "Modern security practices keep your application and customer information protected.",
    icon: ShieldCheck,
    href: "/features/security",
  },
  {
    title: "Smart Automation",
    description:
      "Automate repetitive processes and improve your team's overall productivity.",
    icon: Sparkles,
    href: "/features/automation",
  },
  {
    title: "Detailed Analytics",
    description:
      "Understand performance through clear reports, insights, and real-time statistics.",
    icon: BarChart3,
    href: "/features/analytics",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#009eff]/10 px-4 py-2 text-sm font-medium text-[#009eff]">
            Our Features
          </span>

          <h2 className="text-[clamp(2rem,5vw,3.75rem)] leading-tight font-semibold text-slate-900">
            Everything you need to grow
          </h2>

          <p className="mt-5 text-[clamp(1rem,2vw,1.125rem)] leading-7 text-[#525659]">
            Powerful tools designed to simplify your workflow, increase
            productivity, and improve customer experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon, href }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#009eff]/40 hover:shadow-xl"
            >
              <span className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-[#009eff]/10 text-[#009eff] transition-all duration-300 group-hover:bg-[#009eff] group-hover:text-white">
                <Icon size={24} aria-hidden="true" />
              </span>

              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-[#525659]">
                {description}
              </p>

              {href && (
                <a
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-[#009eff] transition-all duration-300 hover:gap-3"
                >
                  Learn more
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
