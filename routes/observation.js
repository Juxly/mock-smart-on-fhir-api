import express from 'express'
import ObervationService from '../services/observation.service'
var router = express.Router()

router.get('/', function (req, res) {
  return ObervationService.get(req).then(result => {
    return res.send(result)
  })
})

module.exports = router
