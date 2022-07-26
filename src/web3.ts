import Web3 from "web3";
//@ts-ignore
window.ethereum.request({ method: "eth_requestAccounts" });
//@ts-ignore
const web3 = new Web3(window.ethereum);
export default web3;
