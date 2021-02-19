/**
 * 1. Importando um arquivo .pem com a privateKey 
 * - Neste caso poderá ser a que criamos ou qualquer outra privateKey (PEM or DER)
 * 2. Assinando um token JWT e gerando um JWS (RFC 7515 - JSON Web Signature (JWS))
 */
const fs = require('fs');
const jose = require('node-jose');

// Lendo arquivo .pem (Retorna um Buffer)
const privateKeyPEM = fs.readFileSync('files/privateKey.pem');

(async () => {

	// Utilizando o Buffer da privateKey para retornar um JWK (JSON Web Key)
	const jwk = await jose.JWK.asKey(privateKeyPEM, "pem");

	// Criando a assinatura utilizando o algoritmo RS256 e retornando um formato compacto
	const tokenJWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImUyNzk2ODI4LTk0M2YtNDdkYS1hZjcyLTIxYjg0NTk0Yjg5YiIsImlhdCI6MTYxMzY5NzE3MSwiZXhwIjoxNjEzNzAwNzcxfQ.ZdSmevJzsRtpPqKOJHU3cUI2CQ4V4Xa9NxQz94ReNCw';
	const signature = 
		jose.JWS.createSign({ alg: "RS256", format: 'compact'}, jwk)
		.update(tokenJWT, "utf8")
		.final();

	// Assinando 
	signature.then(function(result) {

		console.log("Signature: " + result);
	
	}, function(error) {
		console.log(error);
	});

})();