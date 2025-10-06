import styles from "../Css/CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.Cart}>
      🛒 <span>0</span>
    </div>
  );
};

export default CartWidget;
