# Mock Smart-on-FHIR API

A mock SMART-on-FHIR api for testing and demoing purposes. Specifially for use with the
SMART-on-FHIR Javascript client library https://github.com/smart-on-fhir/client-js. Includes SMART auth logic. Written in ES6
Node/Express.

## TODO

- Stub the rest of FHIR resources
- Add Validation

## Run

```
npm install babel-cli
npm install mongoose-data-seed -g (Optional: Runs seeder for database)
docker run -p 27017:27017 -d --name db mongo (Runs mongodb docker image)
npm install
Fill out a .env, see .env-example
npm run seed (Optional: Runs seeders)
npm start
```

## For OpenID

For OpenID id_token

mkdir keys
cd keys

Generate private/public key
openssl genrsa -out pubpriv.pem 1024

openssl rsa -in pubpriv.pem -pubout -out pubkey.pem

openssl rsa -in pubpriv.pem -out private.key

### To get modulus/exponent from public key

openssl rsa -pubin -inform PEM -text -noout < pubkey.pem

### Test URLs using Juxly Secret

Generate your own urls using launchEncrypter.js

iss is the audence (fhir server, localhost here). launch is the ehr context including patient, encounter, user

Flynne Fisher

http://localhost:8000/juxly/launch.html?iss=http%3A%2F%2Flocalhost:3000%2Fapi&launch=51fe8304593a1dc07a33be5b4e14d40bc3669c2668441a84d31a38fdf006db96de9b103e4be6a0dc370e5df4d61c97f8a3816eff1274bf05225aa892c9d6b2eb2c31ca5a738328090090f39fcf15f67fd4c3d88af2466c32a3b47a1ae83a2ae16adff42cda10985f17e9ccdf93e4a5a2

Dave Smart

http://localhost:8000/juxly/launch.html?iss=http%3A%2F%2Flocalhost:3000%2Fapi&launch=fadc01b09434f0dc31c8dc32e7461417cc61dde29d0772a1d74de452ee789d96c059e75bdd486cd8041b1be0e326d43621ae55e8f02081bb91bfcda364be3fc1caa5fc9e824d4244fbcef88f060b09a6e8806ac50bd385e0d579b3a091c11af3

Valerie Smart
http://localhost:8000/juxly/launch.html?iss=http%3A%2F%2Flocalhost:3000%2Fapi&launch=5c2b53d6356d9f4d3c1693a3cd78cd85981e20d28b07586f625196379cb7de2e406af81b6937a4a37286ce995b8fc9ee328d178e5e934886ef361aed1113e0db42e2d88dd1b68d0b06f9e2b66692e21169446d2ffd666e30f0f37850a3d004df
