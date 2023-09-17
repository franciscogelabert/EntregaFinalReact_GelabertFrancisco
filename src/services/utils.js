export const cartQuantity = (cart) => {
  // return cart.reduce((acc, item) => acc + item.quantity, 0)

  let count = 0;

  cart.forEach((item) => {
    count += item.cantidad;
  });

  return count;
};


export const cartPesosQuantity = (cart) => {
  // return cart.reduce((acc, item) => acc + item.quantity, 0)

  let count = 0;

  cart.forEach((item) => {
    count += item.precio * item.cantidad;
  });

  return count;
};

export const parseItemsOrder = (cart) => {
  return cart.map((item) => ({
    id: item.id,
    titulo: item.titulo,
    cantidad: item.cantidad,
    precio: item.precio,
  }));
};