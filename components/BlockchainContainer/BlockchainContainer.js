import { useEffect, useState } from "react";
import Block from "../Block/Block";
import styles from "./BlockchainContainer.module.css";
const BlockchainContainer = ({ setNewTopic }) => {
  const [blockchain, setBlockchain] = useState([]);
  useEffect(() => {
    setBlockchain([
      {
        data: "Genesis Block",
        timestamp: new Date().getTime(),
        previousHash: "0",
        hash: "",
      },
    ]);

    document.addEventListener("click", (e) => {
      const topic = e.target.dataset.topic;
      if (topic) setNewTopic(topic);
    });
  }, []);
  const setNewBlockchain= (array)=>{
    setBlockchain(array)
  }
  const [inputData, setInputData] = useState("");
  const handleAddBlock = () => {
    if (!inputData) return null;
    const newPrevHash = blockchain[blockchain.length - 1].hash;
    setBlockchain([
      ...blockchain,
      {
        data: inputData,
        timestamp: new Date().getTime(),
        previousHash: newPrevHash,
      },
    ]);
    setInputData("");
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputData(value);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") handleAddBlock();
  };
  return (
    <div className={styles.blockchainContainer}>
      <div className={styles.blockchain}>
        {blockchain.map(({ data, timestamp, previousHash }, index) => {
          if (index === 0)
            return (
              <Block
                data={data}
                key={index}
                timestamp={timestamp}
                previousHash={previousHash}
                index={index}
                blockchain={blockchain}
                setBlockchain={setBlockchain}
                wrong={
                  blockchain[index - 1] && blockchain[index - 1].hash !== previousHash
                }
                setNewBlockchain={setNewBlockchain}
              />
            );
          else {
            return (
              <div key={index}>
                <div className={styles.link} />
                <Block
                  data={data}
                  timestamp={timestamp}
                  previousHash={previousHash}
                  index={index}
                  blockchain={blockchain}
                  setBlockchain={setBlockchain}
                  wrong={
                    blockchain[index - 1] &&
                    blockchain[index - 1].hash !== previousHash
                  }
                  setNewBlockchain={setNewBlockchain}
                />
              </div>
            );
          }
        })}
        <div className={styles.inputContainer}>
          <h5>Add a new block to your blockchain</h5>
          <input
            placeholder="Enter data (eg: your name)"
            value={inputData}
            onChange={handleInputChange}
            onKeyDown={handleKey}
          />
          <button className="buttonMain" onClick={handleAddBlock}>
            Add Block
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockchainContainer;
