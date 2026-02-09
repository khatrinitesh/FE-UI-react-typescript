import { useFoundersStore } from "../../store/foundersStore";
import FounderCard from "./FounderCard";


const FoundersSection = () => {
      const founders = useFoundersStore((state) => state.founders);
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-700 via-blue-400 to-gray-100">
      <h2 className="text-center text-4xl font-bold text-black mb-14">
        Meet the Founders
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-16">
        {founders.map((founder) => (
          <FounderCard key={founder.id} founder={founder} />
        ))}
      </div>
    </section>
  )
}

export default FoundersSection
