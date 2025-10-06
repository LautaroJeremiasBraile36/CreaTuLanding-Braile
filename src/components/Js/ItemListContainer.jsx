import styles from "../Css/ItemListContainer.module.css";
import GreetingMessage from "./GreetingMessage";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.container}>
      <GreetingMessage text={greeting} />
    </div>
  );
};
export default ItemListContainer;
