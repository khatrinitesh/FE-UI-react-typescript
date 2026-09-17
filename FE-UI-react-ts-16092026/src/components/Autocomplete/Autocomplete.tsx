import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import "./Autocomplete.css";

interface AutocompleteItem {
  id: number;
  label: string;
}

interface AutocompleteProps {
  data: AutocompleteItem[];
  placeholder?: string;
}

export const Autocomplete = ({ data, placeholder = "Search..." }: AutocompleteProps) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = useMemo(() => {
    if (!value.trim()) return data;
    return data.filter((item) => item.label.toLowerCase().includes(value.toLowerCase()));
  }, [data, value]);

  const handleSelect = (item: AutocompleteItem) => {
    setValue(item.label);
    setIsOpen(false);
  };

  const handleClear = () => {
    setValue("");
    setIsOpen(true);
  };

  return (
    <div className="autocomplete">
      <div className="autocompleteInputWrapper">
        <span className="autocompleteSearchIcon">
          <Search />
        </span>

        <input
          className="autocompleteInput"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            setValue(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />

        {value && (
          <button className="autocompleteClear" type="button" onClick={handleClear} aria-label="Clear search">
            <X />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="autocompleteDropdown">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <button className="autocompleteOption" key={item.id} type="button" onClick={() => handleSelect(item)}>
                {item.label}
              </button>
            ))
          ) : (
            <div className="autocompleteEmpty">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};
