import { CLIENTS } from "../../constants/clientsData"
import ClientLogo from "./ClientLogo"


const Clients = () => {
  return (
     <section className="py-14 bg-white border-t overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">Our Clients</h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max marquee gap-16">
          {/* Duplicate logos for seamless loop */}
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] grayscale hover:grayscale-0 transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
