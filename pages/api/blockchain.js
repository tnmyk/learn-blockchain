import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";


export default async function handler(req, res) {
  let querySnapshot = await getDocs(collection(db, "blockchain"));
  let blockchain = [];
  querySnapshot.forEach((doc) => {
    blockchain.push(doc.data());
  });
  res.json(blockchain);
}
