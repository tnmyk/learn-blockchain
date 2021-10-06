import { SHA256 } from "crypto-js";

const difficulty = 2;
const calculateHash = (data, timestamp, previousHash,nonce) => {
  return SHA256(data + timestamp + previousHash+nonce).toString();
};
const mineBlock = (data, timestamp, previousHash) => {
  let hash = calculateHash(data, timestamp, previousHash);
  let nonce = 0;
  while (nonce < 20000 && hash.substring(0, difficulty) !== "0".repeat(difficulty)) {
    hash = calculateHash(data, timestamp, previousHash,nonce);
    ++nonce;
  }
  return hash;
};
export default mineBlock;
