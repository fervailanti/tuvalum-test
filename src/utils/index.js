export const normalizeAmmount = (str) => {
  const fixedStr = str.replace('.', '').replace(',', '.').replace(' ', '')
  return parseFloat(fixedStr)
}

export const getPriceSumFromProducts = (products) => {
  return products.reduce((acc, { price }) => acc + normalizeAmmount(price), 0)
}

export const formatCurrency = (ammount) => {
  const fixedAmmount = typeof ammount === 'string' ? normalizeAmmount(ammount) : ammount
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(fixedAmmount)
}

export const checkAddedProduct = (products, id) => {
  return products.find((product) => product.id === id)
}
