import { useRef, useState } from "react";
import type { UploadDropzoneProps } from "../../../interface";
import { Upload } from "lucide-react";

const UploadDropzone = ({
  onFilesSelected,
  title = "Click to upload or drag and drop your file",
  helperText = "Accepted formats: PNG, JPG, PDF (max. 10 MB)",
  accept = "image/png,image/jpeg,application/pdf",
  multiple = false,
  disabled = false,
  className = "",
}: UploadDropzoneProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onFilesSelected(e.target.files);
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;
    e.preventDefault();
    setIsDragging(false);
    onFilesSelected(e.dataTransfer.files);
  };

  return (
    <div
      className={`
        w-full
        rounded-[20px]
        border-2 border-dashed
        bg-[#f9f5fd]
        p-4
        flex flex-col items-center justify-center text-center
        transition-colors duration-150
        ${isDragging ? "border-[#a892d9] bg-[#f9f5fd]" : "border-[#c9b7f5]"}
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="hidden"
        onChange={handleChange}
      />

      <div className="mb-3 text-[#744fa1]">
        <Upload className=" w-8 h-8" />
      </div>
      <div className="descBlock grid gap-[10px]">
        <p className="text-sm congenial-medium text-[#4E4E4E]">{title}</p>
        <p className="text-sm congenial-medium text-[#4E4E4E]">{helperText}</p>
      </div>
    </div>
  );
};

export default UploadDropzone;
