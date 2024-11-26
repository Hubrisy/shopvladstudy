export const isString = (value: unknown): value is string => {
  return typeof value === "string"
}

export const isValidString = (
  value: unknown,
  min = 0,
  max = 120
): value is string => {
  if (!isString(value)) {
    return false
  }

  if (value.length < min || value.length > max) {
    return false
  }

  return true
}
