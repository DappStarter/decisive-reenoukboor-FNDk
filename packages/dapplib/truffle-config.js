require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind erosion grace inflict tail stumble'; 
let testAccounts = [
"0x7dc5dbb07076e6751db32fb95775430ca2f60f16ff8c3b5445ad0ff15d9ad228",
"0x8fb193705535f26618a84c6f742f73d1310422c87fd124649eddc3cfba1f02cb",
"0x0c38c4e5447904bd796538ee4e8984c3a9064a5e4fb2240ae3336e53aaa0dfcc",
"0xa081c24d7f7350f02bfcf7631507d777a0196c1961ba8ca3491ce19e67aa7732",
"0x6fa025d964506d0e08f460d1bf8fbfca7d703bcae6d6db3c779b386bdbfa6901",
"0xc881a067ef1f5debf0a7eacefdbdadee1c4c2220a070e06245a3807e88097ab9",
"0x77fcb7b390f38d6f1462260bb03d41d80a37b829450168e99ef155fbfacc1740",
"0x22d5e8b54d1104d17898e2b8e13eff8c0499781fb47cf7bd29778ed67c0aa200",
"0x5b4624e06a6cd22e7924ff0d7b286469def26f7357719ec99b66e21b6e990f04",
"0xf4c0c417ba219a422bcbdebf14f808e253b71fde2b895621ad28bec8cefe4c82"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

