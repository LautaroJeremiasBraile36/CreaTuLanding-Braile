import styles from "../Css/NavBar.module.css";
import CartWidget from "./CartWidget";

import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLinks />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
