import { FileText, Image, UploadCloud, X } from "lucide-react";
import { useRef, useState } from "react";

interface FileUploadProps {
  accept?: string;
  maxSize?: number; // MB
  onChange?: (file: File | null) => void;
}

export default function FileUpload({
  accept = "*",
  maxSize = 5,
  onChange,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const handleFile = (selected: File) => {
    if (selected.size > maxSize * 1024 * 1024) {
      alert(`Maximum file size is ${maxSize}MB`);
      return;
    }

    setFile(selected);
    onChange?.(selected);

    if (selected.type.startsWith("image")) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview("");
    }
  };

  const removeFile = () => {
    setFile(null);
    setPreview("");
    onChange?.(null);
  };

  return (
    <>
      <input
        ref={inputRef}
        hidden
        type="file"
        accept={accept}
        onChange={(e) => {
          const selected = e.target.files?.[0];

          if (selected) {
            handleFile(selected);
          }
        }}
      />

      {!file ? (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();

            const selected = e.dataTransfer.files[0];

            if (selected) {
              handleFile(selected);
            }
          }}
          className="
            cursor-pointer
            rounded-2xl
            border-2
            border-dashed
            border-primary
            bg-primary/5
            p-10
            transition
            hover:bg-primary/10
          "
        >
          <div className="flex flex-col items-center">
            <UploadCloud size={60} className="text-primary" />

            <h3 className="mt-5 text-xl font-semibold">Upload File</h3>

            <p className="mt-2 text-gray-500">Drag & Drop or Click to Browse</p>

            <p className="mt-1 text-sm text-gray-400">Max Size: {maxSize} MB</p>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border bg-white p-5 shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {preview ? (
                <img
                  src={preview}
                  alt=""
                  className="h-20 w-20 rounded-lg object-cover"
                />
              ) : file.type.includes("pdf") ? (
                <FileText size={48} className="text-red-500" />
              ) : (
                <Image size={48} className="text-primary" />
              )}

              <div>
                <h4 className="font-semibold">{file.name}</h4>

                <p className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <button
              onClick={removeFile}
              className="
                rounded-full
                bg-red-100
                p-2
                text-red-600
                transition
                hover:bg-red-200
              "
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
