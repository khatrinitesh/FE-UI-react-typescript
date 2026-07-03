
export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
     <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        © {currentYear} My Website. All rights reserved.
      </footer>
  )
}
