export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-sm text-gray-500">
          © {currentYear} My App. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">Built with React TypeScript</p>
      </div>
    </footer>
  )
}