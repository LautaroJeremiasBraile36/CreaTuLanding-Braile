import styles from "../Css/CartWidget.module.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { getTotalProd } = useContext(CartContext);
  const total = getTotalProd();
  const navigate = useNavigate();

  return (
    <button className={styles.CartWidget} onClick={() => navigate("/cart")}>
      🛒 <span>{total}</span>
    </button>
  );
};

export default CartWidget;
