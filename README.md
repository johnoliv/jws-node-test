# jws-test

> Author: Jow (johnoliv@gmail.com)
* Version 0.0.1

## createKeyPair.js
* Create Key Pair with crypto module and save as a .pem file
- See: crypto - https://nodejs.org/api/crypto.html
- See: fs - https://nodejs.org/api/fs.html

```bash
node createKeyPair.js
```

## sign.js
* Sign a JWT (JSON Web Token) using privateKey and create a JWS (JSON Web Signature)
- See: node-jose - https://github.com/cisco/node-jose
- See: JSON Web Signature - https://tools.ietf.org/html/rfc7515
- See: JSON Web Key - https://tools.ietf.org/html/rfc7517

```bash
node sign.js
```

## verify.js
* Verify a JWS and getting the JWT

```bash
node verify.js
```