import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useCart } from "../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import styles from "../Css/Item.module.css";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const { cart, deleteFromCart } = useCart();
  const navigate = useNavigate();
  if (cart.length < 1) {
    return <EmptyCart />;
  } else {
    return (
      <>
        {
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <button className={styles.backBtn} onClick={() => navigate(-1)}>
              Volver / Back
            </button>
            <ListGroup className="w-75">
              {cart.map((prod) => (
                <ListGroup.Item
                  key={prod.id}
                  className="d-flex align-items-center justify-content-between gap-3"
                >
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    roundedCircle
                    width={50}
                  />
                  <p className="m-0">
                    {prod.title} x {prod.count}
                  </p>
                  <Button
                    variant="danger"
                    onClick={() => deleteFromCart(prod.id)}
                  >
                    Borrar 🗑️
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button className="w-75 mt-3">Finalizar Compra</Button>
          </div>
        }
      </>
    );
  }
};

export default CartContainer;
