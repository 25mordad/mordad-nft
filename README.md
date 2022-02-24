
```
yarn install
```



generate a new wallet:

```
yarn generate

```

get wallet account information:

```
yarn account
```

get some MATIC:

`https://faucet.polygon.technology/`


check:
`packages/hardhat/hardhat.config.js`

```
const defaultNetwork = "mumbai";
```

`packages/react-app/src/App.jsx`

```
const targetNetwork = NETWORKS.mumbai;
```

before compile change Mordad25Collectible with your Collectible name in al the project including
`/packages/hardhat/contracts/Mordad25Collectible.sol`

Compile and deploy your NFT contract:
```
yarn deploy

```

```
Compiling 16 files with 0.6.7
Compilation finished successfully
deploying "Mordad25Collectible" (tx: 0xca21c2a9d5c56e9d67aa7c36ea85d1515d251c9601ac4a8772ec24d600e5c596)...: deployed at 0x1Ef3D1371cC81Ddd422373Eb6D34BF0aE67A959f with 2010997 gas
$ hardhat run scripts/publish.js
✅  Published contracts to the subgraph package.
Done in 13.17s.

```

you can find the contract here:

`https://mumbai.polygonscan.com/address/0x1Ef3D1371cC81Ddd422373Eb6D34BF0aE67A959f`


Start front-end:

```
yarn start
```
available in:

`http://localhost:3000/`

Before Minting, check mint file:

`packages/hardhat/scripts/mint.js`

address to mint should be set here:

```
// ADDRESS TO MINT TO:
const toAddress = "0xE2Fd0F1E063ef816e0a2e678c8fC419208392FA6"
```


change the attributes:

```
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
```

and mint:

```
yarn mint
```

-- mumbai --  -- -- 📡
  balance: 2.995275335
