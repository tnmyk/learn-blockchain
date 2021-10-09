import styles from "../styles/About.module.css";
import {
  SiNextdotjs,
  SiReact,
  SiFirebase,
  SiLetsencrypt,
} from "react-icons/si";

import Head from 'next/head'
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
      <Head>
        <title>About the project</title>
      </Head>
      <h1 className="center">About the project</h1>
      <div className={styles.body}>
        This project was made by me within 4 days for 'Quaranteam' hackathon.
        <br /> <br />
        <h3>Objective</h3>
        <br />
        Beginners can learn how blockchain works and learn some technical terms
        behind it.
        <br /> <br />
        <h3>Techstack used in this project</h3>
        <div className={styles.techstackContainer}>
          {techstack.map((tech,index) => {
            return <div key={index} className={styles.techstack}>{tech}</div>;
          })}
          <div className={styles.techstack} style={{ background: "black" }}>
            <img src="images/sawo.png" height="70%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
