import { useStatsStore } from "../../store/statsStore";
import StatsCard from "./StatsCard";


const HeroSection1 = () => {
     const stats = useStatsStore((state) => state.stats);
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* LEFT SIDE */}
      <div
        className="lg:w-1/2 w-full flex items-center justify-center px-8 py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/light-texture.jpg')" }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center leading-snug max-w-xl">
          TRUSTED IT AND CYBER <br />
          SECURITY SERVICES PROVIDER
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full bg-[#0A4D82] flex flex-col justify-center">
        {stats.map((item, index) => (
          <StatsCard
            key={item.id}
            item={item}
            isLast={index === stats.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection1
