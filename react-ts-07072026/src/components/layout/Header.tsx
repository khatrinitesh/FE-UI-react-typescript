import { Link } from '@tanstack/react-router'
import { APP_NAME } from '../../constants/app.constants'
import { NAV_LINKS } from '../../constants/routes.constants'
import { useAppStore } from '../../store/app.store'
import { Button } from '../common/Button'


export function Header() {
  const theme = useAppStore((state) => state.theme)
  const toggleTheme = useAppStore((state) => state.toggleTheme)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-black tracking-tight text-slate-950 dark:text-white">
          {APP_NAME}
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white [&.active]:bg-slate-950 [&.active]:text-white dark:[&.active]:bg-white dark:[&.active]:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button type="button" variant="secondary" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </Button>
      </div>
    </header>
  )
}
