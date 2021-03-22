/**
 * Gerar um par de chaves do tipo RSA 16384 bits (ou 2048 bytes)
 * - Para isso vamos utilizar um biblioteca padrao do node (crypto)
*/
const fs = require('fs');
const { generateKeyPairSync } = require('crypto');

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 16384,
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
    format: 'pem' // retornara um binario
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
    format: 'pem', // retornara um binario
  }
});

// Salvando arquivos .pem

fs.writeFile("files/privateKey.pem", privateKey, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The privateKey was saved!");
}); 

fs.writeFile("files/publicKey.pem", publicKey, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The publicKey was saved!");
}); 

