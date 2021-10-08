import mineBlock from "./components/mineBlock";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
const addBlockToCloud = async (userID, name) => {

  const check =   await db.collection("users").doc(userID).get()
  if(check.exists){
      console.log('exists')
      return;
  }
  const timestamp = new Date().getTime();
  const querySnapshot = await getDocs(collection(db, "blockchain"));
  const docs = querySnapshot.docs;
  const previousHash = docs[docs.length - 1]?.data().hash || 0;

  const hash = mineBlock(name, timestamp, previousHash);
  await db.collection("blockchain").doc(userID).set({
    name: name,
    hash: hash,
    address: userID,
    previousHash: previousHash,
    timestamp: timestamp,
  });
  await db.collection("users").doc(userID).set({ done: true, name: name });
};

export default addBlockToCloud;
