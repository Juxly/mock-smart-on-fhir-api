import express from 'express'
import ObervationService from '../services/observation.service'
var router = express.Router()

router.get('/', function (req, res) {
  var obs = ObervationService.get(req)
  return res.send(obs)
})

module.exports = router
