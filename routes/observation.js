import express from 'express'
import ObservationService from '../services/observation.service'
var router = express.Router()

router.get('/', function (req, res) {
  return ObservationService.get(req).then(result => {
    return res.send(result)
  })
})

module.exports = router
