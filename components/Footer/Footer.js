import styles from "./Footer.module.css";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="images/logo.svg" height="50px" />
        <h3>Learn Blockchain</h3>
      </div>
      <div className={styles.linksContainer}>
        <Link href="/about">
          <a>About Project</a>
        </Link>
        <Link href="https://github.com/tnmyk/learn-blockchain">
          <a rel="noreferrer" target="_blank">
            Github
            <AiFillGithub
              style={{ verticalAlign: "-2px", fontSize: "1.1rem" }}
            />
          </a>
        </Link>

        <Link href="/">
          <a>Resources</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
