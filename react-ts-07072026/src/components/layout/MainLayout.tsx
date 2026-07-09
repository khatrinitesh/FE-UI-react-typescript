import type { ReactNode } from 'react'
import { useAppStore } from '../../store/app.store'
import { Footer } from './Footer'
import { Header } from './Header'


interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const theme = useAppStore((state) => state.theme)

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-950 transition dark:bg-slate-950 dark:text-white">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
