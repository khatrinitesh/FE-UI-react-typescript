export const validateFullName = (value: string) => {
  const fullName = value.trim()

  if (!fullName) {
    return "Full name is required"
  }

  if (fullName.length < 3) {
    return "Full name must be at least 3 characters"
  }

  if (fullName.length > 40) {
    return "Full name must be less than 40 characters"
  }

  return undefined
}

export const validateEmail = (value: string) => {
  const email = value.trim()

  if (!email) {
    return "Email is required"
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return "Enter a valid email address"
  }

  return undefined
}

export const validateMobileNumber = (value: string) => {
  const mobile = value.trim()

  if (!mobile) {
    return "Mobile number is required"
  }

  const mobileRegex = /^[6-9]\d{9}$/

  if (!mobileRegex.test(mobile)) {
    return "Enter a valid 10 digit mobile number"
  }

  return undefined
}

export const validateMessage = (value: string) => {
  const message = value.trim()

  if (!message) {
    return "Message is required"
  }

  if (message.length < 10) {
    return "Message must be at least 10 characters"
  }

  if (message.length > 200) {
    return "Message must be less than 200 characters"
  }

  return undefined
}