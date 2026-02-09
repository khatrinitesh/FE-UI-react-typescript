import { NAV_LINKS } from "../constants/navigation"
import NavItem from "./NavItem"


const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Techsec Digital"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </nav>

        {/* CTA Button */}
        <div>
          <button className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
            Talk to an Expert 💬
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
