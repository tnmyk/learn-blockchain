import { useEffect, useState } from "react";
import mineBlock from "../mineBlock";
import styles from "./Block.module.css";
const Block = ({
  index,
  data,
  previousHash,
  timestamp = "0",
  blockchain,
  setBlockchain,
}) => {
  const [hash, setHash] = useState(mineBlock(data, timestamp, previousHash));

  useEffect(() => {
    let tempArr = blockchain;
    tempArr[index].hash = hash;
    setBlockchain(tempArr);
    console.log('s')
  }, [setHash]);
  const handleDataChange = (e) => {
    const { value } = e.target;
    setHash(mineBlock(value, timestamp, previousHash));
  };
  return (
    <div className={styles.block}>
      <p className={`center ${styles.blockNumber}`}>
        {index ? `Block #${index}` : "Genesis Block"}
      </p>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <span> Data:</span>
          <input
            type="text"
            defaultValue={data}
            className={styles.input}
            onChange={handleDataChange}
          />
        </div>
        <div>
          <div> Timestamp: {timestamp}</div>
        </div>
        <div>
          <div> Previous Hash: {previousHash}</div>
        </div>
      </div>
      <div className={styles.hashContainer}>Hash: {hash}</div>
    </div>
  );
};

export default Block;
