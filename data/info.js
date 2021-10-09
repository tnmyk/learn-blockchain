const infoArr = [
  {
    title: "Learn About Blockchain using this demo",
    explaination: (
      <>
        You can here add blocks to the blockchain by entering any text in the
        "Add a new block to your blockchain" container on the right section and
        then clicking &apos;Add Block&apos;
        <br />
        <br />
        Click on random components to see the concept behind them.
        <br />
        Example: Click on 'Genesis Block' text on the first block and you will
        learn the meaning behind it.
      </>
    ),
  },
  {
    title: "Block",
    explaination:
      "Blocks in Blockchain are connected with Previous Hashes value which is the hash value of the previous block. ",
  },
  {
    title: "Genesis Block",
    explaination: (
      <>
        The Genesis Block, also known as Block 0, is the very first block upon
        which additional blocks in a blockchain are added. It is effectively the
        ancestor that every other block can trace its lineage back to since
        every block references the one preceding it.
        <br />
        <br />
        The previous hash value for Genesis block is 0 as no block is behind it.
      </>
    ),
  },
  {
    title: "Block Data",
    explaination: (
      <>
        Every block in a blockchain store some data inside it other than
        properties like Previous Hash,Hash ,etc. This data can be of any type.
        For example random numbers, text, transactions, names, etc. In
        cryptocurrencies, the data stored in every block is the transactions and
        its details.
        <br />
        <br /> This data also is used in calculating the hash for the block and
        when once the block is added to the blockchain the data cannot be
        manipulated. If someone tries to change that data in any block of the
        blockchain, it will turn the whole chain invalid as the hash of the
        block will change.
      </>
    ),
  },
  { title: "Block Timestamp", explaination: "Block Timestamp" },
  { title: "Previous Hash", explaination: "Previous Hash" },
  {
    title: "Hash",
    explaination: `The hashes are also generated with
            SHA256 encryption standard with difficulty 2. Any manipulation with
            data inside a block makes the chain invalid. The hash is decided by the data, timestamp, previous hash.`,
  },
];

export default infoArr;
