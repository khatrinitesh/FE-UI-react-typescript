import type { ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="appLayout flex min-h-screen flex-col bg-slate-50">
      <Header />

      <div className="mainContent flex-1">{children}</div>

      <Footer />
    </div>
  )
}