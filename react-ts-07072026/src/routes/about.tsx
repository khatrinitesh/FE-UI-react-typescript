import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from '../components/pages/PageShell'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const features = [
    'Type-safe routing with route files',
    'Common Fetch API service with loading, error, and data state',
    'Reusable input, textarea, button, loader, and layout components',
    'Global UI state using Zustand',
  ]

  return (
    <PageShell
      eyebrow="About page"
      title="Clean frontend architecture for fresher projects"
      description="This starter separates routes, components, services, interfaces, constants, utilities, assets, and store logic so the project remains easy to understand and grow."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="font-semibold text-slate-900 dark:text-white">{feature}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
