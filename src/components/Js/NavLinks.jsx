import styles from "../Css/NavBar.module.css";

const NavLinks = () => {
  return (
    <ul className={styles.navlinks}>
      <a href="/index.html">
        <li>Inicio</li>
      </a>
      <a href="../Js/Pages/Nosotros.jsx">
        <li>Nosotros</li>
      </a>
      <a href="../Pages/Contacto.html">
        <li>Contacto</li>
      </a>
    </ul>
  );
};

export default NavLinks;
