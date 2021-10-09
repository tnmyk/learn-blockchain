import styles from "../styles/About.module.css";
import {
  SiNextdotjs,
  SiReact,
  SiFirebase,
  SiLetsencrypt,
} from "react-icons/si";
const techstack = [
  <>
    Next.js <SiNextdotjs />
  </>,
  <>
    React.js <SiReact />
  </>,
  <>
    Firebase
    <SiFirebase />
  </>,
  <>
    Crypto.js <SiLetsencrypt />
  </>,
];
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className="center">About the project</h1>
      <p className={styles.body}>
        This project was made by me within 4 days for 'Quaranteam' hackathon.
        <br /> <br />
        <h3>Techstack used in this project:</h3>
        <div className={styles.techstackContainer}>
          {techstack.map((tech) => {
            return <div className={styles.techstack}>{tech}</div>;
          })}
          <div className={styles.techstack} style={{ background: "black" }}>
            <img src="images/sawo.png" height="70%" />
          </div>
        </div>
      </p>
    </div>
  );
};

export default About;
