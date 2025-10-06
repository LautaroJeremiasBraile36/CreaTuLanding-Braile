import CartWidget from "./CartWidget";
import styles from "../Css/NavBar.module.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavLinks />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
