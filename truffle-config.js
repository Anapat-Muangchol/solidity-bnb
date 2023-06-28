const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
     privateKeys: ['{private key}'],
     providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
});
module.exports = {
     networks: {
          bsc: {
               // production
          },
          binanceTestnet: {
               provider: () => provider,
               network_id: "97",
               gas: 1000000,
               skipDryRun: true
          }
     },
     compilers: {
          solc: {
               version: "0.8.3"
          }
     }
}