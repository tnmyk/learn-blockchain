import Block from "../components/Block/Block";
import BlockchainContainer from "../components/BlockchainContainer/BlockchainContainer";
import styles from "../styles/Demo.module.css";

const Demo = () => {
  return (
    <div className={styles.page}>
      <div className={styles.info}>

      </div>

        <BlockchainContainer />
   
    </div>
  );
};

export default Demo;
