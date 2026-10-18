import { useState, type KeyboardEvent } from "react";

interface ContentEditableBorderProps {
  initialValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const ContentEditableBorder = ({
  initialValue = "Click here to edit this text",
  placeholder = "Enter text...",
  onChange,
  className = "",
}: ContentEditableBorderProps) => {
  const [text, setText] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const value = event.currentTarget.textContent ?? "";
    setText(value);
    onChange?.(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.currentTarget.textContent = text;
      event.currentTarget.blur();
      setIsEditing(false);
    }

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.blur();
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`contenteditable-border w-full max-w-lg rounded-xl border bg-white p-4 transition-colors ${isEditing ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-300 hover:border-gray-400"} ${className}`}
    >
      <div
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-label="Editable text"
        aria-multiline="true"
        onInput={handleInput}
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
        onKeyDown={handleKeyDown}
        data-placeholder={placeholder}
        className="min-h-16 whitespace-pre-wrap break-words text-sm text-gray-800 outline-none empty:before:text-gray-400 empty:before:content-[attr(data-placeholder)]"
      />
    </div>
  );
};

export default ContentEditableBorder;
