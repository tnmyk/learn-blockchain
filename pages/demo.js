import { useState } from "react";
import BlockchainContainer from "../components/BlockchainContainer/BlockchainContainer";
import Information from "../components/Information/Information";
import infoArr from "../data/info";
import styles from "../styles/Demo.module.css";
import Head from "next/head";
const Demo = () => {
  const [currentTopic, setCurrentTopic] = useState(infoArr[0]);
  const setNewTopic = (topic) => {
    const tempInfo = infoArr.find((info) => {
      return info.title === topic;
    });
    if (tempInfo) setCurrentTopic(tempInfo);
  };
  return (
    <div className={styles.page}>
      <Head>
        <title>Blockchain Demonstration</title>
      </Head>
      <div className={styles.info}>
        <Information
          title={currentTopic.title}
          explaination={currentTopic.explaination}
        />
      </div>
      <BlockchainContainer setNewTopic={setNewTopic} />
    </div>
  );
};

export default Demo;
