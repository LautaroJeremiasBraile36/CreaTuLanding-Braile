import CartContext from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getTotalProd = () =>
    cart.reduce((acc, current) => acc + current.count, 0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isInCart = prevCart.some((prod) => prod.id === product.id);

      if (isInCart) {
        return prevCart.map((prod) =>
          prod.id === product.id
            ? { ...prod, count: prod.count + product.count }
            : prod
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const deleteFromCart = (id) => {
    const newCart = cart.filter((prod) => prod.id !== id);
    setCart(newCart);
  };
  const value = {
    getTotalProd,
    addToCart,
    cart,
    deleteFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
