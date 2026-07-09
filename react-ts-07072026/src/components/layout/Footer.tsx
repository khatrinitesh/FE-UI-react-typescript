import { APP_NAME } from "../../constants/app.constants";


export function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} {APP_NAME}. All rights reserved.</p>
        <p>Built with React, TypeScript, TanStack, Tailwind CSS, Sonner, Fetch API, and Zustand.</p>
      </div>
    </footer>
  )
}
