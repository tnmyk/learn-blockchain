import styles from "./Footer.module.css";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blockchain</div>
      <div className={styles.linksContainer}>
        <Link href="/">
          <a>About Project</a>
        </Link>
        <Link href="/">
          <a>
            Github <AiFillGithub style={{verticalAlign:'-2px',fontSize:'1.1rem'}} />
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
