
import type { ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>

      <Footer />
    </div>
  )
}