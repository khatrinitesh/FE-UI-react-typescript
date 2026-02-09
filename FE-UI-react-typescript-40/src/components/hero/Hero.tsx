import { Send } from "lucide-react";
import { HERO_CONTENT } from "../../constants/heroContent";
import type { HeroProps } from "./hero.types"


export default function HeroSection() {
  return <Hero {...HERO_CONTENT} />;
}


const Hero = ({title, subtitle, buttonText}:HeroProps) => {
  return (
   <section className="relative bg-gradient-to-b from-[#0d3b66] to-[#f5f7fa] text-center py-24 px-6">
      {/* Overlay texture feel */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
        )}

        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-2 bg-[#0b5ed7] hover:bg-[#094db1] text-white font-medium px-6 py-3 rounded-md shadow-lg transition">
            {buttonText}
            <Send size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}


