import type { WhyCardProps } from "./why.types"

const WhyCard = ({ title,
  description,
  icon: Icon,
  highlight,}:WhyCardProps) => {
  return (
    <div
      className={`rounded-2xl shadow-lg p-8 transition hover:-translate-y-2 duration-300
        ${highlight ? "bg-[#0b4a8b] text-white" : "bg-white text-gray-800"}
      `}
    >
      <div className="flex justify-center mb-6">
        <div
          className={`p-4 rounded-full border-2 ${
            highlight ? "border-white" : "border-[#0b4a8b]"
          }`}
        >
          <Icon size={36} />
        </div>
      </div>

      <h3
        className={`text-xl font-semibold mb-4 text-center ${
          highlight ? "text-white" : "text-[#0b4a8b]"
        }`}
      >
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-center opacity-90">
        {description}
      </p>
    </div>
  )
}

export default WhyCard
