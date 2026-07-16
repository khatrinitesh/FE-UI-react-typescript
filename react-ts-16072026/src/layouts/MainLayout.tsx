import { Outlet } from '@tanstack/react-router'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
