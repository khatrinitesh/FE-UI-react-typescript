import type { StatItem } from "../../interfaces/stats";

interface Props {
  item: StatItem;
  isLast?: boolean;
}

const StatsCard = ({item,isLast}:Props) => {
  return (
     <div className="text-center py-10">
      <h3 className="text-5xl font-bold text-white">{item.value}</h3>
      <p className="mt-3 text-lg text-blue-100">{item.label}</p>

      {!isLast && (
        <div className="mt-10 border-t border-blue-400 w-2/3 mx-auto opacity-40" />
      )}
    </div>
  )
}

export default StatsCard
