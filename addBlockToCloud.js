import { SHA256 } from "crypto-js";
import mineBlock from "./components/mineBlock";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
const addBlockToCloud = async (name) => {
  const timestamp = new Date().getTime();
  const querySnapshot = await getDocs(collection(db, "blockchain"));
  const docs = querySnapshot.docs;
  const previousHash = docs[docs.length - 1]?.data().hash || 0;

  const hash = mineBlock(name, timestamp, previousHash);
  await db.collection("blockchain").doc(name).set({
    name: name,
    hash: hash,
    previousHash: previousHash,
    timestamp: timestamp,
  });
};

export default addBlockToCloud;
