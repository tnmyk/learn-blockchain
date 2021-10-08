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
          <h1 className={styles.heading}>Live Blockchain API</h1>
          <p className={styles.sub}>
            Blockchain API deployed to demonstrate storing of data. The API
            stores the users in blocks. A block is added on every new user
            sign-up. All the users who have registered till date can be seen.
            The API is updated dynamically.
          </p>
          <div className={styles.previewFlex}>
            <div className={styles.previewImageContainer}>
              <img src="images/preview1.png" width={"100%"} />
            </div>
            <div className={styles.previewTextContainer}>
              <h2 className={styles.previewText}>
                Blockchain API of users connected with hashes made by SHA256
                encryption Standard with difficulty 2.
              </h2>
              <button className="buttonMain">Start Live Demo</button>
            </div>
          </div>
        </div>
        <div className={styles.page}>
          <h1 className={styles.heading}>
            Learn through Local Blockchain demo
          </h1>
          <p className={styles.sub}>
            User can add new blocks and visualize how hashes are connect with
            previous Hashes of next block. The hashes are also generated with
            SHA256 encryption standard with difficulty 2. Any manipulation with
            data inside a block makes the chain invalid.
          </p>
          <div className={styles.previewFlex}>
            <div className={styles.previewImageContainer}>
              <img src="images/preview2.png" width={"90%"} />
            </div>
            <div className={styles.previewTextContainer}>
              <h2 className={styles.previewText}>
                Concept for any element of blockchain can be seen just by
                clicking the desired element. <br />
                The information will be automatically rendered on the left
                section of the demo page.
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
            Features of the Web App
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
            This project is Open-sourced and warmly welcomes contribution.
          </p>
          <button className={`buttonMain center ${styles.githubLink}`}>
            <a target="_blank" href="https://github.com/tnmyk/learn-blockchain">
              View Sourcecode On Github
            </a>
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
            <a target="_blank" href="https://github.com/tnmyk/learn-blockchain">
              <div className={styles.contribute}>Contribute with Code</div>
            </a>
            <a target="_blank" href="https://github.com/tnmyk/learn-blockchain">
              <div className={styles.contribute}>Contribute with Resources</div>
            </a>
            <a target="_blank" href="https://github.com/tnmyk/learn-blockchain">
              <div className={styles.contribute}>
                Star the project on Github
              </div>
            </a>
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
            {/* <Link href="/">
              <div className={styles.moreDetailsBtn}>Resources</div>
            </Link> */}
            <Link href="/">
              <div className={styles.moreDetailsBtn}>Techstack Used</div>
            </Link>
            <Link href="/about">
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
