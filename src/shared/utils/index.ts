const formatPrice = (price: string | number) => {
  return `R$ ${Number(price).toFixed(2).replace('.', ',')}`;
};

export { formatPrice };
