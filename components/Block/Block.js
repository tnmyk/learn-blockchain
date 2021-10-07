import { useEffect, useState } from "react";
import mineBlock from "../mineBlock";
import styles from "./Block.module.css";

const wrongStyle = { color: "red" };

const Block = ({
  index,
  data,
  previousHash,
  timestamp = "0",
  blockchain,
  wrong,
  setNewBlockchain,
}) => {
  const [hash, setHash] = useState(mineBlock(data, timestamp, previousHash));
  useEffect(() => {
    let tempArr = [...blockchain];
    tempArr[index].hash = hash;
    setNewBlockchain(tempArr);
  }, [hash]);
  const handleDataChange = (e) => {
    const { value } = e.target;
    setHash(mineBlock(value, new Date().getTime(), previousHash));
  };
  return (
    <div className={styles.block} data-topic="Block">
      <p className={`center ${styles.blockNumber}`}>
        {index ? (
          `Block #${index}`
        ) : (
          <span data-topic="Genesis Block">Genesis Block</span>
        )}
      </p>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <span data-topic="Block Data"> Data:</span>
          <input
            type="text"
            defaultValue={data}
            className={styles.input}
            onChange={handleDataChange}
          />
        </div>
        <div>
          <div data-topic="Block Timestamp"> Timestamp: {timestamp}</div>
        </div>
        <div>
          <div data-topic="Previous Hash">
            Previous Hash:
            <span style={wrong ? wrongStyle : {}}> {previousHash} </span>
          </div>
        </div>
      </div>
      <div className={styles.hashContainer} data-topic="Hash">
        Hash: {hash}
      </div>
    </div>
  );
};

export default Block;
