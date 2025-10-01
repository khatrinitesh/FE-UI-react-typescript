import { forwardRef } from "react";

interface BikeProps {
  name: string;
  color: string;
}

const Bike = forwardRef<HTMLDivElement, BikeProps>(({ name, color }, ref) => {
  return (
    <div
      ref={ref}
      className="w-20 h-12 rounded-md flex items-center justify-center font-semibold text-white shadow-md"
      style={{ backgroundColor: color }}
    >
      🏍️ {name}
    </div>
  );
});

export default Bike;
