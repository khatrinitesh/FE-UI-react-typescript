import { useState } from "react";
import { ALL_INSPIRATIONS } from "../../constants/constants";
import FieldTextarea from "../UI/FieldTextarea/FieldTextarea";
import Inspirations from "../Inspirations/Inspirations";

const pickRandomItems = (source: string[], count: number): string[] => {
  const copy = [...source];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
};

const MomentFormCard = () => {
  const [text, setText] = useState("");
  const [inspirationItems, setInspirationItems] = useState<string[]>(
    () => pickRandomItems(ALL_INSPIRATIONS, 3) // 3 random ideas by default
  );

  const handleRefresh = () => {
    setInspirationItems(pickRandomItems(ALL_INSPIRATIONS, 3));
  };
  return (
    <div className="fillForm bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-5 rounded-[24px]">
      <div className="formGrp mb-4">
        <label className="block mb-2 color-purple-3 text-[0.938rem] congenial-medium">
          Describe the moment
        </label>
        <FieldTextarea
          name="moment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe the moment you want to immortalize..."
          maxLength={500}
        />
      </div>

      <Inspirations
        items={inspirationItems}
        onSelectItem={(val) => setText(val)}
        onRefresh={handleRefresh}
      />
    </div>
  );
};

export default MomentFormCard;
