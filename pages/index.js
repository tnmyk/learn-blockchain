import FeatureCard from "../components/FeaturesCard/FeatureCard";
import styles from "../styles/Home.module.css";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import featuresData from "../components/FeaturesCard/featuresData";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Learn Blockchain</title>
      </Head>
      <div className={styles.home}>
        <div className={styles.intro}>
          <div className={styles.introText}>
            <h1 className={styles.introHeading}>
              Learn Blockchain <br />
              With Live Demonstration
            </h1>
            <p className={styles.introSubHeading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.introBtns}>
              <button className="buttonMain">Play Demonstration</button>
              <button className="buttonMain">Learn Now</button>
            </div>
          </div>
          <div className={styles.introImageContainer}>
            <img src="images/intro.png" className={styles.introImage} />
          </div>
        </div>
        <div className={styles.learnMore}>Learn More</div>
        <div className={styles.page}>
          <h1 className={styles.heading}>Live Demo</h1>
          <p className={styles.sub}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            consectetur adipiscing elit duis tristique sollicitudin nibh sit.
            Morbi tristique senectus et netus et malesuada fames ac turpis.
          </p>
          <div className={styles.previewFlex}>
            <div className={styles.previewImageContainer}></div>
            <div className={styles.previewTextContainer}>
              <h2 className={styles.previewText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet consectetur adipiscing elit duis tristique sollicitudin
                nibh sit.
              </h2>
              <button className="buttonMain">Start Live Demo</button>
            </div>
          </div>
        </div>
        <div className={styles.page}>
          <h1 className={styles.heading}>Learn Step by Step</h1>
          <p className={styles.sub}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            consectetur adipiscing elit duis tristique sollicitudin nibh sit.
            Morbi tristique senectus et netus et malesuada fames ac turpis.
          </p>
          <div className={styles.previewFlex}>
            <div className={styles.previewImageContainer}></div>
            <div className={styles.previewTextContainer}>
              <h2 className={styles.previewText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet consectetur adipiscing elit duis tristique sollicitudin
                nibh sit.
              </h2>
              <button className="buttonMain">Start Learning</button>
            </div>
          </div>
        </div>
        <div className={styles.page}>
          <h1 className={`${styles.heading} ${styles.headingCenter}`}>
            Features
          </h1>
          <p className={`${styles.sub} ${styles.subCenter}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.cardsContainer}>
            {featuresData.map((feature, index) => {
              return (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.page}>
          <h1 className={`${styles.heading} ${styles.headingCenter}`}>
            Open-Sourced
          </h1>
          <p className={`${styles.sub} ${styles.subCenter}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={`buttonMain center ${styles.githubLink}`}>
            <Link href="/">View Sourcecode On Github</Link>
            <AiFillGithub className={styles.githubIcon} />
          </button>
          <br />
          <br />
          <br />
          <br />
          <span className="center" style={{ fontSize: "1.1rem" }}>
            Support the Project by:
          </span>
          <div className={styles.contributeContainer}>
            <Link href="/">
              <div className={styles.contribute}>Contribute with Code</div>
            </Link>
            <Link href="/">
              <div className={styles.contribute}>Contribute with Resources</div>
            </Link>
            <Link href="/">
              <div className={styles.contribute}>
                Star the project on Github
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.page}>
          <h1 className={`${styles.heading} ${styles.headingCenter}`}>
            More details
          </h1>
          <p className={`${styles.sub} ${styles.subCenter}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="center">
            <Link href="/">
              <div className={styles.moreDetailsBtn}>Resources</div>
            </Link>
            <Link href="/">
              <div className={styles.moreDetailsBtn}>Techstack Used</div>
            </Link>
            <Link href="/">
              <div className={styles.moreDetailsBtn}>Techstack Used</div>
            </Link>
            <Link href="/">
              <div className={styles.moreDetailsBtn}>More about Project</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
