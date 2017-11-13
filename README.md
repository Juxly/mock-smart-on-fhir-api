# Mock Smart-on-FHIR API
A mock SMART-on-FHIR api for testing and demoing purposes. Specifially for use with the
SMART-on-FHIR Javascript client library https://github.com/smart-on-fhir/client-js. Includes SMART auth logic.  Written in ES6
Node/Express.

## TODO
* Stub the rest of FHIR resources
* Add Validation

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

openssl rsa -outform pem -in pubpriv.pem -out private.key

### To get modulus/exponent from public key
openssl rsa -pubin -inform PEM -text -noout < pubkey.pem

