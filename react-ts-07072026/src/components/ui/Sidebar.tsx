import { Link, useLocation } from '@tanstack/react-router'
import {
    ChevronLeft,
    ChevronRight,
    Home,
    Info,
    Mail,
    Menu,
    Package,
    X,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

interface SidebarLink {
  label: string
  path: string
  icon: React.ElementType
}

const sidebarLinks: SidebarLink[] = [
  {
    label: 'Home',
    path: '/',
    icon: Home,
  },
  {
    label: 'About',
    path: '/about',
    icon: Info,
  },
  {
    label: 'Products',
    path: '/product',
    icon: Package,
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: Mail,
  },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const location = useLocation()

  const closeMobileSidebar = () => {
    setIsMobileOpen(false)
  }

  return (
    <>
      {/* Mobile Open Button */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-slate-950 p-3 text-white shadow-lg lg:hidden"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={closeMobileSidebar}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? 88 : 280,
          x: isMobileOpen ? 0 : undefined,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-slate-200
          bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-5 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-red-500 text-lg font-black text-white">
              F
            </div>

            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
              >
                <h1 className="text-lg font-black text-slate-950 dark:text-white">
                  Frontend
                </h1>
                <p className="text-xs font-medium text-slate-500">
                  Dashboard
                </p>
              </motion.div>
            )}
          </div>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={closeMobileSidebar}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden dark:hover:bg-slate-900"
          >
            <X size={20} />
          </button>
        </div>

        {/* Desktop Collapse Button */}
        <div className="hidden px-5 pt-5 lg:block">
          <button
            type="button"
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            {isCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <>
                <ChevronLeft size={18} />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 space-y-2 px-4 py-6">
          {sidebarLinks.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileSidebar}
                className={`
                  group flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-bold transition
                  ${
                    isActive
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
                  }
                  ${isCollapsed ? 'justify-center' : 'justify-start'}
                `}
              >
                <Icon size={21} className="shrink-0" />

                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-4 dark:border-slate-800">
          <div
            className={`
              flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-slate-900
              ${isCollapsed ? 'justify-center' : 'justify-start'}
            `}
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
              A
            </div>

            {!isCollapsed && (
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">
                  Admin User
                </p>
                <p className="text-xs text-slate-500">admin@email.com</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>
    </>
  )
}