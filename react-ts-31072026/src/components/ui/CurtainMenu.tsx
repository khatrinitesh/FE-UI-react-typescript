import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function CurtainMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Products", "Services", "Pricing", "Contact"];

  return (
    <>
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5">
        <h1 className="text-xl font-bold">Brand</h1>

        <button onClick={() => setOpen(true)}>
          <Menu size={30} />
        </button>
      </header>

      {/* Curtain */}
      <div
        className={`fixed inset-0 z-50 bg-black text-white transition-all duration-700 ease-in-out ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-8 top-8"
        >
          <X size={34} />
        </button>

        <div className="flex h-full flex-col items-center justify-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item}
              className="text-5xl font-bold hover:text-green-400 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
