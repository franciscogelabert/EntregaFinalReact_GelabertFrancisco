import React from 'react';
import CartList from './CartList.jsx';
import { useContext } from "react";
import CartContext from "../context/CartContext";


const CartListContainer = () => {
  const contexto= useContext(CartContext);

  return <CartList productos={contexto.cart} />;
};

export default CartListContainer;
