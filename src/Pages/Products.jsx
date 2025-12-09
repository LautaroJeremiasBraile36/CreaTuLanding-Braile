import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/Css/ItemListContainer.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Productos </h2>

      <div className={styles.grid}>
        {products.map((prod) => (
          <Link
            to={`/products/${prod.id}`}
            key={prod.id}
            className={styles.productCard}
          >
            <div className={styles.productImage}>
              <img src={prod.image} alt={prod.title} />
            </div>

            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{prod.title}</h3>
              <p className={styles.productDescription}>
                {prod.description.slice(0, 80)}...
              </p>
              <span className={styles.productPrice}>${prod.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
