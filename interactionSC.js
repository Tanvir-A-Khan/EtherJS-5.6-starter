/// contract - 0xf483e3510f21ed5362ecb63b5a9b94c818777006

const { ethers } = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/2ba93de8c0f74c45b5d36b2c1c2179e1`)

const walletAddress = '0xf483e3510f21ed5362ecb63b5a9b94c818777006'

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
]

/// inorder to read we can simply use providers
/// in order to write we need metamask and signer [the cryptographic signature]

const contractInteraction = async()=>{
    const walletContract = new ethers.Contract(walletAddress,walletABI,provider);

    // const contractNmae = await walletContract.name();

    // console.log("contract name: " , contractNmae);

	// console.log('Working babes')
    
    // const num = await walletContract.getValue();
    // console.log("Number val : " , String(num));
    
    const contractBalance = await walletContract.contractBalance();
    const contractBalances = ethers.utils.formatEther(contractBalance);
    console.log("contractBalance  : " , contractBalances);
    
    
    const userBalacnce = await walletContract.accountBalance("0x6682044904d9D13DCc96136c204a08CCFcf6ED97");
    const userBalacnces = ethers.utils.formatEther(userBalacnce);
    console.log("userBalacnce  : " , userBalacnces);

    
}

contractInteraction();