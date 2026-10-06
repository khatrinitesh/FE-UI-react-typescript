import {
    FileUp,
    X,
} from "lucide-react"
import {
    useRef,
    useState,
    type ChangeEvent,
    type CSSProperties,
    type InputHTMLAttributes,
} from "react"

import Button, {
    type ButtonVariant,
} from "./Button"

import { cn } from "../../utils/cn"
import { notifyDanger } from "../../utils/notify"

type FileUploadProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange" | "size"
> & {
  enabled?: boolean

  buttonText?: string
  selectedText?: string

  variant?: ButtonVariant

  maxSizeBytes?: number

  showFileName?: boolean
  showClear?: boolean

  className?: string
  buttonClassName?: string
  fileNameClassName?: string

  style?: CSSProperties

  onChange?: (
    event: ChangeEvent<HTMLInputElement>
  ) => void

  onFilesChange?: (
    files: File[]
  ) => void

  onClear?: () => void
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`
  }

  if (bytes < 1024 * 1024) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`
  }

  return `${(
    bytes /
    (1024 * 1024)
  ).toFixed(1)} MB`
}

export default function FileUpload({
  enabled = true,

  buttonText = "Choose file",
  selectedText,

  variant = "outline",

  accept,
  multiple = false,
  disabled = false,

  maxSizeBytes,

  showFileName = true,
  showClear = true,

  className,
  buttonClassName,
  fileNameClassName,

  style,

  onChange,
  onFilesChange,
  onClear,

  ...props
}: FileUploadProps) {
  const inputRef =
    useRef<HTMLInputElement>(null)

  const [files, setFiles] =
    useState<File[]>([])

  const isDisabled =
    disabled || !enabled

  function handleSelect() {
    if (isDisabled) {
      return
    }

    inputRef.current?.click()
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const selectedFiles =
      Array.from(
        event.target.files ?? []
      )

    if (!selectedFiles.length) {
      return
    }

    if (maxSizeBytes) {
      const oversizedFile =
        selectedFiles.find(
          (file) =>
            file.size > maxSizeBytes
        )

      if (oversizedFile) {
        notifyDanger(
          `${oversizedFile.name} exceeds the maximum file size of ${formatFileSize(
            maxSizeBytes
          )}`
        )

        event.target.value = ""
        return
      }
    }

    const nextFiles = multiple
      ? selectedFiles
      : selectedFiles.slice(0, 1)

    setFiles(nextFiles)

    onChange?.(event)
    onFilesChange?.(nextFiles)
  }

  function handleClear() {
    setFiles([])

    if (inputRef.current) {
      inputRef.current.value = ""
    }

    onClear?.()
  }

  const fileText =
    selectedText ??
    files
      .map((file) => file.name)
      .join(", ")

  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-center gap-3",
        className
      )}
      style={style}
    >
      <input
        {...props}
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={isDisabled}
        onChange={handleChange}
        className="sr-only"
      />

      <Button
        type="button"
        variant={variant}
        enabled={enabled}
        disabled={disabled}
        icon={<FileUp size={18} />}
        iconPosition="left"
        onClick={handleSelect}
        className={buttonClassName}
      >
        {buttonText}
      </Button>

      {showFileName && files.length > 0 && (
        <span
          className={cn(
            "max-w-xs truncate text-sm text-zinc-600",
            fileNameClassName
          )}
          title={fileText}
        >
          {fileText}
        </span>
      )}

      {showClear &&
        files.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            icon={<X size={17} />}
            aria-label="Clear selected file"
            title="Clear selected file"
            onClick={handleClear}
            className="size-10 px-0"
          >
            <span className="sr-only">
              Clear
            </span>
          </Button>
        )}
    </span>
  )
}