export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): boolean => {
  return password.length >= 8
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,}$/
  return phoneRegex.test(phone.replace(/[^0-9]/g, ''))
}

export const validateAmount = (amount: number, minimum: number = 0): boolean => {
  return amount > minimum && amount <= 999999
}

export const validateTransactionId = (txId: string): boolean => {
  return txId.length >= 5 && txId.length <= 50
}
