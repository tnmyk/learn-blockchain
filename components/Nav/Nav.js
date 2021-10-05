import styles from "./Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <div>
      <Link href="/">
        <a> Learn Blockchain </a>
      </Link>
    </div>
  );
};

export default Nav;
