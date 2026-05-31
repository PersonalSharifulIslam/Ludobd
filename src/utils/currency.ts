export const formatCurrency = (amount: number): string => {
  return `৳${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US')
}

export const parseCurrency = (str: string): number => {
  return parseFloat(str.replace(/[^0-9.-]+/g, ''))
}

export const formatShortNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}
