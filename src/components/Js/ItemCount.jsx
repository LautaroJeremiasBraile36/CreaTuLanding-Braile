import { useState } from "react";
import { useCart } from "../Hooks/useCart";
import styles from "../Css/Item.module.css";
function ItemCount({ Item }) {
  const [counter, setCounter] = useState(0);
  const { addToCart } = useCart();
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleRes = () => {
    if (counter === 0) {
      return setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  const handleAddToCart = () => {
    addToCart({ ...Item, count: counter });
  };

  return (
    <>
      <div>
        <p>{counter}</p>
        <div>
          <button onClick={handleRes} className={styles.buyBtn}>
            {" "}
            -{" "}
          </button>
          <button onClick={handleAdd} className={styles.buyBtn}>
            {" "}
            +{" "}
          </button>
          <button
            onClick={handleAddToCart}
            className={styles.buyBtn}
            disabled={counter === 0}
          >
            agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
