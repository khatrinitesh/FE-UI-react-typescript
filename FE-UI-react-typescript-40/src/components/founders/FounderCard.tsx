import type { Founder } from "../../interfaces/founder";


interface Props {
  founder: Founder;
}


const FounderCard = ({founder }:Props) => {
  return (
      <div className="flex flex-col items-center text-center max-w-xl">
      <img
        src={founder.image}
        alt={founder.name}
        className="w-64 h-64 object-cover rounded-xl shadow-lg"
      />

      <h3 className="mt-6 text-2xl font-semibold text-gray-900">
        {founder.name}
      </h3>

      <p className="text-gray-600 font-medium mb-4">
        {founder.designation}
      </p>

      <p className="text-gray-700 text-sm leading-relaxed">
        {founder.description}
      </p>
    </div>
  )
}

export default FounderCard
