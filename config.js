import fs from 'fs'
try {
  require('dotenv').config()
} catch (e) { console.log(e) }
export default {
  port: process.env.PORT || 3000,
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/juxly-fhir',
  key: fs.readFileSync('keys/private.key'),
  publicKey: fs.readFileSync('keys/pubkey.pem'),
  modulus: process.env.MODULUS,
  tokenExpire: process.env.TOKEN_EXPIRE || 30
}
