import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const getBlockchain = async () => {
  let querySnapshot = await getDocs(collection(db, "blockchain"));
  let blockchain = []
  querySnapshot.forEach((doc)=>{
    blockchain.push(doc.data())
  })
  return blockchain;
};
export default async function handler(req, res) {
  const blockchain = await getBlockchain()
  res.status(200).json(blockchain);
}
