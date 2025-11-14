type SelectButtonProps = {
  selected: boolean;
  onSelect: () => void;
};

const SelectButton = ({ selected, onSelect }: SelectButtonProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        w-full flex items-center justify-center gap-3 rounded-full px-5 py-3
        transition-colors cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-white
        ${
          selected
            ? "bg-white text-[#6e38b6]" // selected state
            : "bg-white/10 hover:bg-white/15 border border-white/25 text-white"
        }
      `}
    >
      {/* Custom radio */}
      <span
        className={`
          flex items-center justify-center
          w-5 h-5 rounded-full
          ${
            selected
              ? "" // no default border, we draw it inside
              : "border-2 border-white/50 bg-transparent"
          }
        `}
      >
        {selected && (
          <span
            className="
              flex items-center justify-center
              w-full h-full rounded-full
              border-[2px] border-[#6e38b6]
            "
          >
            {/* cyan ring */}
            <span
              className="
                flex items-center justify-center
                w-4 h-4 rounded-full
                bg-[#71c8ff]
              "
            >
              {/* white center */}
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
            </span>
          </span>
        )}
      </span>

      {/* LABEL: this is what you were missing */}
      <span className="text-[0.938rem] congenial-medium">
        {selected ? "Selected version" : "Select"}
      </span>
    </button>
  );
};

export default SelectButton;
