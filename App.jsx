import {  useEffect } from 'react'

// const {ethers} = require('ethers');
import {ethers} from 'ethers';



import './App.css'

function App() {
  
  
  const walletAddress = '0xf483e3510f21ed5362ecb63b5a9b94c818777006'
  
  useEffect(()=>{
  const walletABI = [
    {
      "inputs": [],
      "name": "sendEthContract",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "sendEthUser",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_num",
          "type": "uint256"
        }
      ],
      "name": "setValue",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "accountBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
    const writeContract = async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // requesting to open metamask
      await provider.send("eth_requestAccounts",[]);
  
      const signer = provider.getSigner();
  
      const contract = new ethers.Contract(walletAddress, walletABI, signer);

      // await contract.setValue(2);
      
      // await contract.sendEthContract({value:ethers.utils.parseEther('0.1')})

      await contract.sendEthUser("0x20a31B18e522170AB993140a0399b90A3DE86499", {
        value: ethers.utils.parseEther("0.1"),
      })



    }
    writeContract();
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
