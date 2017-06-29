import express from 'express'
import config from '../config'
let router = express.Router()
router.get('/.well-known/openid-configuration', function (req, res) {
  let config = {
    issuer: 'localhost',
    jwks_uri: 'http://localhost:3000/api/openid/certs',
    subject_types_supported: [
      'public'
    ],
    id_token_alg_values_supported: [
      'RS256'
    ],
    token_endpoint_auth_methods_supported: [
      'client_secret_post'
    ]
  }
  return res.send(config)
})

router.get('/certs', function (req, res) {
  let openid = {
    keys: [{
      kty: 'RSA',
      alg: 'RS256',
      use: 'sig',
      kid: '1',
      n: Buffer.from(config.modulus, 'hex').toString('base64'),
      e: 'AQAB'
    }]
  }
  console.log(openid)
  return res.send(openid)
})

module.exports = router
