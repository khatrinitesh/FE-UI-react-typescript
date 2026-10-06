export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isValidPassword(value: string) {
  // Minimum:
  // 8 characters
  // uppercase
  // lowercase
  // number
  // special character

  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(
    value
  )
}

export function isValidPhone(value: string) {
  const phone = value.replace(/[\s()-]/g, "")

  return /^\+?[0-9]{7,15}$/.test(phone)
}

function hasExtension(
  value: string,
  extensions: string[]
) {
  try {
    const url = new URL(value)

    const pathname = url.pathname.toLowerCase()

    return extensions.some((extension) =>
      pathname.endsWith(extension)
    )
  } catch {
    return false
  }
}

export function isValidImageUrl(value: string) {
  return hasExtension(value, [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".svg",
    ".avif",
  ])
}

export function isValidVideoUrl(value: string) {
  return hasExtension(value, [
    ".mp4",
    ".webm",
    ".mov",
    ".m4v",
  ])
}

export function isValidPdfUrl(value: string) {
  return hasExtension(value, [".pdf"])
}

export function isValidUrl(value: string) {
  try {
    const url = new URL(value)

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    )
  } catch {
    return false
  }
}