import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";


export default async function handler(req, res) {
  let querySnapshot = await getDocs(query(collection(db, "blockchain"),orderBy("timestamp")));
  let blockchain = [];
  querySnapshot.forEach((doc) => {
    blockchain.push(doc.data());
  });
  res.json(blockchain);
}
