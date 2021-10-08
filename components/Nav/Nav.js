import styles from "./Nav.module.css";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
const Nav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}> Learn Blockchain </a>
      </Link>

      <div className={styles.linksContainer}>
        <Link href="/demo">
          <a> Play now </a>
        </Link>
        { (
          <Link href="/signin">
            <button className="buttonMain"> Sign Up </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
