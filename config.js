export default {
  port: process.env.port || 3000,
  secret: process.env.secret || 'BoringSecret',
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/juxly-fhir'
}
