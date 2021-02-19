
/**
 * 1. Importando um arquivo .pem com a publicKey correspondente a privateKey
 * 2. Verificando um JWS e retornando o payload (que foi assinado)
 */
const fs = require('fs');
const jose = require('node-jose');

// Lendo arquivo .pem (Retorna um Buffer)
const publicKeyPEM = fs.readFileSync('files/publicKey.pem');

(async () => {

// Utilizando o Buffer da publicKey para retornar um JWK (JSON Web Key)
const jwk = await jose.JWK.asKey(publicKeyPEM, "pem");

// JWS a ser verificado
const assinatura = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNMX0ZFY1M5R2RVRjB1T3U4Qll0RExqNUlMVHA5QTRiVEpxTzREZXdEMEEifQ.ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lJeE1qTTBOVFkzT0Rrd0lpd2libUZ0WlNJNklrcHZhRzRnUkc5bElpd2lZV1J0YVc0aU9uUnlkV1VzSW1wMGFTSTZJbVV5TnprMk9ESTRMVGswTTJZdE5EZGtZUzFoWmpjeUxUSXhZamcwTlRrMFlqZzVZaUlzSW1saGRDSTZNVFl4TXpZNU56RTNNU3dpWlhod0lqb3hOakV6TnpBd056Y3hmUS5aZFNtZXZKenNSdHBQcUtPSkhVM2NVSTJDUTRWNFhhOU54UXo5NFJlTkN3.ljwVdsT5xEzhtChztJ0d0MBoycc044YDXqQ7OeJtJZ8bg4r-tzcGHZmkCHSevRGOBUd9pQ9fDHziLub9nBA29PL_hoawBMCewBM0twBlTQeMPFv3zhUCTTShf11tsBHeNcxist-nD2TAZc4R6dG6bXy5UuTOuXjwMDcahzxXa-qPE7ctlulEQVvEsAe_ecOYT1m9nJJe-waPnVGv1oaTi_AtGoJzquOrhOZ0Ct6vSbp04cFf0g2oYnS_erlkWawsX1SiBFS26mJL5OcHfAe1jyFTM7cGkybI1RO3oRHMo1-V8dYwIa0JADq9W3mwlbfZ1zNfmH9VLU7ekLO8nG08l-CCTB3jERZpnZp2pbinpARMoo9TBqUxgAt6x2SobR9L-gbeHxEuRlcX7AAnCtN9a9vSmsPC_UGxUcO0AjsPtYB9Wz3LLu8GYWx2IJSlGS4ojAGOLXoVvRrl4F8jbk4kGjCSF2Gb3G7_Wt15Cx2xZUdZ5o6RUGY9D4aVL5_VLLtuo5GZ7wH3W3r-TFxE0rSfQ2_ly4J6JwjYyePdkr6pAuGN9tjqfawXDXqo9tpt7k4DXOtH_d7tT7VCdw9lJeK_vhN2hYUkdKFBEsQUrCRN5XVlBcZrywGRPfglMdM-BhlggChIPb2n-Vqjz3z2Bwuj9MytcGLdxZNOaovw3cgWMLI';

// Verificando o JWS utilizando o JWK da publicKey
const verified = await jose.JWS.createVerify(jwk)
  .verify(assinatura)
  .catch(()=>{});

  // Assinando 
  if(verified){
    // Payload que foi assinado
    var bufferData = Buffer.from(verified.payload);
    console.log("TOKEN JWT: " + bufferData.toString());

    // Resposta da verificaçao
    console.log('verified:', verified);
  }else{
    console.error("Erro!");
  }
})();