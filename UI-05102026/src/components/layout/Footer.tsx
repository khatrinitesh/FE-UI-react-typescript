export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="text-sm text-zinc-400">
          © {currentYear} College Portal.
        </p>

        <p className="text-sm text-zinc-500">
          Student & Teacher Platform
        </p>
      </div>
    </footer>
  )
}