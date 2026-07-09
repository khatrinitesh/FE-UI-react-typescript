import { motion } from "framer-motion"
import { FileText, ImageIcon, Upload, X } from "lucide-react"
import { useRef, useState, type ChangeEvent, type DragEvent } from "react"

type UploadedFile = {
  file: File
  preview: string | null
}

export default function CustomFileUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState("")

  const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"]
  const maxSize = 5 * 1024 * 1024 // 5MB

  const handleFile = (file: File) => {
    setError("")

    if (!allowedTypes.includes(file.type)) {
      setError("Only PNG, JPG, JPEG and PDF files are allowed.")
      return
    }

    if (file.size > maxSize) {
      setError("File size must be less than 5MB.")
      return
    }

    const preview = file.type.startsWith("image/")
      ? URL.createObjectURL(file)
      : null

    setUploadedFile({
      file,
      preview,
    })
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    handleFile(file)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)

    const file = event.dataTransfer.files?.[0]

    if (!file) return

    handleFile(file)
  }

  const handleRemoveFile = () => {
    if (uploadedFile?.preview) {
      URL.revokeObjectURL(uploadedFile.preview)
    }

    setUploadedFile(null)

    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  const openFilePicker = () => {
    inputRef.current?.click()
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      <motion.div
        onClick={openFilePicker}
        onDrop={handleDrop}
        onDragOver={(event) => {
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{
              y: isDragging ? -8 : 0,
              rotate: isDragging ? 8 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600"
          >
            <Upload size={30} />
          </motion.div>

          <h3 className="text-xl font-bold text-slate-900">
            Upload your file
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Drag and drop file here or click to browse
          </p>

          <p className="mt-3 text-xs font-medium text-slate-400">
            PNG, JPG, JPEG or PDF up to 5MB
          </p>
        </div>
      </motion.div>

      {error && (
        <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {uploadedFile && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
              {uploadedFile.preview ? (
                <img
                  src={uploadedFile.preview}
                  alt="Preview"
                  className="size-full object-cover"
                />
              ) : uploadedFile.file.type === "application/pdf" ? (
                <FileText className="text-red-500" size={28} />
              ) : (
                <ImageIcon className="text-blue-500" size={28} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-bold text-slate-900">
                {uploadedFile.file.name}
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <button
              type="button"
              onClick={handleRemoveFile}
              className="flex size-9 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}