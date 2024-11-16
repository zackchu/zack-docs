# JSON Web Tokens

## What is JSON Web Token?

JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and
self-contained way for securely transmitting information between parties as a JSON object.

This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the
**HMAC** algorithm) or a public/private key pair using **RSA** or **ECDSA**.

## When should you use JSON Web Tokens?

1. Authorization
2. Information Exchange

## What is the JSON Web Token structure?

In its compact form, JSON Web Tokens consist of three parts separated by dots (`.`)

- Header
- Payload
- Signature

a JWT typically looks like the following:

`xxxxx.yyyyy.zzzzz`

### Header

The header _typically_ consists of two parts:

- the type of the token, which is JWT
- the signing algorithm of the token being used, such as **HMAC** **SHA256** or **RSA**.

Example:

```json
{
	"alg": "HS256",
	"typ": "JWT"
}
```

Then, this JSON is **Base64Url** encoded to form the firse part of the JWT.

### Payload

The second part of the token is the payload, which contains the claims.

Claims are statements about an entity (typically, the user) and additional data.

There are three types of claims:

- registered
- public
- private claims

Example

```json
{
	"sub": "123456789",
	"name": "John Dow",
	"admin": true
}
```

The payload is then **Base64Url** encoded to form the second part of the JSON Web Token.

> Do note that for signed tokens this information, though protected against tampering, is readable by anyone. Do not put secret information in the payload or header elements of a JWT unless it is encrypted.

### Signature

To create the signature part you have to take:

- the encoded header
- the encoded payload
- a secret
- the algorithm specified in the header

and sign that.

Example

```js
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);
```

### Putting all together

The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments.
