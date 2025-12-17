import { ZIG_ZAG_GAP } from "../../constants/constants";
import type { ZigZagItem } from "../../interface/auth";
import { useZigZagLayoutStore } from "../../store/useZigZagLayoutStore";

interface ZigZagLayoutProps {
  items: ZigZagItem[];
}

const ZigZagResult = ({ items }: ZigZagLayoutProps) => {
  return (
    <section className={`flex flex-col ${ZIG_ZAG_GAP}`}>
      {items.map((item, index) => (
        <ZigZagLayout key={item.id} item={item} index={index} />
      ))}
    </section>
  );
};
export default ZigZagResult;
interface ZigZagRowProps {
  item: ZigZagItem;
  index: number;
}

const ZigZagLayout = ({ item, index }: ZigZagRowProps) => {
  const { reverse } = useZigZagLayoutStore();

  const isReversed = reverse ? index % 2 === 0 : index % 2 !== 0;
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${
        isReversed ? "md:flex-row-reverse" : ""
      } md:flex`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};
