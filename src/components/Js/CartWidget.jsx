import styles from "../Css/CartWidget.module.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalProd } = useContext(CartContext);
  const total = getTotalProd();
  return (
    <div className={styles.Cart}>
      🛒 <span>{total}</span>
    </div>
  );
};

export default CartWidget;
