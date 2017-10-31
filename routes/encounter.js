import express from 'express'
import EncounterService from '../services/encounter.service'
var router = express.Router()

router.get('/', function (req, res) {
  if (!req.query.patient) return res.status(400).send('Invalid parameters')
  return EncounterService.get(req.query).then(result => {
    return res.send(result)
  })
})

module.exports = router
