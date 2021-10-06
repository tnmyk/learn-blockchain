import { useEffect, useState } from "react";
import mineBlock from "../mineBlock";
import styles from "./Block.module.css";
const Block = ({ index }) => {
  const [hash, setHash] = useState("");
  const [timestamp,setTimestamp] = useState()
  const previousHash = ''
  useEffect(() => {
    setTimestamp(new Date().getTime());
  }, []);
  const handleDataChange = (e) => {
    const { value } = e.target;
    setHash(mineBlock(value, timestamp, previousHash));
  };
  return (
    <div className={styles.blockContainer}>
      <p className={`center ${styles.blockNumber}`}>
        {index ? `Block #${index}` : "Genesis Block"}
      </p>
      <div className={styles.block}>
        <div className={styles.infoContainer}>
          <div>
            <span> Data:</span>
            <input type="text" onChange={handleDataChange} />
          </div>
          <div>
            <div> Timestamp: {timestamp}</div>
          </div>
          <div>
            <div> Previous Hash: 0</div>
          </div>
        </div>
        <div className={styles.hashContainer}>Hash: {hash}</div>
      </div>
    </div>
  );
};

export default Block;
