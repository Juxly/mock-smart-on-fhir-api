import express from 'express'
import MedicationStatementService from '../services/medicationStatement.service'
var router = express.Router()

router.get('/', function (req, res) {
  if (!req.query.patient) return res.status(400).send('Patient is Required')
  return MedicationStatementService.get(req.query).then(result => {
    return res.send(result)
  })
})

module.exports = router
