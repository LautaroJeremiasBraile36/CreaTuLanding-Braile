import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const getTotalProd = () => cart.reduce((acc, current) => acc + current, 0);

  return (
    <CartContext.Provider value={getTotalProd}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
