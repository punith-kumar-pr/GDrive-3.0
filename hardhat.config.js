require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  // networks: {
  //   hardhat: {
  //     chainId: 1337,
  //   },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/B6TpngYFAKKAKN242wleSO1XrmuDhV-X", // Replace with the actual RPC URL
      accounts: ["7cd2573067cba6b647f40e54f4d71351a80e0d0d1a6f75a516cf573fdadb1259"], // Replace with your mnemonic phrase
      // chainId: 11155111 // Replace with the actual network ID
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
