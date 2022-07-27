import web3 from "./web3";

const address = "0x19B9b4Cac52aa4E3cF173381FC3C1025D9276314";

const abi = [
  {
    constant: false,
    inputs: [
      { name: "id", type: "string" },
      { name: "winner", type: "address" },
    ],
    name: "selectWinner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "retrieveUserPosts",
    outputs: [
      {
        components: [{ name: "id", type: "string" }],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "id", type: "string" }],
    name: "retrievePost",
    outputs: [
      {
        components: [
          { name: "title", type: "string" },
          { name: "description", type: "string" },
          { name: "author", type: "address" },
          { name: "tags", type: "uint256[]" },
          { name: "posted", type: "uint256" },
          { name: "reward", type: "uint256" },
          {
            components: [
              { name: "author", type: "address" },
              { name: "proposal", type: "string" },
            ],
            name: "candidatures",
            type: "tuple[]",
          },
          { name: "winner", type: "address" },
          { name: "status", type: "string" },
        ],
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "id", type: "string" },
      { name: "proposal", type: "string" },
    ],
    name: "applyToPost",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "retrievePostIds",
    outputs: [
      {
        components: [{ name: "id", type: "string" }],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "id", type: "string" },
      { name: "description", type: "string" },
      { name: "title", type: "string" },
    ],
    name: "createPost",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "retrieveUserCandidatures",
    outputs: [
      {
        components: [{ name: "id", type: "string" }],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "id", type: "string" }],
    name: "releaseReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

//@ts-ignore
export default new web3.eth.Contract(abi, address);
