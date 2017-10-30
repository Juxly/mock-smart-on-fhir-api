import express from 'express'
import ImmunizationService from '../services/immunization.service'
var router = express.Router()

router.get('/', function (req, res) {
  if (!req.query.patient) return res.status(400).send('Invalid parameters')
  return ImmunizationService.get(req.query).then(result => {
    return res.send(result)
  })
})

module.exports = router
