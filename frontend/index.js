import { ethers } from "./ethers.js";

// check if MetaMask exists
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

const provider = new ethers.providers.Web3Provider(window.ethereum);

// connect to MetaMask on button click
document.getElementById('connect').onclick = async function () {
  await provider.send("eth_requestAccounts", []);
  window.alert("Sucessfully connected to MetaMask Wallet.")
  window.location.href="election.html";

}
