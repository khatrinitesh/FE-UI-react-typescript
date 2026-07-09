
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { PAGE_ANIMATION } from '../../constants/app.constants'

interface PageShellProps {
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <motion.section {...PAGE_ANIMATION} className="space-y-8">
      <div className="max-w-3xl space-y-3">
        {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p> : null}
        <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl">{title}</h1>
        {description ? <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  )
}
