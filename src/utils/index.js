// Calcula el precio total
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
};

// Calcula el total de productos
export const totalProducts = (products) => {
  return products.reduce((sum, product) => sum + product.quantity, 0);
};

// Formatea un precio total
export const formatTotalPrice = (products, currency = "USD", locale = "en-US") => {
  const total = totalPrice(products);
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(total);
};
