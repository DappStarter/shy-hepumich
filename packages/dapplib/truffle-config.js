require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure speak finish deny remember cluster habit light army genius'; 
let testAccounts = [
"0xd0d40c35996c4fe1e1e25065251888d8a89d57c9ab3eafd366e5056de0f82fcb",
"0xd0946c8a03120aa2ab1a78204a9b8e54b24b96e58b2ab3f8105ad44b1a55070c",
"0x2631e781db26bf4354550f09e3ffc2bca9b5f33fb993239808ed55ce69c67edd",
"0xd25e2f6c2a4f60673d3103926056b6aa6d0dcbb8a871c361b8257bc17baf528c",
"0x7a97a76d1f256c54f49b78967770fce4a65c8b983133d5338c153d28184202c5",
"0x94f066da7590bd3be60942b98563da3584cec7bee5c7c23349c4ae5969eadf12",
"0xfc1212b1251e1b8314ab3802057464b98025d49442390170f895e0d82e68d383",
"0xc29febb53a7c4fd5085c2977c18af2e5cf75e8b915fe00346ce0fccddd07de89",
"0x23e0e3edad0b8682cb7242101515e2671233baa60feaa6ef7603ec3b4222ed2a",
"0xd7bd5ce56328f0151f2c3ae1123e2dd4a9404c82aacc9d28f684a59b1a2cd4c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

