import { ethers } from "./ethers.js";

const accounts = await ethereum.request({ method: "eth_accounts" });
const isConnected = !!accounts.length;

if(!isConnected){
    window.location.href="index.html";
}

// check if MetaMask exists
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}

const provider = new ethers.providers.Web3Provider(window.ethereum);
const network = await provider.getNetwork();
console.log(network);

// get the account
const signer = provider.getSigner();
const account = await signer.getAddress();
console.log(account);

// edit DOM to show account

// get the balance
const balance = ethers.utils.formatEther(await signer.getBalance());
console.log(balance);

document.getElementById('user').innerHTML="Currently Connected to : "+account;

const contractAddress = "0x87e94802E452678E2d48B1184f0c10577C6F6F03"
const abi = [
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "_candidateNames",
          "type": "string[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "score",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_candidate1",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_candidate2",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_candidate3",
          "type": "uint256"
        }
      ],
      "name": "castVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentStanding",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "score",
              "type": "uint256"
            }
          ],
          "internalType": "struct Election.Candidate[]",
          "name": "_candidates",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "leader",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        }
      ],
      "name": "registerVoter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voters",
      "outputs": [
        {
          "internalType": "bool",
          "name": "registered",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "voted",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "vote",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]


const contract = new ethers.Contract(contractAddress, abi, signer);
document.getElementById('register').onclick=async function (){
  try{
    const registerVoterTx2 = await contract.registerVoter(account);
    console.log("Registered");
    window.alert("Transaction in progress. You will receive a confirmatory message from MetaMask once you have been sucessfully registered.");
    await registerVoterTx2.wait();
  } catch(err){
    console.log(err);
    window.alert("An error occured while registering the voter. Possibilites : \n 1. The voter is already registered.\n 2. The nonce is too high.\n 3. The voter rejected to pay the gas fee.");
  }

}

document.getElementById('castVote').onclick = async function () {
    try {
        const pref1=document.getElementById('candidate1').value;
        const pref2=document.getElementById('candidate2').value;
        const pref3=document.getElementById('candidate3').value;
        const castVoteTx2=await contract.castVote(pref1-1,pref2-1,pref3-1);
        console.log("Voted");
        window.alert("Transaction in progress. You will receive a confirmatory message from MetaMask once your response has been sucessfully registered.");
        await castVoteTx2.wait();
    } catch (err) {
        console.log(err);
        window.alert("An error occured while accepting response. Possibilites : \n 1. The voter has already voted. \n 2. The voter is not registered.\n 3. The nonce is too high.\n 4. The voter rejected to pay the gas fee.");

    }
}

document.getElementById('winningCandidate').onclick = async function(){
    console.log(account);
    const voterInfo=await contract.voters(account);
    const voted=voterInfo.voted;
    if(!voted){
        window.alert("Error. Cant Fetch the current standings as the voter has not yet voted.");
        return;
    }
    try{
        const currentStandings = await contract.currentStanding();
        document.getElementById('pratham').innerHTML=currentStandings[0].score;
        document.getElementById('devansh').innerHTML=currentStandings[1].score;
        document.getElementById('rahul').innerHTML=currentStandings[2].score;
        document.getElementById('ridin').innerHTML=currentStandings[3].score;
    }catch(err){
        console.log(err);
        window.alert("Cant get the currently winning candidate as no votes have been cast yet.");
    }
}