import styles from "./Footer.module.css";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blockchain</div>
      <div className={styles.linksContainer}>
        <Link href="/about">
          <a>About Project</a>
        </Link>

        <a href="https://github.com/tnmyk/learn-blockchain" target="_blank">
          Github
          <AiFillGithub style={{ verticalAlign: "-2px", fontSize: "1.1rem" }} />
        </a>

        <Link href="/">
          <a>Resources</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
