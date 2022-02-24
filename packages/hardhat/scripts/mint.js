/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0xE2Fd0F1E063ef816e0a2e678c8fC419208392FA6"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const Mordad25Collectible = await ethers.getContract("Mordad25Collectible", deployer);

  // const nft = {
  //   "description": "Antistress | Helps you to relax",
  //   "external_url": "https://www.25mordad.com/",// <-- this can link to a page for the specific file too
  //   "image": "https://i.imgur.com/9BJcXGR.png",
  //   "name": "IBM Soccer Ball",
  //   "attributes": [
  //      {
  //        "trait_type": "Color",
  //        "value": "Black and White"
  //      },
  //      {
  //        "trait_type": "Author",
  //        "value": "Bahman"
  //      },
  //      {
  //        "trait_type": "Rate",
  //        "value": 3
  //      }
  //   ]
  // }
  // console.log("Uploading nft...")
  // const uploaded = await ipfs.add(JSON.stringify(nft))
  //
  // console.log("Minting nft with IPFS hash ("+uploaded.path+")")
  // await Mordad25Collectible.mintItem(toAddress,uploaded.path,{gasLimit:10000000})
  //
  //
  // await sleep(delayMS)

  const nft = {
    "description": "Antistress | Helps you to relax",
    "external_url": "https://www.25mordad.com/",// <-- this can link to a page for the specific file too
    "image": "https://i.imgur.com/9BJcXGR.png",
    "name": "IBM Soccer Ball",
    "attributes": [
       {
         "trait_type": "Color",
         "value": "Black and White"
       },
       {
         "trait_type": "Author",
         "value": "Bahman"
       },
       {
         "trait_type": "Rate",
         "value": 3
       }
    ]
  }
  console.log("Uploading nft...")
  const uploaded = await ipfs.add(JSON.stringify(nft))

  console.log("Minting nft with IPFS hash ("+uploaded.path+")")
  await Mordad25Collectible.mintItem(toAddress,uploaded.path,{gasLimit:10000000})


  await sleep(delayMS)


  // const zebra = {
  //   "description": "What is it so worried about?",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/zebra.jpg",
  //   "name": "Zebra",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "blue"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 38
  //      }
  //   ]
  // }
  // console.log("Uploading zebra...")
  // const uploadedzebra = await ipfs.add(JSON.stringify(zebra))
  //
  // console.log("Minting zebra with IPFS hash ("+uploadedzebra.path+")")
  // await Mordad25Collectible.mintItem(toAddress,uploadedzebra.path,{gasLimit:10000000})
  //
  //
  //
  // await sleep(delayMS)
  //

  // const rhino = {
  //   "description": "What a horn!",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/rhino.jpg",
  //   "name": "Rhino",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "pink"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 22
  //      }
  //   ]
  // }
  // console.log("Uploading rhino...")
  // const uploadedrhino = await ipfs.add(JSON.stringify(rhino))
  //
  // console.log("Minting rhino with IPFS hash ("+uploadedrhino.path+")")
  // await Mordad25Collectible.mintItem(toAddress,uploadedrhino.path,{gasLimit:10000000})
  //
  //
  //
  // await sleep(delayMS)
  //
  //
  // const fish = {
  //   "description": "Is that an underbyte?",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/fish.jpg",
  //   "name": "Fish",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "blue"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 15
  //      }
  //   ]
  // }
  // console.log("Uploading fish...")
  // const uploadedfish = await ipfs.add(JSON.stringify(fish))
  //
  // console.log("Minting fish with IPFS hash ("+uploadedfish.path+")")
  // await Mordad25Collectible.mintItem(toAddress,uploadedfish.path,{gasLimit:10000000})
  //
  //
  //
  // await sleep(delayMS)
  //
  //
  // const flamingo = {
  //   "description": "So delicate.",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/flamingo.jpg",
  //   "name": "Flamingo",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "black"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 6
  //      }
  //   ]
  // }
  // console.log("Uploading flamingo...")
  // const uploadedflamingo = await ipfs.add(JSON.stringify(flamingo))
  //
  // console.log("Minting flamingo with IPFS hash ("+uploadedflamingo.path+")")
  // await Mordad25Collectible.mintItem(toAddress,uploadedflamingo.path,{gasLimit:10000000})
  //
  //
  //
  //
  //
  // const godzilla = {
  //   "description": "Raaaar!",
  //   "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
  //   "image": "https://austingriffith.com/images/paintings/godzilla.jpg",
  //   "name": "Godzilla",
  //   "attributes": [
  //      {
  //        "trait_type": "BackgroundColor",
  //        "value": "orange"
  //      },
  //      {
  //        "trait_type": "Eyes",
  //        "value": "googly"
  //      },
  //      {
  //        "trait_type": "Stamina",
  //        "value": 99
  //      }
  //   ]
  // }
  // console.log("Uploading godzilla...")
  // const uploadedgodzilla = await ipfs.add(JSON.stringify(godzilla))
  //
  // console.log("Minting godzilla with IPFS hash ("+uploadedgodzilla.path+")")
  // await Mordad25Collectible.mintItem(toAddress,uploadedgodzilla.path,{gasLimit:10000000})
  //



  //await sleep(delayMS)

  // console.log("Transferring Ownership of Mordad25Collectible to "+toAddress+"...")

  // await Mordad25Collectible.transferOwnership(toAddress)

  // await sleep(delayMS)

  /*


  console.log("Minting zebra...")
  await Mordad25Collectible.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
