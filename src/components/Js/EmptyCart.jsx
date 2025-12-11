import { useNavigate } from "react-router-dom";
import styles from "../Css/Item.module.css";
import { ListGroup } from "react-bootstrap";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        Volver / Back
      </button>
      <ListGroup className="w-75">
        <p>No hay productos en el carrito</p>
      </ListGroup>
    </div>
  );
};

export default EmptyCart;
