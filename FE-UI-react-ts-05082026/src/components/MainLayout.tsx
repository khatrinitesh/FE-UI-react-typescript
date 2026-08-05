import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function MainLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col"><Header /><main className="mx-auto w-full max-w-6xl flex-1 px-5 py-16 sm:px-8">{children}</main><Footer /></div>
}
