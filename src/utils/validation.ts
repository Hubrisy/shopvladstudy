export const emailValidation = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Вернуть объект RegExp

  return regex.test(email)
}

export const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^[0-9]{12}$/

  return regex.test(phoneNumber)
}
