const HDWalletProvider = require('@truffle/hdwallet-provider');
const providerTestnet = new HDWalletProvider({
     privateKeys: ['{private_key}'],
     providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
});
const providerProd = new HDWalletProvider({
    privateKeys: ['{private_key}'],
    providerOrUrl: 'https://bsc-dataseed.binance.org/'
});

module.exports = {
     networks: {
            bsc: {
                provider: () => providerTestnet,
                network_id: "56",
                gas: 1000000,
                skipDryRun: true
            },
            binanceTestnet: {
                provider: () => providerProd,
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