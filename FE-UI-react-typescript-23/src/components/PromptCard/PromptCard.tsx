import { useState } from "react";
import SelectButton from "../UI/SelectButton/SelectButton";

type PromptCardProps = {
  versionLabel?: string;
  title: string;
  lines: string[];
};

const PromptCard = ({
  versionLabel = "Version 1 / 1",
  title,
  lines,
}: PromptCardProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="w-[full] max-w-[85%] rounded-tl-[4px] rounded-[20px] bg-[#6e4ca5] text-white p-5 shadow-lg">
      {/* Top label */}
      <div className="text-sm congenial-regular opacity-80 mb-2">
        {versionLabel}
      </div>

      {/* Title */}
      <h3 className="text-lg congenial-medium mb-4">{title}</h3>

      {/* Body lines */}
      <div className="space-y-1 mb-6 text-base congenial-regular leading-normal">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <SelectButton
        selected={selected}
        onSelect={() => setSelected((prev) => !prev)}
      />
    </div>
  );
};

export default PromptCard;
