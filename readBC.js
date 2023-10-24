const { ethers } = require("ethers");

// console.log(ethers.version);

const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/2ba93de8c0f74c45b5d36b2c1c2179e1"
)

// console.log(provider.utils.getBalance(`0x6682044904d9D13DCc96136c204a08CCFcf6ED97`));

const querryBC = async ()=> {

    const block = await provider.getBlockNumber();

    console.log(block);

    const balance = await provider.getBalance("0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5");
    console.log("acc bal : " , balance);
    
    const balanceEther = ethers.utils.formatEther(balance);
    console.log("acc bal in eth : " , balanceEther);
    

}

querryBC();