import type { Client } from "../../constants/clientsData"


const ClientLogo = ({name,logo}:Client) => {
  return (
   <div className="flex items-center justify-center min-w-[140px] px-6 py-4 grayscale hover:grayscale-0 transition">
      <img
        src={logo}
        alt={name}
        className="max-h-12 object-contain"
      />
    </div>
  )
}

export default ClientLogo
