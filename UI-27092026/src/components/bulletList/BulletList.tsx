interface BulletListProps {
  items: string[];
  bulletColor?: "black" | "blue" | "red" | "green";
  className?: string;
}

const BulletList = ({
  items,
  bulletColor = "black",
  className = "",
}: BulletListProps) => {
  const bulletColorClass = {
    black: "marker:text-black",
    blue: "marker:text-blue-500",
    red: "marker:text-red-500",
    green: "marker:text-green-500",
  };

  return (
    <ul
      className={`list-disc pl-6 ${bulletColorClass[bulletColor]} ${className}`}
    >
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BulletList;