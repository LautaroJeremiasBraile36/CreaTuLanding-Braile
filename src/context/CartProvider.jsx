import CartContext from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const getTotalProd = () =>
    cart.reduce((acc, current) => acc + current.count, 0);
  const addToCart = (product) => {
    const isInCart = cart.some((prod) => prod.id === product.id);
    if (isInCart) {
      setCart(() => {
        cart.map((prod) => {
          if (prod.id === product.id) {
            return { ...prod, count: prod.count + product.count };
          } else {
            return prod;
          }
        });
      });
    } else {
      setCart([...cart, product]);
    }
  };
  return (
    <CartContext.Provider value={{ getTotalProd, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
