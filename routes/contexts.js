import express from 'express'
var router = express.Router()

router.get('/', function (req, res) {
  const contexts = [{
    name: 'Flynne Fisher',
    hash: '51fe8304593a1dc07a33be5b4e14d40bc3669c2668441a84d31a38fdf006db96de9b103e4be6a0dc370e5df4d61c97f8a3816eff1274bf05225aa892c9d6b2eb2c31ca5a738328090090f39fcf15f67fd4c3d88af2466c32a3b47a1ae83a2ae16adff42cda10985f17e9ccdf93e4a5a2'
  }, {
    name: 'Dave Smart',
    hash: 'fadc01b09434f0dc31c8dc32e7461417cc61dde29d0772a1d74de452ee789d96c059e75bdd486cd8041b1be0e326d43621ae55e8f02081bb91bfcda364be3fc1caa5fc9e824d4244fbcef88f060b09a6e8806ac50bd385e0d579b3a091c11af3'
  }]
  return res.send(contexts)
})

module.exports = router
