import styles from "./Nav.module.css";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
const Nav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>
          <img src='images/logo.svg' height="30px"/>
           Learn Blockchain </a>
      </Link>
      <div className={styles.linksContainer}>
        <Link href="/api/blockchain">
          <a target="_blank">Blockchain API</a>
        </Link>
        <Link href="/demo">
          <a> Local Demonstration </a>
        </Link>
        {!isLoggedIn && (
          <Link href="/signin">
            <button className="buttonMain"> Sign In </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
