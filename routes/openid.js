import express from 'express'
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
      n: Buffer.from('B37CB5BD628D14722A6AA5493206D359B46518BB841770E5F89EC4DECE2A0F22E8301CC615D0E0E88F67E7EB221E9A72DD5DA47B1F2ED0AB125AC589CF60CEBFB6CC5EE158039870935DC45E27440F724B7A799F7264B5ECC0D3EE138C09095704D7E7DB766C119DDD85230FABA771E405F8E9A919DD1D99BADEAD9E0A493C97', 'hex').toString('base64'),
      e: 'AQAB'
    }]
  }
  console.log(openid)
  return res.send(openid)
})

module.exports = router
