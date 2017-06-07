# Mock Smart-on-FHIR API
A mock SMART-on-FHIR api for testing and demoing purposes. Specifially for use with the
SMART-on-FHIR Javascript client library https://github.com/smart-on-fhir/client-js. Includes SMART auth logic.  Written in ES6
Node/Express.

## TODO
* Stub the rest of FHIR resources
* Add persistance for POST/PUTs

## Run
```
npm install mongoose-data-seed -g (Optional: Runs seeder for database)
docker run -p 27017:27017 -d --name db mongo (Runs mongodb docker image)
npm install
npm run seed (Optional: Runs seeders)
npm start
```
